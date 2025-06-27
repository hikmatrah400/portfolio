import { alpha, SxProps, Theme } from "@mui/material/styles";
import { sideBarButtonClasses } from "./SideBarButtonClasses";
import { useSideBar } from "../hooks";
import { primary } from "@/UI/colors";
import { useMinimalTheme } from "@/UI/minimal/hooks";
import { SideBarItemDef } from "..";

const activeClass = sideBarButtonClasses.active;
const selectedClass = sideBarButtonClasses.selected;
const expandedClass = sideBarButtonClasses.expanded;

// for link --------------------------------------------
export const sideBarLinkLightModeActiveStyles = {
  color: "rgb(0, 115, 231)",
  background: "rgb(245, 250, 255)",
};

export const sideBarLinkDarkModeActiveStyles = {
  color: "rgb(102, 199, 255)",
  background: "rgba(0, 86, 157, 0.06)",
};

// for button --------------------------------------------
export const sideBarButtonLightModeActiveStyles = {
  background: "rgb(244, 247, 248)",
  color: primary.D100,
};
export const sideBarButtonDarkModeActiveStyles = {
  background: "rgb(28, 36, 43)",
  color: "rgb(245, 230, 217)",
};

// for default button --------------------------------------------
const lightModeTreeButtonStyles = {
  color: "rgb(102, 112, 119)",
};
const darkModeTreeButtonStyles = {
  color: "rgb(142, 156, 169)",
};

const treeLinkSelectedStyles = (theme: Theme) => {
  const { activeElementStyles } = useSideBar();

  return {
    opacity: 1,
    ...sideBarLinkLightModeActiveStyles,
    ...theme.applyStyles("dark", {
      ...sideBarLinkDarkModeActiveStyles,
    }),

    ...(typeof activeElementStyles?.link === "function"
      ? activeElementStyles?.link(theme)
      : activeElementStyles?.link),

    [`& .${sideBarButtonClasses.icon}, & svg`]: {
      background: "transparent",
    },

    "& [data-selected], & [data-focused]": {
      background: "unset",
    },
    "& [data-focused][data-selected]": {
      background: "unset",
    },
  };
};

const treeSelectedStyles = (theme: Theme) => {
  const { activeElementStyles } = useSideBar();
  const minimalTheme = useMinimalTheme();

  return {
    opacity: 1,
    color: minimalTheme.palette.grey[800],
    background: alpha(minimalTheme.palette.grey[500], 0.08),

    ...theme.applyStyles("dark", sideBarButtonDarkModeActiveStyles),
    ...(typeof activeElementStyles?.button === "function"
      ? activeElementStyles.button(theme)
      : activeElementStyles?.button),

    [`& .${sideBarButtonClasses.icon}, & svg`]: {
      background: "transparent",
    },
    "& [data-selected], & [data-focused]": {
      background: "unset",
    },
    "& [data-focused][data-selected]": {
      background: "unset",
    },
  };
};

export const treeRootSelectedStyles = (theme: Theme) => {
  const { activeElementStyles } = useSideBar();

  return {
    [`&.${sideBarButtonClasses.active}`]:
      typeof activeElementStyles?.root === "function"
        ? activeElementStyles?.root(theme)
        : activeElementStyles?.root,
  };
};

export const sideBarTreeItemStyles: (theme: Theme) => SxProps = (theme) => {
  const minimalTheme = useMinimalTheme();

  return {
    padding: "0",

    [`& .${sideBarButtonClasses.titleContainer}`]: {
      mt: "0.6rem",
      padding: 0,
      gap: 0,
      transition: "all 0.3s ease",

      "& svg": {
        opacity: 0,
        transition: "all 0.3s ease",
      },

      "&:hover": {
        [`& .${sideBarButtonClasses.title}`]: {
          color: "#000",
          marginLeft: "0.2rem",
        },
        "& svg": {
          color: "#000",
          opacity: 1,
        },

        ...theme.applyStyles("dark", {
          [`& .${sideBarButtonClasses.title}`]: {
            color: "#fff",
          },
          "& svg": {
            color: "#fff",
          },
        }),
      },
    },
    [`& .${sideBarButtonClasses.title}`]: {
      fontWeight: "600",
      fontSize: "0.72rem",
      textTransform: "uppercase",
      color: "rgb(126, 131, 138)",
      transition: "all 0.3s ease",
    },

    // active or selected styles start ---------------------------------
    [`& .${selectedClass}, & .${selectedClass} svg`]: treeSelectedStyles(theme),
    [`& .${expandedClass}, & .${expandedClass} svg`]: treeSelectedStyles(theme),
    [`& .${activeClass}, & .${activeClass} svg`]: treeLinkSelectedStyles(theme),
    // active or selected styles end ---------------------------------
  };
};

