import { PencilIcon } from '@heroicons/react/solid';
import * as z from 'zod';

import { Button } from '@/components/Elements';
import { Form, FormDrawer, InputField, TextAreaField } from '@/components/Form';
import { Authorization, ROLES } from '@/lib/authorization';

import { useJournal } from '../api/getJournal';
import { UpdateJournalDTO, useUpdateJournal } from '../api/updateJournal';
import { DatePicker } from '@/components/Form/DatePicker';

type UpdateJournalProps = {
  journalId: string;
};

const schema = z.object({
  name: z.string().min(1, 'Required'),
  description: z.string().min(1, 'Required'),
  startDate: z.string(),
  endDate: z.string(),
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
              name: journalQuery.data?.name,
              description: journalQuery.data?.description,
              startDate: journalQuery.data?.startDate,
              endDate: journalQuery.data?.endDate,
            },
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
              </div>
            </>
          )}
        </Form>
      </FormDrawer>
    </Authorization>
  );
};
