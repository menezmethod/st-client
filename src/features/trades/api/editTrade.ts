import {axios} from '@/lib/axios';
import {MutationConfig, queryClient} from '@/lib/react-query';
import createStore from '@/redux/createStore';
import {setSnackbar} from '@/redux/models/snackbar';
import {useMutation} from 'react-query';
import {Trade} from '../types';


export type EditTradeDTO = {
    data: {
        comments: string;
        createdBy: string;
        direction: 'LONG' | 'SHORT';
        entryPrice: number;
        exitPrice: number;
        instrument: string;
        market: 'CRYPTO' | 'STOCKS';
        outcome: 'WIN' | 'LOSS';
        quantity: number;
        stopLoss: number;
        strategy: string;
        rakeProfit: number;
        timeClosed: Date
        timeExecuted: Date
    };
    id: string;
};

export const editTrade = ({data, id}: EditTradeDTO): Promise<Trade> => {
    return axios.patch(`/trade/${id}`, data);
};

type UseEditTradeOptions = {
    config?: MutationConfig<typeof editTrade>;
};

export const useEditTrade = ({config}: UseEditTradeOptions = {}) => {


    return useMutation({
        onMutate: async (editingTrade: any) => {
            await queryClient.cancelQueries(['trade', editingTrade?.tradeId]);

            // const previousTrade = queryClient.getQueryData<Trade>(['trade', editingTrade?.tradeId]);

            // queryClient.setQueryData(['trade', editingTrade?.tradeId], {
            //   ...previousTrade,
            //   ...editingTrade.data,
            //   id: editingTrade.tradeId,
            // });

            // return { previousTrade };
        },
        onError: (_, __, context: any) => {
            if (context?.previousTrade) {
                queryClient.setQueryData(['trade', context.previousTrade.id], context.previousTrade);
            }
        },
        onSuccess: (data) => {
            queryClient.refetchQueries(['trades', data.id]);
            queryClient.invalidateQueries(['trade', data.id]);
            createStore.dispatch(setSnackbar(true, 'success', 'Trade Updated'));
        },
        ...config,
        mutationFn: editTrade,
    });
};
