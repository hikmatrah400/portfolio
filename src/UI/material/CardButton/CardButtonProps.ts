import { ButtonProps } from "@mui/material/Button";
import { DividerProps } from "@mui/material/Divider";
import { GridFieldProps } from "../Types";

export interface CardButtonProps extends ButtonProps, GridFieldProps {
  disableDivider?: boolean;
  dividerValue?: string;
  dividerProps?: DividerProps;
}

export * from "@mui/material/Button";
