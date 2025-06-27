"use client";

import React from "react";
import {
  DevolopmentRange,
  FrameworksSection,
  HeaderSection,
  VisualizeSection,
  InterfaceStartterSection,
} from "./layout/appLayout/utils";
import LazyPageLoader from "./LazyPageLoader";
import { usePageLoader } from "./Main";

const Home = () => {
  const { startLoading } = usePageLoader();

  return (
    <LazyPageLoader>
      <HeaderSection
        mainTitle={[
          "Creative Developer Portfolio",
          "NextJs & MongoDB",
          "Experts",
        ]}
        content="We specialize in developing complete MERN stack projects, including eCommerce stores, marketing platforms, admin dashboards, authentication systems (login & registration), and various other database-driven websites and applications."
        startLoading={startLoading}
      />
      <VisualizeSection />
      <InterfaceStartterSection />
      <FrameworksSection />
      <DevolopmentRange />
    </LazyPageLoader>
  );
};

export default Home;
