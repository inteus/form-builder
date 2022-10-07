import { formElementsFactory } from "../../../../../../maps/formElementsMap";
import {
  useFormBuilderContext,
  useModalContext,
} from "../../../../../../shared/providers";
import { Button } from "../../../../../../shared/ui";

export const AddingButton = ({ properties }) => {
  const {
    addElement,
    selectedElement,
    isEdit,
    updateElement,
    selectionData,
    setSelectionData,
  } = useFormBuilderContext();
  const { toggleModal } = useModalContext();

  const onAddElementClick = () => {
    if (!selectedElement) return;

    if (isEdit && selectionData !== null) {
      updateElement("id", selectionData.id, { ...selectionData, properties });
    } else {
      const data = formElementsFactory[selectedElement](properties);
      addElement(data);
    }

    toggleModal();
    setSelectionData(null);
  };

  return (
    <Button onClick={onAddElementClick}>
      {isEdit && selectionData !== null
        ? "Сохранить изменения"
        : "Добавить элемент"}
    </Button>
  );
};
