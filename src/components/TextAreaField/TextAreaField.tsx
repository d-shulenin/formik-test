import { TextArea, TextAreaProps } from "@gravity-ui/uikit";
import { FormFieldWrapper } from "../FormFieldWrapper/FormFieldWrapper";
import { useField } from "formik";
import { ChangeEvent, FocusEvent } from "react";
import { applyMask, MaskName } from "../../utils/applyMask";

interface TextAreaFieldProps<K> extends TextAreaProps {
  name: string;
  mask?: MaskName;
  label?: K;
  labelAnnotation?: K extends string ? string : never;
  apiError?: string;
  description?: string;
  required?: boolean;
}

export const TextAreaField = <T,>(props: TextAreaFieldProps<T>) => {
  const { name, mask, label, labelAnnotation, apiError, description, required, ...textAreaProps } = props;

  const [field, meta] = useField({
    name,
    type: "text",
  });

  const formikError = meta.touched ? meta.error : undefined;

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;
    e.target.value = applyMask(value, mask);

    field.onChange(e);
    textAreaProps.onChange?.(e);
  };

  const handleTextAreaBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e;
    e.target.value = applyMask(value, mask);

    field.onBlur(e);
    textAreaProps.onBlur?.(e);
  };

  return (
    <FormFieldWrapper
      fieldId={textAreaProps.id || name}
      label={label}
      labelAnnotation={labelAnnotation}
      description={description}
      required={required}
    >
      <TextArea
        id={textAreaProps.id || name}
        size="l"
        {...textAreaProps}
        {...field}
        error={apiError || formikError}
        onChange={handleTextAreaChange}
        onBlur={handleTextAreaBlur}
      />
    </FormFieldWrapper>
  );
};
