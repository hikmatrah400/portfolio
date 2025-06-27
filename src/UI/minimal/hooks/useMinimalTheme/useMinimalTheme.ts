import { alpha } from "@mui/material/styles";
import { createShadowColor } from "../../theme";
import { UseMinimalThemeProps } from "./types";

const greyChennel = {
  "50": "rgb(252, 253, 253)",
  "100": "rgb(249, 250, 251)",
  "200": "rgb(244, 246, 248)",
  "300": "rgb(223, 227, 232)",
  "400": "rgb(196, 205, 213)",
  "500": "rgb(145, 158, 171)",
  "600": "rgb(99, 115, 129)",
  "700": "rgb(69, 79, 91)",
  "800": "rgb(28, 37, 46)",
  "900": "rgb(20, 26, 33)",
};

const minimalPalette: UseMinimalThemeProps["palette"] = {
  primaryMain: {
    lighter: "rgb(200, 250, 214)",
    light: "rgb(91, 228, 155)",
    main: "rgb(0, 167, 111)",
    dark: "rgb(0, 120, 103)",
    darker: "rgb(0, 75, 80)",
    contrastText: "rgb(255, 255, 255)",
  },
  primary: {
    lighter: "rgb(208, 236, 254)",
    light: "rgb(115, 186, 251)",
    main: "rgb(24, 119, 242)",
    dark: "rgb(12, 68, 174)",
    darker: "rgb(4, 33, 116)",
    contrastText: "rgb(255, 255, 255)",
  },
  secondary: {
    lighter: "rgb(239, 214, 255)",
    light: "rgb(198, 132, 255)",
    main: "rgb(142, 51, 255)",
    dark: "rgb(81, 25, 183)",
    darker: "rgb(39, 9, 122)",
    contrastText: "rgb(255, 255, 255)",
  },
  info: {
    lighter: "rgb(202, 253, 245)",
    light: "rgb(97, 243, 243)",
    main: "rgb(0, 184, 217)",
    dark: "rgb(0, 108, 156)",
    darker: "rgb(0, 55, 104)",
    contrastText: "rgb(255, 255, 255)",
  },
  success: {
    lighter: "rgb(211, 252, 210)",
    light: "rgb(119, 237, 139)",
    main: "rgb(34, 197, 94)",
    dark: "rgb(17, 141, 87)",
    darker: "rgb(6, 94, 73)",
    contrastText: "rgb(255, 255, 255)",
  },
  warning: {
    lighter: "rgb(255, 245, 204)",
    light: "rgb(255, 214, 102)",
    main: "rgb(255, 171, 0)",
    dark: "rgb(183, 110, 0)",
    darker: "rgb(122, 65, 0)",
    contrastText: "rgb(28, 37, 46)",
  },
  error: {
    lighter: "rgb(255, 233, 213)",
    light: "rgb(255, 172, 130)",
    main: "rgb(255, 86, 48)",
    dark: "rgb(183, 29, 24)",
    darker: "rgb(122, 9, 22)",
    contrastText: "rgb(255, 255, 255)",
  },
  grey: greyChennel,
  common: { black: "rgb(0, 0, 0)", white: "rgb(255, 255, 255)" },
  text: {
    primary: greyChennel[800],
    secondary: greyChennel[600],
    disabled: greyChennel[500],
  },
  background: {
    paper: "rgb(255, 255, 255)",
    default: greyChennel[100],
    neutral: greyChennel[200],
    divider: alpha(greyChennel[500], 0.2),
  },
  baseAction: {
    active: greyChennel[600],
    hover: alpha(greyChennel[500], 0.08),
    selected: alpha(greyChennel[500], 0.16),
    focus: alpha(greyChennel[500], 0.24),
    disabled: alpha(greyChennel[500], 0.8),
    disabledBackground: alpha(greyChennel[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const useMinimalTheme = (): UseMinimalThemeProps => ({
  /**
   * fontFamily
   */
  fontFamily: {
    primary: "DM Sans Variable",
    secondary: "Barlow",
  },
  /**
   * create custome shadow
   * @param colorChannel
   * @returns
   */
  createShadow: (colorChannel: string) => ({
    z1: `0 1px 2px 0 ${alpha(colorChannel, 0.16)}`,
    z4: `0 4px 8px 0 ${alpha(colorChannel, 0.16)}`,
    z8: `0 8px 16px 0 ${alpha(colorChannel, 0.16)}`,
    z12: `0 12px 24px -4px ${alpha(colorChannel, 0.16)}`,
    z16: `0 16px 32px -4px ${alpha(colorChannel, 0.16)}`,
    z20: `0 20px 40px -4px ${alpha(colorChannel, 0.16)}`,
    z24: `0 24px 48px 0 ${alpha(colorChannel, 0.16)}`,
    dialog: `-40px 40px 80px -8px ${alpha(minimalPalette.common.black, 0.24)}`,
    card: `0 0 2px 0 ${alpha(colorChannel, 0.2)}, 0 12px 24px -4px ${alpha(
      colorChannel,
      0.12
    )}`,
    dropdown: `0 0 2px 0 ${alpha(
      colorChannel,
      0.24
    )}, -20px 20px 40px -4px ${alpha(colorChannel, 0.24)}`,
  }),
  /**
   * shadows
   */
  shadows: {
    primary: createShadowColor(minimalPalette.primary.main),
    secondary: createShadowColor(minimalPalette.secondary.main),
    info: createShadowColor(minimalPalette.info.main),
    success: createShadowColor(minimalPalette.success.main),
    warning: createShadowColor(minimalPalette.warning.main),
    error: createShadowColor(minimalPalette.error.main),
  },
  /**
   * Palette
   */
  palette: minimalPalette,
  /**
   * Css variables
   */
  cssVariables: {
    cssVarPrefix: "",
    colorSchemeSelector: "data-color-scheme",
  },
});

export default useMinimalTheme;
