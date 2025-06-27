import { SxProps, Theme } from "@mui/material/styles";
import {
  axisClasses,
  legendClasses,
  chartsGridClasses,
  chartsTooltipClasses,
} from "@mui/x-charts";
import type { ChartsComponents } from "@mui/x-charts/themeAugmentation";
import { gray } from "../themePrimitives";
import { cardBoxShadow } from "@/UI/Functions";

export const chartsCustomizations: ChartsComponents<Theme> = {
  MuiChartsAxis: {
    styleOverrides: {
      root: ({ theme }) => ({
        [`& .${axisClasses.line}`]: {
          stroke: gray[300],
        },
        [`& .${axisClasses.tick}`]: { stroke: gray[300] },
        [`& .${axisClasses.tickLabel}`]: {
          fill: gray[500],
          fontWeight: 500,
        },
        ...theme.applyStyles("dark", {
          [`& .${axisClasses.line}`]: {
            stroke: gray[700],
          },
          [`& .${axisClasses.tick}`]: { stroke: gray[700] },
          [`& .${axisClasses.tickLabel}`]: {
            fill: gray[300],
            fontWeight: 500,
          },
        }),
      }),
    },
  },
  MuiChartsTooltip: {
    styleOverrides: {
      root: ({ theme }) => ({
        ...cardBoxShadow(theme),
        borderRadius: "0.6rem",
        overflow: "hidden",
      }),
      paper: {
        border: "none",
      },
      table: ({ theme }) => ({
        background: "rgb(255, 255, 255)",
        fontWeight: "600",
        border: "none",
        padding: "0.35rem 0.3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [`& .${chartsTooltipClasses.labelCell}`]: {
          fontWeight: "600 !important",
          color: "#000",
          ...theme.applyStyles("dark", {
            color: "#fff",
          }),
          [`& .${chartsTooltipClasses.mark}`]: {
            boxShadow: "none",
          },
        },
        ...theme.applyStyles("dark", {
          background: gray[900],
        }),
      }),
    },
  },
  MuiChartsLegend: {
    styleOverrides: {
      root: {
        [`& .${legendClasses.mark}`]: {
          ry: 6,
        },
      },
    },
  },
  MuiChartsGrid: {
    styleOverrides: {
      root: ({ theme }) => ({
        [`& .${chartsGridClasses.line}`]: {
          stroke: gray[200],
          strokeDasharray: "4 2",
          strokeWidth: 0.8,
        },
        ...theme.applyStyles("dark", {
          [`& .${chartsGridClasses.line}`]: {
            stroke: gray[700],
            strokeDasharray: "4 2",
            strokeWidth: 0.8,
          },
        }),
      }),
    },
  },
};
