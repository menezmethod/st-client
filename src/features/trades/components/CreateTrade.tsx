import { PlusIcon } from '@heroicons/react/outline';
import * as z from 'zod';

import { Button } from '@/components/Elements';
import { Form, FormDrawer, TextAreaField } from '@/components/Form';

import { CreateTradeDTO, useCreateTrade } from '../api/createTrade';

const schema = z.object({
  body: z.string().min(1, 'Required'),
});

type CreateTradeProps = {
  journalId: string;
};

export const CreateTrade = ({ journalId }: CreateTradeProps) => {
  const createTradeMutation = useCreateTrade({ journalId: journalId });
  return (
    <>
      <FormDrawer
        isDone={createTradeMutation.isSuccess}
        triggerButton={
          <Button size="sm" startIcon={<PlusIcon className="h-4 w-4" />}>
            Create Trade
          </Button>
        }
        title="Create Trade"
        submitButton={
          <Button
            isLoading={createTradeMutation.isLoading}
            form="create-trade"
            type="submit"
            size="sm"
            disabled={createTradeMutation.isLoading}
          >
            Submit
          </Button>
        }
      >
        <Form<CreateTradeDTO['data'], typeof schema>
          id="create-trade"
          onSubmit={async (values) => {
            await createTradeMutation.mutateAsync({
              data: {
                body: values.body,
                journalId: journalId,
              },
            });
          }}
          schema={schema}
        >
          {({ register, formState }) => (
            <TextAreaField
              label="Body"
              error={formState.errors['body']}
              registration={register('body')}
            />
          )}
        </Form>
      </FormDrawer>
    </>
  );
};
