import { useField } from "formik";
import { TextInput, TextInputProps } from "@gravity-ui/uikit";
import { FormRow } from "@gravity-ui/components";
import { Label } from "../Label/Label";
import { ChangeEvent, FocusEvent } from "react";

type InputFieldProps<K> = Omit<TextInputProps, "label" | "error"> & {
  name: string;
  label?: K;
  labelAnnotation?: K extends string ? string : never;
  apiError?: string;
  description?: string;
  required?: boolean;
};

export const InputField = <T,>({
  name,
  label,
  labelAnnotation,
  apiError,
  description,
  required = false,
  ...textInputProps
}: InputFieldProps<T>) => {
  const [field, meta] = useField({
    name,
    type: "text",
  });

  const formikError = meta.touched ? meta.error : undefined;

  const handleTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    textInputProps.onChange?.(e);
  };

  const handleTextInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    field.onBlur(e);
    textInputProps.onBlur?.(e);
  };

  return (
    <FormRow
      direction="column"
      label={<Label text={label} required={required} annotation={labelAnnotation} />}
      fieldId={textInputProps.id || name}
    >
      <TextInput
        size="l"
        error={apiError || formikError}
        {...textInputProps}
        {...field}
        onChange={handleTextInputChange}
        onBlur={handleTextInputBlur}
      />
      {description && <FormRow.FieldDescription>{description}</FormRow.FieldDescription>}
    </FormRow>
  );
};
