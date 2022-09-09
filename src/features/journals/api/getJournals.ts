import {axios} from '@/lib/axios';
import {useQuery} from 'react-query';
import {Journal} from '../types';

export const getJournals = (): Promise<Journal> => {
    return axios.get(`/journals`);
};

export const useJournals = () => {
    return useQuery({
        queryKey: ['journals'],
        queryFn: () => getJournals(),
    });
};
