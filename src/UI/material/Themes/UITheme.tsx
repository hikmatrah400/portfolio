"use client";

import * as React from "react";
import "./UITheme.css";
import {
  ThemeProvider,
  Theme,
  createTheme,
  ThemeProviderProps,
} from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import type { ThemeOptions } from "@mui/material/styles";
import {
  colorSchemes,
  typography,
  globalStyles,
  shape,
} from "./themePrimitives";
import {
  dataDisplayCustomizations,
  feedbackCustomizations,
  inputsCustomizations,
  navigationCustomizations,
  surfacesCustomizations,
  chartsCustomizations,
  dataGridCustomizations,
  treeViewCustomizations,
} from "./customizations";
import { renderSxPropsArray } from "@/UI/Functions";

const UITheme = ({
  disableCustomTheme,
  themeComponents,
  useRadialBackground = false,
  themeProviderProps,
  ...props
}: UIThemeProps) => {
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/

          cssVariables: {
            colorSchemeSelector: "data-mui-color-scheme",
            cssVarPrefix: "template",
          },
          colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
          typography,
          shape,
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...chartsCustomizations,
            ...dataGridCustomizations,
            ...treeViewCustomizations,
            ...themeComponents,
          },
        });
  }, [disableCustomTheme, themeComponents]);

  if (disableCustomTheme) {
    return <React.Fragment>{props?.children}</React.Fragment>;
  }

  return (
    <ThemeProvider
      disableTransitionOnChange
      theme={theme}
      {...themeProviderProps}
    >
      <Box
        {...props}
        sx={[
          (theme) => globalStyles(theme, useRadialBackground),
          ...renderSxPropsArray(props?.sx),
        ]}
      >
        {props?.children}
      </Box>
    </ThemeProvider>
  );
};

export interface UIThemeProps extends BoxProps {
  children: React.ReactNode;
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions["components"];
  useRadialBackground?: boolean;
  themeProviderProps?: Omit<ThemeProviderProps<Theme>, "theme">;
}

export default UITheme;
