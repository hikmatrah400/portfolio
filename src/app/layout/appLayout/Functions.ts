"use client";

import { SxProps } from "@mui/material/styles";
import { CSSProperties } from "react";

export const displayFlex: (
  alignItems?: CSSProperties["alignItems"],
  justifyContent?: CSSProperties["justifyContent"],
  direction?: CSSProperties["flexDirection"]
) => SxProps = (
  alignItems = "center",
  justifyContent = "center",
  direction = "column"
) => ({
  display: "flex",
  alignItems: alignItems,
  justifyContent: justifyContent,
  flexDirection: direction,
});

export type getNumberValuesFromTextProps = {
  value: string;
  addChar?: string;
};

export const transformTextToNumber = ({
  value,
  addChar = ",",
}: getNumberValuesFromTextProps) => {
  const removeChar = value.replace(/[^0-9\.]/g, "");
  const removeDot = removeChar.replace(/\./g, "");
  const transformedValue = removeDot.replace(/\B(?=(\d{3})+(?!\d))/g, addChar);

  return transformedValue;
};
