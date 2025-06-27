import * as React from "react";
import { CreateSlotsAndSlotProps } from "@mui/material";
import { AppBarProps } from "@mui/material/AppBar";
import { ListItemButtonProps } from "@mui/material/ListItemButton";
import { IconButtonProps } from "@mui/material/IconButton";
import { SwipeableDrawerProps } from "@mui/material/SwipeableDrawer";
import { CollapseProps } from "@mui/material/Collapse";
import { SxProps, Theme } from "@mui/material/styles";
import { StackProps } from "@mui/material/Stack";
import { BoxProps } from "@mui/material/Box";
import { ContainerProps } from "@mui/material/Container";
import { RichTreeViewProps } from "@mui/x-tree-view/RichTreeView";
import { SideBarButtonContextProps } from "./SideBarButton";
import { NavLinkProps } from "../material/NavLink";
import { TreeItemIconProps } from "@mui/x-tree-view/TreeItemIcon";
import { TreeItemContentProps } from "./SideBarButton/components";

type TreeViewProps = RichTreeViewProps<{}, boolean | undefined>;

export type SideBarSlots = {
  /**
   * The component that renders the `root` slot.
   * @default AppBar
   */
  root: React.ElementType;
  /**
   * The component that renders the start `element` slot.
   * @default Stack
   */
  startElement: React.ElementType;
  /**
   * The component that renders the end `element` slot.
   * @default Stack
   */
  endElement: React.ElementType;
  /**
   * The component that renders the swip `Menu` slot.
   * @default SwipeableDrawer
   */
  swipeableDrawer: React.ElementType;
  /**
   * The component that renders the toggle menu `Button` slot.
   * @default IconButton
   */
  toggleMenu: React.ElementType;
};

type SideBarButtonSlotProps = (
  props: SideBarButtonContextProps
) => ListItemButtonProps;

export type SideBarSlotProps = {
  /**
   * Props forwarded to the `root` AppBar component. By default, the avaible props are based on the `root` component.
   */
  root: AppBarProps;
  /**
   * Props forwarded to the `RichTreeView` component. By default, the avaible props are based on the `RichTreeView` component.
   */
  richTreeView: Omit<TreeViewProps, "items">;
  /**
   * Props forwarded to the `SideBarButton` components. By default, the avaible props are based on the `SideBarButton` components.
   */
  button: ListItemButtonProps | SideBarButtonSlotProps;
  /**
   * Props forwarded to the sideBar `title` components. By default, the avaible props are based on the `title` components.
   */
  title: Partial<TreeItemContentProps>;
  /**
   * Props forwarded to the sideBar start `element` component. By default, the avaible props are based on the start `element` component.
   */
  startElement: StackProps;
  /**
   * Props forwarded to the sideBar end `element` component. By default, the avaible props are based on the end `element` component.
   */
  endElement: StackProps;
  /**
   * Props forwarded to the `SwipeableDrawer` component. By default, the avaible props are based on the end `SwipeableDrawer` component.
   */
  swipeableDrawer: SwipeableDrawerProps;
  /**
   * Props forwarded to the sideBar toggle menu `IconButton` component. By default, the avaible props are based on the end `IconButton` component.
   */
  toggleMenu: IconButtonProps;
};

export type SideBarSlotsAndSlotProps = {
  /**
   * Overridable component slots.
   * @default {}
   */
  slots?: Partial<SideBarSlots>;
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps?: Partial<SideBarSlotProps>;
};

type ItemsProps = (
  open: boolean
) => TreeViewProps["items"] | TreeViewProps["items"];

