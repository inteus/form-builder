import { InputHTMLAttributes } from "react";
import { Label } from "../Label";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  textLabel?: string;
}

export const Input = ({ textLabel, ...props }: InputProps) => {
  return (
    <Label textLabel={textLabel}>
      <input {...props} />
    </Label>
  );
};
