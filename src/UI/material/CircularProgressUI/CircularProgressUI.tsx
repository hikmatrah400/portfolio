import { CircularProgress } from "@mui/material";
import { CircularProgressUIProps } from "./CircularProgressUIProps";
import clsx from "clsx";
import { useId } from "react";
import { renderSxPropsArray } from "@/UI/Functions";

const CircularProgressUI = ({
  gradientID,
  useGradient = false,
  gradientSvgProps,
  colors = [" #e01cd5", " #1CB5E0"],
  ...props
}: CircularProgressUIProps) => {
  const randomId = useId();

  return (
    <>
      {useGradient && (
        <svg width={0} height={0}>
          <defs>
            <linearGradient
              id={gradientID ?? randomId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              {...gradientSvgProps}
            >
              {colors.map((elm: string, i: number) => (
                <stop
                  key={i}
                  offset={i === 0 ? "0%" : "100%"}
                  stopColor={elm}
                />
              ))}
            </linearGradient>
          </defs>
        </svg>
      )}

      <CircularProgress
        color="info"
        className={clsx("circularProgress-root", props?.className || "")}
        {...props}
        sx={[
          () => ({
            ...(useGradient
              ? {
                  "& svg circle": {
                    stroke: `url(#${gradientID ?? randomId})`,
                  },
                }
              : {}),
            strokeLinecap: "round",
          }),
          ...renderSxPropsArray(props?.sx),
        ]}
      />
    </>
  );
};

export default CircularProgressUI;
