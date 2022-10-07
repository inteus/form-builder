import {
  ConfigModel,
  SubmitButtonConfig,
} from "../../../../../../maps/formElementsMap";
import { useInput } from "../../../../../../shared/hooks";
import { useFormBuilderContext } from "../../../../../../shared/providers";
import { Input } from "../../../../../../shared/ui";
import { AddingButton } from "../AddingButton";

export const SubmitButtonSettings = () => {
  const { selectionData } = useFormBuilderContext();
  let data = selectionData as ConfigModel<SubmitButtonConfig>;

  const [buttonTitle, setButtonTitle] = useInput(
    data?.properties?.buttonTitle || "Отправить"
  );

  return (
    <>
      <Input textLabel="Текст" value={buttonTitle} onChange={setButtonTitle} />
      <AddingButton properties={{ buttonTitle }} />
    </>
  );
};
