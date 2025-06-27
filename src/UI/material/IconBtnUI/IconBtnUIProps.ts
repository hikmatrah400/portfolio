import { IconButtonProps } from "@mui/material/IconButton";
import { ReactNode } from "react";

export interface IconBtnUIProps extends IconButtonProps {
  title?: string;
  icon: ReactNode;
}

export * from "@mui/material/IconButton";
