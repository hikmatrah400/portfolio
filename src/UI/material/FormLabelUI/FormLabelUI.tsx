import FormLabel from "@mui/material/FormLabel";
import { FormLabelUIProps } from "./FormLabelUIProps";
import { renderSxPropsArray } from "@/UI/Functions";

const FormLabelUI = ({ children, ...props }: FormLabelUIProps) => {
  return (
    <>
      <FormLabel
        required
        {...props}
        className={`inputFieldLabel ${props.className || ""}`}
        sx={[
          () => ({ textTransform: "capitalize" }),
          ...renderSxPropsArray(props?.sx),
        ]}
      >
        {children}
      </FormLabel>
    </>
  );
};

export default FormLabelUI;
