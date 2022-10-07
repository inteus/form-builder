import {
  ConfigModel,
  SelectConfig,
} from "../../../../../../maps/formElementsMap";
import {
  useCommonSettings,
  useSelectSettings,
} from "../../../../../../shared/hooks";
import { UseSelectSettings } from "../../../../../../shared/hooks/useElementsSettings";
import { useFormBuilderContext } from "../../../../../../shared/providers";
import { Button, Input } from "../../../../../../shared/ui";
import { AddingButton } from "../AddingButton";
import { CommonSettings } from "../CommonSettings";
import "./SelectSettings.css";

const SelectSettingsAddedOption = ({
  selectSettings,
}: {
  selectSettings: UseSelectSettings;
}) => {
  const { options, onRemoveOptionClick } = selectSettings;

  return (
    <>
      {options.map((option) => (
        <div className="select-settings--option-item" key={option}>
          <div>
            <span>{option}</span>
            <Button onClick={onRemoveOptionClick(option)}>Удалить</Button>
          </div>
        </div>
      ))}
    </>
  );
};

export const SelectSettings = () => {
  const { selectionData } = useFormBuilderContext();
  let data = selectionData as ConfigModel<SelectConfig>;

  const commonSettings = useCommonSettings(
    data?.properties?.name,
    data?.properties?.label,
    data?.properties?.isRequired
  );

  const selectSettings = useSelectSettings(
    commonSettings,
    data?.properties?.options
  );

  return (
    <>
      <div className="select-settings--adding-options">
        <CommonSettings commonSettings={commonSettings} />
        <div className="select-settings--input">
          <Input
            textLabel="Добавьте опцию"
            value={selectSettings.addingOption}
            onChange={selectSettings.setAddingOption}
          />
          <Button onClick={selectSettings.onAddOptionClick}>+</Button>
        </div>
      </div>
      <SelectSettingsAddedOption selectSettings={selectSettings} />
      <AddingButton properties={selectSettings.getProps()} />
    </>
  );
};
