"use client";

import { Skills } from "../layout/appLayout/utils";
import LazyPageLoader from "../LazyPageLoader";

const SkillsPage = () => {
  return (
    <>
      <LazyPageLoader>
        <Skills />
      </LazyPageLoader>
    </>
  );
};

export default SkillsPage;
