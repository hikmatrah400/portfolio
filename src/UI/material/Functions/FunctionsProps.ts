import { InputFieldGroupProps } from "../Types";

export interface RenderInputProps {
  size?: number;
  fieldtype?: "input" | "select";
  selectOptions?: Array<string | number>;
}

export interface RenderGoupBtnWithIconProps extends InputFieldGroupProps {
  children: React.ReactNode;
}
