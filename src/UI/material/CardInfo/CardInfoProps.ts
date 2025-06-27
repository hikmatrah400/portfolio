import { ReactNode } from "react";
import { CardUIProps } from "../CardUI";

export interface CardInfoProps extends CardUIProps {
  label: string;
  value?: number | string;
  startComponent?: ReactNode;
  children?: ReactNode;
}

export * from "../CardUI";
