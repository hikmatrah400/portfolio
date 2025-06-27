import { TypographyProps } from "@mui/material/Typography";
import { ReactNode } from "react";

export interface ModalContentProps extends TypographyProps {
  children: ReactNode;
}
