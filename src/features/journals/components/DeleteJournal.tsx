import { TrashIcon } from '@heroicons/react/outline';

import { Button, ConfirmationDialog } from '@/components/Elements';
import { Authorization, ROLES } from '@/lib/authorization';

import { useDeleteJournal } from '../api/deleteJournal';

type DeleteJournalProps = {
  id: string;
};

export const DeleteJournal = ({ id }: DeleteJournalProps) => {
  const deleteJournalMutation = useDeleteJournal();

  return (
    <Authorization allowedRoles={[ROLES.ADMIN]}>
      <ConfirmationDialog
        icon="danger"
        title="Delete Journal"
        body="Are you sure you want to delete this journal?"
        triggerButton={
          <Button variant="danger" startIcon={<TrashIcon className="h-4 w-4" />}>
            Delete
          </Button>
        }
        confirmButton={
          <Button
            isLoading={deleteJournalMutation.isLoading}
            type="button"
            className="bg-red-600"
            onClick={async () => await deleteJournalMutation.mutateAsync({ journalId: id })}
          >
            Delete Journal
          </Button>
        }
      />
    </Authorization>
  );
};
