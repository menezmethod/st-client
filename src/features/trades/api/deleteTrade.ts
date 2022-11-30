import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { useNotificationStore } from '@/stores/notifications';

import { Trade } from '../types';

export const deleteTrade = ({ tradeId }: { tradeId: string }) => {
  return axios.delete(`/trade/${tradeId}`);
};

type UseDeleteTradeOptions = {
  config?: MutationConfig<typeof deleteTrade>;
};

export const useDeleteTrade = ({ config }: UseDeleteTradeOptions = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (deletedTrade) => {
      await queryClient.cancelQueries(['trades']);

      const previousTrades = queryClient.getQueryData<Trade[]>(['trades']);

      queryClient.setQueryData(
        ['trades'],
        previousTrades?.filter((trade) => trade.id !== deletedTrade.tradeId)
      );

      return { previousTrades };
    },
    onError: (_, __, context: any) => {
      if (context?.previousTrades) {
        queryClient.setQueryData(['trades'], context.previousTrades);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['trades']);
      addNotification({
        type: 'success',
        title: 'Trade Deleted',
      });
    },
    ...config,
    mutationFn: deleteTrade,
  });
};
