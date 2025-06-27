import { cardBoxShadow, renderSxPropsArray } from "@/UI/Functions";
import Circle from "@mui/icons-material/Circle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  ChartsTooltipContainer,
  useAxesTooltip,
  useRadarItemTooltip,
  UseRadarItemTooltipReturnValue,
} from "@mui/x-charts";
import { ChartTooltipProps } from "./ChartTooltipProps";
import Square from "@mui/icons-material/Square";
import LinearScale from "@mui/icons-material/LinearScale";

type RadarItemTooltipProps =
  | (UseRadarItemTooltipReturnValue & { formattedValue?: string })
  | null;

const ChartTooltip = ({
  hideColn,
  slotProps = {
    stackProps: undefined,
    titleProps: undefined,
    footerProps: undefined,
  },
  ...props
}: ChartTooltipProps) => {
  const axes = useAxesTooltip();
  const item: RadarItemTooltipProps = useRadarItemTooltip();
  const { stackProps, titleProps, footerProps, ...other } = slotProps;

  return (
    <ChartsTooltipContainer
      {...props}
      sx={[
        (theme) => ({ ...cardBoxShadow(theme), background: "transparent" }),
        ...renderSxPropsArray(props?.sx),
      ]}
      slotProps={other}
    >
      {item && (
        <Stack {...stackProps}>
          {axes?.[0]?.axisValue && (
            <Typography
              component={"label"}
              {...titleProps}
              sx={[
                (theme) => ({
                  background: "rgb(241, 243, 245)",
                  padding: "0.4rem 1rem",
                  color: "rgb(99, 108, 115)",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "0.85rem",

                  ...theme.applyStyles("dark", {
                    background: " #27313C",
                    color: "rgb(175, 183, 191)",
                  }),
                }),
                ...renderSxPropsArray(titleProps?.sx),
              ]}
            >
              {axes?.[0]?.axisValue.toString() || ""}
            </Typography>
          )}
          <Typography
            component={"section"}
            {...footerProps}
            sx={[
              (theme) => ({
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                padding: "0.6rem 1rem",
                color: " #585A5D",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                columnGap: "0.5rem",

                "& span": {
                  fontWeight: "600",
                  fontSize: "0.85rem",

                  "&.chartValue": {
                    color: " #343434",
                  },
                },

                "& .chartIcon": {
                  fontSize: "0.9rem",
                  marginRight: "0.5rem",
                },

                ...theme.applyStyles("dark", {
                  background: "rgba(23, 29, 36,0.9)",
                  color: " #EFF3F8",

                  "& span.chartValue": {
                    color: "rgb(251, 253, 255)",
                  },
                }),
              }),
              ...renderSxPropsArray(footerProps?.sx),
            ]}
          >
            {item.markType === "circle" ? (
              <Circle className="chartIcon" sx={{ color: item.color }} />
            ) : item.markType === "square" ? (
              <Square className="chartIcon" sx={{ color: item.color }} />
            ) : (
              <LinearScale className="chartIcon" sx={{ color: item.color }} />
            )}
            <Typography component="span">
              {item.label}
              {!hideColn && ": "}
              <Typography component="span" className="chartValue">
                {item?.formattedValue || ""}
              </Typography>
            </Typography>
          </Typography>
        </Stack>
      )}
    </ChartsTooltipContainer>
  );
};

export default ChartTooltip;
