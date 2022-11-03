import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Journal } from '../types';

export const getJournal = ({ journalId }: { journalId: string }): Promise<Journal> => {
  return axios.get(`/journals/${journalId}`);
};

type QueryFnType = typeof getJournal;

type UseJournalOptions = {
  journalId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useJournal = ({ journalId, config }: UseJournalOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['journal', journalId],
    queryFn: () => getJournal({ journalId }),
  });
};
