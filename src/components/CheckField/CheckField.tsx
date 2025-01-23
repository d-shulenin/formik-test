import { useField } from "formik";
import { FormFieldWrapper } from "../FormFieldWrapper/FormFieldWrapper";
import { Checkbox, CheckboxProps } from "@gravity-ui/uikit";
import { ChangeEvent, FocusEvent } from "react";

interface CheckFieldProps<K> extends CheckboxProps {
  name: string;
  label?: K;
  labelAnnotation?: K extends string ? string : never;
  required?: boolean;
  description?: string;
}

export const CheckField = <T,>(props: CheckFieldProps<T>) => {
  const { name, label, labelAnnotation, required, description, ...checkboxProps } = props;

  const [field] = useField({ name, type: "checkbox" });

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    checkboxProps.onChange?.(e);
  };

  const handleCheckboxBlur = (e: FocusEvent<HTMLInputElement>) => {
    field.onBlur(e);
    checkboxProps.onBlur?.(e);
  };

  return (
    <FormFieldWrapper
      fieldId={checkboxProps.id || name}
      description={description}
      label={label}
      labelAnnotation={labelAnnotation}
      required={required}
    >
      <Checkbox {...checkboxProps} {...field} onChange={handleCheckboxChange} onBlur={handleCheckboxBlur} />
    </FormFieldWrapper>
  );
};
