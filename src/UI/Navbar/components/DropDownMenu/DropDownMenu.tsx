"use client";

import Menu, { MenuProps } from "@mui/material/Menu";
import { DropDownMenuStyles } from "./DropDownMenuStyles";
import { navContainerStyles } from "../Functions";
import { memo } from "react";
import { useNavbar } from "../../Navbar";
import { renderSxPropsArray } from "@/UI/Functions";

const DropDownMenu = memo(({ open, children, ...props }: DropDownMenuProps) => {
  const { containerStyles, dropDownMenuProps } = useNavbar();

  return (
    <Menu
      hideBackdrop
      open={open}
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...dropDownMenuProps}
      {...props}
      sx={[
        (theme) => DropDownMenuStyles(theme),
        (theme) => ({
          "& .MuiPaper-root": navContainerStyles(theme, true, false, true),
        }),
        (theme) => ({
          "& .MuiPaper-root":
            typeof containerStyles === "function"
              ? containerStyles(theme)
              : containerStyles,
        }),
        ...renderSxPropsArray(dropDownMenuProps?.sx),
        ...renderSxPropsArray(props?.sx),
      ]}
    >
      {children}
    </Menu>
  );
});

export interface DropDownMenuProps extends MenuProps {}

export default DropDownMenu;
