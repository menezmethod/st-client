import { useMutation } from 'react-query';

import { axios } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { useNotificationStore } from '@/stores/notifications';

import { Journal } from '../types';

export type CreateJournalDTO = {
  data: {
    name: string;
    description: string;
    createdBy: string;
    endDate: Date;
    startDate: Date;
  };
};

export const createJournal = ({ data }: CreateJournalDTO): Promise<Journal> => {
  return axios.post(`/journal/`, data);
};

type UseCreateJournalOptions = {
  config?: MutationConfig<typeof createJournal>;
};

export const useCreateJournal = ({ config }: UseCreateJournalOptions = {}) => {
  const { addNotification } = useNotificationStore();
  return useMutation({
    onMutate: async (newJournal) => {
      await queryClient.cancelQueries('journal');

      const previousJournals = queryClient.getQueryData<Journal[]>('journal');

      queryClient.setQueryData('journal', [...(previousJournals || []), newJournal.data]);

      return { previousJournals };
    },
    onError: (_, __, context: any) => {
      if (context?.previousJournals) {
        queryClient.setQueryData('journal', context.previousJournals);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('journal');
      addNotification({
        type: 'success',
        title: 'Journal Created',
      });
    },
    ...config,
    mutationFn: createJournal,
  });
};
