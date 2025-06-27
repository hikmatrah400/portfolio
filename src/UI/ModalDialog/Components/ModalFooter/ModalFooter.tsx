import Box from "@mui/material/Box";
import { ModalFooterProps } from "./ModalFooterProps";

const ModalFooter = ({ children, ...props }: ModalFooterProps) => {
  return (
    <Box
      {...props}
      className={`modal-footer ${props?.className ? props?.className : ""}`}
      sx={{
        width: "100%",
        background: "var(--dialog-backgroud)",
        padding: "0.8rem 0.6rem",
        borderTop: "1px solid var(--border-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        ...props?.sx,
      }}
    >
      {children}
    </Box>
  );
};

export default ModalFooter;
