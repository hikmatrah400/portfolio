import { LightBoxProps } from "./LightBoxProps";
import { memo } from "react";
import Stack from "@mui/material/Stack";
import { LightBoxStyles, renderLightBoxColorStyles } from "./LightBoxStyles";
import clsx from "clsx";
import { renderSxPropsArray } from "@/UI/Functions";

const lightBoxClassName = "lightBox";
const brightNessClass = "lightBoxBrightness";

const genLightBoxColorClass = (color: LightBoxProps["color"]) =>
  `${lightBoxClassName}-${color}`;
const genLightBoxVariantClass = (color: LightBoxProps["variant"]) =>
  `${lightBoxClassName}-${color}`;
const genLightBoxBrightNessClass = (color: LightBoxProps["colorBrightness"]) =>
  `${brightNessClass}-${color}`;

const LightBox = memo(
  ({
    color = "default",
    variant = "text",
    colorBrightness = "auto",
    children,
    ...props
  }: LightBoxProps) => {
    return (
      <Stack
        {...props}
        className={clsx(
          `${lightBoxClassName}-root`,
          genLightBoxColorClass(color),
          variant === "text"
            ? `${lightBoxClassName}-text`
            : variant === "contained"
            ? `${lightBoxClassName}-contained`
            : variant === "outlined"
            ? `${lightBoxClassName}-outlined`
            : "",
          colorBrightness === "light"
            ? `${brightNessClass}-light`
            : colorBrightness === "auto"
            ? `${brightNessClass}-auto`
            : colorBrightness === "dark"
            ? `${brightNessClass}-dark`
            : "",
          props?.className || ""
        )}
        sx={[
          LightBoxStyles,
          (theme) =>
            renderLightBoxColorStyles(theme, color, variant, colorBrightness),
          ...renderSxPropsArray(props?.sx),
        ]}
      >
        {children}
      </Stack>
    );
  }
);

export const lightBoxClasses = {
  default: genLightBoxColorClass("default"),
  success: genLightBoxColorClass("success"),
  error: genLightBoxColorClass("error"),
  warning: genLightBoxColorClass("warning"),
  primary: genLightBoxColorClass("primary"),
  secondary: genLightBoxColorClass("secondary"),
  lightBoxText: genLightBoxVariantClass("text"),
  lightBoxOutlined: genLightBoxVariantClass("outlined"),
  lightBoxContained: genLightBoxVariantClass("contained"),
  lightBoxLight: genLightBoxBrightNessClass("light"),
  lightBoxAuto: genLightBoxBrightNessClass("auto"),
  lightBoxDark: genLightBoxBrightNessClass("dark"),
};

export default LightBox;
