"use client";

import { createContext, forwardRef, memo, Ref, useMemo } from "react";
import Box from "@mui/material/Box";
import { useTreeItem } from "@mui/x-tree-view/useTreeItem";
import {
  TreeItemIconContainer,
  TreeItemGroupTransition,
  TreeItemLabel,
  TreeItemRoot,
} from "@mui/x-tree-view/TreeItem";
import { TreeItemIcon } from "@mui/x-tree-view/TreeItemIcon";
import { TreeItemProvider } from "@mui/x-tree-view/TreeItemProvider";
import Button from "@mui/material/Button";
import { SideBarButtonProps } from "./SideBarButtonProps";
import {
  buttonCollapseGroupStyles,
  sideBarTreeItemStyles,
  treeButtonStyles,
  treeRootSelectedStyles,
} from "./SideBarButtonStyles";
import NavLink from "@/UI/material/NavLink";
import { usePathname } from "next/navigation";
import {
  ItemCaption,
  ItemIcon,
  TreeItemContent,
  TreeItemContentProps,
} from "./components";
import { renderSxPropsArray } from "@/UI/Functions";
import { SideBarItemDef } from "../SideBarProps";
import clsx from "clsx";
import { sideBarButtonClasses } from "./SideBarButtonClasses";
import { useSideBar } from "../hooks";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";
import { ArrowDownSvg, ArrowRightSvg } from "@/app/layout/icons";
import { ButtonBase, ListItem, ListItemButton } from "@mui/material";

