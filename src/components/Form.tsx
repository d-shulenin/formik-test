import { Formik, FormikConfig, FormikValues, Form as FormikForm } from "formik";
import { InputField } from "./InputField/InputField";

type FormProps = FormikConfig<FormikValues>;

export const Form = (props: FormProps) => {
  return (
    <Formik initialValues={props.initialValues} validationSchema={props.validationSchema} onSubmit={props.onSubmit}>
      <FormikForm>
        <InputField label="Age" name="age" onChange={() => console.log("Age changed")} placeholder="Age" />
        <button type="submit">Submit</button>
      </FormikForm>
    </Formik>
  );
};
