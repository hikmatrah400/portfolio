import { createSvgIcon } from "@mui/material";
import React from "react";

const NetworkDownSvg = createSvgIcon(
  <>
    <path
      fill="currentColor"
      d="M5 6.25a.75.75 0 0 0-.488 1.32l7 6c.28.24.695.24.976 0l7-6A.75.75 0 0 0 19 6.25z"
      opacity="0.4"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.43 10.512a.75.75 0 0 1 1.058-.081L12 16.012l6.512-5.581a.75.75 0 1 1 .976 1.139l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.058"
      clipRule="evenodd"
    ></path>
  </>,
  "NetworkDown"
);

export default NetworkDownSvg;
