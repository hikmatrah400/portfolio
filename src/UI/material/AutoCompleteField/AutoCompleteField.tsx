import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import { AutoCompleteFieldProps } from "./AutoCompleteFieldProps";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";
import { ArrowDownSvg } from "@/app/layout/icons";

const AutoCompleteField = ({
  gridSize = 12,
  gridProps,
  ...props
}: AutoCompleteFieldProps) => {
  return (
    <Grid size={gridSize} {...gridProps}>
      <Autocomplete
        fullWidth
        getOptionLabel={(option) => option}
        popupIcon={<ArrowDownSvg style={{ fontSize: "1.15rem" }} />}
        {...props}
      />
    </Grid>
  );
};

export default AutoCompleteField;
