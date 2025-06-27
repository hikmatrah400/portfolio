import Box from "@mui/material/Box";
import { memo } from "react";
import { InputGroupProps } from "./InputGroupProps";
import { renderSxPropsArray } from "@/UI/Functions";

const InputGroup = memo(({ children, ...props }: InputGroupProps) => {
  return (
    <>
      <Box
        {...props}
        sx={[
          () => ({
            position: "relative",
            display: "flex",
            alignItems: "stretch",
            width: "100%",

            "&>.inputField-root .MuiInputBase-root, &>.inputSelect-root": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          }),
          ...renderSxPropsArray(props?.sx),
        ]}
      >
        {children}
      </Box>
    </>
  );
});

export default InputGroup;
