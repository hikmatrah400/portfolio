import { alpha, Theme, Components } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { gray, brand, inputStyleToken } from "../themePrimitives";
import CheckBoxOutlineBlankRounded from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckRounded from "@mui/icons-material/CheckRounded";
import RemoveRounded from "@mui/icons-material/RemoveRounded";
import { formLabelClasses } from "@mui/material/FormLabel";
import { grey } from "@mui/material/colors";
import { menuAndPaperStyles } from "./navigation";

const checkBoxCheckStyle = {
  height: 18.5,
  width: 19,
  borderRadius: "0.35rem",
  color: "white",
  backgroundColor: "#1C8CFD",
  borderColor: brand[500],
  boxShadow: `none`,
  padding: "0.1rem",
  "&:hover": {
    backgroundColor: brand[600],
  },
};

const fieldSetClass = ".MuiOutlinedInput-notchedOutline";

const inputPadding = {
  padding: "0.9rem 0.9rem",
};
export const inputFocusedFilledLabelStyles = {
  fontSize: "1.05rem",
  transform: "translate(14px, -10px) scale(0.75)",
};

export const inputsCustomizations: Components<Theme> = {
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        "& svg": {
          color: "#000",

          ...theme.applyStyles("dark", {
            color: "#fff",
          }),
        },
      }),
    },
  },
  MuiInputBase: {
    defaultProps: {
      style: { padding: "0" },
      sx: {
        "& .MuiInputBase-inputMultiline": {
          resize: "vertical",
          maxHeight: "10rem",
        },
      },
    },
    styleOverrides: {
      root: ({ theme }) => ({
        border: "none",

        "& .noItemSelectedElement": {
          color: "rgb(147, 147, 147)",
          fontSize: "0.85rem",
          ...theme.applyStyles("dark", {
            color: grey[500],
          }),
        },
      }),
      input: {
        "&::placeholder": {
          opacity: 0.7,
          color: gray[500],
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      input: inputPadding,
      root: ({ theme }) => ({
        ...inputStyleToken(theme),
        background: "#F0F0F0",
      }),
    },
  },
  MuiInput: {
    styleOverrides: {
      input: inputPadding,
      root: ({ theme }) => ({
        ...inputStyleToken(theme),
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        ...inputPadding,
        fontSize: "0.95rem",
        fontWeight: "600",
      },
      root: ({ theme }) => ({
        color: "rgb(55, 58, 63)",
        [`&.${outlinedInputClasses.focused} ${fieldSetClass}`]: {
          borderColor: "rgb(26, 33, 41)",
        },

        ...theme.applyStyles("dark", {
          color: "rgb(241, 241, 241)",

          [`&.${outlinedInputClasses.focused} ${fieldSetClass}`]: {
            borderColor: "rgba(242, 242, 242, 0.9)",
          },
        }),
      }),

      notchedOutline: ({ theme }) => ({
        border: "0.05rem solid",
        borderColor: "rgb(230, 230, 230)",

        "& .css-w1u3ce": {
          padding: "0 0rem",
          fontSize: "0.85rem",
          fontWeight: "600",

          "& span": {
            paddingRight: "0",
            paddingLeft: "0.26rem",
          },
        },

        ...theme.applyStyles("dark", {
          borderColor: "rgb(54, 66, 76)",
          // boxShadow: `0 0 4px rgba(255, 255, 255, 0.04)`,
        }),
      }),
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.grey[500],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[400],
        }),
      }),
    },
  },
  MuiAutocomplete: {
    defaultProps: {
      sx: {
        "& .MuiOutlinedInput-root .MuiAutocomplete-input": inputPadding,
      },
    },
    styleOverrides: {
      root: ({ theme }) => ({
        "& .MuiButtonBase-root svg": {
          fontSize: "1.25rem",
          color: "rgb(127, 130, 134)",

          ...theme.applyStyles("dark", {
            color: " #919CA5",
          }),
        },
      }),
      popper: () => ({
        borderRadius: "0.6rem",
      }),
      paper: ({ theme }) => menuAndPaperStyles(theme),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        typography: theme.typography.caption,
        fontSize: "0.85rem",
        fontWeight: "600",
        color: "rgb(147, 147, 147)",
        marginBottom: "0.4rem",
        background: "transparent",

        "&": {
          transform: "translate(14px, 14.5px) scale(1)",
        },

        [`&.${formLabelClasses.filled}`]: {
          color: "rgb(81, 85, 89)",
        },
        [`&.${formLabelClasses.focused}, &.${formLabelClasses.filled}`]:
          inputFocusedFilledLabelStyles,
        [`&.${formLabelClasses.focused}`]: {
          color: "rgb(26, 33, 41)",
        },

        ...theme.applyStyles("dark", {
          color: grey[500],

          [`&.${formLabelClasses.filled}`]: {
            color: "rgb(180, 180, 180)",
          },
          [`&.${formLabelClasses.focused}`]: {
            color: "rgb(247, 250, 253)",
          },
        }),
      }),
    },
  },

  MuiCheckbox: {
    defaultProps: {
      icon: (
        <CheckBoxOutlineBlankRounded
          sx={(theme) => ({
            color: "hsla(210, 0%, 0%, 0.0)",
            border: "1px solid",
            borderColor: alpha(gray[300], 0.8),
            backgroundColor: alpha(gray[100], 0.2),
            "&:hover": {
              borderColor: brand[300],
            },
            boxShadow: "0 0 0 1.5px hsla(0, 0.00%, 0.00%, 0.02) inset",
            height: 18.5,
            width: 19,
            borderRadius: "0.35rem",
            ...theme.applyStyles("dark", {
              borderColor: alpha(gray[300], 0.2),
              backgroundColor: alpha(gray[200], 0.2),
              "&.Mui-focusVisible": {
                borderColor: brand[400],
                outline: `3px solid ${alpha(brand[500], 0.5)}`,
                outlineOffset: "2px",
              },
            }),
          })}
        />
      ),
      checkedIcon: <CheckRounded sx={checkBoxCheckStyle} />,
      indeterminateIcon: <RemoveRounded sx={checkBoxCheckStyle} />,
    },
    styleOverrides: {
      root: () => ({
        "&.Mui-focusVisible": {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: "2px",
          borderColor: brand[400],
        },
      }),
    },
  },
};
