import {
  info,
  danger,
  primary,
  secondary,
  success,
  warning,
} from "@/UI/colors";
import { LightBoxColorBrightness, LightBoxColorProps } from "./LightBoxProps";

type ColorProps = {
  [theme in "light-mode" | "dark-mode"]: {
    [brightNess in LightBoxColorBrightness]: {
      [key in LightBoxColorProps]: { color: string; background: string };
    };
  };
};

const gc = (background: string, color?: string) => ({
  background,
  color: color ?? "#fff",
});

const renderContainedColors = (theme: "light" | "dark") => {
  const lightMode = theme === "light";

  return {
    light: {
      default: gc(
        lightMode ? "rgb(54, 72, 85)" : "rgb(255, 255, 255)",
        lightMode ? undefined : "rgb(54, 72, 85)"
      ),
      success: gc("rgb(24, 193, 100)"),
      error: gc("rgb(255, 110, 84)"),
      warning: gc("rgb(255, 163, 24)"),
      primary: gc("rgb(0, 192, 250)"),
      secondary: gc("rgb(222, 125, 255)"),
    },
    auto: {
      default: gc(
        lightMode ? primary["D100"] : "rgb(248, 248, 248)",
        lightMode ? undefined : primary["D100"]
      ),
      success: gc(success[400]),
      error: gc(danger[300]),
      warning: gc(warning[300]),
      primary: gc(primary[300]),
      secondary: gc(secondary[300]),
    },
    dark: {
      default: gc(
        lightMode ? primary["D400"] : "rgb(209, 209, 209)",
        lightMode ? undefined : primary["D400"]
      ),
      success: gc(success[500]),
      error: gc(danger[400]),
      warning: gc(warning[400]),
      primary: gc(primary[400]),
      secondary: gc(secondary[500]),
    },
  };
};

export const containedColors: ColorProps = {
  "light-mode": renderContainedColors("light"),
  "dark-mode": renderContainedColors("dark"),
};

export const colors: ColorProps = {
  "light-mode": {
    light: {
      default: gc("rgb(250, 250, 250)", "rgb(137, 143, 153)"),
      success: gc(success[50], success[500]),
      error: gc(danger[50], danger[300]),
      warning: gc(warning[50], warning[300]),
      primary: gc(primary[50], primary[300]),
      secondary: gc(secondary[50], secondary[300]),
    },
    auto: {
      default: gc("rgb(239, 239, 239)", "rgb(102, 108, 118)"),
      success: gc(success[100], success[700]),
      error: gc(danger[100], danger[500]),
      warning: gc(warning[100], warning[500]),
      primary: gc(primary[100], primary[600]),
      secondary: gc(secondary[100], secondary[700]),
    },
    dark: {
      default: gc("rgb(228, 228, 228)", "rgb(73, 78, 86)"),
      success: gc("rgb(208, 238, 223)", success[800]),
      error: gc("rgb(247, 220, 215)", danger[600]),
      warning: gc("rgb(247, 239, 215)", warning[600]),
      primary: gc("rgb(215, 237, 247)", primary[700]),
      secondary: gc("rgb(232, 222, 254)", secondary[800]),
    },
  },
  "dark-mode": {
    light: {
      default: gc("rgb(53, 63, 74)", "rgb(242, 248, 255)"),
      success: gc("rgb(41, 73, 51)", "rgb(149, 255, 167)"),
      error: gc("rgb(73, 41, 41)", "rgb(255, 161, 161)"),
      warning: gc("rgb(77, 71, 35)", "rgb(254, 225, 135)"),
      primary: gc("rgb(27, 73, 89)", info[200]),
      secondary: gc("rgb(53, 41, 73)", "rgb(231, 153, 255)"),
    },
    auto: {
      default: gc("rgb(46, 56, 67)", "rgb(192, 199, 209)"),
      success: gc(success[900], success[200]),
      error: gc(danger[700], danger[200]),
      warning: gc(warning[700], warning[200]),
      primary: gc(info["D100"], info[300]),
      secondary: gc(secondary["D100"], secondary[200]),
    },
    dark: {
      default: gc("rgb(39, 48, 57)", "rgb(192, 192, 192)"),
      success: gc(success["D200"], success[400]),
      error: gc(danger[900], danger[300]),
      warning: gc(warning[900], warning[300]),
      primary: gc(primary["D300"], primary[300]),
      secondary: gc(secondary["D200"], secondary[300]),
    },
  },
};
