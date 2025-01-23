import { useField } from "formik";
import { TextInput, TextInputProps } from "@gravity-ui/uikit";
import { ChangeEvent, FocusEvent } from "react";
import { applyMask, MaskName } from "../../utils/applyMask";
import { FormFieldWrapper } from "../FormFieldWrapper/FormFieldWrapper";

interface InputFieldProps<K> extends Omit<TextInputProps, "label" | "error"> {
  name: string;
  label?: K;
  labelAnnotation?: K extends string ? string : never;
  apiError?: string;
  description?: string;
  mask?: MaskName;
  required?: boolean;
}

export const InputField = <T,>(props: InputFieldProps<T>) => {
  const { name, label, labelAnnotation, apiError, description, mask, required, ...textInputProps } = props;

  const [field, meta] = useField({
    name,
    type: "text",
  });

  const formikError = meta.touched ? meta.error : undefined;

  const handleTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    e.target.value = applyMask(value, mask);

    field.onChange(e);
    textInputProps.onChange?.(e);
  };

  const handleTextInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    e.target.value = applyMask(value, mask);

    field.onBlur(e);
    textInputProps.onBlur?.(e);
  };

  return (
    <FormFieldWrapper
      label={label}
      labelAnnotation={labelAnnotation}
      required={required}
      description={description}
      fieldId={textInputProps.id || name}
    >
      <TextInput
        id={textInputProps.id || name}
        size="l"
        error={apiError || formikError}
        {...textInputProps}
        {...field}
        onChange={handleTextInputChange}
        onBlur={handleTextInputBlur}
      />
    </FormFieldWrapper>
  );
};
