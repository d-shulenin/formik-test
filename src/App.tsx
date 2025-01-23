import "./App.css";
import { Form } from "./components/Form";
import * as Yup from "yup";

const validationSchema = Yup.object({
  age: Yup.number().required().max(1000),
});

function App() {
  return (
    <Form initialValues={{ age: "" }} onSubmit={(values) => console.log(values)} validationSchema={validationSchema}>
      <Form.InputField
        label="Age"
        name="age"
        onChange={() => console.log("Age changed")}
        placeholder="Age"
        mask="number"
      />
      <Form.Submit text="Submit" />
    </Form>
  );
}

export default App;
