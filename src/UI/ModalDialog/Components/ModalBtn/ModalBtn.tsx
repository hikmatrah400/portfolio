import Button from "@mui/material/Button";
import { ModalBtnProps } from "./ModalBtnProps";

const ModalBtn = ({
  variant = "outlined",
  variantStyle,
  children,
  ...props
}: ModalBtnProps) => {
  return (
    <Button
      variant={variant}
      disableFocusRipple
      {...props}
      sx={{
        ...(variantStyle === "btn-contained"
          ? {
              border: `0.1rem solid ${
                props.style?.background || props.style?.backgroundColor
                  ? props.style?.background || props.style?.backgroundColor
                  : "#1d88f2"
              }`,
            }
          : {}),
        "& .MuiButton-loadingIndicator": {
          color: "#fff",
        },
        ...props?.style,
      }}
      className={`modal-btn ${variantStyle ? variantStyle : ""} ${
        props?.className ? props?.className : ""
      }`}
    >
      {children}
    </Button>
  );
};

export default ModalBtn;
