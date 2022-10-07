import {
  ConfigModel,
  InputConfig,
} from "../../../../../../maps/formElementsMap";
import {
  useCommonSettings,
  useInputSettings,
} from "../../../../../../shared/hooks";
import { useFormBuilderContext } from "../../../../../../shared/providers";
import { Input, Select } from "../../../../../../shared/ui";
import { AddingButton } from "../AddingButton";
import { CommonSettings } from "../CommonSettings";

export const InputSettings = () => {
  const { selectionData } = useFormBuilderContext();
  let data = selectionData as ConfigModel<InputConfig>;

  const commonSettings = useCommonSettings(
    data?.properties?.name,
    data?.properties?.label,
    data?.properties?.isRequired
  );
  const inputSettings = useInputSettings(
    commonSettings,
    data?.properties?.inputType,
    data?.properties?.placeholder
  );

  return (
    <>
      <CommonSettings commonSettings={commonSettings} />
      <Input
        textLabel="Плейсхолдер"
        value={inputSettings.placeholder}
        onChange={inputSettings.setPlaceholder}
      />
      <Select
        textLabel="Выберите тип"
        onChange={inputSettings.setType}
        defaultValue="text"
        options={["text", "email", "phone", "number"]}
      />
      <AddingButton properties={inputSettings.getProps()} />
    </>
  );
};
