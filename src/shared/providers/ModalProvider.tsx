import { createContext, PropsWithChildren, useContext } from "react";
import { ElementSettingsView } from "../../features/FormBuilder/components/ElementSettingsView";
import { useModal } from "../hooks";
import { Modal } from "../ui";
import { useFormBuilderContext } from "./FormBuilderProvider";

interface ModalContext {
  toggleModal: () => void;
}

const ModalCtx = createContext(null as unknown as ModalContext);

export const useModalContext = () => useContext(ModalCtx);

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const { setSelectedElement } = useFormBuilderContext();
  const { display, toggleModal } = useModal();

  const onModalClose = () => {
    toggleModal();
    setSelectedElement(null);
  };

  const ctx = {
    toggleModal,
  };

  return (
    <ModalCtx.Provider value={ctx}>
      {children}
      <Modal display={display} onClose={onModalClose}>
        <ElementSettingsView />
      </Modal>
    </ModalCtx.Provider>
  );
};
