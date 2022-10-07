import { useState, ChangeEvent } from "react";

export const useCheckbox = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.checked),
  ] as const;
};
