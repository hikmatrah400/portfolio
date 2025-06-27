"use client";

import React, { useEffect, useState } from "react";
import "./Scss/ModalDialog.scss";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";

import CloseIcon from "@mui/icons-material/Close";
import { ModalDialogProps, themeProps } from "./ModalDialogProps";
import Backdrop from "@mui/material/Backdrop";
import CircularProgressUI from "../material/CircularProgressUI";
import LinearProgressUI from "../material/LinearProgressUI";
import { renderSxPropsArray } from "../Functions";

const ModalDialog = ({
  open = false,
  onClose = () => undefined,
  loading = false,
  useLinearProgress = false,
  linearProgressProps,
  circularProgressProps,
  dialogTitle = "Header Title",
  theme = "system",
  dialogMode = "simple",
  transitionMode = "Fade",
  transformOrigin,
  direction = "center",
  timeout = 400,
  closeTimout,
  children,
  slotProps = {
    headerProps: undefined,
    dialogContainerProps: undefined,
    closeBtnProps: undefined,
    loadingBackdropProps: undefined,
  },
  ...props
}: ModalDialogProps) => {
  const {
    headerProps,
    dialogContainerProps,
    closeBtnProps,
    loadingBackdropProps,
    ...dialogSlotProps
  } = slotProps;

  const [grow, setGrow] = useState(false);
  const darkTheme = theme === "dark";

  const applyTheme = (theme: themeProps) => {
    document.documentElement.setAttribute("dialog-theme", theme);
  };
  const handleClose = () => {
    setGrow(false);

    if (closeTimout === 0) onClose();
    else
      setTimeout(() => {
        onClose();
      }, closeTimout ?? timeout / 3);
  };

  useEffect(() => {
    setGrow(open);
  }, [open]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const ShowTransition: any =
    transitionMode === "Grow"
      ? Grow
      : transitionMode === "Zoom"
      ? Zoom
      : transitionMode === "Fade"
      ? Fade
      : undefined;

  return (
    <>
      <Dialog
        open={open}
        {...props}
        slotProps={dialogSlotProps}
        className={`modal-backdrop-root ${
          props.className ? props.className : ""
        }`}
        sx={{
          "& .MuiPaper-root": {
            alignItems:
              direction === "top"
                ? "flex-start"
                : direction === "bottom"
                ? "flex-end"
                : direction,
            maxWidth: "unset",
            maxHeight: "unset",
            minWidth: "100%",
            minHeight: "100vh",
            background: "transparent",
            display: "flex",
            justifyContent: "center",
            boxShadow: "none !important",
            borderRadius: "0",
            border: "none",
            overflow: "auto !important",
            padding: "1rem",
            flexDirection: "unset",
          },
        }}
      >
        <ShowTransition
          in={grow}
          style={{
            transformOrigin:
              transformOrigin === "bottom top"
                ? `50% ${direction === "center" ? "100vh" : "30rem"} 0`
                : transformOrigin === "top bottom"
                ? `50% ${direction === "center" ? "-100vh" : "-30rem"} 0`
                : transformOrigin,
          }}
          timeout={grow ? timeout : closeTimout ?? timeout / 2}
        >
          <Box
            {...dialogContainerProps}
            className={`modal-container ${dialogMode} ${
              darkTheme ? "modal-container-dark" : ""
            } ${dialogContainerProps?.className || ""}`}
          >
            {loading && (
              <>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    zIndex: 1206,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    ...(useLinearProgress
                      ? {}
                      : {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }),
                  }}
                >
                  {useLinearProgress ? (
                    <LinearProgressUI
                      {...linearProgressProps}
                      barStyle={{
                        background: "rgba(29, 136, 242, 0.87)",
                        ...linearProgressProps?.barStyle,
                      }}
                      colorPrimaryStyle={{
                        background: "transparent",
                        ...linearProgressProps?.colorPrimaryStyle,
                      }}
                      sx={{
                        height: 4,
                        ...linearProgressProps?.sx,
                      }}
                    />
                  ) : (
                    <CircularProgressUI
                      {...circularProgressProps}
                      sx={{ color: "rgba(29, 136, 242, 0.87)" }}
                    />
                  )}
                </Box>
                <Backdrop
                  open={true}
                  {...loadingBackdropProps}
                  style={{
                    opacity: "0.5",
                    ...loadingBackdropProps?.style,
                  }}
                  sx={[
                    () => ({
                      background: "#fff",
                      position: "absolute",
                      zIndex: 1205,
                      top: -0.5,
                    }),
                    ...renderSxPropsArray(loadingBackdropProps?.sx),
                  ]}
                />
              </>
            )}

            <Box
              {...headerProps}
              className={`modal-header ${headerProps?.className || ""}`}
            >
              <Box className="titleBox">{dialogTitle}</Box>
              <Box className="close-btn">
                <IconButton
                  size="small"
                  {...closeBtnProps}
                  onClick={(e) => {
                    handleClose();
                    closeBtnProps?.onClick?.(e);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>

            <Divider />

            <Box className="modal-body">{children}</Box>
          </Box>
        </ShowTransition>
      </Dialog>
    </>
  );
};

export default ModalDialog;
