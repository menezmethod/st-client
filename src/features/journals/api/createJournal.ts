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
      await queryClient.cancelQueries('journals');

      const previousJournals = queryClient.getQueryData<Journal[]>('journals');

      queryClient.setQueryData('journals', [...(previousJournals || []), newJournal.data]);

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
        title: 'Journal Created',
      });
    },
    ...config,
    mutationFn: createJournal,
  });
};
