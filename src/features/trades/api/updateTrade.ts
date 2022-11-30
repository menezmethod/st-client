import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { useNotificationStore } from '@/stores/notifications';

import { Trade } from '../types';

export type UpdateTradeDTO = {
  data: {
    baseInstrument: string;
    comments: string;
    createdAt: Date;
    createdBy: string;
    direction: string;
    entryPrice: string;
    exitPrice: string;
    journal: string;
    journalId: string;
    market: string;
    outcome: string;
    quantity: string;
    quoteInstrument: string;
    stopLoss: string;
    strategy: string;
    takeProfit: string;
    timeClosed: string;
    timeExecuted: string;
  };
  tradeId: string;
};

export const updateTrade = ({ data, tradeId }: UpdateTradeDTO): Promise<Trade> => {
  return axios.patch(`/trade/${tradeId}`, data);
};

type UseUpdateTradeOptions = {
  config?: MutationConfig<typeof updateTrade>;
};

export const useUpdateTrade = ({ config }: UseUpdateTradeOptions = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (updatingTrade: any) => {
      await queryClient.cancelQueries(['trade', updatingTrade?.tradeId]);

      const previousTrade = queryClient.getQueryData<Trade>(['trade', updatingTrade?.tradeId]);

      queryClient.setQueryData(['trade', updatingTrade?.tradeId], {
        ...previousTrade,
        ...updatingTrade.data,
        id: updatingTrade.tradeId,
      });

      return { previousTrade };
    },
    onError: (_, __, context: any) => {
      if (context?.previousTrade) {
        queryClient.setQueryData(['trade', context.previousTrade.id], context.previousTrade);
      }
    },
    onSuccess: (data) => {
      queryClient.refetchQueries(['trade', data.id]);
      addNotification({
        type: 'success',
        title: 'Trade Updated',
      });
    },
    ...config,
    mutationFn: updateTrade,
  });
};
