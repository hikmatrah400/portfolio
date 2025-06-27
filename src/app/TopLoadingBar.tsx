"use client";

import { primary } from "@/UI/colors";
import { LoadingBarContainer } from "react-top-loading-bar";

const TopLoadingBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadingBarContainer
      props={{
        height: 3,
        waitingTime: 500,
        transitionTime: 300,
        shadow: true,
        color: `linear-gradient(90deg, ${primary[200]}, ${primary[500]})`,
      }}
    >
      {children}
    </LoadingBarContainer>
  );
};

export default TopLoadingBar;
