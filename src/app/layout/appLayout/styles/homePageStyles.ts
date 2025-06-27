import { secondary } from "@/UI/colors";
import { grey, orange } from "@mui/material/colors";
import { Theme, SxProps } from "@mui/material/styles";

export const gridContainerStyle: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  textAlign: "center",

  "& .sectionCircle": {
    "&:first-of-type": {
      boxShadow: "inset -1px -3.5px 9px rgb(250, 116, 71)",
      left: "2rem",
      padding: "0.47rem",
      animationDelay: "1s",
    },
    "&:nth-of-type(2)": {
      boxShadow: `inset -1px -3.5px 9px ${secondary[400]}`,
      right: "2rem",
      top: "7rem",
    },
    "&:nth-of-type(3)": {
      boxShadow: `inset -1px -3.5px 9px ${orange[400]}`,
      bottom: "17rem",
      left: "10rem",
      animationDelay: "2s",
    },
    "&:nth-of-type(4)": {
      boxShadow: "inset -1px -3.5px 9px rgb(0, 179, 215)",
      bottom: "9.5rem",
      right: "15rem",
      animationDelay: "3s",
    },
  },
};

export const homeContentGridStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: { xs: "center", lg: "flex-start" },
  justifyContent: "flex-start",
  flexDirection: "column",
  fontSize: "2.5rem",
  order: { xs: 2, md: 0 },

  "& span": {
    fontSize: { xs: "2rem", md: "2.6rem" },
    fontWeight: "600",
  },
};

export const homeMainContentStyle: SxProps<Theme> = (theme) => ({
  fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
  fontWeight: "bold",
  letterSpacing: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  "& .title": {
    color: " #C8CACC",
  },

  "& .title2": {
    "& .linearTitle": {
      background: "-webkit-linear-gradient(180deg, #FFA800, rgb(31, 151, 91))",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },

  ...theme.applyStyles("dark", {
    "& .title": {
      color: "rgb(87, 94, 101)",
    },
  }),
});

export const homeContentStyle: SxProps<Theme> = (theme) => ({
  fontSize: "1.15rem",
  px: { xs: "0", lg: "15rem" },
  color: grey[800],
  fontWeight: "400",
  textShadow: "0 0 0.1px rgb(79, 78, 78)",

  ...theme.applyStyles("dark", {
    color: grey[400],
  }),
});

export const homeContactPeopleBoxStyle: SxProps<Theme> = (theme) => ({});

export const homeMainButtonsStyle: SxProps<Theme> = (theme) => ({
  mt: 2,
  flexDirection: "row",
  justifyContent: "center",
  gap: "1rem",
});

export const stockItemsBoxStyle: SxProps<Theme> = {
  marginTop: "1.8rem",
  textTransform: "uppercase",
  color: grey[500],
  rowGap: "1rem",

  "& .iconsBox": {
    justifyContent: "center",
    alignItems: "center",
    columnGap: "0.4rem",
    flexDirection: "row",
  },
};

export const homeImageStyle: SxProps<Theme> = {
  width: { xs: "30rem", sm: "30rem", md: "30rem" },
  height: { xs: "14rem", sm: "18rem", md: "17rem", lg: "19rem" },
  overflow: "hidden",
  borderRadius: "1.6rem",

  "& img": {
    width: "100%",
    height: "100%",
  },
};
