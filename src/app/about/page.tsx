"use client";

import Typography from "@mui/material/Typography";
import { HeaderSection } from "../layout/appLayout";
import { SectionTitle } from "../layout/appLayout/components";
import LazyPageLoader from "../LazyPageLoader";
import { usePageLoader } from "../Main";
import Stack from "@mui/material/Stack";

const About = () => {
  const { startLoading } = usePageLoader();

  return (
    <LazyPageLoader>
      <HeaderSection
        mainTitle={["About the web Developers", "NextJS & MongoDB", "Experts"]}
        content="We are the web full Stack developers and we can generate every kind of project or website with modren UI, UX design and with database."
        startLoading={startLoading}
      />

      <SectionTitle
        caption="Information"
        title={["Information of", "Developers"]}
      >
        <Typography className="content">
          We are two ‟Master” full stack developers of MERN Stack Projects.
        </Typography>

        <Stack
          sx={{ rowGap: "0.5rem", "& .contentList": { fontSize: "1.15rem" } }}
        >
          <span className="contentList">1. Mohammadullah</span>
          <span className="contentList">2. Munirullah</span>
        </Stack>

        <Typography className="content">
          We can create every kind of websites, projects and databases for
          store, marketing platforms, bank managements, stock managements, admin
          dashboards, authentication systems and other more eCommer projects and
          applications with modren UI and UX design with best and with secure
          database.
        </Typography>
      </SectionTitle>
    </LazyPageLoader>
  );
};

export default About;
