"use client";

import React, { useState } from "react";
import Stack, { StackProps } from "@mui/material/Stack";
import { BarChart, BarChartProps } from "@mui/x-charts/BarChart";
import { grey } from "@mui/material/colors";
import ChartTooltip from "@/UI/material/ChartTooltip";
import MenuItem from "@mui/material/MenuItem";
import InputSelect from "@/UI/material/InputSelect";
import { appBarChartData } from "../data";
import CardUI, { CardUIProps } from "@/UI/material/CardUI";
import { renderSxPropsArray } from "@/UI/Functions";

const AppBarChart = ({
  chartHeaderProps,
  barChartRootProps,
  barChartProps,
  ...props
}: AppBarChartProps) => {
  const colors = [" #006B68", " #FFA900", " #00A8DD"];
  const [yearsValue, setYearsValue] = useState<string>("2024");

  return (
    <CardUI
      size={{ xs: 12, md: 6, lg: 8 }}
      {...props}
      sx={[
        {
          flexDirection: "column",
          height: "30rem",
          padding: 0,
        },
        ...renderSxPropsArray(props?.sx),
      ]}
    >
      <Stack
        {...chartHeaderProps}
        sx={[
          {
            margin: "1.5rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
          ...renderSxPropsArray(chartHeaderProps?.sx),
        ]}
      >
        <Stack>
          <span className="cardTitle">Area installed</span>
          <span className="cardContent">(+43%) than last year</span>
        </Stack>

        <InputSelect
          gridSize={"auto"}
          sx={{
            height: "2.2rem",
          }}
          value={yearsValue}
          onChange={(e) => setYearsValue(String(e.target.value))}
          hideNoItemElement
          MenuProps={{
            sx: {
              "& .MuiPaper-root": {
                width: "9rem",
              },
            },
            anchorOrigin: { horizontal: "right", vertical: "bottom" },
            transformOrigin: { horizontal: "right", vertical: "top" },
          }}
        >
          <MenuItem value={"2023"}>2023</MenuItem>
          <MenuItem value={"2024"}>2024</MenuItem>
          <MenuItem value={"2025"}>2025</MenuItem>
        </InputSelect>
      </Stack>

      <Stack
        {...barChartRootProps}
        sx={[
          { width: "100%", overflow: "auto" },
          ...renderSxPropsArray(barChartRootProps?.sx),
        ]}
      >
        <BarChart
          colors={colors}
          width={750}
          height={330}
          borderRadius={6}
          xAxis={[
            {
              categoryGapRatio: 0.56,
              data: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          ]}
          series={[
            {
              id: "asia",
              label: "Asia",
              highlightScope: {
                highlight: "item",
              },
              data: appBarChartData[yearsValue][0],
              labelMarkType: "circle",
              stack: "A",
            },
            {
              id: "europe",
              label: "Europe",
              highlightScope: {
                highlight: "item",
              },
              data: appBarChartData[yearsValue][1],
              labelMarkType: "circle",
              stack: "A",
            },
            {
              id: "americas",
              label: "Americas",
              valueFormatter: (value) => `${value}`,
              highlightScope: {
                highlight: "item",
              },
              data: appBarChartData[yearsValue][2],
              labelMarkType: "circle",
              stack: "A",
            },
          ]}
          {...barChartProps}
          sx={[
            (theme) => ({
              marginLeft: "-0.6rem",
              alignItems: "flex-start",
              justifyContent: "flex-start",

              "& .MuiChartsLegend-root": {
                marginLeft: "0",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                px: "2.2rem",

                "& .MuiChartsLabel-root": {
                  fontSize: "0.85rem",
                },
                "& .MuiChartsLabelMark-root": {
                  width: "1.15rem",
                  height: "1.15rem",
                },
              },

              "& .css-1vlm9pl-MuiBarPlot-root clipPath rect": {
                // clipPath: "inset(0px round 6px 6px 6px 6px) !important",
              },

              "& .MuiChartsAxisHighlight-root": {
                display: "none",
              },
              "& .MuiChartsAxis-tickLabel": {
                fill: grey[500],
                ...theme.applyStyles("dark", {
                  fill: grey[500],
                }),
              },
            }),
            ...renderSxPropsArray(barChartProps?.sx),
          ]}
          slots={{
            tooltip: ChartTooltip,
            ...barChartProps?.slots,
          }}
          slotProps={{
            axisTickLabel: {
              style: {
                fontWeight: "600",
              },
            },
            axisLine: { style: { display: "none" } },
            axisTick: { style: { display: "none" } },
            ...barChartProps?.slotProps,
          }}
        />
      </Stack>
    </CardUI>
  );
};

export interface AppBarChartProps extends CardUIProps {
  chartHeaderProps?: StackProps;
  barChartRootProps?: StackProps;
  barChartProps?: Omit<BarChartProps, "series">;
}

export default AppBarChart;
