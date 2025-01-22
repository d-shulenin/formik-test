import "./App.css";
import { Form } from "./components/Form";

function App() {
  return <Form initialValues={{ age: "" }} onSubmit={(values) => console.log(values)} />;
}

export default App;
