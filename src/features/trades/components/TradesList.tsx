import { ArchiveIcon } from '@heroicons/react/outline';

import { Link, Spinner, Table } from '@/components/Elements';
import { Trade } from '@/features/trades';
import { formatDateShort } from '@/utils/format';

import { useTrades } from '../api/getTrades';

import { DeleteTrade } from './DeleteTrade';

type TradesListProps = {
  journalId: string;
};

export const TradesList = ({ journalId }: TradesListProps) => {
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
    <Table<Trade>
      data={tradesQuery.data}
      columns={[
        {
          title: 'Status',
          field: 'outcome',
          Cell({ entry: { outcome, id } }) {
            return (
              <span>
                <Link to={`./trade/${id}`}>{outcome}</Link>
              </span>
            );
          },
        },
        {
          title: 'Date',
          field: 'timeExecuted',
          Cell({ entry: { timeExecuted } }) {
            return <span>{formatDateShort(timeExecuted)}</span>;
          },
        },
        {
          title: 'Symbol',
          field: 'quoteInstrument',
          Cell({ entry: { quoteInstrument, id } }) {
            return (
              <span>
                <Link to={`./trade/${id}`}>
                  <strong>{quoteInstrument}</strong>
                </Link>
              </span>
            );
          },
        },
        {
          title: 'Entry',
          field: 'entryPrice',
          Cell({ entry: { entryPrice } }) {
            return <span>${entryPrice}</span>;
          },
        },
        {
          title: 'Exit',
          field: 'exitPrice',
          Cell({ entry: { exitPrice } }) {
            return <span>${exitPrice}</span>;
          },
        },
        {
          title: 'Size',
          field: 'quantity',
          Cell({ entry: { quantity } }) {
            return <span>{quantity}</span>;
          },
        },
        {
          title: 'Side',
          field: 'direction',
          Cell({ entry: { direction } }) {
            return <span>{direction}</span>;
          },
        },
        {
          title: 'Strategy',
          field: 'strategy',
          Cell({ entry: { strategy } }) {
            return <span>{strategy}</span>;
          },
        },
        {
          title: '',
          field: 'id',
          Cell({ entry: { id } }) {
            return <DeleteTrade id={id} />;
          },
        },
      ]}
    />
  );
};
