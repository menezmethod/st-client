import { PlusIcon } from '@heroicons/react/outline';
import * as z from 'zod';

import { Button } from '@/components/Elements';
import { Form, FormDrawer, InputField, TextAreaField } from '@/components/Form';
import { Authorization, ROLES } from '@/lib/authorization';

import { CreateJournalDTO, useCreateJournal } from '../api/createJournal';
import clsx from 'clsx';
import { DatePicker } from '@/components/Form/DatePicker';
import { useAuth } from '@/lib/auth';
import { Hidden } from '@/components/Form/Hidden';

const schema = z.object({
  name: z.string().min(1, 'Required'),
  description: z.string().min(1, 'Required'),
  startDate: z.string(),
  endDate: z.string(),
  createdBy: z.string(),
});

export const CreateJournal = () => {
  const { user } = useAuth();
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
                label="Name"
                error={formState.errors['name']}
                registration={register('name')}
              />

              <TextAreaField
                label="Description"
                error={formState.errors['description']}
                registration={register('description')}
              />
              <div>
                <div>
                  <DatePicker
                    label="Start Date"
                    error={formState.errors['startDate']}
                    registration={register('startDate')}
                  />
                </div>
                <br />
                <div>
                  <DatePicker
                    label="End Date"
                    error={formState.errors['endDate']}
                    registration={register('endDate')}
                  />
                </div>
                <Hidden value={user?.email} registration={register('createdBy')} />
              </div>
            </>
          )}
        </Form>
      </FormDrawer>
    </Authorization>
  );
};
