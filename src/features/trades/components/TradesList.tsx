import { ArchiveIcon } from '@heroicons/react/outline';

import { Spinner, MDPreview } from '@/components/Elements';
import { User } from '@/features/users';
import { useAuth } from '@/lib/auth';
import { POLICIES, Authorization } from '@/lib/authorization';
import { formatDate } from '@/utils/format';

import { useTrades } from '../api/getTrades';

import { DeleteTrade } from './DeleteTrade';

type TradesListProps = {
  journalId: string;
};

export const TradesList = ({ journalId }: TradesListProps) => {
  const { user } = useAuth();
  const tradesQuery = useTrades({ journalId: journalId });

  if (tradesQuery.isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!tradesQuery?.data?.length)
    return (
      <div
        role="list"
        aria-label="trades"
        className="bg-white text-gray-500 h-40 flex justify-center items-center flex-col"
      >
        <ArchiveIcon className="h-10 w-10" />
        <h4>No Trades Found</h4>
      </div>
    );

  return (
    <ul aria-label="trades" className="flex flex-col space-y-3">
      {tradesQuery.data.map((trade, index) => (
        <li
          aria-label={`comment-${trade.body}-${index}`}
          key={trade.id || index}
          className="w-full bg-white shadow-sm p-4"
        >
          <Authorization policyCheck={POLICIES['comment:delete'](user as User, trade)}>
            <div className="flex justify-between">
              <span className="text-xs font-semibold">{formatDate(trade.createdAt)}</span>
              <DeleteTrade journalId={journalId} id={trade.id} />
            </div>
          </Authorization>

          <MDPreview value={trade.body} />
        </li>
      ))}
    </ul>
  );
};
