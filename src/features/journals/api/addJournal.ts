import {axios} from '@/lib/axios';
import {MutationConfig, queryClient} from '@/lib/react-query';
import {setSnackbar} from '@/redux/models/snackbar';
import createStore from '@/redux/createStore'
import {useMutation} from 'react-query';
import {Journal} from '../types';


export type AddJournalDTO = {
    data: {
        createdAt: Date
        createdBy: string;
        description: string;
        endDate: Date;
        name: any;
        startDate: Date;
    };
};

export const addJournal = ({data}: AddJournalDTO): Promise<Journal> => {
    return axios.post(`/journal`, data);
};

type UseAddJournalOptions = {
    config?: MutationConfig<typeof addJournal>;
};

export const useAddJournal = ({config}: UseAddJournalOptions = {}) => {
    return useMutation({
        onMutate: async (newJournal) => {
            await queryClient.cancelQueries('journals');

            // const previousJournals = queryClient.getQueryData<Journal[]>('journals');

            // queryClient.setQueryData('journals', [...(previousJournals || []), newJournal.data]);

            // return { previousJournals };
        },
        onError: (_, __, context: any) => {
            if (context?.previousJournals) {
                queryClient.setQueryData('journals', context.previousJournals);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('journals');
            createStore.dispatch(setSnackbar(true, 'success', 'Journal Added'));
        },
        ...config,
        mutationFn: addJournal,
    });
};
