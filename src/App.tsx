import "./App.css";
import { Form } from "./components/Form";
import { InputField } from "./components/InputField/InputField";

function App() {
  return (
    <Form initialValues={{ age: "" }} onSubmit={(values) => console.log(values)}>
      <InputField label="Age" name="age" onChange={() => console.log("Age changed")} placeholder="Age" mask="number" />
      <button type="submit">Submit</button>
    </Form>
  );
}

export default App;
