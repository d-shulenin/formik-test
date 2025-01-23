import { Formik, FormikConfig, FormikValues, Form as FormikForm } from "formik";
import { ReactNode } from "react";
import { InputField } from "./InputField/InputField";
import { CheckboxField } from "./CheckboxField/CheckboxField";
import { Submit } from "./Submit/Submit";
import { RadioGroupField } from "./RadioGroupField/RadioGroupField";

type FormProps = FormikConfig<FormikValues> & {
  children: ReactNode;
};

export const Form = ({ children, ...formikProps }: FormProps) => {
  return (
    <Formik validateOnChange={true} validateOnMount={true} {...formikProps}>
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
};

Form.InputField = InputField;
Form.CheckboxField = CheckboxField;
Form.RadioGroupField = RadioGroupField;
Form.Submit = Submit;
