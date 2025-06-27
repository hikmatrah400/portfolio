import { GridFieldProps, InputLabelProps } from "../Types";

type DatePickerFieldComponentProps<T> = InputLabelProps & GridFieldProps & T;

export type DatePickerFieldProps<ComponentProps> = {
  id?: string;
  component?: React.ElementType;
  useRangePicker: boolean;
} & DatePickerFieldComponentProps<ComponentProps>;

export * from "@mui/x-date-pickers";
