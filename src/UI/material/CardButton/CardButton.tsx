import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CircularProgressUI from "../CircularProgressUI";
import Divider from "@mui/material/Divider";
import { CardButtonProps } from "./CardButtonProps";
import { buttonShadow } from "../Themes";
import { renderSxPropsArray } from "@/UI/Functions";

const CardButton = ({
  gridProps,
  gridSize = 12,
  disableDivider = false,
  dividerValue = "or",
  dividerProps,
  children,
  loading,
  ...props
}: CardButtonProps) => {
  return (
    <>
      <Grid size={gridSize} {...gridProps}>
        <Button
          type="submit"
          {...props}
          disabled={loading || props?.disabled}
          sx={[
            () => ({
              width: "100%",
              mt: 1,
              background:
                "linear-gradient(90deg, rgb(33, 198, 253), rgb(33, 120, 254))",
              color: "#fff",
              minHeight: "2.7rem",
              lineHeight: "unset",
              textTransform: "capitalize",
              "&:disabled": {
                color: "#fff",
                opacity: 0.7,
              },
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

      {!disableDivider && (
        <Divider
          {...dividerProps}
          sx={[
            () => ({ my: "-0.3rem" }),
            ...renderSxPropsArray(dividerProps?.sx),
          ]}
        >
          {dividerValue}
        </Divider>
      )}
    </>
  );
};

export default CardButton;
