"use client";

import {
  sideBarContainerStyles,
  sideBarSwipeableDrawerStyles,
  sideBarHorizontalStyles,
  sideBarHeaderGridStyles,
  sideBarTreeViewStyles,
} from "./SideBarStyles";
import Stack from "@mui/material/Stack";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { SideBarProps, SideBarItemDef } from "./SideBarProps";
import SideBarButton from "./SideBarButton";
import { defaultSideBarSlotProps, SideBarContext } from "./defaultProps";
import { useCallback, useMemo, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { renderSxPropsArray } from "../Functions";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import clsx from "clsx";
import { HamburgarMenuSvg } from "@/app/layout/icons";
import { sideBarClasses } from "./SideBarClasses";
import AppBar from "@mui/material/AppBar";

const SideBar = ({
  items,
  startElement,
  endElement,
  slotProps = defaultSideBarSlotProps,
  activeElementStyles = defaultSideBarSlotProps,
  slots = defaultSideBarSlotProps,
  orientation = "vertical",
  disableStartElementInDrawer = false,
  disableEndElementInDrawer = false,
  ...props
}: SideBarProps) => {
  const theme = useTheme();
  const mobileMode = useMediaQuery(theme.breakpoints.down("md"));

  const {
    root: RootSlot,
    startElement: StartElementSlot,
    endElement: EndElementSlot,
    swipeableDrawer: SwipDrawerSlot,
    toggleMenu: ToggleMenuSlot,
  } = slots;
  const {
    root: RootProps,
    richTreeView: RichTreeViewProps,
    button: SideBarButtonProps,
    title: SideBarTitleProps,
    startElement: StartElementProps,
    endElement: EndElementProps,
    swipeableDrawer: SwipDrawerProps,
    toggleMenu: ToggleMenuProps,
  } = slotProps;

  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  const renderItems = [
    ...(typeof items === "function" ? items(open) : items),
  ].map((elm: SideBarItemDef, i: number) => ({
    ...elm,
    id: `${i + 1}`,
    label: `${i + 1}`,
    children: elm.children?.map((elm: SideBarItemDef, i: number) => ({
      ...elm,
      label: `${i + 1}`,
    })),
  }));

  const renderSideBarItems = useMemo(
    () => (
      <RichTreeView
        {...RichTreeViewProps}
        items={renderItems}
        className={clsx(
          sideBarClasses.treeView,
          RichTreeViewProps?.className || ""
        )}
        sx={[
          orientation === "vertical" || mobileMode
            ? {
                display: "flex",
                flexDirection: "column",
                rowGap: "0.2rem",
                overflow: "auto",
                height: "calc(100vh - 8.6rem)",
              }
            : {},
          sideBarTreeViewStyles,
          ...renderSxPropsArray(RichTreeViewProps?.sx),
        ]}
        slots={{
          item: SideBarButton,
          ...RichTreeViewProps?.slots,
        }}
      />
    ),
    [RichTreeViewProps, items, mobileMode, orientation]
  );

  const renderSideBarElements = useCallback(
    (
      children: React.ReactNode,
      disableStart: boolean = false,
      disableEnd: boolean = false
    ) => (
      <>
        {startElement && !disableStart ? (
          StartElementSlot ? (
            <StartElementSlot>{startElement}</StartElementSlot>
          ) : (
            <Stack
              {...StartElementProps}
              sx={[
                { width: "100%" },
                ...renderSxPropsArray(StartElementProps?.sx),
              ]}
              className={clsx(
                sideBarClasses.element,
                sideBarClasses.startElement,
                StartElementProps?.className || ""
              )}
            >
              {startElement}
            </Stack>
          )
        ) : null}

        {children}

        {endElement && !disableEnd ? (
          EndElementSlot ? (
            <EndElementSlot>{endElement}</EndElementSlot>
          ) : (
            <Stack
              {...EndElementProps}
              className={clsx(
                sideBarClasses.element,
                sideBarClasses.endElement,
                EndElementProps?.className || ""
              )}
            >
              {endElement}
            </Stack>
          )
        ) : null}
      </>
    ),
    [
      startElement,
      StartElementProps,
      StartElementSlot,
      endElement,
      EndElementProps,
      EndElementSlot,
    ]
  );

  const renderSideBarContainer = useMemo(
    () => (
      <Container
        {...props}
        sx={[
          sideBarContainerStyles,
          orientation === "horizontal"
            ? sideBarHorizontalStyles
            : { padding: { xs: "0" } },
          ...renderSxPropsArray(props?.sx),
        ]}
      >
        {mobileMode &&
          (ToggleMenuSlot ? (
            <ToggleMenuSlot>{<HamburgarMenuSvg />}</ToggleMenuSlot>
          ) : (
            <IconButton
              {...ToggleMenuProps}
              className={clsx(
                sideBarClasses.toggleMenuButton,
                ToggleMenuProps?.className || ""
              )}
              onClick={(e) => {
                ToggleMenuProps?.onClick?.(e);
                openMenu();
              }}
            >
              <HamburgarMenuSvg />
            </IconButton>
          ))}

        {renderSideBarElements(!mobileMode && renderSideBarItems)}
      </Container>
    ),
    [mobileMode, renderSideBarItems, ToggleMenuProps, ToggleMenuSlot, props]
  );

  return (
    <SideBarContext.Provider
      value={{
        SideBarButtonProps,
        SideBarTitleProps,
        activeElementStyles,
        openMenu,
        closeMenu,
        orientation,
      }}
    >
      {RootSlot ? (
        <RootSlot>{renderSideBarContainer}</RootSlot>
      ) : (
        <AppBar
          component="header"
          {...RootProps}
          sx={[
            (theme) => sideBarHeaderGridStyles(theme, orientation),
            ...renderSxPropsArray(RootProps?.sx),
          ]}
        >
          {renderSideBarContainer}
        </AppBar>
      )}

      {mobileMode ? (
        SwipDrawerSlot ? (
          <SwipDrawerSlot>
            {renderSideBarElements(
              renderSideBarItems,
              disableStartElementInDrawer,
              disableEndElementInDrawer
            )}
          </SwipDrawerSlot>
        ) : (
          <SwipeableDrawer
            open={open}
            onClose={closeMenu}
            onOpen={openMenu}
            component="nav"
            {...SwipDrawerProps}
            className={clsx(
              sideBarClasses.swipeableDrawer,
              SwipDrawerProps?.className || ""
            )}
            sx={[
              sideBarSwipeableDrawerStyles,
              ...renderSxPropsArray(SwipDrawerProps?.sx),
            ]}
          >
            {renderSideBarElements(
              renderSideBarItems,
              disableStartElementInDrawer,
              disableEndElementInDrawer
            )}
          </SwipeableDrawer>
        )
      ) : null}
    </SideBarContext.Provider>
  );
};

export default SideBar;
