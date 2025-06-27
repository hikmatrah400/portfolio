import { CSSObject, SxProps, Theme } from "@mui/material/styles";
import { CardMediaProps } from "@mui/material/CardMedia";
import { CSSProperties } from "react";

export const displayFlex: (
  alignItems?: CSSProperties["alignItems"],
  justifyContent?: CSSProperties["justifyContent"],
  direction?: CSSProperties["flexDirection"]
) => CSSObject = (
  alignItems = "center",
  justifyContent = "center",
  direction = "column"
) => ({
  display: "flex",
  alignItems: alignItems,
  justifyContent: justifyContent,
  flexDirection: direction,
});

export const cardMediaMainProps = (url: CardMediaProps["image"]) => ({
  component: "img",
  loading: "lazy",
  width: "100%",
  height: "100%",
  image: url,
  alt: "Broser can't support image",
});

export const cardBoxShadow: (theme: Theme) => CSSObject = (theme) => ({
  boxShadow: "0px 8px 20px rgba(0,0,0,0.06), 0 0 1px rgb(230, 230, 230)",
  background: " #FEFEFE",

  ...theme.applyStyles("dark", {
    background: " #1A242D",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.3), 0 0 1px rgb(96, 96, 96)",
  }),
});

export const renderSxPropsArray = (sx: SxProps<Theme> = null) =>
  Array.isArray(sx) ? sx : [sx];
