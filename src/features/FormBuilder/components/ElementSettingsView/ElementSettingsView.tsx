import { useFormBuilderContext } from "../../../../shared/providers";
import "./ElementSettingsView.css";
import { elementSettingsViewMap } from "../../../../maps/elementSettingsViewMap";

export const ElementSettingsView = () => {
  const { selectedElement } = useFormBuilderContext();

  if (!selectedElement) return null;

  return (
    <div className="element_settings-container">
      {elementSettingsViewMap[selectedElement]}
    </div>
  );
};
