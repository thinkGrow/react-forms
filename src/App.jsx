import "./App.css";
import ControlledField from "./components/ControlledField/ControlledField";
import FormAction from "./components/FormAction/FormAction";
import HookForm from "./components/HookForm/HookForm";
import SimpleForms from "./components/SimpleForms/SimpleForms";
import UnControlledField from "./components/UnControlledField/UnControlledField";

function App() {
  return (
    <>
      <h1>Explore React Forms</h1>
      {/* <SimpleForms></SimpleForms> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UnControlledField></UnControlledField> */}
      <HookForm></HookForm>
    </>
  );
}

export default App;
