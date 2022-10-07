import { useState } from "react";

export const useSimpleOptions = <T extends string>(
  initialOptions: T[] = []
) => {
  const [options, setOptions] = useState(initialOptions);

  const addOption = (o: T) => {
    if (o.trim().length === 0) return;
    if (options.includes(o)) return;

    setOptions((prevState) => [...prevState, o]);
  };

  const removeOption = (o: T) => {
    const newOptions = options.filter((option) => option !== o);
    setOptions(newOptions);
  };

  return {
    options,
    addOption,
    removeOption,
  };
};
