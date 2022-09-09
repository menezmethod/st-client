import {useMutation} from 'react-query';

import {axios} from '@/lib/axios';
import {MutationConfig, queryClient} from '@/lib/react-query';
import {setSnackbar} from '@/redux/models/snackbar';
import createStore from '@/redux/createStore'

import {Trade} from '../types';

export type AddTradeDTO = {
    data: {
        id: string;
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
};

export const addTrade = ({data}: AddTradeDTO): Promise<Trade> => {
    return axios.post(`/trades`, data);
};

type UseAddTradeOptions = {
    config?: MutationConfig<typeof addTrade>;
};

export const useAddTrade = ({config}: UseAddTradeOptions = {}) => {
    return useMutation({
        onMutate: async (newTrade: any) => {
            await queryClient.cancelQueries('trades');

            // const previousTrades = queryClient.getQueryData<Trade[]>('trades');

            // queryClient.setQueryData('trades', [...(previousTrades || []), newTrade.data]);

            // return { previousTrades };
        },
        onError: (_: any, __: any, context: any) => {
            if (context?.previousTrades) {
                queryClient.setQueryData('trades', context.previousTrades);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('trades');
            createStore.dispatch(setSnackbar(true, 'success', 'Trade Created'));
        },
        ...config,
        mutationFn: addTrade,
    });
};
