import { MenuProps } from "@mui/material/Menu";
import { BasePlacement, VariationPlacement } from "@popperjs/core";
import { CSSObject } from "@emotion/react";

export interface MenuUIProps extends MenuProps {
  /**
   * if it's true the arrow will not be rendered.
   */
  disableArrow?: boolean;
  /**
   * defines the placement of arrow.
   */
  arrowPlacement?: BasePlacement | VariationPlacement;
  arrowStyles?: {
    light?: CSSObject;
    dark?: CSSObject;
  };
}
