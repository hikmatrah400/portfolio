"use client";

import { SectionTitle } from "../../components";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import { Grid, Stack } from "@mui/material";
import { languagesNames, skillCardData } from "../../data";
import SkillsCard from "./SkillsCard";
import SkillsProgressChart from "./SkillsProgressChart";

const Skills = memo(() => {
  return (
    <>
      <SectionTitle caption="our skills" title={["Management", "Skills"]}>
        <Typography className="content">
          We have over 4 years experience in web full stack devolopment, and we
          have worked in
        </Typography>

        <Stack
          sx={{ rowGap: "0.5rem", "& .contentList": { fontSize: "1.15rem" } }}
        >
          {languagesNames.map((elm, i) => (
            <span className="contentList" key={i}>
              * {elm}
            </span>
          ))}
        </Stack>
      </SectionTitle>

      <Grid container columns={12} spacing={4} sx={{ marginTop: "1rem" }}>
        {skillCardData.map((elm, i) => {
          const { title, caption, background, icons, ...other } = elm;
          return (
            <SkillsCard
              key={i}
              {...{ title, caption, background, icons }}
              {...other}
            />
          );
        })}
      </Grid>

      <SkillsProgressChart />
    </>
  );
});

export default Skills;
