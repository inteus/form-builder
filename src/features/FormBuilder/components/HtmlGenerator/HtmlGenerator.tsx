import { useState } from "react";
import { useFormBuilderContext } from "../../../../shared/providers";
import "./HtmlGenerator.css";

export const HtmlGenerator = function HtmlGenerator() {
  const { getHtml, hasElements, isEdit } = useFormBuilderContext();
  const [html, setHtml] = useState<string | undefined>(undefined);

  const onGetHtmlCodeClick = () => {
    setHtml(getHtml());
  };

  return (
    <div className="html-generator--container">
      <div>
        <button onClick={onGetHtmlCodeClick} disabled={!hasElements || isEdit}>
          Сгенерировать html-код
        </button>
      </div>
      <textarea defaultValue={html} />
    </div>
  );
};
