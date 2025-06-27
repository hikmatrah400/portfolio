import { BoxProps } from "@mui/material/Box";
import { ReactNode } from "react";

export interface ModalBodyProps extends BoxProps {
  children: ReactNode;
}
