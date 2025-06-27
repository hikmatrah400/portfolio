import { BaseSelectProps } from "@mui/material/Select";
import { ReactNode } from "react";
import { InputFormProps } from "../Types/InputFormProps";
import { GridFieldProps, InputFieldGroupProps } from "../Types";

export interface InputSelectProps
  extends BaseSelectProps,
    GridFieldProps,
    InputFieldGroupProps,
    InputFormProps {
  children: ReactNode;
  /**
   * `noItemSelectedElement` use for no item selected
   * @default <em>Choose...</em>
   */
  noItemSelectedElement?: ReactNode;
  /**
   * if it's true the `noItemSelectedElement` is hidden
   * @default false
   */
  hideNoItemElement?: boolean;
}

export * from "@mui/material/Select";
