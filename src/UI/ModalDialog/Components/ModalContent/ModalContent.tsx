import Typography from "@mui/material/Typography";
import { ModalContentProps } from "./ModalContentProps";

const ModalContent = ({ children, ...props }: ModalContentProps) => {
  return (
    <>
      <Typography
        {...props}
        component="span"
        className={`modal-contant ${props?.className ? props?.className : ""}`}
        sx={{
          fontSize: "1rem",
          color: "var(--text-color)",
          letterSpacing: 0,
          ...props?.sx,
        }}
      >
        {children}
      </Typography>
    </>
  );
};

export default ModalContent;
