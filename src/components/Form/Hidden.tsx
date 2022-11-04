import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type HiddenFieldProps = FieldWrapperPassThroughProps & {
  value?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const Hidden = (props: HiddenFieldProps) => {
  const { value, registration, error } = props;
  return (
    <FieldWrapper error={error}>
      <input type="hidden" value={value} {...registration} />
    </FieldWrapper>
  );
};
