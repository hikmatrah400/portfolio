import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";
import { grey } from "@mui/material/colors";
import { displayFlex } from "../Functions";

export const contactGridContainerStyles: SxProps<Theme> = (theme) => ({
  textAlign: "left",
  alignItems: "flex-start",
  justifyContent: { xs: "center", md: "space-between" },
  rowGap: "2rem",

  "& .cardUiGrid-root": {
    borderRadius: "1.2rem",
  },

  "& .leftContainer": {
    ...displayFlex("center", "flex-start"),
    border: "none",
    gap: "0.5rem",

    "& .imgContainer": {
      height: "15rem",
      borderRadius: "50%",
      overflow: "hidden",

      "& img": {
        width: "100%",
        height: "100%",
      },
    },

    "& .title": {
      fontSize: "1rem",
      fontWeight: "600",
    },
    "& .content": {
      fontSize: "0.9rem",
      fontWeight: "600",
      color: grey[600],
      mt: "0.5rem",

      ...theme.applyStyles("dark", {
        color: grey[500],
      }),
    },

    "& .leftGifBox": {
      width: "18rem",
      height: "15rem",

      "& img": {
        width: "100%",
        height: "100%",
      },
    },
  },

  "& .rightContainer": {
    padding: "1.8rem 1.6rem",
    ...displayFlex(),
    border: "none",

    "& .checkBoxControl": {
      "& span": {
        color: grey[600],
        fontWeight: "600",
        ...theme.applyStyles("dark", {
          color: grey[400],
        }),
      },
    },

    "& .contactActionsBox": {
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-end",
      columnGap: { xs: "1.5rem", md: "1rem" },

      "& .btnOutlined": {
        border: "1px solid rgba(0, 0, 0, 0.1)",
        ...theme.applyStyles("dark", {
          border: "1px solid rgba(255, 255, 255, 0.32)",
        }),
      },
    },
  },
});
