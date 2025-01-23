import { FormRow } from "@gravity-ui/components";
import { Label } from "../Label/Label";
import { ReactNode } from "react";

interface FormFieldWrapperProps {
  label?: unknown;
  labelAnnotation?: string;
  description?: string;
  fieldId: string;
  children: ReactNode;
  required?: boolean;
}

export const FormFieldWrapper = (props: FormFieldWrapperProps) => {
  const { label, labelAnnotation, description, fieldId, children, required = false } = props;

  return (
    <FormRow
      direction="column"
      label={<Label text={label} annotation={labelAnnotation} required={required} />}
      fieldId={fieldId}
    >
      {children}
      {Boolean(description) && <FormRow.FieldDescription>{description}</FormRow.FieldDescription>}
    </FormRow>
  );
};
