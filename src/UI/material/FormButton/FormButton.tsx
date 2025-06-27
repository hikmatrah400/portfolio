import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { buttonShadow } from "../Themes";
import CircularProgressUI from "../CircularProgressUI";
import { FormButtonProps } from "./FormButtonProps";
import { renderSxPropsArray } from "@/UI/Functions";

const FormButton = ({
  gridProps,
  gridSize = 12,
  children,
  loading,
  ...props
}: FormButtonProps) => {
  return (
    <Grid size={gridSize} {...gridProps}>
      <Button
        {...props}
        sx={[
          () => ({
            width: "100%",
            background: "linear-gradient(90deg, #363C67, #1F233B)",
            color: "#fff",
            textTransform: "capitalize",
            minHeight: "2.7rem",
          }),
          () => buttonShadow,
          ...renderSxPropsArray(props?.sx),
        ]}
      >
        {loading ? (
          <CircularProgressUI size={17} sx={{ ml: 2, color: "#fff" }} />
        ) : (
          children
        )}
      </Button>
    </Grid>
  );
};

export default FormButton;
