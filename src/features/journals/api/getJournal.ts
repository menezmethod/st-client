import {axios} from '@/lib/axios';
import {useQuery} from 'react-query';
import {Journal} from '../types';

export const getJournal = ({journalId}: { journalId: string }): Promise<Journal> => {
    return axios.get(`/journal/${journalId}`);
};
type UseJournalOptions = {
    journalId: string;
};

export const useJournal = ({journalId}: UseJournalOptions) => {
    return useQuery({
        queryKey: ['journal', journalId],
        queryFn: () => getJournal({journalId}),
    });
};
