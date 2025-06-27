import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";
import { MenuUIProps } from "./MenuUIProps";
import { arrowPlaceMentStyleMethods } from "./arrowPlacementMethods";

export const MenuUIStyles: (
  theme: Theme,
  disableArrow: MenuUIProps["disableArrow"],
  arrowPlaceMent: 
) => SxProps = (theme, disableArrow) => ({
  "& .MuiPaper-root": {
    ...(disableArrow
      ? {}
      : {
          "&::before": {
            content: '""',
            display: "block",
            position: "absolute",
            ...arrowPlaceMentStyleMethods(arrowPlaceMent),

            width: "0.8rem",
            height: "0.8rem",
            background: "#fff",
            transform: "translate(-50%, -50%) rotate(45deg)",
            zIndex: -1,
            boxShadow: "inset 0 0 1px rgba(0,0,0,0.2)",
            ...arrowStyles.light,

            ...theme.applyStyles("dark", {
              background: "#000",
              ...arrowStyles.dark,
            }),
          },
        }),
  },
});
