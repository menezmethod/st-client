import {axios} from '@/lib/axios';
import {MutationConfig, queryClient} from '@/lib/react-query';
import createStore from '@/redux/createStore';
import {setSnackbar} from '@/redux/models/snackbar';
import {useMutation} from 'react-query';

export type DeleteTradeDTO = {
    tradeId: string;
};

export const deleteTrade = ({tradeId}: DeleteTradeDTO) => {
    return axios.delete(`/trade/${tradeId}`);
};

type UseDeleteTradeOptions = {
    config?: MutationConfig<typeof deleteTrade>;
};

export const useDeleteTrade = ({config}: UseDeleteTradeOptions = {}) => {
    return useMutation({
        onMutate: async (deletedTrade) => {
            await queryClient.cancelQueries('trades');

            // const previousTrades = queryClient.getQueryData<Trade[]>('trades');

            // queryClient.setQueryData(
            //   'trades',
            //   previousTrades?.filter((trade) => trade.id !== deletedTrade.tradeId)
            // );
            // return { previousTrades };
        },
        onError: (_, __, context: any) => {
            if (context?.previousTrades) {
                queryClient.setQueryData('trades', context.previousTrades);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('trades');
            createStore.dispatch(setSnackbar(true, 'success', 'Trade Deleted'));
        },
        ...config,
        mutationFn: deleteTrade,
    });
};
