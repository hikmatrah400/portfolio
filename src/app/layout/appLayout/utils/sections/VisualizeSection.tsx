"use client";

import DetailContentBox from "@/UI/material/DetailContentBox";
import { headerSection2ItemsData } from "../../data";
import AppBarChart from "../AppBarChart";
import { SectionTitle } from "../../components";
import Grid from "@mui/material/Grid";
import { alpha, useColorScheme } from "@mui/material/styles";

const VisualizeSection = () => {
  const { mode, systemMode } = useColorScheme();
  const themeMode = systemMode || (mode as "dark" | "light");

  const lightModeColors = [
    "rgb(146, 155, 163)",
    "rgb(186, 191, 198)",
    "rgb(217, 215, 221)",
  ];
  const darkModeColors = [
    "rgb(117, 130, 142)",
    "rgb(78, 88, 97)",
    "rgb(58, 66, 76)",
  ];

  return (
    <Grid
      container
      columns={12}
      size={12}
      sx={() => ({
        width: "100%",
        py: "4.5rem",
        position: "relative",
        rowGap: "2rem",

        "& .sectionPart1Box": {
          display: "flex",
          flexDirection: "column",
          rowGap: "3.5rem",

          "& .sectionItemsBox": {
            display: "flex",
            flexDirection: "column",
            rowGap: "2.8rem",
          },
        },

        "& .sectionPart2Box": {
          position: { xs: "unset", md: "absolute" },
          right: "-18rem",
          opacity: 0.7,
        },
      })}
    >
      <Grid size={{ xs: 12, xl: 6 }} container className="sectionPart1Box">
        <SectionTitle
          title={["What we can", "Build?"]}
          caption="Visualizing Success"
        />

        <Grid size={{ xs: 12, xl: 8 }} className="sectionItemsBox">
          {headerSection2ItemsData.map((elm, i) => (
            <DetailContentBox
              key={i}
              icon={elm.icon}
              title={elm.title}
              caption={elm.caption}
              sx={{ alignItems: "flex-start" }}
              slotProps={{
                title: {
                  sx: {
                    fontSize: "1.2rem",
                  },
                },
                caption: {
                  sx: {
                    fontSize: "1rem",
                    textWrap: "wrap",
                    marginTop: "0.45rem",
                  },
                },
                icon: {
                  sx: (theme) => ({
                    background: "transparent",
                    padding: "0",
                    "& svg": {
                      fontSize: "2.5rem",
                    },

                    ...theme.applyStyles("dark", {
                      background: "transparent",
                    }),
                  }),
                },
              }}
            />
          ))}
        </Grid>
      </Grid>

      <Grid size={{ xs: 12, md: 8 }} className="sectionPart2Box">
        <AppBarChart
          size={12}
          sx={(theme) => ({
            boxShadow: `-40px 40px 80px -8px ${alpha("#000", 0.16)}`,
            background: "transparent",

            ...theme.applyStyles("dark", {
              background: "transparent",
              boxShadow: `-40px 40px 80px -8px rgb(20, 20, 20)`,
            }),
          })}
          barChartProps={{
            colors: themeMode === "light" ? lightModeColors : darkModeColors,
            xAxis: [
              {
                categoryGapRatio: 0.72,
                data: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                ],
              },
            ],
          }}
        />
      </Grid>
    </Grid>
  );
};

export default VisualizeSection;
