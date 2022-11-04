import { TradesList } from './TradesList';
import { CreateTrade } from './CreateTrade';

type CommentsProps = {
  journalId: string;
};

export const Trades = ({ journalId }: CommentsProps) => {
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
