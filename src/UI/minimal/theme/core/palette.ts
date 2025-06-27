/**
 * Keys for the palette colors
 */
export type PaletteColorKey =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

/**
 * Extend for the palette values
 */
export type PaletteColorExtend =
  | "lighter"
  | "light"
  | "main"
  | "dark"
  | "darker"
  | "contrastText";

/**
 * palette Text
 */
export type PaletteText = "primary" | "secondary" | "disabled";

/**
 * palette Background
 */
export type PaletteBackground = "paper" | "default" | "neutral" | "divider";

/**
 * palette baseAction
 */
export type PaletteBaseAction = {
  active: string;
  hover: string;
  selected: string;
  focus: string;
  disabled: string;
  disabledBackground: string;
  hoverOpacity: number;
  disabledOpacity: number;
};

/**
 * GreyChennel for the palette grey colors
 */
export type PaletteGreyChennel =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

/**
 * Palette create shadows function
 */
export type PaletteCreateShadows =
  | "z1"
  | "z4"
  | "z8"
  | "z12"
  | "z16"
  | "z20"
  | "z24"
  | "card"
  | "dialog"
  | "dropdown";
