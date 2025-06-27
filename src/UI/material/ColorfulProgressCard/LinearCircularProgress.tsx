import CircularProgressUI, {
  circularProgressClasses,
} from "../CircularProgressUI";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { LinearCircularProgressProps } from "./ColorfulProgressCardProps";
import { renderSxPropsArray } from "@/UI/Functions";
import clsx from "clsx";
import { colorfulProgressCardClasses } from "./ColorfulProgressCardClasses";

const defaultSlots = {
  circle1: undefined,
  circle2: undefined,
  progressValue: undefined,
};

const LinearCircularProgress = ({
  slots = defaultSlots,
  progressValue,
  slotProps = defaultSlots,
  ...props
}: LinearCircularProgressProps) => {
  const {
    circle1: Circle1Slot,
    circle2: Circle2Slot,
    progressValue: ValueSlot,
  } = slots;
  const {
    circle1: Circle1Props,
    circle2: Circle2Props,
    progressValue: ValueProps,
  } = slotProps;

  const renderProgress = (
    <>
      {Circle1Slot ? (
        <Circle1Slot />
      ) : (
        <CircularProgressUI
          variant="determinate"
          size={77}
          thickness={2.8}
          value={100}
          {...Circle1Props}
          className={clsx(
            colorfulProgressCardClasses.circle1,
            Circle1Props?.className || ""
          )}
          sx={[
            (theme) => ({
              color: alpha(theme.palette.grey[200], 0.12),
            }),
            ...renderSxPropsArray(Circle1Props?.sx),
          ]}
        />
      )}

      {Circle2Slot ? (
        <Circle2Slot />
      ) : (
        <CircularProgressUI
          useGradient
          variant="determinate"
          size={80}
          thickness={4.5}
          {...Circle2Props}
          value={progressValue}
          className={clsx(
            colorfulProgressCardClasses.circle2,
            Circle2Props?.className || ""
          )}
          sx={[
            (theme) => ({
              animationDuration: "1000ms",
              position: "absolute",

              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: "round",
              },
              ...theme.applyStyles("dark", {
                color: "#308fe8",
              }),
            }),
            ...renderSxPropsArray(Circle2Props?.sx),
          ]}
        />
      )}

      {ValueSlot ? (
        <ValueSlot>{progressValue}%</ValueSlot>
      ) : (
        <Typography
          {...ValueProps}
          className={clsx(
            colorfulProgressCardClasses.progressValue,
            ValueProps?.className || ""
          )}
          sx={[
            { position: "absolute", fontWeight: "600", fontSize: "1rem" },
            ...renderSxPropsArray(ValueProps?.sx),
          ]}
        >
          {progressValue}%
        </Typography>
      )}
    </>
  );

  return (
    <Grid
      size={4}
      {...props}
      sx={[
        {
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "max-content",
        },
        ...renderSxPropsArray(props?.sx),
      ]}
    >
      {renderProgress}
    </Grid>
  );
};

export default LinearCircularProgress;
