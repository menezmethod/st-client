import { PlusIcon } from '@heroicons/react/outline';
import * as z from 'zod';

import { Button } from '@/components/Elements';
import { Form, FormDrawer, InputField, SelectField, TextAreaField } from '@/components/Form';
import { DateTimePicker } from '@/components/Form/DateTimePicker';
import { formatDateForm } from '@/utils/format';

import { useTrade } from '../api/getTrade';
import { UpdateTradeDTO, useUpdateTrade } from '../api/updateTrade';

const schema = z.object({
  baseInstrument: z.string(),
  comments: z.string(),
  direction: z.string(),
  entryPrice: z.number(),
  exitPrice: z.number().optional(),
  journal: z.number(),
  quantity: z.number().optional(),
  quoteInstrument: z.string(),
  stopLoss: z.number().optional(),
  strategy: z.string(),
  takeProfit: z.number().optional(),
  timeClosed: z.string(),
  timeExecuted: z.string(),
});

type UpdateTradeProps = {
  tradeId: string;
};

export const UpdateTrade = ({ tradeId }: UpdateTradeProps) => {
  const tradeQuery = useTrade({ tradeId });
  const updateTradeMutation = useUpdateTrade();
  return (
    <>
      <FormDrawer
        isDone={updateTradeMutation.isSuccess}
        triggerButton={
          <Button size="sm" startIcon={<PlusIcon className="h-4 w-4" />}>
            Update Trade
          </Button>
        }
        title="Update Trade"
        submitButton={
          <Button
            isLoading={updateTradeMutation.isLoading}
            form="update-trade"
            type="submit"
            size="sm"
            disabled={updateTradeMutation.isLoading}
          >
            Update Trade
          </Button>
        }
      >
        <Form<UpdateTradeDTO['data'], typeof schema>
          id="update-trade"
          onSubmit={async (values) => {
            await updateTradeMutation.mutateAsync({ data: values, tradeId });
          }}
          options={{
            defaultValues: {
              direction: tradeQuery.data?.direction,
              baseInstrument: tradeQuery.data?.baseInstrument,
              quoteInstrument: tradeQuery.data?.quoteInstrument,
              entryPrice: tradeQuery.data?.entryPrice,
              exitPrice: tradeQuery.data?.exitPrice,
              stopLoss: tradeQuery.data?.stopLoss,
              takeProfit: tradeQuery.data?.takeProfit,
              strategy: tradeQuery.data?.strategy,
              quantity: tradeQuery.data?.quantity,
              timeExecuted: formatDateForm(tradeQuery.data?.timeExecuted),
              timeClosed: formatDateForm(tradeQuery.data?.timeClosed),
              comments: tradeQuery.data?.comments,
            },
          }}
          schema={schema}
        >
          {({ register, formState }) => (
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
                    registration={register('quantity', {
                      setValueAs: (v) => (v === '' ? undefined : parseFloat(v)),
                    })}
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-full h-12">
                  <InputField
                    label="Entry Price"
                    error={formState.errors['entryPrice']}
                    registration={register('entryPrice', {
                      setValueAs: (v) => (v === '' ? undefined : parseFloat(v)),
                    })}
                  />
                </div>
                <div className="w-full h-12">
                  <InputField
                    label="Exit Price"
                    error={formState.errors['exitPrice']}
                    registration={register('exitPrice', {
                      setValueAs: (v) => (v === '' ? undefined : parseFloat(v)),
                    })}
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-full h-12">
                  <InputField
                    label="Stop Loss"
                    error={formState.errors['stopLoss']}
                    registration={register('stopLoss', {
                      setValueAs: (v) => (v === '' ? undefined : parseFloat(v)),
                    })}
                  />
                </div>
                <div className="w-full h-12">
                  <InputField
                    label="Take Profit"
                    error={formState.errors['takeProfit']}
                    registration={register('takeProfit', {
                      setValueAs: (v) => (v === '' ? undefined : parseFloat(v)),
                    })}
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
                registration={register('journal', {
                  setValueAs: (v) => (v === '' ? undefined : parseFloat(v)),
                })}
                options={['1', '2'].map((journal) => ({
                  label: journal,
                  value: journal,
                }))}
              />
            </>
          )}
        </Form>
      </FormDrawer>
    </>
  );
};
