import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Trade } from '../types';

export const getTrade = ({ tradeId }: { tradeId: string }): Promise<Trade> => {
  return axios.get(`/trade/${tradeId}`);
};

type QueryFnType = typeof getTrade;

type UseTradeOptions = {
  tradeId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useTrade = ({ tradeId, config }: UseTradeOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['trade', tradeId],
    queryFn: () => getTrade({ tradeId }),
  });
};