export interface SideBarProps extends ContainerProps, SideBarSlotsAndSlotProps {
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical";
  /**
   * the prop use to style the active element buttons or links of `SideBar` component items.
   */
  activeElementStyles?: {
    /**
     * styles forwarded to the root component when it is `active`.
     */
    root?: SxProps<Theme>;
    /**
     * styles forwarded to the link component when the root component is `active`.
     */
    link?: SxProps<Theme>;
    /**
     * styles forwarded to the button component when it is `active`.
     */
    button?: SxProps<Theme>;
  };
  /**
   * defines the element at the start.
   */
  startElement?: React.ReactNode;
  /**
   * defines the element at the end.
   */
  endElement?: React.ReactNode;
  /**
   * defines the menu items of the `SideBar`.
   * item can be either array or function.
   */
  items: ItemsProps;
  /**
   * if it's true the startElement will not render in Drawer component.
   */
  disableStartElementInDrawer?: boolean;
  /**
   * if it's true the endElement will not render in Drawer component.
   */
  disableEndElementInDrawer?: boolean;
}

// SideBar Tree Item Options Props ----------------------------------
export type SideBarTreeItemSlots = {
  /**
   * The component that renders the `element` slot.
   * @default Button
   */
  root: React.ElementType;
  /**
   * The component that renders the startIcon `icon` slot.
   * @default ItemIcon
   */
  startIcon?: React.ElementType;
  /**
   * The component that renders the endIcon `icon` slot.
   * @default ItemIcon
   */
  endIcon?: React.ElementType;
  /**
   * The component that renders the collapse `icon` slot.
   * @default TreeItemIconContainer
   */
  collapseTreeIconContainer: React.ElementType;
};

export type SideBarTreeItemSlotsAndSlotProps = CreateSlotsAndSlotProps<
  SideBarTreeItemSlots,
  {
    /**
     * Props forwarded to `root` element component. By default, the avaible props are based on the `root` element.
     */
    root: Omit<ListItemButtonProps, "component">;
    /**
     * Props forwarded to start `ItemIcon` component. By default, the avaible props are based on the `ItemIcon` component.
     */
    startIcon: BoxProps;
    /**
     * Props forwarded to end `ItemIcon` component. By default, the avaible props are based on the `ItemIcon` component.
     */
    endIcon: BoxProps;
    /**
     * Props forwarded to collapse `icon` container component. By default, the avaible props are based on the `collapseIconContainer` component.
     */
    collapseTreeIconContainer: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > &
      BoxProps;
    /**
     * Props forwarded to sideBar `transitionGroup` collapse component. By default, the avaible props are based on the `transitionGroup` component.
     */
    transitionGroup: CollapseProps;
    /**
     * Props forwarded to collapse treeItem `icon` component. By default, the avaible props are based on the `icon` component.
     */
    collapseTreeItemIcon: TreeItemIconProps;
  }
>;

export type SideBarItemDef = SideBarTreeItemSlotsAndSlotProps & {
  /**
   * defines the id of each item.
   * The id must be unique.
   */
  id?: string;
  /**
   * defines the variant of item.
   * @default "button"
   */
  variant?: "text" | "button";
  /**
   * defines the component of the element.
   * @default "div"
   */
  component?: ListItemButtonProps["component"];
  /**
   * defines the element.
   */
  element?: React.ReactNode;
  /**
   * defines the href of the element.
   *
   * Note: when `href` prop is provided, the element automaticly converts to link component.
   */
  href?: NavLinkProps["href"];
  /**
   * if it's true the `href` prop witch you have provided will visible in other tab.
   *
   * Note: this prop use for external links.
   */
  external?: boolean;
  /**
   * the prop defines the active class for button.
   * this prop use for those items witch has `children` prop.
   */
  baseName?: NavLinkProps["href"];
  /**
   * defines the icon at the left of button.
   */
  startIcon?: React.ReactNode;
  /**
   * defines the icon at the right of button.
   */
  endIcon?: React.ReactNode;
  /**
   * defines the caption at the bottom of button.
   */
  caption?: string;
  disabled?: boolean;
  /**
   * the startIcon and endIcon will only disabled in destop mode from (`md` to `xl`).
   */
  disableIconOnDesktop?: boolean;
  /**
   * the startIcon and endIcon will only disabled in mobile mode from (`xs` to `md`).
   */
  disableIconOnMobile?: boolean;
  children?: SideBarItemDef[];
};