const SideBarButton = memo(
  forwardRef(function SideBarButton(
    props: SideBarButtonProps,
    ref: Ref<HTMLLIElement>
  ) {
    const pathName = usePathname();
    const { SideBarButtonProps, SideBarTitleProps, closeMenu, orientation } =
      useSideBar();
    const { id, itemId, label, disabled, children, ...other } = props;

    const {
      getRootProps,
      getContentProps,
      getIconContainerProps,
      getLabelProps,
      getGroupTransitionProps,
      status,
      publicAPI,
    } = useTreeItem({
      id,
      itemId,
      children,
      label,
      disabled,
      rootRef: ref,
    });

    const item: SideBarItemDef =
      publicAPI.getItem(itemId) || defaultTreeItemProps;
    const {
      variant,
      startIcon,
      endIcon,
      href,
      external,
      disabled: Disabled,
      disableIconOnDesktop,
      disableIconOnMobile,
      baseName,
      children: itemChildren,
      caption,
      element,
      component = "div",
      slotProps,
      slots: Slots,
    } = item;

    const isActive = href
      ? pathName === href
      : baseName
      ? pathName.includes(baseName ?? "")
      : false;
    const isLink = (component === "a" || href) && !itemChildren;
    const isDisabled = Disabled || (isActive && !itemChildren);

    const iconProps = { disableIconOnDesktop, disableIconOnMobile };
    const sideBarButtonContextProps = { item, active: isActive, props };

    // renders ----------------------------------------------------------------------------
    const renderStartIcon = useMemo(
      () =>
        startIcon ? (
          Slots?.startIcon ? (
            <Slots.startIcon>{startIcon}</Slots.startIcon>
          ) : (
            <ItemIcon iconProps={iconProps} {...slotProps?.startIcon}>
              {startIcon}
            </ItemIcon>
          )
        ) : null,
      [Slots?.startIcon, startIcon, slotProps?.startIcon]
    );

    const renderEndIcon = useMemo(
      () =>
        endIcon ? (
          Slots?.endIcon ? (
            <Slots.endIcon>{endIcon}</Slots.endIcon>
          ) : (
            <ItemIcon iconProps={iconProps} {...slotProps?.endIcon}>
              {endIcon}
            </ItemIcon>
          )
        ) : null,
      [Slots?.endIcon, endIcon, slotProps?.endIcon]
    );

    const renderItemCollapseIcon = useMemo(
      () =>
        itemChildren ? (
          Slots?.collapseTreeIconContainer ? (
            <Slots.collapseTreeIconContainer>
              <TreeItemIcon status={status} />
            </Slots.collapseTreeIconContainer>
          ) : (
            <TreeItemIconContainer
              {...slotProps?.collapseTreeIconContainer}
              {...getIconContainerProps()}
              sx={[
                {
                  "& svg": {
                    fontSize: "1rem",
                  },
                },
                ...renderSxPropsArray(slotProps?.collapseTreeIconContainer?.sx),
              ]}
            >
              <TreeItemIcon
                {...slotProps?.collapseTreeItemIcon}
                slots={{
                  expandIcon: ArrowRightSvg,
                  collapseIcon: ArrowDownSvg,
                  ...slotProps?.collapseTreeItemIcon?.slots,
                }}
                status={status}
              />
            </TreeItemIconContainer>
          )
        ) : null,
      [
        status,
        Slots?.collapseTreeIconContainer,
        slotProps?.collapseTreeIconContainer,
        slotProps?.collapseTreeItemIcon,
        itemChildren,
      ]
    );

    const sideBarContextButtonProps =
      typeof SideBarButtonProps === "function"
        ? SideBarButtonProps(sideBarButtonContextProps)
        : SideBarButtonProps;

    const renderTreeItem = (
      <>
        {variant === "text" ? (
          <TreeItemContent
            {...getContentProps()}
            {...elementContainerProps(SideBarTitleProps)}
            className={sideBarButtonClasses.titleContainer}
          >
            {renderItemCollapseIcon}
            {renderStartIcon}

            <TreeItemLabel
              className={sideBarButtonClasses.title}
              {...getLabelProps()}
              sx={{
                overflow: "hidden",
                fontWeight: "600",
                ml: startIcon ? "0.2rem" : "0",
              }}
            >
              {element}
              {caption && <ItemCaption>{caption}</ItemCaption>}
            </TreeItemLabel>

            {renderEndIcon}
          </TreeItemContent>
        ) : (
          <ButtonBase
            disabled={isDisabled}
            target={external ? "_blank" : undefined}
            {...sideBarContextButtonProps}
            {...slotProps?.root}
            href={href || undefined}
            component={isLink ? NavLink : "div"}
            sx={[
              (theme) =>
                treeButtonStyles(
                  theme,
                  startIcon ? true : endIcon ? true : caption ? true : false
                ),
              isDisabled ? { opacity: 0.35 } : {},
              ...renderSxPropsArray(sideBarContextButtonProps?.sx),
              ...renderSxPropsArray(slotProps?.root?.sx),
            ]}
            className={clsx(
              sideBarButtonClasses.button,
              isActive ? sideBarButtonClasses.active : "",
              isDisabled ? sideBarButtonClasses.disabled : "",
              getRootProps(other)["aria-selected"] && !itemChildren
                ? sideBarButtonClasses.selected
                : "",
              getRootProps(other)["aria-expanded"]
                ? sideBarButtonClasses.expanded
                : "",
              slotProps?.root?.className || "",
              sideBarContextButtonProps?.className || ""
            )}
          >
            <TreeItemContent {...getContentProps()}>
              {renderItemCollapseIcon}

              <Box {...elementContainerProps({})}>
                {renderStartIcon}

                <TreeItemLabel
                  className={sideBarButtonClasses.element}
                  {...getLabelProps()}
                  sx={{
                    overflow: "hidden",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    ml: startIcon ? "0.2rem" : "0.1rem",
                  }}
                >
                  {element}
                  {caption && <ItemCaption>{caption}</ItemCaption>}
                </TreeItemLabel>

                {renderEndIcon}
              </Box>
            </TreeItemContent>
          </ButtonBase>
        )}

        {itemChildren ? (
          <TreeItemGroupTransition
            {...getGroupTransitionProps()}
            component="div"
            {...slotProps?.transitionGroup}
            sx={[
              buttonCollapseGroupStyles,
              ...renderSxPropsArray(slotProps?.transitionGroup?.sx),
            ]}
          >
            <ul
              className={clsx(
                sideBarButtonClasses.collapseGroup,
                variant === "text"
                  ? sideBarButtonClasses.titleCollapseGroup
                  : sideBarButtonClasses.itemsCollapseGroup
              )}
            >
              {getGroupTransitionProps().children}
            </ul>
          </TreeItemGroupTransition>
        ) : null}
      </>
    );

    return (
      <SideBarButtonContext.Provider value={sideBarButtonContextProps}>
        <TreeItemProvider id={id} itemId={itemId}>
          <TreeItemRoot
            {...getRootProps(other)}
            className={clsx(sideBarButtonClasses.root)}
            sx={[
              (theme) => sideBarTreeItemStyles(theme),
              (theme) => treeRootSelectedStyles(theme),
              ...renderSxPropsArray(props?.sx),
            ]}
            onClick={(e) => {
              getRootProps(other).onClick?.(e);
              if (!itemChildren) closeMenu();
            }}
          >
            {renderTreeItem}
          </TreeItemRoot>
        </TreeItemProvider>
      </SideBarButtonContext.Provider>
    );
  })
);

const elementContainerProps: (
  props: Partial<TreeItemContentProps> | undefined
) => Partial<TreeItemContentProps> | undefined = (props) => ({
  className: clsx(
    sideBarButtonClasses.elementContainer,
    props?.className || ""
  ),
  ...props,
  sx: [
    {
      minWidth: "0",
      flexGrow: 1,
      display: "flex",
      columnGap: 1,
      alignItems: "center",
      alignContent: "center",
      justifyContent: "flex-start",
      flexDirection: "row",
      flexWrap: "nowrap",
    },
    ...renderSxPropsArray(props?.sx),
  ],
});

const defaultTreeItemProps = {
  title: undefined,
  variant: undefined,
  icon: undefined,
  href: undefined,
  disabled: false,
  disableIconOnDesktop: false,
  disableIconOnMobile: false,
  baseName: undefined,
  children: undefined,
  caption: undefined,
  element: undefined,
  itemLabel: undefined,
  type: undefined,
  component: "div",
  slotProps: undefined,
  slots: undefined,
};

export type SideBarButtonContextProps = {
  item: SideBarItemDef | undefined;
  active: boolean;
  props: SideBarButtonProps | undefined;
};
export const SideBarButtonContext = createContext<SideBarButtonContextProps>({
  active: false,
  item: undefined,
  props: undefined,
});

export default SideBarButton;
