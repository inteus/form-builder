import {
  CheckboxConfig,
  ConfigModel,
} from "../../../../../../maps/formElementsMap";
import {
  useCheckboxSettings,
  useCommonSettings,
} from "../../../../../../shared/hooks";
import { useFormBuilderContext } from "../../../../../../shared/providers";
import { AddingButton } from "../AddingButton";
import { CommonSettings } from "../CommonSettings";

export const CheckboxSettings = () => {
  const { selectionData } = useFormBuilderContext();
  let data = selectionData as ConfigModel<CheckboxConfig>;

  const commonSettings = useCommonSettings(
    data?.properties?.name,
    data?.properties?.label,
    data?.properties?.isRequired
  );
  const checkboxSettings = useCheckboxSettings(commonSettings);

  return (
    <>
      <CommonSettings commonSettings={checkboxSettings} />
      <AddingButton properties={checkboxSettings.getProps()} />
    </>
  );
};
