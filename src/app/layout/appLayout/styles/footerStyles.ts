import { blue, grey } from "@mui/material/colors";
import { SxProps, Theme } from "@mui/material/styles";

export const footerLeftSideStyles: SxProps<Theme> = (theme) => ({
  display: "flex",
  rowGap: "1.1rem",
  flexDirection: "column",

  "& .footerHeader": {
    flexDirection: "row",
    alignItems: "center",
    gap: "0.8rem",

    "& .imgBox": {
      width: "2.5rem",
      height: "2.5rem",
      borderRadius: "50%",
      overflow: "hidden",

      "& img": {
        width: "100%",
        height: "100%",
      },
    },

    "& .footerTitle": {
      fontWeight: "600",
      fontSize: "1.2rem",
    },
  },

  "& .footerHeaderContent": {
    "& .title": {
      fontSize: "0.95rem",
      fontWeight: "600",

      "&.colorFul": {
        ...theme.applyStyles("dark", {
          background:
            "-webkit-linear-gradient(0deg, rgb(33, 198, 253), rgb(33, 120, 254))",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }),
      },
    },
  },
});

export const footerRightSideStyles: SxProps<Theme> = (theme) => ({
  alignItems: "flex-start",
  justifyContent: { xs: "space-between", lg: "flex-start" },
  gap: "0rem",

  "& .footerRightTitle": {
    fontWeight: "600",
    marginBottom: "0.5rem",
    fontSize: "1.2rem",
  },

  "& .linksContainer": {
    display: "flex",
    gap: "1.5rem",
  },
  "& a": {
    textDecoration: "none",
    color: grey[800],
    fontWeight: "400",
    fontSize: "0.9rem",
    mt: "0.3rem",

    "&:hover": {
      textDecoration: "underline",
      color: blue[700],
    },
  },

  ...theme.applyStyles("dark", {
    "& a": {
      color: grey[400],
      "&:hover": { color: blue[400] },
    },
  }),
});

export const footerCopyRightStyles: SxProps<Theme> = (theme) => ({
  justifyContent: { xs: "center", sm: "space-between" },
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  px: "0.2rem",
  gap: "1.2rem",

  "& .footerCopyRight": {
    fontWeight: "600",
    color: grey[700],
    fontSize: "0.8rem",
  },

  "& .footerLinkBtnBox": {
    flexDirection: "row",
    gap: "0.5rem",

    "& .footerLinkBtn": {
      "& a": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },

      "& svg": {
        fontSize: "1.2rem",
        color: grey[600],
      },
    },
  },

  ...theme.applyStyles("dark", {
    "& .footerCopyRight": {
      color: grey[500],
    },
    "& .footerLinkBtnBox .footerLinkBtn svg": {
      color: grey[200],
    },
  }),
});
