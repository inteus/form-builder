import { useState, ChangeEvent } from "react";

export const useInput = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);

  const setValueAction = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const clearValue = () => setValue("");

  return [value, setValueAction, clearValue] as const;
};
