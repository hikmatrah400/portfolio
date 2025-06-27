import { createSvgIcon } from "@mui/material";
import React from "react";

const NetworkupSvg = createSvgIcon(
  <>
    <path
      fill="currentColor"
      d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z"
      opacity="0.4"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057"
      clipRule="evenodd"
    ></path>
  </>,
  "Networkup"
);

export default NetworkupSvg;
