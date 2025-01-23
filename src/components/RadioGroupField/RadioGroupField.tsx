import { RadioGroup, RadioGroupProps } from "@gravity-ui/uikit";
import { FormFieldWrapper } from "../FormFieldWrapper/FormFieldWrapper";
import { useField } from "formik";

interface RadioGroupFieldProps<K> extends RadioGroupProps {
  name: string;
  label?: K;
  labelAnnotation?: K extends string ? string : never;
  description?: string;
  required?: boolean;
}

export function RadioGroupField<T>(props: RadioGroupFieldProps<T>) {
  const { name, label, labelAnnotation, description, required, ...radioGroupProps } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta, helpers] = useField({ name });

  const handleRadioGroupUpdate = (value: string) => {
    helpers.setValue(value);
    radioGroupProps.onUpdate?.(value);
  };

  return (
    <FormFieldWrapper
      label={label}
      labelAnnotation={labelAnnotation}
      fieldId={name}
      description={description}
      required={required}
    >
      <RadioGroup size="l" {...radioGroupProps} onUpdate={handleRadioGroupUpdate} />
    </FormFieldWrapper>
  );
}
