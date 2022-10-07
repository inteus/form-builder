import { ElementsTypes } from "../enums";
import { Button, Checkbox, Input, Select } from "../shared/ui";

export const renderElementsMap = {
  [ElementsTypes.checkbox]: (props: {
    name: string;
    label: string;
    isRequired: boolean;
  }) => (
    <Checkbox
      name={props.name}
      textLabel={props.label}
      required={props.isRequired}
    />
  ),
  [ElementsTypes.input]: (props: {
    name: string;
    label: string;
    isRequired: boolean;
    inputType: string;
    placeholder: string;
  }) => (
    <Input
      name={props.name}
      textLabel={props.label}
      required={props.isRequired}
      type={props.inputType}
      placeholder={props.placeholder}
    />
  ),
  [ElementsTypes.select]: (props: {
    name: string;
    label: string;
    isRequired: boolean;
    options: string[];
  }) => (
    <Select
      name={props.name}
      textLabel={props.label}
      required={props.isRequired}
      options={props.options}
    />
  ),
  [ElementsTypes.submitButton]: (props: { buttonTitle: string }) => (
    <Button type="submit">{props.buttonTitle}</Button>
  ),
};
