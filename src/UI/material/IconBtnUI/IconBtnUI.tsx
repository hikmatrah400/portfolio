"use client";

import IconButton from "@mui/material/IconButton";
import TooltipUI from "../TooltipUI";
import { IconBtnUIProps } from "./IconBtnUIProps";
import { renderSxPropsArray } from "@/UI/Functions";

const IconBtnUI = ({ title, icon, ...props }: IconBtnUIProps) => (
  <TooltipUI title={title}>
    <span>
      <IconButton
        {...props}
        sx={[
          () => ({
            "&.MuiIconButton-root": {
              "&:disabled svg": {
                color: "#9c9b9b",
              },
            },
          }),
          ...renderSxPropsArray(props?.sx),
        ]}
      >
        {icon}
      </IconButton>
    </span>
  </TooltipUI>
);

export default IconBtnUI;
