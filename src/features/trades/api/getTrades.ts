import {useQuery} from 'react-query';

import {axios} from '@/lib/axios';

import {Trade} from '../types';

export const getTrades = (): Promise<Trade> => {
    return axios.get(`/trades`);
};

export const useTrades = () => {
    return useQuery({
        queryKey: ['trades'],
        queryFn: () => getTrades(),
    });
};
