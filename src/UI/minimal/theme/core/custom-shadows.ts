import { alpha } from "@mui/material/styles";

export const createShadowColor = (colorChannel: string): string => {
  return `0 8px 16px 0 ${alpha(colorChannel, 0.24)}`;
};
