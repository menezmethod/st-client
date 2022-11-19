import { CreateTrade } from '../components/CreateTrade';
import { TradesList } from '../components/TradesList';

type TradesProps = {
  journalId: string;
};

export const Trades = ({ journalId }: TradesProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-1xl font-bold">Trades:</h3>
        <CreateTrade />
      </div>
      <TradesList journalId={journalId} />
    </div>
  );
};
