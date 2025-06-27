import { SxProps, Theme } from "@mui/material";
import { LightBoxProps } from "./LightBoxProps";
import { colors, containedColors } from "./colors";

type LightBoxStyleProps = (
  theme: Theme,
  color: LightBoxProps["color"],
  variant: LightBoxProps["variant"],
  colorBrightness: LightBoxProps["colorBrightness"]
) => SxProps;

export const renderLightBoxColorStyles: LightBoxStyleProps = (
  theme,
  color = "default",
  variant,
  colorBrightness = "auto"
) => {
  const lightModeBrightNess =
    typeof colorBrightness === "string" ? colorBrightness : colorBrightness[0];
  const darkModeBrightNess =
    typeof colorBrightness === "string" ? colorBrightness : colorBrightness[1];

  return {
    ...(variant === "text"
      ? {
          color: colors["light-mode"][lightModeBrightNess][color]?.color,
        }
      : variant === "outlined"
      ? colors["light-mode"][lightModeBrightNess][color]
      : variant === "contained"
      ? containedColors["light-mode"][lightModeBrightNess][color]
      : {}),

    ...theme.applyStyles(
      "dark",
      variant === "text"
        ? {
            color: colors["dark-mode"][darkModeBrightNess][color]?.color,
          }
        : variant === "outlined"
        ? colors["dark-mode"][darkModeBrightNess][color]
        : variant === "contained"
        ? containedColors["dark-mode"][darkModeBrightNess][color]
        : {}
    ),
  };
};

export const LightBoxStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  px: "0.45rem",
  fontSize: "0.85rem",
  fontWeight: "600",
  borderRadius: "0.45rem",
  transition: "all 0.2s ease",
  borderColor: "currentcolor",
};
