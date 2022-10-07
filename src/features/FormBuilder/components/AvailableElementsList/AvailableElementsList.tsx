import { memo, MouseEvent } from "react";
import { ElementsTypes } from "../../../../enums";
import { availableElements } from "../../../../models/availableElementsList";
import {
  useFormBuilderContext,
  useModalContext,
} from "../../../../shared/providers";
import { Button } from "../../../../shared/ui";
import "./AvailableElementsList.css";

const AvailableElementButton = ({
  element,
}: {
  element: typeof availableElements[number];
}) => {
  const { setSelectedElement, hasSubmitButton } = useFormBuilderContext();
  const { toggleModal } = useModalContext();

  const onOpenElementSettingsClick = (e: MouseEvent<HTMLButtonElement>) => {
    const name = (e.target as HTMLButtonElement).name as ElementsTypes;

    if (name) {
      toggleModal();
      setSelectedElement(name);
    }
  };

  return (
    <Button
      key={element.type}
      name={element.type}
      onClick={onOpenElementSettingsClick}
      disabled={element.type === ElementsTypes.submitButton && hasSubmitButton}
    >
      {element.label}
    </Button>
  );
};

export const AvailableElementsList = memo(function AvailableElementsList() {
  return (
    <div className="available-elements--list-container">
      {availableElements.map((element) => {
        return <AvailableElementButton key={element.type} element={element} />;
      })}
    </div>
  );
});
