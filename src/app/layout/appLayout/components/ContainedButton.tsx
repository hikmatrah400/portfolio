import { primary } from "@/UI/colors";
import { renderSxPropsArray } from "@/UI/Functions";
import Button, { ButtonProps } from "@mui/material/Button";
import { blue, grey } from "@mui/material/colors";
import { alpha, SxProps, Theme } from "@mui/material/styles";

const ContainedButton = ({
  children,
  buttonStyle = "btnContained",
  ...props
}: ContainedButtonProps) => {
  return (
    <>
      <Button
        {...props}
        className={`${buttonStyle} ${props?.className || ""}`}
        sx={[
          (theme) => containedButtonStyles(theme),
          ...renderSxPropsArray(props?.sx),
        ]}
      >
        {children}
      </Button>
    </>
  );
};

export const containedButtonStyles: (theme: Theme) => SxProps = (theme) => ({
  padding: "0.5rem 1rem",
  margin: "0",
  textTransform: "capitalize",
  fontSize: "0.85rem",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  letterSpacing: "0",
  background: primary["D300"],
  boxShadow: `inset 0 0 0 1px ${primary["D300"]}`,
  borderRadius: "0.65rem",

  "& a": {
    color: "red",
    fontWeight: "700",
  },

  "& svg": {
    marginLeft: "1rem",
    color: "#fff",
    marginRight: "-1rem",
  },
  "&:disabled": {
    opacity: 0.6,
  },

  "&.btnContained": {
    background: primary["D200"],
    color: "#fff",

    "& a": {
      color: "#fff",
      fontWeight: "600",
    },

    "&:hover": {
      background: primary["D100"],
      boxShadow: `2px 2px 10px ${alpha(primary["D100"], 0.2)}`,
    },

    ...theme.applyStyles("dark", {
      background: "rgb(254, 254, 254)",
      color: primary["D300"],
      boxShadow: "inset 0 0 0 1px #fff",

      "&:hover": {
        background: "rgb(255, 255, 255)",
        boxShadow: `2px 2px 10px ${alpha("#fff", 0.2)}`,
      },

      "& a": {
        color: primary["D300"],
      },
      "& svg": {
        color: primary["D300"],
      },
    }),
  },

  "&.btnOutlined": {
    background: "#fff",
    color: "#000",
    boxShadow: "none",
    border: `1px solid ${primary["D200"]}`,
    textAlign: "center",

    "& svg": {
      color: primary["D200"],
    },

    "& a": {
      color: "#000",
    },

    "&:hover": {
      boxShadow: "none",
      background: "rgb(246, 247, 248)",
      borderColor: "rgb(209, 209, 209)",
    },

    ...theme.applyStyles("dark", {
      color: "#fff",
      background: "rgb(29, 33, 38)",
      borderColor: "rgb(211, 211, 211)",

      "& a": {
        color: "#fff",
      },
      "& svg": {
        color: "#fff",
      },
      "&:hover": {
        background: "rgb(29, 33, 38)",
        borderColor: "rgba(93, 100, 105, 0.5)",
      },
    }),
  },

  "& .buttonContent": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    textTransform: "capitalize",
    padding: "0.3rem 1.1rem",
    position: "relative",
    borderRadius: "0.65rem",
    boxShadow: "none",

    "& .linkContent": {
      fontSize: "0.55rem",
      marginTop: "-0.15rem",
      color: "rgb(194, 194, 194)",

      ...theme.applyStyles("dark", {
        color: grey[600],
      }),
    },
  },
});

export interface ContainedButtonProps extends ButtonProps {
  buttonStyle?: "btnOutlined" | "btnContained";
}

export default ContainedButton;
