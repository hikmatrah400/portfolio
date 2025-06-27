import React from "react";
import { SectionTitle } from "../../components";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FrameworksMap from "./FrameworksMap";
import { languagesNames } from "../../data";

const FrameworksSection = () => {
  return (
    <Grid container columns={12} size={12}>
      <Grid size={{ xs: 12, md: 6 }} container className="sectionPart1Box">
        <SectionTitle
          title={["Robust integration", "framework"]}
          caption="Integrations"
        >
          <Typography className="content">
            We use the robust frameworks.
          </Typography>

          <Stack sx={{ rowGap: "0.5rem" }}>
            {languagesNames.map((elm, i) => (
              <span className="contentList" key={i}>
                * {elm}
              </span>
            ))}
          </Stack>
        </SectionTitle>
      </Grid>

      <Grid
        size={{ xs: 12, md: 6 }}
        className="sectionPart2Box"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: "8rem",
          pb: "4rem",
        }}
      >
        <FrameworksMap />
      </Grid>
    </Grid>
  );
};

export default FrameworksSection;