export const buttonCollapseGroupStyles: SxProps<Theme> = (theme) => {
  const minimalTheme = useMinimalTheme();

  return {
    [`& .${sideBarButtonClasses.collapseGroup}`]: {
      display: "flex",
      flexDirection: "column",
      gap: "0.2rem",
    },

    [`& .${sideBarButtonClasses.titleCollapseGroup}`]: {
      mt: "0.4rem",
    },

    [`& .${sideBarButtonClasses.itemsCollapseGroup}`]: {
      position: "relative",
      marginLeft: "1.5rem",
      paddingTop: "0.2rem",

      "&::before": {
        top: 0,
        left: 0,
        width: "2px",
        content: "''",
        position: "absolute",
        backgroundColor: alpha(minimalTheme.palette.grey[300], 0.8),
        bottom: "calc(36px - 2px - 12px / 2)",

        ...theme.applyStyles("dark", {
          backgroundColor: primary["D300"],
        }),
      },

      [`& .${sideBarButtonClasses.root}`]: {
        paddingLeft: "0.7rem",
        position: "relative",

        [`&:last-child::before`]: {
          height: "50%",
        },

        "&::after": {
          content: '""',
          width: "0.6rem",
          height: "0.75rem",
          background: "transparent",
          borderBottom: "2px solid",
          borderLeft: "3px solid",
          borderColor: alpha(minimalTheme.palette.grey[300], 0.8),
          position: "absolute",
          left: "0rem",
          top: "0.5rem",
          borderRadius: "0 0 0 0.5rem",

          ...theme.applyStyles("dark", {
            borderColor: primary["D300"],
          }),
        },
      },

      [`& .${sideBarButtonClasses.button}`]: {
        padding: "0 0.2rem 0 0.2rem",

        [`&.${activeClass}, &.${activeClass} svg`]: treeSelectedStyles(theme),
      },
      [`& .${sideBarButtonClasses.elementContainer}`]: {
        py: "0.5rem",
      },
    },
  };
};

export const treeButtonStyles: (theme: Theme, icons: boolean) => SxProps = (
  theme,
  icons
) => {
  const minimalTheme = useMinimalTheme();

  return {
    padding: "0 0.3rem 0 0.3rem",
    margin: "0",
    width: "100%",
    height: icons ? "2.8rem" : "2.35rem",
    textAlign: "left",
    textTransform: "capitalize",
    borderRadius: "0.55rem",
    overflow: "hidden",
    color: lightModeTreeButtonStyles.color,
    position: "relative",
    alignContent: "center",
    transition: "all 0.2s ease",

    [`& .${sideBarButtonClasses.icon}, & svg`]: {
      color: lightModeTreeButtonStyles.color,
    },

    "&:hover": {
      background: minimalTheme.palette.baseAction.hover,
    },

    ...theme.applyStyles("dark", {
      color: darkModeTreeButtonStyles.color,

      [`& .${sideBarButtonClasses.icon}, & svg`]: {
        color: darkModeTreeButtonStyles.color,
      },
    }),

    "&::before": {
      content: '""',
      position: "absolute",
      borderRadius: "50%",
      width: "0.35rem",
      height: "0.35rem",
      background: "currentColor",
      left: "0.1rem",
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
  };
};

export const treeItemContentStyles: SxProps<Theme> = () => ({
  flexDirection: "row-reverse",
  margin: "0",
  borderRadius: "0",

  "&:hover": {
    background: "transparent",
  },

  "& [data-selected], & [data-focused]": {
    background: "unset",
  },
  "& [data-focused][data-selected]": {
    background: "unset",
  },
});
