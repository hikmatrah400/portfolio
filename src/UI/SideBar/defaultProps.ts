"use client";

import { createContext } from "react";
import { SideBarProps, SideBarSlotProps } from "./SideBarProps";

export const defaultSideBarSlotProps = {
  root: undefined,
  endElement: undefined,
  button: undefined,
  richTreeView: undefined,
  startElement: undefined,
  title: undefined,
  swipeableDrawer: undefined,
  toggleMenu: undefined,
};

export type SideBarContextProps = {
  SideBarButtonProps: SideBarSlotProps["button"] | undefined;
  SideBarTitleProps: SideBarSlotProps["title"] | undefined;
  activeElementStyles: SideBarProps["activeElementStyles"];
  openMenu: () => void;
  closeMenu: () => void;
  orientation: SideBarProps["orientation"];
};

export const SideBarContext = createContext<SideBarContextProps>({
  SideBarButtonProps: undefined,
  SideBarTitleProps: undefined,
  activeElementStyles: undefined,
  openMenu: () => undefined,
  closeMenu: () => undefined,
  orientation: "vertical",
});
