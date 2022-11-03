import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Journal } from '../types';

export const getJournals = (): Promise<Journal[]> => {
  return axios.get('/journals');
};

type QueryFnType = typeof getJournals;

type UseJournalsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useJournals = ({ config }: UseJournalsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['journals'],
    queryFn: () => getJournals(),
  });
};
