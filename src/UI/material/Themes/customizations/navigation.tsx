import { Theme, alpha, Components, CSSObject } from "@mui/material/styles";
import { buttonBaseClasses } from "@mui/material/ButtonBase";
import { menuItemClasses } from "@mui/material/MenuItem";
import { gray, brand } from "../themePrimitives";
import { primary } from "@/UI/colors";

const lightBackground = "rgba(255, 255, 255, 0.9)";
const darkBackground = alpha(primary["D200"], 0.9);
export const menuAndPaperStyles: (
  theme: Theme,
  removeShadow?: boolean,
  removeFilter?: boolean
) => CSSObject = (theme, removeShadow = false, removeFilter = false) => ({
  background: `linear-gradient(220deg,rgb(224, 250, 255), ${lightBackground}, ${lightBackground},rgb(255, 243, 239))`,
  ...(removeFilter ? {} : { backdropFilter: "blur(10px)" }),

  ...(removeShadow
    ? {}
    : {
        boxShadow:
          "rgba(0, 0, 0, 0.09) -20px 20px 25px -10px, inset 0 0 1px rgba(0,0,0,0.2)",
      }),

  ...theme.applyStyles("dark", {
    background: `linear-gradient(220deg, rgb(0, 48, 71), ${darkBackground}, ${darkBackground},rgb(43, 32, 37))`,
    ...(removeShadow
      ? {}
      : {
          boxShadow:
            "hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px",
        }),
  }),
});

export const navigationCustomizations: Components<Theme> = {
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        paddingRight: "5rem",
        margin: "0.15rem 0.25rem",
        borderRadius: "0.6rem",
        fontWeight: "600",
        minHeight: "auto",

        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: "transparent",
        },

        [`&.${menuItemClasses.selected}`]: {
          [`&.${menuItemClasses.focusVisible}`]: {
            backgroundColor: " #ECEFF0",

            ...theme.applyStyles("dark", {
              backgroundColor: primary["D100"],
            }),
          },
        },
      }),
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => menuAndPaperStyles(theme, true),
    },
  },
  MuiMenu: {
    defaultProps: {
      anchorOrigin: { horizontal: "right", vertical: "bottom" },
      transformOrigin: { horizontal: "right", vertical: "top" },
    },
    styleOverrides: {
      // list: {
      //   gap: "0px",

      //   [`&.${dividerClasses.root}`]: {
      //     margin: "0 -0.5rem",
      //   },
      // },
      paper: ({ theme }) => ({
        borderRadius: "0.8rem",
        minWidth: "8rem",
        border: "none",
        overflow: "visible",

        [`& .${buttonBaseClasses.root}`]: {
          "&.Mui-selected": {
            backgroundColor: theme.palette.action.selected,
          },
        },
        "& ul": {
          paddingTop: "0.2rem",
          paddingBottom: "0.2rem",

          "& li": {
            padding: "0.5rem 2.5rem 0.5rem 1rem",
            margin: "0.1rem 0.2rem",

            "& svg": {
              // fontSize: "1.3rem",
              // marginRight: "1rem",
            },
            "&.dangerItem": {
              color: "rgb(247, 93, 42)",
            },
          },
        },
        ...menuAndPaperStyles(theme),
      }),
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "none",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
        fontWeight: 500,
        position: "relative",
        textDecoration: "none",
        width: "fit-content",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "0.0625rem",
          bottom: 0,
          left: 0,
          backgroundColor: theme.palette.text.secondary,
          opacity: 0.3,
          transition: "width 0.3s ease, opacity 0.3s ease",
        },
        "&:hover::before": {
          width: 0,
        },
        "&:focus-visible": {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: "4px",
          borderRadius: "2px",
        },
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
      }),
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&.Mui-selected": {
          color: "white",
          backgroundColor: theme.palette.grey[900],
        },
        ...theme.applyStyles("dark", {
          "&.Mui-selected": {
            color: "black",
            backgroundColor: theme.palette.grey[50],
          },
        }),
      }),
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      line: ({ theme }) => ({
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
        flex: 1,
        borderRadius: "99px",
      }),
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: "transparent",
        border: `1px solid ${gray[400]}`,
        width: 12,
        height: 12,
        borderRadius: "50%",
        "& text": {
          display: "none",
        },
        "&.Mui-active": {
          border: "none",
          color: theme.palette.primary.main,
        },
        "&.Mui-completed": {
          border: "none",
          color: theme.palette.success.main,
        },
        ...theme.applyStyles("dark", {
          border: `1px solid ${gray[700]}`,
          "&.Mui-active": {
            border: "none",
            color: theme.palette.primary.light,
          },
          "&.Mui-completed": {
            border: "none",
            color: theme.palette.success.light,
          },
        }),
        variants: [
          {
            props: { completed: true },
            style: {
              width: 12,
              height: 12,
            },
          },
        ],
      }),
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: ({ theme }) => ({
        "&.Mui-completed": {
          opacity: 0.6,
          ...theme.applyStyles("dark", { opacity: 0.5 }),
        },
      }),
    },
  },
};
