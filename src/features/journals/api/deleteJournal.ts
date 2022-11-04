import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { useNotificationStore } from '@/stores/notifications';

import { Journal } from '../types';

export const deleteJournal = ({ journalId }: { journalId: string }) => {
  return axios.delete(`/journal/${journalId}`);
};

type UseDeleteJournalOptions = {
  config?: MutationConfig<typeof deleteJournal>;
};

export const useDeleteJournal = ({ config }: UseDeleteJournalOptions = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (deletedJournal) => {
      await queryClient.cancelQueries('journals');

      const previousJournals = queryClient.getQueryData<Journal[]>('journals');

      queryClient.setQueryData(
        'journals',
        previousJournals?.filter((journal) => journal.id !== deletedJournal.journalId)
      );

      return { previousJournals };
    },
    onError: (_, __, context: any) => {
      if (context?.previousJournals) {
        queryClient.setQueryData('journals', context.previousJournals);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('journals');
      addNotification({
        type: 'success',
        title: 'Journal Deleted',
      });
    },
    ...config,
    mutationFn: deleteJournal,
  });
};
