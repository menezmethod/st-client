import { PlusIcon } from '@heroicons/react/outline';
import * as z from 'zod';

import { Button } from '@/components/Elements';
import { Form, FormDrawer, InputField, SelectField, TextAreaField } from '@/components/Form';
import { DateTimePicker } from '@/components/Form/DateTimePicker';
import { Hidden } from '@/components/Form/Hidden';
import { useAuth } from '@/lib/auth';

import { CreateTradeDTO, useCreateTrade } from '../api/createTrade';

const schema = z.object({
  baseInstrument: z.string(),
  comments: z.string(),
  entryPrice: z.any(),
  exitPrice: z.any(),
  journal: z.string(),
  quantity: z.any(),
  quoteInstrument: z.string(),
  stopLoss: z.any(),
  strategy: z.string(),
  takeProfit: z.any(),
  timeClosed: z.string(),
  timeExecuted: z.string(),
});

export const CreateTrade = () => {
  const { user } = useAuth();
  const createTradeMutation = useCreateTrade();
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
            Add Trade
          </Button>
        }
      >
        <Form<CreateTradeDTO['data'], typeof schema>
          id="create-trade"
          onSubmit={async (values) => {
            await createTradeMutation.mutateAsync({ data: values });
          }}
          schema={schema}
        >
          {({ register, formState }) => {
            return (
              <>
                <div className="flex mb-4">
                  <div className="w-1/3 h-12">
                    <InputField
                      label="Base"
                      error={formState.errors['baseInstrument']}
                      registration={register('baseInstrument')}
                    />
                  </div>
                  <div className="w-1/3 h-12">
                    <InputField
                      label="Symbol"
                      error={formState.errors['quoteInstrument']}
                      registration={register('quoteInstrument')}
                    />
                  </div>
                  <div className="w-1/3 h-12">
                    <InputField
                      label="Quantity"
                      error={formState.errors['quantity']}
                      registration={register('quantity')}
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
                <div className="flex mb-4">
                  <div className="w-full h-12">
                    <InputField
                      label="Stop Loss"
                      error={formState.errors['stopLoss']}
                      registration={register('stopLoss')}
                    />
                  </div>
                  <div className="w-full h-12">
                    <InputField
                      label="Take Profit"
                      error={formState.errors['takeProfit']}
                      registration={register('takeProfit')}
                    />
                  </div>
                </div>
                <InputField
                  label="Strategy"
                  error={formState.errors['strategy']}
                  registration={register('strategy')}
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
                </div>
                <SelectField
                  label="Side"
                  error={formState.errors['direction']}
                  registration={register('direction')}
                  options={['Long', 'Short'].map((side) => ({
                    label: side,
                    value: side,
                  }))}
                />
                <TextAreaField
                  label="Comments"
                  error={formState.errors['comments']}
                  registration={register('comments')}
                />
                <SelectField
                  label="Journal"
                  error={formState.errors['journal']}
                  registration={register('journal')}
                  options={['1', '2'].map((journal) => ({
                    label: journal,
                    value: journal,
                  }))}
                />
                <Hidden value={user?.email} registration={register('createdBy')} />
              </>
            );
          }}
        </Form>
      </FormDrawer>
    </>
  );
};
