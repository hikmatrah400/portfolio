import { LinearProgressProps } from "@mui/material/LinearProgress";
import { SxProps, Theme } from "@mui/material/styles";

export interface LinearProgressUIProps extends LinearProgressProps {
  colorPrimaryStyle?: SxProps<Theme>;
  barStyle?: SxProps<Theme>;
}

