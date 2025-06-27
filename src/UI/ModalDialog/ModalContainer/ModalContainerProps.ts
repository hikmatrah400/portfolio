import { JSX, ReactNode } from "react";
import { ModalBtnProps } from "../Components/ModalBtn";
import { ModalDialogProps } from "../ModalDialogProps";

export interface DialogMainProps
  extends Omit<
    ModalDialogProps,
    "dialogTitle" | "open" | "onClose" | "children"
  > {
  buttons?: ModalBtnProps[];
  modalChildren?:
    | (({ closeDialog }: { closeDialog: () => void }) => JSX.Element)
    | ReactNode;
}

export type DialogContextProps = {
  title: string;
  content: string;
  mainProps: DialogMainProps;
};

// For Show Dialog -------------------------------
type FunctionProps = (
  title: string,
  content: string,
  mainProps?: DialogMainProps
) => void;

export interface ModalProps {
  simple: FunctionProps;
  success: FunctionProps;
  error: FunctionProps;
  warning: FunctionProps;
  info: FunctionProps;
}
