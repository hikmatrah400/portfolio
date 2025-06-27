import { renderSxPropsArray } from "@/UI/Functions";
import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";

const ItemCaption = ({ children, ...props }: ItemCaptionProps) => {
  return (
    <Typography
      {...props}
      sx={[
        (theme) => ({
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          display: "block",
          fontWeight: "600",
          color: "rgb(158, 164, 174)",
          fontSize: "0.75rem",

          ...theme.applyStyles("dark", {
            color: "rgb(118, 122, 129)",
          }),
        }),
        ...renderSxPropsArray(props?.sx)
      ]}
    >
      {children}
    </Typography>
  );
};

export interface ItemCaptionProps extends TypographyProps {}
export default ItemCaption;
