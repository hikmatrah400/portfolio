import { RiNextjsFill } from "react-icons/ri";
import { MongoDBSvg, ReactSvg, SassSvg, TypeScriptSvg } from "../svgs";
import { SkillsCardProps } from "../utils";
import { primary, success } from "@/UI/colors";
import { cyan, orange, purple, yellow } from "@mui/material/colors";
import { BiLogoBootstrap, BiLogoCss3 } from "react-icons/bi";
import { ContactUsersSvg, MaterilaUISvg, ProjectsSvg } from "../../icons";
import {
  LocalFireDepartment,
  SettingsSuggestRounded,
} from "@mui/icons-material";
import { HiDatabase } from "react-icons/hi";

export const languagesNames = [
  "HTML",
  "CSS",
  "Bootstrap",
  "SASS/SCSS",
  "JavaScript",
  "ES6/ES7",
  "React",
  "TypeScript",
  "Next JS",
  "MongoDB",
];

export const skillCardData: SkillsCardProps[] = [
  {
    title: "React + NextJs + TypeScript",
    caption: "We use React + NextJs to build scalable websites and projects.",
    icons: (
      <>
        <ReactSvg color="rgb(0, 183, 255)" />
        <RiNextjsFill />
        <TypeScriptSvg />
      </>
    ),
    background: primary[300],
  },
  {
    title: "Designing Tools",
    caption:
      "We utilize SASS, Bootstrap, and other modern design frameworks to craft beautiful user interfaces.",
    icons: (
      <>
        <BiLogoCss3 color={primary[300]} />
        <SassSvg />
        <BiLogoBootstrap color={purple[400]} />
      </>
    ),
    background: "rgb(216, 0, 112)",
  },
  {
    title: "Database",
    caption:
      "We build secure and powerful authentication systems using NextJs and MongoDB.",
    icons: (
      <>
        <HiDatabase color={orange[400]} />
        <MongoDBSvg />
      </>
    ),
    background: success[500],
  },
  {
    title: "Material UI",
    caption:
      "We rely on the Material UI framework for developing advanced and premium UI components.",
    icons: <MaterilaUISvg style={{ color: "rgb(0, 120, 239)" }} />,
    background: "rgb(0, 120, 239)",
  },
  {
    title: "Management",
    caption:
      "We specialize in building management systems for businesses, stores, schools, marketing platforms, banks, and stock projects.",
    icons: (
      <>
        <SettingsSuggestRounded sx={{ color: cyan[600] }} />
        <LocalFireDepartment sx={{ color: yellow[800] }} />
      </>
    ),
    background: purple[400],
  },
  {
    title: "Experience",
    caption:
      "We have over 4 years of experience developing full-stack applications using the MERN stack.",
    icons: (
      <>
        <ContactUsersSvg sx={{ color: orange[500] }} />
        <ProjectsSvg sx={{ color: success[500] }} />
      </>
    ),
    background: orange[500],
  },
];
