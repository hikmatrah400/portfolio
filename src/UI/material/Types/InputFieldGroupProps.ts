import { ReactNode } from "react";
import { GroupBtnProps } from "../GroupBtn";
import { InputGroupProps } from "../InputGroup";

export interface InputFieldGroupProps {
  inputGroup?: ReactNode;
  groupBtnProps?: GroupBtnProps;
  inputGroupProps?: InputGroupProps;
}
