import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Trade } from '../types';

export const getTrades = ({ journalId }: { journalId: string }): Promise<Trade[]> => {
  return axios.get(`/trades`, {
    params: {
      journalId,
    },
  });
};

type QueryFnType = typeof getTrades;

type UseTradesOptions = {
  journalId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useTrades = ({ journalId, config }: UseTradesOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['trades', journalId],
    queryFn: () => getTrades({ journalId }),
    ...config,
  });
};
