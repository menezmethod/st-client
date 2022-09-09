import {axios} from '@/lib/axios';
import {MutationConfig, queryClient} from '@/lib/react-query';
import createStore from '@/redux/createStore';
import {setSnackbar} from '@/redux/models/snackbar';
import {useMutation} from 'react-query';


export type DeleteJournalDTO = {
    journalId: string;
};

export const deleteJournal = ({journalId}: DeleteJournalDTO) => {
    return axios.delete(`/journal/${journalId}`);
};

type UseDeleteJournalOptions = {
    config?: MutationConfig<typeof deleteJournal>;
};

export const useDeleteJournal = ({config}: UseDeleteJournalOptions = {}) => {
    return useMutation({
        onMutate: async (deletedJournal) => {
            await queryClient.cancelQueries('journals');

            // const previousJournals = queryClient.getQueryData<Journal[]>('journals');

            //   queryClient.setQueryData(
            //     'journals',
            //     previousJournals?.filter((journal) => journal.id !== deletedJournal.journalId)
            //   );
            // return { previousJournals };
        },
        onError: (_, __, context: any) => {
            // if (context?.previousJournals) {
            //   queryClient.setQueryData('journals', context.previousJournals);
            // }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('journals');
            createStore.dispatch(setSnackbar(true, 'success', 'Journal Deleted'));
        },
        ...config,
        mutationFn: deleteJournal,
    });
};
