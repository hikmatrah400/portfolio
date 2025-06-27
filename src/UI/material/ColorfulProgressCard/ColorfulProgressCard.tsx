import CardUI from "../CardUI";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LinearCircularProgress from "./LinearCircularProgress";
import { ColorfulProgressCardProps } from "./ColorfulProgressCardProps";
import { colorfulProgressCardStyles } from "./ColorfulProgressCardStyles";
import { renderSxPropsArray } from "@/UI/Functions";
import clsx from "clsx";
import { colorfulProgressCardClasses } from "./ColorfulProgressCardClasses";

const defaultSlots = {
  progress: undefined,
  title: undefined,
  caption: undefined,
  card: undefined,
};

const ColorfulProgressCard = ({
  title,
  caption,
  icon,
  progressValue,
  slots = defaultSlots,
  slotProps = defaultSlots,
  progressColors,
  skipAnimation,
}: ColorfulProgressCardProps) => {
  const {
    progress: ProgressSlot,
    title: TitleSlot,
    caption: CaptionSlot,
    card: CardSlot,
    icon: IconSlot,
  } = slots;
  const {
    progress: ProgressProps,
    title: TitleProps,
    caption: CaptionProps,
    card: CardProps,
    icon: IconProps,
  } = slotProps;

  const renderPorgressCard = (
    <>
      <Grid container size={12} columns={12} spacing={3}>
        {ProgressSlot ? (
          ProgressSlot
        ) : (
          <LinearCircularProgress
            progressValue={progressValue}
            {...ProgressProps}
            slotProps={{
              ...ProgressProps?.slotProps,
              circle2: {
                colors: progressColors,
                ...ProgressProps?.slotProps?.circle2,
              },
            }}
          />
        )}

        <Grid
          size={7}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          {TitleSlot ? (
            <TitleSlot>{title}</TitleSlot>
          ) : (
            <Typography
              variant="h4"
              {...TitleProps}
              className={clsx(
                colorfulProgressCardClasses.title,
                TitleProps?.className
              )}
              sx={[
                {
                  fontSize: "1.3rem",
                  mt: "0.5rem",
                  color: "rgb(255,255,255)",
                },
                ...renderSxPropsArray(TitleProps?.sx),
              ]}
            >
              {title}
            </Typography>
          )}

          {caption ? (
            CaptionSlot ? (
              <CaptionSlot>{caption}</CaptionSlot>
            ) : (
              <Typography
                variant="h4"
                {...CaptionProps}
                className={clsx(
                  colorfulProgressCardClasses.caption,
                  CaptionProps?.className
                )}
                sx={[
                  {
                    fontSize: "0.95rem",
                    mt: "0.1rem",
                    textAlign: "left",
                    color: "rgba(255,255,255,0.8)",
                  },
                  ...renderSxPropsArray(CaptionProps?.sx),
                ]}
              >
                {caption}
              </Typography>
            )
          ) : null}
        </Grid>
      </Grid>

      {icon ? (
        IconSlot ? (
          <IconSlot>{icon}</IconSlot>
        ) : (
          <Box
            {...IconProps}
            className={clsx(
              colorfulProgressCardClasses.icon,
              IconProps?.className || ""
            )}
            sx={[
              {
                position: "absolute",
                right: "-2.5rem",
                color: "rgba(255, 255, 255, 0.12)",
                transition: "all 0.4s ease",

                "& svg": {
                  fontSize: "8rem",
                  "&path": {
                    transition: "all 0.4s ease",
                  },
                },
              },
              ...renderSxPropsArray(IconProps?.sx),
            ]}
          >
            {icon}
          </Box>
        )
      ) : null}
    </>
  );

  return (
    <>
      {CardSlot ? (
        <CardSlot>{renderPorgressCard}</CardSlot>
      ) : (
        <CardUI
          size={12}
          {...CardProps}
          sx={[
            (theme) => colorfulProgressCardStyles(theme, skipAnimation),
            ...renderSxPropsArray(CardProps?.sx),
          ]}
        >
          {renderPorgressCard}
        </CardUI>
      )}
    </>
  );
};

export default ColorfulProgressCard;
