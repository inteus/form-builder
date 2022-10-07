import { UseCommonSettings } from "../../../../../../shared/hooks/useElementsSettings";
import { Input, Checkbox } from "../../../../../../shared/ui";

export const CommonSettings = ({
  commonSettings,
}: {
  commonSettings: UseCommonSettings;
}) => {
  return (
    <>
      <Input
        textLabel="Имя"
        value={commonSettings.name}
        onChange={commonSettings.setName}
      />
      <Input
        textLabel="Название"
        value={commonSettings.label}
        onChange={commonSettings.setLabel}
      />
      <Checkbox
        textLabel="Обязательное"
        checked={commonSettings.isRequired}
        onChange={commonSettings.setIsRequired}
      />
    </>
  );
};
