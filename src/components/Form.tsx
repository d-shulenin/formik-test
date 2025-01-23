import { Formik, FormikConfig, FormikValues, Form as FormikForm } from "formik";
import { ReactNode } from "react";

type FormProps = FormikConfig<FormikValues> & {
  children: ReactNode;
};

export const Form = ({ children, ...formikProps }: FormProps) => {
  return (
    <Formik
      initialValues={formikProps.initialValues}
      validationSchema={formikProps.validationSchema}
      onSubmit={formikProps.onSubmit}
    >
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
};
