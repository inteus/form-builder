import { PropsWithChildren } from "react";

interface LabelProps {
  textLabel?: string;
  rowView?: boolean;
}

export const Label = ({
  children,
  textLabel = "",
  rowView = false,
}: PropsWithChildren<LabelProps>) => {
  return (
    <label
      style={{
        display: "flex",
        flexDirection: rowView ? "row" : "column",
      }}
    >
      <span style={{ marginBottom: 4 }}>{textLabel}</span>
      {children}
    </label>
  );
};
