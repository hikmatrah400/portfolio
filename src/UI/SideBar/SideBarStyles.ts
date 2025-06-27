import { alpha, SxProps, Theme } from "@mui/material/styles";
import { richTreeViewClasses } from "@mui/x-tree-view/RichTreeView";
import { sideBarButtonClasses } from "./SideBarButton";
import { primary } from "../colors";
import { SideBarProps } from "./SideBarProps";

const sideBarElementsStyles: SxProps<Theme> = () => ({
  flexDirection: "row",
  alignItems: "center",
  padding: "1rem",
  paddingBottom: "0.8rem",
  background: "transparent",
  position: "sticky",
  top: 0,

  "& .imgBox": {
    width: "2.6rem",
    height: "2.6rem",
    borderRadius: "50%",
    overflow: "hidden",

    "& img": {
      width: "100%",
      height: "100%",
    },
  },
});

export const sideBarTreeViewStyles: SxProps<Theme> = (theme) => ({
  // Scroll Styling -------------------------
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "transparent",
  },
  "&:hover": {
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(0, 0, 0, 0.15)",
      ...theme.applyStyles("dark", {
        background: "rgba(255, 255, 255, 0.25)",
      }),
    },
  },
});

export const sideBarHeaderGridStyles: (
  theme: Theme,
  orientation: SideBarProps["orientation"]
) => SxProps = (theme, orientation = "vertical") => ({
  background: "rgba(255, 255, 255,0.9)",
  position: "sticky",
  boxShadow: "none",
  borderRight: "1px solid",
  borderColor: "rgb(232, 234, 238)",

  ...(orientation === "horizontal"
    ? {
        top: "0",
        zIndex: 1110,
        boxShadow: "2px 2px 20px rgba(237, 237, 237, 0.44)",
        border: "none",
      }
    : {}),

  ...theme.applyStyles("dark", {
    background: alpha(primary["D400"], 0.9),
    borderColor: "rgba(61, 71, 81, 0.3)",

    ...(orientation === "horizontal"
      ? { boxShadow: "2px 2px 20px rgba(255, 255, 255, 0.02)" }
      : {}),
  }),
});

export const sideBarContainerStyles: SxProps<Theme> = (theme) => ({
  width: "100%",
  position: "sticky",
  top: "0",
  left: "0",
  height: "100%",
  rowGap: "0.4rem",
  transition: "all 0.4s ease",
  backdropFilter: "blur(10px)",

  "& .sideBarElement": {
    ...sideBarElementsStyles(theme),
  },

  "& .sideBarTreeViewContainer": {
    padding: "0 1rem 1rem 1rem",
  },
});

export const sideBarHorizontalStyles: SxProps<Theme> = () => ({
  flexDirection: "row",
  overflow: "hidden",
  minWidth: { xs: "auto", xl: "75rem" },
  minHeight: "4.5rem",
  mx: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "1rem",
  border: "none",

  "& .sideBarElement": {
    padding: 0,
  },

  [`& .${richTreeViewClasses.root}`]: {
    width: "100%",
    display: "flex",
    padding: 0,
    margin: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "auto",
    border: "none",
    rowGap: "5rem",
  },

  [`& .${sideBarButtonClasses.titleContainer}`]: {
    display: "none",
  },

  [`& .${sideBarButtonClasses.button}`]: {
    textAlign: "center",
  },

  [`& .${sideBarButtonClasses.elementContainer}`]: {
    padding: 0,
  },

  [`& .${sideBarButtonClasses.itemContent}`]: {
    padding: "0.5rem 0.9rem",
  },

  [`& .${sideBarButtonClasses.element}`]: {
    fontSize: "0.84rem",
    margin: 0,
  },

  "& .sideHeaderElement": {
    width: "auto",
    justifyContent: "flex-start",
    padding: "0 2rem 0 0",
  },
});

export const sideBarSwipeableDrawerStyles: SxProps<Theme> = (theme) => ({
  "& .MuiPaper-root": {
    position: "relative",
    width: "18.75rem",
    height: "100vh",

    "& .sideBarElement": {
      ...sideBarElementsStyles(theme),
      px: "1.8rem",
    },

    "& .sideBarTreeViewContainer": {
      px: "1rem",
      overflow: "auto",
    },
  },
});
