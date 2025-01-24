import { Select, SelectProps } from "@gravity-ui/uikit";
import { FormFieldWrapper } from "../FormFieldWrapper/FormFieldWrapper";
import { useField } from "formik";

interface SelectFieldProps<K> extends Omit<SelectProps, "label"> {
  name: string;
  label?: K;
  labelAnnotation?: K extends string ? string : never;
  description?: string;
  required?: boolean;
}

export const SelectField = <T,>(props: SelectFieldProps<T>) => {
  const { name, label, labelAnnotation, description, required, ...selectProps } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta, helpers] = useField({
    name,
  });

  const handleSelectUpdate = (val: string[]) => {
    helpers.setValue(val);
    selectProps.onUpdate?.(val);
  };

  return (
    <FormFieldWrapper
      fieldId={selectProps.id || name}
      label={label}
      labelAnnotation={labelAnnotation}
      description={description}
      required={required}
    >
      <Select id={selectProps.id || name} size="l" {...selectProps} onUpdate={handleSelectUpdate} />
    </FormFieldWrapper>
  );
};
