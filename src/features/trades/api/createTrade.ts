import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { useNotificationStore } from '@/stores/notifications';

import { Trade } from '../types';

export type CreateTradeDTO = {
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
    timeClosed: Date;
    timeExecuted: Date;
  };
};

export const createTrade = ({ data }: CreateTradeDTO): Promise<Trade> => {
  return axios.post('/trade/', data);
};

type UseCreateTradeOptions = {
  journalId: string;
  config?: MutationConfig<typeof createTrade>;
};

export const useCreateTrade = ({ config, journalId }: UseCreateTradeOptions) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (newTrade) => {
      await queryClient.cancelQueries(['trades', journalId]);

      const previousTrades = queryClient.getQueryData<Trade[]>(['trades', journalId]);

      queryClient.setQueryData(['trades', journalId], [...(previousTrades || []), newTrade.data]);

      return { previousTrades };
    },
    onError: (_, __, context: any) => {
      if (context?.previousTrades) {
        queryClient.setQueryData(['trades', journalId], context.previousTrades);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['trades', journalId]);
      addNotification({
        type: 'success',
        title: 'Trade Created',
      });
    },
    ...config,
    mutationFn: createTrade,
  });
};
