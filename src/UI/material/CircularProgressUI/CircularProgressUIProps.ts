import * as React from "react";
import { CircularProgressProps } from "@mui/material/CircularProgress";

export interface CircularProgressUIProps extends CircularProgressProps {
  /**
   * gradientID use for each gradient id.
   * Note: the `gradientID` must be unique.
   */
  gradientID?: string;
  /**
   * if it's true a gradient will be applied to the `CircularProgress` component.
   */
  useGradient?: boolean;
  /**
   * Props forwarded to the `svg` linearGradient element. By default, the avaible props are based on the `linearGradient` element.
   */
  gradientSvgProps?: React.SVGProps<SVGLinearGradientElement>;
  /**
   * colors use to defines linear progress colors.
   */
  colors?: string[];
}

export * from "@mui/material/CircularProgress";
