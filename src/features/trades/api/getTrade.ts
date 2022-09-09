import {useQuery} from 'react-query';

import {axios} from '@/lib/axios';

import {Trade} from '../types';

export const getTrade = ({tradeId}: { tradeId: string }): Promise<Trade> => {
    return axios.get(`/trade/${tradeId}`);
};
type UseTradeOptions = {
    tradeId: string;
};

export const useTrade = ({tradeId}: UseTradeOptions) => {
    return useQuery({
        queryKey: ['trade', tradeId],
        queryFn: () => getTrade({tradeId}),
    });
};
