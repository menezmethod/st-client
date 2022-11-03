import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { useNotificationStore } from '@/stores/notifications';

import { Journal } from '../types';

export type UpdateJournalDTO = {
  data: {
    title: string;
    body: string;
  };
  journalId: string;
};

export const updateJournal = ({ data, journalId }: UpdateJournalDTO): Promise<Journal> => {
  return axios.patch(`/journals/${journalId}`, data);
};

type UseUpdateJournalOptions = {
  config?: MutationConfig<typeof updateJournal>;
};

export const useUpdateJournal = ({ config }: UseUpdateJournalOptions = {}) => {
  const { addNotification } = useNotificationStore();

  return useMutation({
    onMutate: async (updatingJournal: any) => {
      await queryClient.cancelQueries(['journal', updatingJournal?.journalId]);

      const previousJournal = queryClient.getQueryData<Journal>([
        'journal',
        updatingJournal?.journalId,
      ]);

      queryClient.setQueryData(['journal', updatingJournal?.journalId], {
        ...previousJournal,
        ...updatingJournal.data,
        id: updatingJournal.journalId,
      });

      return { previousJournal };
    },
    onError: (_, __, context: any) => {
      if (context?.previousJournal) {
        queryClient.setQueryData(['journal', context.previousJournal.id], context.previousJournal);
      }
    },
    onSuccess: (data) => {
      queryClient.refetchQueries(['journal', data.id]);
      addNotification({
        type: 'success',
        title: 'Journal Updated',
      });
    },
    ...config,
    mutationFn: updateJournal,
  });
};
