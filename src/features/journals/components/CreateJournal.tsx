import { PlusIcon } from '@heroicons/react/outline';
import * as z from 'zod';

import { Button } from '@/components/Elements';
import { Form, FormDrawer, InputField, TextAreaField } from '@/components/Form';
import { Authorization, ROLES } from '@/lib/authorization';

import { CreateJournalDTO, useCreateJournal } from '../api/createJournal';

const schema = z.object({
  title: z.string().min(1, 'Required'),
  body: z.string().min(1, 'Required'),
});

export const CreateJournal = () => {
  const createJournalMutation = useCreateJournal();

  return (
    <Authorization allowedRoles={[ROLES.ADMIN]}>
      <FormDrawer
        isDone={createJournalMutation.isSuccess}
        triggerButton={
          <Button size="sm" startIcon={<PlusIcon className="h-4 w-4" />}>
            Create Journal
          </Button>
        }
        title="Create Journal"
        submitButton={
          <Button
            form="create-journal"
            type="submit"
            size="sm"
            isLoading={createJournalMutation.isLoading}
          >
            Submit
          </Button>
        }
      >
        <Form<CreateJournalDTO['data'], typeof schema>
          id="create-journal"
          onSubmit={async (values) => {
            await createJournalMutation.mutateAsync({ data: values });
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
