"use client";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { TooltipUIProps } from "./TooltipUIProps";
import { memo } from "react";

const TooltipUI = styled(
  memo(({ className, ...props }: TooltipUIProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))
)(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#363d48",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: "0.75rem",
    padding: "0.3rem 0.8rem 0.4rem",
    borderRadius: "5rem",
    backgroundColor: "#363d48",
  },
}));

export default TooltipUI;
