import { PencilIcon } from '@heroicons/react/solid';
import * as z from 'zod';

import { Button } from '@/components/Elements';
import { Form, FormDrawer, InputField, TextAreaField } from '@/components/Form';
import { Authorization, ROLES } from '@/lib/authorization';

import { useJournal } from '../api/getJournal';
import { UpdateJournalDTO, useUpdateJournal } from '../api/updateJournal';

type UpdateJournalProps = {
  journalId: string;
};

const schema = z.object({
  title: z.string().min(1, 'Required'),
  body: z.string().min(1, 'Required'),
});

export const UpdateJournal = ({ journalId }: UpdateJournalProps) => {
  const journalQuery = useJournal({ journalId });
  const updateJournalMutation = useUpdateJournal();

  return (
    <Authorization allowedRoles={[ROLES.ADMIN]}>
      <FormDrawer
        isDone={updateJournalMutation.isSuccess}
        triggerButton={
          <Button startIcon={<PencilIcon className="h-4 w-4" />} size="sm">
            Update Journal
          </Button>
        }
        title="Update Journal"
        submitButton={
          <Button
            form="update-journal"
            type="submit"
            size="sm"
            isLoading={updateJournalMutation.isLoading}
          >
            Submit
          </Button>
        }
      >
        <Form<UpdateJournalDTO['data'], typeof schema>
          id="update-journal"
          onSubmit={async (values) => {
            await updateJournalMutation.mutateAsync({ data: values, journalId });
          }}
          options={{
            defaultValues: {
              title: journalQuery.data?.title,
              body: journalQuery.data?.body,
            },
          }}
          schema={schema}
        >
          {({ register, formState }) => (
            <>
              <InputField
                label="Title"
                error={formState.errors['title']}
                registration={register('title')}
              />
              <TextAreaField
                label="Body"
                error={formState.errors['body']}
                registration={register('body')}
              />
            </>
          )}
        </Form>
      </FormDrawer>
    </Authorization>
  );
};
