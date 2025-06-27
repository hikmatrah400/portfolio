import { ReactNode } from "react";
import { FormLabelUIProps } from "../FormLabelUI";

export interface InputLabelProps {
  /**
   * the label will only visible at the top of `inputField` component without animation
   */
  inputLabel?: ReactNode;
  /**
   * Props applied to the `<label>` element.
   */
  inputLabelProps?: FormLabelUIProps;
  /**
   * If it's true the inputLabel will be disabled.
   * @default false
   */
  disableInputLabel?: boolean;
}
