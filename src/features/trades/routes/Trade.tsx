import { useParams } from 'react-router-dom';

import { Spinner } from '@/components/Elements';
import { Head } from '@/components/Head';
import { ContentLayout } from '@/components/Layout';
import { formatDate } from '@/utils/format';

import { useTrade } from '../api/getTrade';
import { UpdateTrade } from '../components/UpdateTrade';

type EntryProps = {
  label: string;
  value: string;
};
const Entry = ({ label, value }: EntryProps) => (
  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
  </div>
);

export const Trade = () => {
  const { tradeId } = useParams();
  const { data, isLoading } = useTrade({ tradeId });

  if (isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!data) return null;

  let totalReturn = 0;
  const exitPrice = data ? data.exitPrice : 0;
  const outcome = totalReturn > -0.01 ? 'Return' : 'Loss';
  const pageTitle = data.baseInstrument + ' / ' + data.quoteInstrument;

  switch (data?.direction) {
    case 'Short':
      totalReturn = (-data.entryPrice - -exitPrice) * -1;
      break;
    case 'Long':
      totalReturn = (-exitPrice - -data.entryPrice) * -1;
      break;
  }
  if (!totalReturn) {
    totalReturn = 0;
  }

  return (
    <>
      <Head title={pageTitle} />
      <ContentLayout title={pageTitle}>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {outcome}: ${totalReturn.toFixed(2)}
              </h3>
              <UpdateTrade tradeId={tradeId} />
            </div>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Logged: {formatDate(data.createdAt)}
            </p>
          </div>
          <div className="mt-6 flex flex-col space-y-16">
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <Entry label="Base" value={data.baseInstrument} />
                <Entry label="Symbol" value={data.quoteInstrument} />
                <Entry label="Comments" value={data.comments} />
                <Entry label="Side" value={data.direction} />
                <Entry label="Entry Price" value={data.entryPrice} />
                <Entry label="Exit Price" value={data.exitPrice} />
                <Entry label="Strategy" value={data.strategy} />
                <Entry label="Outcome" value={data.outcome} />
                <Entry label="Quantity" value={data.quantity} />
                <Entry label="Stop Loss" value={data.stopLoss} />
                <Entry label="Take Profit" value={data.takeProfit} />
                <Entry label="Time Executed" value={formatDate(data.timeExecuted)} />
                <Entry label="Time Closed" value={formatDate(data.timeClosed)} />
                <Entry label="Journal" value={data.journal} />
                <Entry label="Created By" value={data.createdBy} />
              </dl>
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};
