import { FormBuilder } from "./features/FormBuilder";
import { FormBuilderProvider, ModalProvider } from "./shared/providers";

function App() {
  return (
    <FormBuilderProvider>
      <ModalProvider>
        <FormBuilder />
      </ModalProvider>
    </FormBuilderProvider>
  );
}

export default App;
