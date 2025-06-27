import { StackProps } from "@mui/material/Stack";

export type LightBoxColorProps =
  | "default"
  | "success"
  | "error"
  | "warning"
  | "primary"
  | "secondary";

export type LightBoxVariants = "text" | "outlined" | "contained";
export type LightBoxColorBrightness = "auto" | "light" | "dark";

export interface LightBoxProps extends StackProps {
  /**
   * defines the color of `LightBox` component.
   * @default "default"
   */
  color?: LightBoxColorProps;
  /**
   * defines the brightness of the color.
   * `colorBrightness` can be either string or array with two elements.
   *
   * Note: if you provide `colorBrightness` in array with two elements, the first element support in light mode and the second element support in dark mode. for example: ["auto", "light"]
   * @default "auto"
   */
  colorBrightness?:
    | LightBoxColorBrightness
    | [LightBoxColorBrightness, LightBoxColorBrightness];
  /**
   * defines the variant of the `LightBox`.
   * @default "text"
   */
  variant?: LightBoxVariants;
}
