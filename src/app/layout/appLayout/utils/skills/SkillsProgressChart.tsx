"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { BiLogoMongodb, BiLogoReact, BiSolidPackage } from "react-icons/bi";
import { FaSass } from "react-icons/fa6";
import { primary, secondary, success } from "@/UI/colors";
import ColorfulProgressCard, {
  ColorfulProgressCardSlotsAndSlotProps,
} from "@/UI/material/ColorfulProgressCard";
import { MaterilaUISvg } from "@/app/layout/icons";
import { ReactSvg } from "../../svgs";

const SkillsProgressChart = () => {
  const progressCardProps: (
    background: string,
    method?: ColorfulProgressCardSlotsAndSlotProps["slotProps"]
  ) => {
    slotProps: ColorfulProgressCardSlotsAndSlotProps["slotProps"];
  } = (background, method) => ({
    slotProps: {
      card: {
        style: { background },
        sx: {
          height: "9rem",
        },
        size: { xs: 12, sm: 6, md: 4, lg: 4 },
      },
      ...method,
    },
  });

  return (
    <>
      <Box sx={{ textAlign: "center", width: "100%" }}>
        <Typography variant={"h1"} className="headerTitle">
          Rank of Languages
        </Typography>

        <Grid container size={12} spacing={3} sx={{ mt: "2rem" }}>
          <ColorfulProgressCard
            progressValue={90}
            progressColors={["rgb(0, 160, 204)", " #51E4F2"]}
            title="Master"
            caption="React + NextJs + TypeScript"
            icon={<ReactSvg disableStyles />}
            {...progressCardProps(primary[500])}
          />

          <ColorfulProgressCard
            progressValue={75}
            progressColors={["rgb(255, 40, 162)", "rgb(255, 147, 235)"]}
            title="Expert"
            caption="SASS/SCSS"
            icon={<FaSass />}
            {...progressCardProps("rgb(189, 0, 97)")}
          />

          <ColorfulProgressCard
            progressValue={60}
            progressColors={[success[600], success[300]]}
            title="Expert"
            caption="MongoDB"
            icon={<BiLogoMongodb />}
            {...progressCardProps(success[700])}
          />

          <ColorfulProgressCard
            progressValue={50}
            progressColors={[primary[400], primary[200]]}
            title="Excellent"
            caption="Material UI"
            icon={<MaterilaUISvg />}
            {...progressCardProps("rgb(0, 99, 199)", {
              icon: {
                sx: {
                  "& svg": {
                    fontSize: "6.1rem",
                  },
                },
              },
            })}
          />

          <ColorfulProgressCard
            progressValue={30}
            title={"Very good"}
            caption={"Other Tools"}
            progressColors={[secondary[500], secondary[200]]}
            icon={<BiSolidPackage />}
            {...progressCardProps(secondary[700])}
          />
        </Grid>
      </Box>
    </>
  );
};

export default SkillsProgressChart;
