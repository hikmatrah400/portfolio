"use client";

import "./style.scss";
import { BodyClickCircleProps } from "./BodyClickCircleProps";
import Box from "@mui/material/Box";
import { bodyClickCircleStyles } from "./BodyClickCircleStyles";
import { memo, MouseEvent, useRef } from "react";
import { renderSxPropsArray } from "../Functions";

const BodyClickCircle = memo(
  ({
    children,
    shapeProps = {
      animationTimingFunction: "ease",
      duration: 1,
      size: 3.6,
      shapeColor: "rgb(84, 175, 255)",
      sx: undefined,
    },
    ...props
  }: BodyClickCircleProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const {
      animationTimingFunction,
      duration,
      size,
      shapeColor,
      sx: shapeSx,
    } = shapeProps;

    const handleClick = (
      e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
      try {
        const { clientX, clientY } = e.nativeEvent;

        const ripple = document.createElement("span");
        ripple.classList.add("shape-root");

        ripple.style.left = `${clientX}px`;
        ripple.style.top = `${clientY}px`;
        containerRef.current?.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, (duration || 1) * 1000);
      } catch (err) {
        return console.log(err);
      }
    };

    return (
      <Box
        ref={containerRef}
        {...props}
        className={`shapeContiner-root ${
          props.className ? props.className : ""
        }`}
        sx={[
          (theme) =>
            bodyClickCircleStyles(
              theme,
              duration || 1,
              animationTimingFunction,
              size,
              shapeColor
            ),
          (theme) => ({
            "& .shape-root":
              typeof shapeSx === "function" ? shapeSx(theme) : shapeSx,
          }),
          ...renderSxPropsArray(props?.sx)
        ]}
        onMouseUp={(e) => {
          handleClick(e);
          if (props?.onClick) props?.onClick(e);
        }}
      >
        {children}
      </Box>
    );
  }
);

export default BodyClickCircle;
