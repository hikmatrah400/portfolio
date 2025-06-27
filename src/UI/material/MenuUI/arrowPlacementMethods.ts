import { MenuUIProps } from "./MenuUIProps";

const arrowCenter = "50%";
const arrowPlaceMentLeft = "1.5rem";
const arrowPlaceMentTop = "1.2rem";

const arrowPlaceMentEndStyle = "0.5rem";
const arrowPlaceMentBottomRight = "-0.75rem";

export const arrowPlaceMentStyleMethods = (
  placeMent: MenuUIProps["arrowPlaceMent"]
) =>
  placeMent === "top"
    ? {
        top: "0",
        left: arrowCenter,
      }
    : placeMent === "top-start"
    ? {
        top: "0",
        left: arrowPlaceMentLeft,
      }
    : placeMent === "top-end"
    ? {
        top: "0",
        right: arrowPlaceMentEndStyle,
      }
    : placeMent === "bottom"
    ? {
        bottom: arrowPlaceMentBottomRight,
        left: arrowCenter,
      }
    : placeMent === "bottom-start"
    ? {
        bottom: arrowPlaceMentBottomRight,
        left: arrowPlaceMentLeft,
      }
    : placeMent === "bottom-end"
    ? {
        bottom: arrowPlaceMentBottomRight,
        right: arrowPlaceMentEndStyle,
      }
    : placeMent === "left"
    ? {
        left: "0",
        top: arrowCenter,
      }
    : placeMent === "left-start"
    ? {
        left: "0",
        top: arrowPlaceMentTop,
      }
    : placeMent === "left-end"
    ? {
        left: "0",
        bottom: arrowPlaceMentEndStyle,
      }
    : placeMent === "right"
    ? {
        right: arrowPlaceMentBottomRight,
        top: arrowCenter,
      }
    : placeMent === "right-start"
    ? {
        right: arrowPlaceMentBottomRight,
        top: arrowPlaceMentTop,
      }
    : placeMent === "right-end"
    ? {
        right: arrowPlaceMentBottomRight,
        bottom: arrowPlaceMentEndStyle,
      }
    : {};
