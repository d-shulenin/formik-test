import { Formik, FormikConfig, Form as FormikForm } from "formik";
import { InputField } from "./InputField/InputField";
import { CheckboxField } from "./CheckboxField/CheckboxField";
import { Submit } from "./Submit/Submit";
import { RadioGroupField } from "./RadioGroupField/RadioGroupField";
import { SelectField } from "./SelectField/SelectField";
import { TextAreaField } from "./TextAreaField/TextAreaField";
import { Spin } from "@gravity-ui/uikit";
import "./Form.css";
import { Schema } from "yup";

interface FormProps<K> extends FormikConfig<K> {
  isLoading?: boolean;
  validationSchema: Schema<K>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Form = <T extends Record<string, any>>({ isLoading = false, children, ...props }: FormProps<T>) => {
  return (
    <Formik validateOnChange={true} validateOnMount={true} {...props}>
      {(formik) => (
        <FormikForm className="form">
          {typeof children === "function" ? children(formik) : children}
          {isLoading && (
            <div className="spin__container">
              <Spin />
            </div>
          )}
        </FormikForm>
      )}
    </Formik>
  );
};

Form.InputField = InputField;
Form.CheckboxField = CheckboxField;
Form.RadioGroupField = RadioGroupField;
Form.SelectField = SelectField;
Form.TextAreaField = TextAreaField;
Form.Submit = Submit;
