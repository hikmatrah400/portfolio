import { ReactNode } from "react";
import { IconButtonProps } from "@mui/material/IconButton";
import { BoxProps } from "@mui/material/Box";
import { DialogProps, DialogSlotsAndSlotProps } from "@mui/material/Dialog";
import { BackdropProps } from "@mui/material/Backdrop";
import { CircularProgressUIProps } from "../material/CircularProgressUI";
import { LinearProgressUIProps } from "../material/LinearProgressUI";

export type themeProps = "light" | "dark" | "system";
export type dialogModeProps =
  | "simple"
  | "success"
  | "error"
  | "info"
  | "warning";
export type transitionModeProps = "Grow" | "Zoom" | "Fade";
export type directionProps = "top" | "bottom" | "center";

export type transformStringProps = `${number} ${number} ${number}`;
export type transformOriginProps =
  | "bottom top"
  | "top bottom"
  | transformStringProps;

type ModalDialogOmit = Omit<DialogProps, "open" | "onClose">;

export type ModalDialogLoaderProps = {
  loading?: boolean;
  useLinearProgress?: boolean;
  linearProgressProps?: LinearProgressUIProps;
  circularProgressProps?: CircularProgressUIProps;
};

export type ModalDialogSlotProps = DialogSlotsAndSlotProps["slotProps"] & {
  /**
   * Props forwarded to the header `Box` component. By default, the avaible props are based on the `Box` component.
   */
  headerProps?: BoxProps;
  /**
   * Props forwarded to the dialog container `Box` component. By default, the avaible props are based on the `Box` component.
   */
  dialogContainerProps?: BoxProps;
  closeBtnProps?: IconButtonProps;
  loadingBackdropProps?: BackdropProps;
};

export interface ModalDialogProps
  extends ModalDialogOmit,
    ModalDialogLoaderProps {
  open: boolean;
  onClose: () => void;
  /**
   * defines the title at the top of Dialog.
   * @default "simple"
   */
  dialogTitle?: string;
  theme?: themeProps;
  /**
   * defines the dialog Mode.
   * @default "simple"
   */
  dialogMode?: dialogModeProps;
  /**
   * defines the transition Mode of the dialog.
   * @default "Fade"
   */
  transitionMode?: transitionModeProps;
  /**
   * you can define the transform origin or use custome origin like `50% 100% 70%`.
   */
  transformOrigin?: transformOriginProps;
  /**
   * defines the direction of the dialog.
   * @default "center"
   */
  direction?: directionProps;
  timeout?: number;
  closeTimout?: number;
  children: ReactNode;

  slotProps?: ModalDialogSlotProps;
}
