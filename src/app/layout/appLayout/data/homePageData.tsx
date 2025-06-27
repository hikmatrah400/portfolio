"use client";
import React from "react";
import { BrandSvg, DesignSvg, DevelopmentSvg } from "../../icons";

type HeaderSection2ItemsProps = {
  icon: React.ReactNode;
  title: string;
  caption: string;
};

export const headerSection2ItemsData: HeaderSection2ItemsProps[] = [
  {
    icon: <BrandSvg />,
    title: "Database",
    caption: "We build complete full Stack projects in nextJS + mongoDB.",
  },
  {
    icon: <DesignSvg />,
    title: "UI & UX design",
    caption: "We build complete modren UI & UX designs.",
  },
  {
    icon: <DevelopmentSvg />,
    title: "Development",
    caption:
      "We use NextJS + React + TypeScript and MongoDB for full Stack Development.",
  },
];
