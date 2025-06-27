import { TypographyProps } from "@mui/material/Typography";
import { StackProps } from "@mui/material/Stack";
import { ChartsTooltipContainerProps } from "@mui/x-charts/ChartsTooltip";

export type ChartTooltipSlotProps = ChartsTooltipContainerProps["slotProps"] & {
  stackProps?: StackProps;
  titleProps?: TypographyProps;
  footerProps?: TypographyProps;
};

export interface ChartTooltipProps extends ChartsTooltipContainerProps {
  /**
   * if it's true the coln will not be renderd
   * @default false
   */
  hideColn?: boolean;
  /**
   * the props used for each slot inside
   * @default {}
   */
  slotProps?: ChartTooltipSlotProps;
}

export * from "@mui/x-charts/ChartsTooltip";
