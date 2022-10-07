import { useState } from "react";

export const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue((val) => !val);

  return [value, toggleValue] as const;
};
