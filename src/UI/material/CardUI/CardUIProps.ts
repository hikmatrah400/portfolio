import { TypographyProps } from "@mui/material/Typography";
import { LinearProgressUIProps } from "../LinearProgressUI/LinearProgressUIProps";
import { CircularProgressUIProps } from "../CircularProgressUI";
import { BackdropProps } from "@mui/material/Backdrop";
import React, { ReactNode } from "react";
import { CreateSlotsAndSlotProps } from "@mui/material";
import { GridProps } from "@mui/material/Grid";

export interface CardUISlots {
  /**
   * The component that renders the `headerTitle` slot.
   * @default Typography
   */
  headerTitle: React.ElementType;
  /**
   * The component that renders the `backdrop` slot.
   * @default Backdrop
   */
  backdrop: React.ElementType;
  /**
   * The component that renders the `linearProgress` slot.
   * @default LinearProgressUI
   */
  linearProgress: React.ReactNode;
  /**
   * The component that renders the `circularProgress` slot.
   * @default CircularProgressUI
   */
  circularProgress: React.ReactNode;
}

export type CardUISlotProps = {
  /**
   * Props forwarded to the headerTitle `Typography` component. By default, the avaible props are based on the `Typography` component.
   */
  headerTitle: TypographyProps;
  /**
   * Props forwarded to the loading `Backdrop` component. By default, the avaible props are based on the `Backdrop` component.
   */
  backdrop: BackdropProps;
  /**
   * Props forwarded to the loading `LinearProgressUI` component. By default, the avaible props are based on the `LinearProgressUI` component.
   */
  linearProgress: LinearProgressUIProps;
  /**
   * Props forwarded to the loading `CircularProgressUI` component. By default, the avaible props are based on the `CircularProgressUI` component.
   */
  circularProgress: CircularProgressUIProps;
};

export type CardUISlotsAndSlotProps = CreateSlotsAndSlotProps<
  CardUISlots,
  CardUISlotProps
>;

export interface CardUIProps extends GridProps, CardUISlotsAndSlotProps {
  /**
   * defines the title at the top of card.
   */
  headerTitle?: string;
  /**
   * If true, a loading overlay is displayed.
   */
  loading?: boolean;
  /**
   * If true, a linear progress at the top will displayed if loading prop is `true`.
   */
  useLinearProgress?: boolean;
  children?: ReactNode;
}

export * from "@mui/material/Card";
