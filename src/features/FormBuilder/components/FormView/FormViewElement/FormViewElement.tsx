import { renderElementsMap } from "../../../../../maps/renderElementsMap";
import { EditButtons } from "./EditButtons";
import "./FormViewElement.css";

export const FormViewElement = ({ element }) => {
  const type = element.elementType;
  const properties = element.properties;

  const renderNode = renderElementsMap[type](properties);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: 200, display: "flex" }}>
        <div key={element.id}>{renderNode}</div>
        <EditButtons id={element.id} type={type} />
      </div>
    </div>
  );
};
