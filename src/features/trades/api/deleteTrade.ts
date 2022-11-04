import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { useNotificationStore } from '@/stores/notifications';

import { Trade } from '../types';

export const deleteTrade = ({ tradeId }: { tradeId: string }) => {
  return axios.delete(`/trades/${tradeId}`);
};

type UseDeleteTradeOptions = {
  journalId: string;
  config?: MutationConfig<typeof deleteTrade>;
};

export const useDeleteTrade = ({ config, journalId }: UseDeleteTradeOptions) => {
  const { addNotification } = useNotificationStore();
  return useMutation({
    onMutate: async (deletedTrade) => {
      await queryClient.cancelQueries(['trades', journalId]);

      const previousTrades = queryClient.getQueryData<Trade[]>(['trades', journalId]);

      queryClient.setQueryData(
        ['trades', journalId],
        previousTrades?.filter((trade) => trade.id !== deletedTrade.tradeId)
      );

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
        title: 'Trade Deleted',
      });
    },
    ...config,
    mutationFn: deleteTrade,
  });
};
