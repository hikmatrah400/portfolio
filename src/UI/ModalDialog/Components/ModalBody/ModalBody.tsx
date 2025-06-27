import Box from "@mui/material/Box";
import { ModalBodyProps } from "./ModalBodyProps";

const ModalBody = ({ children, ...props }: ModalBodyProps) => {
  return (
    <Box
      {...props}
      className={`modal-body-children ${
        props?.className ? props?.className : ""
      }`}
      sx={{
        maxHeight: "75vh",
        padding: "0.9rem 1.35rem",
        wordWrap: "break-word",
        textWrap: "wrap",
        ...props?.sx,
      }}
    >
      {children}
    </Box>
  );
};

export default ModalBody;
