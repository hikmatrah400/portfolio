import { primary } from "@/UI/colors";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { SiNextdotjs } from "react-icons/si";
import { MaterilaUISvg, ViteSvg } from "../../../icons";
import {
  JavaScriptSvg,
  MongoDBSvg,
  ReactSvg,
  SassSvg,
  TypeScriptSvg,
} from "../../svgs";
import { CardMedia } from "@mui/material";
import { cardMediaMainProps } from "@/UI/Functions";

const FrameworksMap = () => {
  return (
    <Stack
      sx={(theme) => ({
        width: { xs: "24rem", md: "28rem" },
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "2rem",

        "& .frameworkMainBox": {
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",

          "&.frameworks2ndBox": {
            justifyContent: "space-around",
          },
        },

        "& .frameworkBox": {
          borderRadius: "50%",
          boxShadow: `0 15px 40px -15px ${alpha(primary.D100, 0.4)}`,
          width: "3.5rem",
          height: "3.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: " #fefefe",

          ...theme.applyStyles("dark", {
            boxShadow: `0 15px 40px -15px rgba(255, 255, 255, 0.8)`,
          }),

          "&.portfolioBox": {
            width: "4.5rem",
            height: "4.5rem",
            boxShadow: `0 15px 40px -15px ${alpha(primary.D100, 0.3)}`,

            "& img": {
              width: "3.6rem",
              height: "3.6rem",
            },
          },
          "&.smallBox": {
            width: "3rem",
            height: "3rem",

            "& svg": {
              fontSize: "1.5rem",
            },
          },

          "& svg": {
            fontSize: "2.1rem",
          },
        },
      })}
    >
      <Stack className="frameworkMainBox framework1stBox">
        <Box className="smallBox frameworkBox">
          <JavaScriptSvg />
        </Box>

        <Box className="smallBox frameworkBox">
          <TypeScriptSvg />
        </Box>
      </Stack>

      <Stack className="frameworkMainBox frameworks2ndBox">
        <Box className="frameworkBox">
          <MongoDBSvg />
        </Box>

        <Box className="frameworkBox">
          <SassSvg />
        </Box>
      </Stack>

      {/* between ----------------------- */}
      <Box className="frameworkBox portfolioBox">
        <CardMedia {...cardMediaMainProps("/logo.webp")} />
      </Box>

      <Stack className="frameworkMainBox frameworks2ndBox">
        <Box className="frameworkBox">
          <ReactSvg style={{ color: " #00d8ff" }} />
        </Box>

        <Box className="frameworkBox">
          <MaterilaUISvg style={{ color: " #027ff4", fontSize: "1.6rem" }} />
        </Box>
      </Stack>

      <Stack className="frameworkMainBox framework1stBox">
        <Box className="smallBox frameworkBox">
          <SiNextdotjs style={{ color: primary.D400 }} />
        </Box>

        <Box className="smallBox frameworkBox">
          <ViteSvg />
        </Box>
      </Stack>
    </Stack>
  );
};

export default FrameworksMap;
