import { useToggle } from "./useToggle";

export const useModal = () => {
  const [display, toggleModal] = useToggle();

  return {
    display,
    toggleModal,
  };
};
