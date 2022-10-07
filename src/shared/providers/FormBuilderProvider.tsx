import {
  createContext,
  useContext,
  PropsWithChildren,
  useRef,
  useState,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from "react";
import { ElementsTypes } from "../../enums";
import { Configs } from "../../maps/formElementsMap";
import { useFormElements, useHtmlCode, useToggle } from "../hooks";

interface FormBuilderCtx<T> {
  formRef: MutableRefObject<null>;
  getHtml: () => string | undefined;
  selectedElement: ElementsTypes | null;
  setSelectedElement: Dispatch<SetStateAction<ElementsTypes | null>>;
  getElements: () => T[];
  addElement: (newItem: T) => void;
  isEdit: boolean;
  setIsEdit: () => void;
  hasElements: boolean;
  hasOneElement: boolean;
  deleteElement: (key: keyof T, value: string | number) => void;
  selectionData: T | null;
  getOne: (key: keyof T, value: string | number) => T;
  setSelectionData: Dispatch<SetStateAction<T | null>>;
  updateElement: (key: keyof T, value: string | number, updatedItem: T) => void;
  editButtonText: string;
  hasSubmitButton: boolean;
}

const FormBuilderContext = createContext(
  null as unknown as FormBuilderCtx<Configs>
);

export const useFormBuilderContext = () => useContext(FormBuilderContext);

export const FormBuilderProvider = ({ children }: PropsWithChildren) => {
  const [selectedElement, setSelectedElement] = useState<ElementsTypes | null>(
    null
  );

  const [selectionData, setSelectionData] = useState<Configs | null>(null);

  const [isEdit, setIsEdit] = useToggle();
  const {
    getElements,
    addElement,
    hasElements,
    hasOneElement,
    deleteElement,
    getOne,
    updateElement,
    hasSubmitButton,
  } = useFormElements<Configs>();
  const formRef = useRef(null);
  const { getHtml } = useHtmlCode(formRef);

  const context = {
    formRef,
    getHtml,
    selectedElement,
    setSelectedElement,
    getElements,
    addElement,
    isEdit,
    setIsEdit,
    hasElements,
    hasOneElement,
    deleteElement,
    selectionData,
    getOne,
    setSelectionData,
    updateElement,
    hasSubmitButton,
    editButtonText: isEdit ? "Выйти" : "Редактировать",
  };
  return (
    <FormBuilderContext.Provider value={context}>
      {children}
    </FormBuilderContext.Provider>
  );
};
