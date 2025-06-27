import { ButtonProps } from "@mui/material/Button";
import { ReactNode } from "react";

export interface ModalBtnProps extends ButtonProps {
  variantStyle?:
    | "btn-contained"
    | "btn-dark"
    | "btn-contained"
    | "btn-hover-outlined"
    | "dialogMode"
    | "dialogMode-outlined"
    | "dialogMode-hover-outlined";
  children?: ReactNode;
}
