import { ElementsTypes } from "../../../../../../enums";
import {
  useFormBuilderContext,
  useModalContext,
} from "../../../../../../shared/providers";
import { Button } from "../../../../../../shared/ui";

export const EditButtons = ({
  id,
  type,
}: {
  id: number;
  type: ElementsTypes;
}) => {
  const {
    isEdit,
    deleteElement,
    setIsEdit,
    hasOneElement,
    setSelectedElement,
    setSelectionData,
    getOne,
  } = useFormBuilderContext();
  const { toggleModal } = useModalContext();

  const onEditElementClick = () => {
    const editingElement = getOne("id", id);
    setSelectedElement(type);
    setSelectionData(editingElement);
    toggleModal();
  };

  const onDeleteElementClick = () => {
    deleteElement("id", id);
    setSelectedElement(null);
    if (hasOneElement) setIsEdit();
  };

  return (
    <>
      {isEdit && (
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div>
            <Button
              style={{ margin: "0 4px" }}
              type="button"
              onClick={onEditElementClick}
            >
              ✏️
            </Button>
          </div>
          <div>
            <Button type="button" onClick={onDeleteElementClick}>
              &#10060;
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
