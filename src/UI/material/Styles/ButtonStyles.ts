import { Theme, SxProps } from "@mui/material/styles";

export const buttonShadow: SxProps<Theme> = {
  boxShadow: "4px 4px 5px rgba(0,0,0,0.1)",
  "&:hover": {
    boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.1)",
  },
};
