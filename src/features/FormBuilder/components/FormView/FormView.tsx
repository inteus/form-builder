import { useFormBuilderContext } from "../../../../shared/providers";
import { FormViewElement } from "./FormViewElement";
import "./FormView.css";

export const FormView = function FormView() {
  const { formRef, getElements, hasElements } = useFormBuilderContext();
  const elements = getElements();

  if (!hasElements) return <i>Не добавлено ни одного элемента...</i>;

  return (
    <form
      ref={formRef}
      style={{ display: "flex", flexDirection: "column", gap: 16, padding: 16 }}
    >
      {elements.map((element) => (
        <FormViewElement key={element.id} element={element} />
      ))}
    </form>
  );
};
