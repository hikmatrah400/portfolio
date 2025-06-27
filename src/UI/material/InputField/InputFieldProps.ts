import { TextFieldProps, TextFieldVariants } from "@mui/material/TextField";
import { InputFormProps } from "../Types/InputFormProps";
import {
  GridFieldProps,
  InputFieldGroupProps,
  InputLabelProps,
} from "../Types";

type InputProps = Omit<TextFieldProps, "variant"> & InputLabelProps;

export interface InputFieldProps
  extends InputProps,
    InputFieldGroupProps,
    GridFieldProps,
    InputFormProps {
  variant?: TextFieldVariants;
}

export * from "@mui/material/TextField";
