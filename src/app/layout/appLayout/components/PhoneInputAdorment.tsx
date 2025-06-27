import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import React from "react";
import { grey } from "@mui/material/colors";

const PhoneInputAdorment = ({ phoneCode }: { phoneCode: string }) => {
  return (
    <>
      <Avatar
        sx={(theme) => ({
          width: "max-content",
          height: "max-content",
          fontSize: "0.9rem",
          cursor: "auto",
          fontWeight: "600",
          px: "0.45rem",
          py: "0.26rem",
          marginLeft: "0.45rem",
          background: "transparent",
          borderRadius: "5rem",
          color: "#000",

          ...theme.applyStyles("dark", {
            color: "#fff",
          }),
        })}
      >
        {phoneCode}
      </Avatar>

      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={(theme) => ({
          marginLeft: "0.4rem",
          marginRight: "-0.15rem",
          my: "0.8rem",
          background: "rgb(230, 230, 230)",

          ...theme.applyStyles("dark", {
            background: grey[600],
          }),
        })}
      />
    </>
  );
};

export default PhoneInputAdorment;
