import {axios} from '@/lib/axios';
import {MutationConfig, queryClient} from '@/lib/react-query';
import {setSnackbar} from '@/redux/models/snackbar';
import createStore from '@/redux/createStore'
import {useMutation} from 'react-query';
import {Journal} from '../types';


export type EditJournalDTO = {
    data: {
        createdAt: Date
        createdBy: string;
        description: string;
        endDate: Date;
        name: any;
        startDate: Date;
    };
    journalId: any;
};

export const editJournal = ({data, journalId}: EditJournalDTO): Promise<Journal> => {
    return axios.patch(`/journal/${journalId}`, data);
};

type UseEditJournalOptions = {
    config?: MutationConfig<typeof editJournal>;
};

export const useEditJournal = ({config}: UseEditJournalOptions = {}) => {
    return useMutation({
        onMutate: async (editingJournal: any) => {
            await queryClient.cancelQueries(['journal', editingJournal?.journalId]);

            const previousJournal = queryClient.getQueryData<Journal>([
                'journal',
                editingJournal?.journalId,
            ]);

            queryClient.setQueryData(['journal', editingJournal?.journalId], {
                ...previousJournal,
                ...editingJournal.data,
                id: editingJournal.journalId,
            });

            return {previousJournal};
        },
        onError: (_, __, context: any) => {
            if (context?.previousJournal) {
                queryClient.setQueryData(['journal', context.previousJournal.id], context.previousJournal);
            }
        },
        onSuccess: (data) => {
            queryClient.refetchQueries(['journals', data.id]);
            queryClient.invalidateQueries(['journal', data.id]);
            createStore.dispatch(setSnackbar(true, 'success', 'Journal Updated'));
        },
        ...config,
        mutationFn: editJournal,
    });
};
