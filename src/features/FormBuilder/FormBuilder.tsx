import { useFormBuilderContext } from "../../shared/providers";
import { Button } from "../../shared/ui";
import { AvailableElementsList } from "./components/AvailableElementsList";
import { FormView } from "./components/FormView";
import { HtmlGenerator } from "./components/HtmlGenerator";
import "./FormBuilder.css";

export const FormBuilder = () => {
  const { setIsEdit, editButtonText, hasElements } = useFormBuilderContext();

  return (
    <>
      <div className="builder--root-container">
        <div className="builder--flex-container">
          <div className="builder--preview-container bordered">
            <div>
              <Button onClick={setIsEdit} disabled={!hasElements}>
                {editButtonText}
              </Button>
            </div>
            <FormView />
          </div>
          <div className="builder--settings bordered">
            <h4>Добавить элемент</h4>
            <AvailableElementsList />
          </div>
          <div className="bordered">
            <HtmlGenerator />
          </div>
        </div>
      </div>
    </>
  );
};
