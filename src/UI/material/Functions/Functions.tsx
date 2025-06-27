import * as React from "react";
import { RenderGoupBtnWithIconProps } from "./FunctionsProps";
import InputGroup from "../InputGroup";
import GroupBtn from "../GroupBtn";
import SearchIcon from "@mui/icons-material/Search";

export const RenderGoupBtnWithIcon = ({
  inputGroupProps,
  children,
  inputGroup,
  groupBtnProps,
}: RenderGoupBtnWithIconProps) => (
  <InputGroup {...inputGroupProps}>
    {children}

    {typeof inputGroup === "boolean" ? (
      <GroupBtn type="submit" icon={<SearchIcon />} {...groupBtnProps} />
    ) : (
      inputGroup
    )}
  </InputGroup>
);
