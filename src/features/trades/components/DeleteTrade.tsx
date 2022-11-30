import { TrashIcon } from '@heroicons/react/outline';

import { Button, ConfirmationDialog } from '@/components/Elements';

import { useDeleteTrade } from '../api/deleteTrade';

type DeleteTradeProps = {
  id: string;
};

export const DeleteTrade = ({ id }: DeleteTradeProps) => {
  const deleteTradeMutation = useDeleteTrade();

  return (
    <ConfirmationDialog
      isDone={deleteTradeMutation.isSuccess}
      icon="danger"
      title="Delete Trade"
      body="Are you sure you want to delete this UpdateTrade?"
      triggerButton={
        <Button variant="danger" size="sm" startIcon={<TrashIcon className="h-4 w-4" />}>
          Delete
        </Button>
      }
      confirmButton={
        <Button
          isLoading={deleteTradeMutation.isLoading}
          type="button"
          className="bg-red-600"
          onClick={async () => await deleteTradeMutation.mutateAsync({ tradeId: id })}
        >
          Delete Trade
        </Button>
      }
    />
  );
};
