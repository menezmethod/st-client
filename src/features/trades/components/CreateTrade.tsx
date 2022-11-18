import { PlusIcon } from '@heroicons/react/outline';
import * as z from 'zod';

import { Button } from '@/components/Elements';
import { Form, FormDrawer, InputField, TextAreaField } from '@/components/Form';
import { DateTimePicker } from '@/components/Form/DateTimePicker';
import { Hidden } from '@/components/Form/Hidden';
import { useAuth } from '@/lib/auth';

import { CreateTradeDTO, useCreateTrade } from '../api/createTrade';

const schema = z.object({
  baseInstrument: z.string(),
  comments: z.string(),
  createdBy: z.string(),
  direction: z.string(),
  entryPrice: z.string(),
  exitPrice: z.string(),
  journal: z.string(),
  market: z.string(),
  outcome: z.string(),
  quantity: z.string(),
  quoteInstrument: z.string(),
  stopLoss: z.string(),
  strategy: z.string(),
  takeProfit: z.string(),
  timeClosed: z.string(),
  timeExecuted: z.string(),
});

type CreateTradeProps = {
  journalId: string;
};

export const CreateTrade = ({ journalId }: CreateTradeProps) => {
  const { user } = useAuth();
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
            Add
          </Button>
        }
      >
        <Form<CreateTradeDTO['data'], typeof schema>
          id="create-journal"
          onSubmit={async (values) => {
            await createTradeMutation.mutateAsync({ data: values });
          }}
          schema={schema}
        >
          {({ register, formState }) => (
            <>
              <div className="flex mb-4">
                <div className="w-full h-12">
                  <InputField
                    label="Base"
                    error={formState.errors['baseInstrument']}
                    registration={register('baseInstrument')}
                  />
                </div>
                <div className="w-full h-12">
                  <InputField
                    label="Symbol"
                    error={formState.errors['quoteInstrument']}
                    registration={register('quoteInstrument')}
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-full h-12">
                  <InputField
                    label="Entry Price"
                    error={formState.errors['entryPrice']}
                    registration={register('entryPrice')}
                  />
                </div>
                <div className="w-full h-12">
                  <InputField
                    label="Exit Price"
                    error={formState.errors['exitPrice']}
                    registration={register('exitPrice')}
                  />
                </div>
              </div>
              <InputField
                label="Side"
                error={formState.errors['direction']}
                registration={register('direction')}
              />
              <div className="flex mb-4">
                <div className="w-full h-12">
                  <DateTimePicker
                    label="Date Opened"
                    error={formState.errors['timeExecuted']}
                    registration={register('timeExecuted')}
                  />
                </div>
                <div className="w-full h-12">
                  <DateTimePicker
                    label="Date Closed"
                    error={formState.errors['timeClosed']}
                    registration={register('timeClosed')}
                  />
                </div>
                <Hidden value={user?.email} registration={register('createdBy')} />
              </div>
              <TextAreaField
                label="Comments"
                error={formState.errors['comments']}
                registration={register('comments')}
              />
            </>
          )}
        </Form>
      </FormDrawer>
    </>
  );
};
