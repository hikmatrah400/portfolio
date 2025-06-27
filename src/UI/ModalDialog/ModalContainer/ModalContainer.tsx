"use client";

import { useRef, useState } from "react";
import ModalDialog, {
  dialogModeProps,
  ModalBody,
  ModalBtn,
  ModalBtnProps,
  ModalContent,
  ModalDialogProps,
  ModalFooter,
} from "..";
import {
  DialogContextProps,
  DialogMainProps,
  ModalProps,
} from "./ModalContainerProps";

export interface ModalContainerProps
  extends Omit<ModalDialogProps, "open" | "onClose" | "children"> {}

const ModalContainer = (props: ModalContainerProps) => {
  const [open, setOpen] = useState(false);
  const [modalDialog, setModalDialog] = useState<DialogContextProps>({
    title: "Dialog Title",
    content: "Dialog Content",
    mainProps: { buttons: [] },
  });
  const modalBtn = useRef<HTMLButtonElement>(null);

  const { title, content, mainProps } = modalDialog;
  const { modalChildren: ModalChildren } = mainProps;

  const SetDialog =
    (value: dialogModeProps) =>
    (
      title: string,
      content: string,
      mainProps: DialogMainProps = {
        buttons: [],
      }
    ) => {
      setOpen(true);
      setModalDialog((prev) => ({
        ...prev,
        title,
        content,
        mainProps: {
          ...mainProps,
          dialogMode: value,
        },
      }));

      setTimeout(() => {
        modalBtn.current?.focus();
      }, 100);
    };

  Modal = {
    simple: SetDialog("simple"),
    success: SetDialog("success"),
    error: SetDialog("error"),
    warning: SetDialog("warning"),
    info: SetDialog("info"),
  };

  return (
    <>
      <ModalDialog
        {...props}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        dialogTitle={title}
        dialogMode="simple"
        {...mainProps}
      >
        <ModalBody>
          {ModalChildren ? (
            typeof ModalChildren === "function" ? (
              <ModalChildren closeDialog={() => setOpen(false)} />
            ) : (
              ModalChildren
            )
          ) : (
            <ModalContent>{content}</ModalContent>
          )}
        </ModalBody>

        <ModalFooter>
          {mainProps.buttons?.length === 0 ||
          mainProps.buttons === undefined ? (
            <>
              <ModalBtn
                variantStyle="dialogMode"
                className="modal-focus-root"
                onClick={() => setOpen(false)}
                ref={modalBtn}
              >
                OK
              </ModalBtn>
            </>
          ) : (
            mainProps.buttons?.map((elm: ModalBtnProps, i: number) => (
              <ModalBtn
                className="modal-focus-root"
                key={i}
                {...elm}
                variantStyle={
                  elm.variantStyle
                    ? elm.variantStyle
                    : mainProps?.dialogMode === "simple"
                    ? i === 0
                      ? "btn-hover-outlined"
                      : "btn-contained"
                    : i === 0
                    ? "dialogMode-hover-outlined"
                    : "dialogMode"
                }
                ref={i === 0 ? modalBtn : null}
                onClick={(e) => {
                  setOpen(false);
                  elm?.onClick?.(e);
                }}
              >
                {elm.value}
              </ModalBtn>
            ))
          )}
        </ModalFooter>
      </ModalDialog>
    </>
  );
};

export const defaultModal = {
  error: () => undefined,
  info: () => undefined,
  success: () => undefined,
  simple: () => undefined,
  warning: () => undefined,
};

export let Modal: ModalProps = defaultModal;
export default ModalContainer;
