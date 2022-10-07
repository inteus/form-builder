import { SelectHTMLAttributes } from "react";
import { Label } from "../Label";

interface SelectProps<T> extends SelectHTMLAttributes<HTMLSelectElement> {
  options: T[];
  textLabel?: string;
}

const renderOptions = <T extends string[]>(options: T) => {
  return options.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });
};

export const Select = <T extends string>({
  options = [],
  textLabel,
  ...props
}: SelectProps<T>) => {
  return (
    <Label textLabel={textLabel}>
      <select {...props}>{renderOptions(options)}</select>
    </Label>
  );
};
