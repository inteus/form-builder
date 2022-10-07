import { useState } from "react";
import { ElementsTypes } from "../../enums";
import { Configs } from "../../maps/formElementsMap";

export const useFormElements = <T extends Configs>(initialState: T[] = []) => {
  const [elements, setElements] = useState<T[]>(initialState);

  const hasElements = elements.length > 0;

  const hasOneElement = elements.length === 1;

  const addElement = (newItem: T) => setElements([...elements, newItem]);

  const updateElement = (
    key: keyof T,
    value: number | string,
    updatedItem: T
  ) => {
    setElements(
      elements.map((item) => (item[key] === value ? updatedItem : item))
    );
  };

  const deleteElement = (key: keyof T, value: number | string) => {
    setElements(elements.filter((item) => item[key] !== value));
  };

  const getElements = () => elements;

  const getOne = (key: keyof T, value: number | string) => {
    return elements.filter((item) => item[key] === value)[0];
  };

  const hasSubmitButton = elements.some(
    (e) => e.elementType === ElementsTypes.submitButton
  );

  return {
    addElement,
    getElements,
    updateElement,
    deleteElement,
    hasElements,
    hasOneElement,
    getOne,
    hasSubmitButton,
  };
};
