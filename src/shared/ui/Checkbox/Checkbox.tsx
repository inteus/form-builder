import { InputHTMLAttributes } from "react";
import { Label } from "../Label";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  textLabel?: string;
}

export const Checkbox = ({ textLabel, ...props }: CheckboxProps) => {
  return (
    <Label textLabel={textLabel} rowView>
      <input type="checkbox" {...props} />
    </Label>
  );
};
