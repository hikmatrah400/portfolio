import { BoxProps } from "@mui/material/Box";
import { CSSProperties, ReactNode } from "react";
import { SxProps, Theme } from "@mui/material/styles";

export type ShapeProps = {
  /**
   * Defines the animation duration of the type `shape` component.
   * @default 1
   */
  duration?: number;
  /**
   * Defines the size of the type `shape` component.
   * @default 3.6
   */
  size?: number;
  /**
   * Defines the animation timing function of the type `shape` component.
   * @default "ease"
   */
  animationTimingFunction?: CSSProperties["animationTimingFunction"];
  /**
   * Defines the color of the type `shape` component.
   * @default "rgb(84, 175, 255)"
   */
  shapeColor?: CSSProperties["color"];
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
};

export interface BodyClickCircleProps extends BoxProps {
  children: ReactNode;
  shapeProps?: ShapeProps;
}
