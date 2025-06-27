import { CommonColors } from "@mui/material/styles";
import {
  PaletteBackground,
  PaletteBaseAction,
  PaletteColorExtend,
  PaletteColorKey,
  PaletteCreateShadows,
  PaletteGreyChennel,
  PaletteText,
} from "@/UI/minimal/theme";

type PaletteExtendColor = Record<PaletteColorExtend, string>;

export type UseMinimalThemeProps = {
  fontFamily: {
    primary: string;
    secondary: string;
  };
  createShadow: (colorChannel: string) => Record<PaletteCreateShadows, string>;
  shadows: Record<PaletteColorKey, string>;
  palette: {
    primaryMain: PaletteExtendColor;
    primary: PaletteExtendColor;
    secondary: PaletteExtendColor;
    info: PaletteExtendColor;
    success: PaletteExtendColor;
    warning: PaletteExtendColor;
    error: PaletteExtendColor;
    common: Pick<CommonColors, "black" | "white">;
    grey: Record<PaletteGreyChennel, string>;
    text: Record<PaletteText, string>;
    background: Record<PaletteBackground, string>;
    baseAction: PaletteBaseAction;
  };
  cssVariables: {
    cssVarPrefix: string;
    colorSchemeSelector: string;
  };
};
