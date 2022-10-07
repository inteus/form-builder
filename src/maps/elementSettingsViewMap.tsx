import { ElementsTypes } from "../enums";
import { CheckboxSettings } from "../features/FormBuilder/components/ElementSettingsView/components/CheckboxSettings";
import { InputSettings } from "../features/FormBuilder/components/ElementSettingsView/components/InputSettings";
import { SelectSettings } from "../features/FormBuilder/components/ElementSettingsView/components/SelectSettings";
import { SubmitButtonSettings } from "../features/FormBuilder/components/ElementSettingsView/components/SubmitButtonSettings";

export const elementSettingsViewMap = {
  [ElementsTypes.checkbox]: <CheckboxSettings />,
  [ElementsTypes.input]: <InputSettings />,
  [ElementsTypes.select]: <SelectSettings />,
  [ElementsTypes.submitButton]: <SubmitButtonSettings />,
};
