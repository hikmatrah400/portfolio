import Grid from "@mui/material/Grid";
import { CardUIProps } from "./CardUIProps";
import { memo, useMemo } from "react";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import { Box } from "@mui/material";
import LinearProgressUI from "../LinearProgressUI";
import CircularProgressUI from "../CircularProgressUI";
import { renderSxPropsArray } from "@/UI/Functions";
import { primary } from "@/UI/colors";
import { grey } from "@mui/material/colors";

const defaultCardUISlots = {
  headerTitle: undefined,
  backdrop: undefined,
  linearProgress: undefined,
  circularProgress: undefined,
};

const CardUI = memo(
  ({
    headerTitle,
    loading = false,
    children,
    slots = defaultCardUISlots,
    slotProps = defaultCardUISlots,
    useLinearProgress = false,
    ...props
  }: CardUIProps) => {
    const {
      headerTitle: HeaderTitleSlot,
      backdrop: BackdropSlot,
      linearProgress: LinearSlot,
      circularProgress: CircularSlot,
    } = slots;
    const {
      headerTitle: HeaderTitleProps,
      backdrop: BackdropProps,
      linearProgress: LinearProps,
      circularProgress: CircularProps,
    } = slotProps;

    const renderLoadingComponent = useMemo(
      () =>
        loading && (
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
                LinearSlot ? (
                  LinearSlot
                ) : (
                  <LinearProgressUI
                    {...LinearProps}
                    barStyle={{
                      background: "rgba(29, 136, 242, 0.87)",
                      ...LinearProps?.barStyle,
                    }}
                    colorPrimaryStyle={{
                      background: "transparent",
                      ...LinearProps?.colorPrimaryStyle,
                    }}
                    sx={[
                      () => ({ height: 3.6 }),
                      ...renderSxPropsArray(LinearProps?.sx),
                    ]}
                  />
                )
              ) : CircularSlot ? (
                CircularSlot
              ) : (
                <CircularProgressUI {...CircularProps} />
              )}
            </Box>

            {BackdropSlot ? (
              <BackdropSlot />
            ) : (
              <Backdrop
                open={true}
                {...BackdropProps}
                style={{
                  opacity: "0.3",
                  ...BackdropProps?.style,
                }}
                sx={[
                  (theme) => ({
                    background: "#fff",
                    position: "absolute",
                    zIndex: 1205,
                    top: -0.5,
                    ...theme.applyStyles("dark", {
                      background: "rgb(0,0,0)",
                    }),
                  }),
                  ...renderSxPropsArray(BackdropProps?.sx),
                ]}
              />
            )}
          </>
        ),
      [
        loading,
        BackdropProps,
        BackdropSlot,
        CircularProps,
        LinearProps,
        LinearSlot,
        useLinearProgress,
      ]
    );

    const renderHeaderTitle = useMemo(
      () =>
        headerTitle ? (
          HeaderTitleSlot ? (
            <HeaderTitleSlot>{headerTitle}</HeaderTitleSlot>
          ) : (
            <Typography
              component="span"
              color="primary"
              {...HeaderTitleProps}
              sx={[
                () => ({
                  position: "absolute",
                  top: "-0.8rem",
                  left: "0.8rem",
                  padding: "0 0.4rem",
                  borderRadius: "0.4rem",
                  background: "inherit",
                }),
                ...renderSxPropsArray(HeaderTitleProps?.sx),
              ]}
            >
              {headerTitle}
            </Typography>
          )
        ) : null,
      [HeaderTitleProps, headerTitle, HeaderTitleSlot]
    );

    return (
      <Grid
        {...props}
        sx={[
          (theme) => ({
            position: "relative",
            borderRadius: "1rem",
            padding: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignContent: "space-between",
            justifyContent: "flex-start",
            boxShadow: `0 15px 20px -5px rgba(0,0,0,0.06), inset 0 0 1px rgb(212, 212, 212)`,
            background: " #FEFEFE",
            overflow: loading ? "hidden" : "visible",
            transition: "all 0.4s ease",

            ...theme.applyStyles("dark", {
              background: primary["D200"],
              boxShadow: `0 15px 20px -10px rgba(0,0,0,0.3), inset 0 0 1px rgb(49, 49, 49)`,
            }),

            "& span": {
              width: "100%",
              fontWeight: "600",
            },

            "& .svg": {
              color: "rgb(108, 125, 140)",
              ...theme.applyStyles("dark", {
                color: grey[500],
              }),
            },

            "& .cardTitle": {
              fontSize: "1.2rem",
            },
            "& .cardContent": {
              fontSize: "0.9rem",
              color: grey[600],
              marginTop: "0.5rem",

              ...theme.applyStyles("dark", {
                color: grey[400],
              }),
            },
          }),
          ...renderSxPropsArray(props?.sx),
        ]}
      >
        {renderLoadingComponent}
        {renderHeaderTitle}
        {children}
      </Grid>
    );
  }
);

export default CardUI;
