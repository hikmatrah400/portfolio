import { GridProps } from "@mui/material/Grid";

export interface GridFieldProps {
  gridSize?: GridProps["size"];
  /**
   * Props applied to the `<Grid>` component.
   */
  gridProps?: Omit<GridProps, "size">;
}
