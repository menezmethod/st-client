import { CreateTrade } from './CreateTrade';
import { TradesList } from './TradesList';

type TradesProps = {
  journalId: string;
};

export const Trade = ({ journalId }: TradesProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-1xl font-bold">Trades:</h3>
        <CreateTrade journalId={journalId} />
      </div>
      <TradesList journalId={journalId} />
    </div>
  );
};
