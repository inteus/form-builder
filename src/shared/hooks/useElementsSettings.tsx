import { ChangeEvent, useState } from "react";
import {
  CommonConfig,
  InputConfig,
  SelectConfig,
} from "../../maps/formElementsMap";
import { useCheckbox } from "./useCheckbox";
import { useInput } from "./useInput";
import { useSimpleOptions } from "./useSimpleOptions";

export type UseCommonSettings = ReturnType<typeof useCommonSettings>;

export type UseInputSettings = ReturnType<typeof useInputSettings>;

export type UseSelectSettings = ReturnType<typeof useSelectSettings>;

export const useCommonSettings = (
  initialName: string = `form-element-${Date.now()}`,
  initialLabel: string = "",
  initialIsRequired: boolean = false
) => {
  const [name, setName] = useInput(initialName);
  const [label, setLabel] = useInput(initialLabel);
  const [isRequired, setIsRequired] = useCheckbox(initialIsRequired);

  return {
    name,
    setName,
    label,
    setLabel,
    isRequired,
    setIsRequired,
    getProps: (): CommonConfig => ({ name, label, isRequired }),
  };
};

export const useCheckboxSettings = (useCommonSettings: UseCommonSettings) => {
  return useCommonSettings;
};

export const useInputSettings = (
  useCommonSettings: UseCommonSettings,
  initialType: string = "text",
  initialPlaceholder: string = ""
) => {
  const [type, setType] = useState(initialType);
  const [placeholder, setPlaceholder] = useInput(initialPlaceholder);

  return {
    ...useCommonSettings,
    type,
    setType: (e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value),
    placeholder,
    setPlaceholder,
    getProps: (): InputConfig => ({
      ...useCommonSettings.getProps(),
      inputType: type,
      placeholder,
    }),
  };
};

export const useSelectSettings = (
  useCommonSettings: UseCommonSettings,
  initialOptions: string[] = []
) => {
  const { options, addOption, removeOption } = useSimpleOptions(initialOptions);
  const [addingOption, setAddingOption, clearAddingValue] = useInput();

  return {
    ...useCommonSettings,
    addingOption,
    setAddingOption,
    clearAddingValue,
    options,
    addOption,
    removeOption,
    onAddOptionClick: () => {
      addOption(addingOption);
      clearAddingValue();
    },
    onRemoveOptionClick: (o: string) => () => removeOption(o),
    getProps: (): SelectConfig => ({
      ...useCommonSettings.getProps(),
      options,
    }),
  };
};
