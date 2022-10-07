import { RefObject } from "react";

export const useHtmlCode = (ref: RefObject<HTMLFormElement>) => {
  return {
    getHtml: () => {
      return ref?.current?.outerHTML;
    },
  };
};
