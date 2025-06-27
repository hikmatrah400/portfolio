import { renderSxPropsArray } from "@/UI/Functions";
import Box, { BoxProps } from "@mui/material/Box";
import { memo } from "react";

const DividerLine = memo(({ orientation, ...props }: DividerProps) => {
  return (
    <>
      <Box
        {...props}
        sx={[
          () => ({
            width: "100%",
            height: "1px",
            background: "rgba(0,0,0,0.2)",
            ...(orientation === "vertical"
              ? { transform: "rotate(90deg)" }
              : {}),
          }),
          ...renderSxPropsArray(props?.sx),
        ]}
      ></Box>
    </>
  );
});

export interface DividerProps extends BoxProps {
  orientation?: "horizontal" | "vertical";
}
export * from "@mui/material/Divider";
export { default as Divider } from "@mui/material/Divider";

export default DividerLine;
