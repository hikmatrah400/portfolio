import { SxProps, Theme } from "@mui/material/styles";
import { ShapeProps } from "./BodyClickCircleProps";

export const bodyClickCircleStyles: (
  theme: Theme,
  duration: ShapeProps["duration"],
  animationTimingFunction: ShapeProps["animationTimingFunction"],
  size: ShapeProps["size"],
  shapeColor: ShapeProps["shapeColor"]
) => SxProps = (
  theme,
  duration = 1,
  animationTimingFunction = "ease",
  size = 3.6,
  shapeColor = "rgb(84, 175, 255)"
) => ({
  width: "100%",
  height: "100vh",
  overflowY: "auto",
  overflowX: "hidden",

  "& .shape-root": {
    position: "absolute",
    width: `${size}rem`,
    height: `${size}rem`,
    left: "0",
    top: "0",
    zIndex: "99999",
    borderRadius: "50%",
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0)",
    pointerEvents: "none",
    animation: `bodyClickedCircle ${duration}s ${animationTimingFunction} 1`,
    boxShadow: `inset 1px 1px 10px 5px ${shapeColor}`,
  },

  "@keyframes bodyClickedCircle": {
    "0%": {
      opacity: 1,
      transform: "translate(-50%, -50%) scale(0)",
    },
    "100%": {
      opacity: 0,
      transform: "translate(-50%, -50%) scale(1)",
    },
  },
});
