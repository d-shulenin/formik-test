import { Formik, FormikConfig, FormikValues, Form as FormikForm } from "formik";
import { InputField } from "./InputField/InputField";
import { CheckboxField } from "./CheckboxField/CheckboxField";
import { Submit } from "./Submit/Submit";
import { RadioGroupField } from "./RadioGroupField/RadioGroupField";
import { SelectField } from "./SelectField/SelectField";
import { TextAreaField } from "./TextAreaField/TextAreaField";
import { Spin } from "@gravity-ui/uikit";
import "./Form.css";

interface FormProps extends FormikConfig<FormikValues> {
  isLoading?: boolean;
}

export const Form = ({ isLoading = false, children, ...props }: FormProps) => {
  return (
    <Formik validateOnChange={true} validateOnMount={true} {...props}>
      {(formik) => (
        <FormikForm className="form">
          {typeof children === "function" ? children(formik) : children}{" "}
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
