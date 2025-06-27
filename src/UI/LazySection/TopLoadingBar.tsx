"use client";

import { useEffect, useState } from "react";
import { renderSxPropsArray } from "../Functions";
import LinearProgressUI, {
  linearProgressClasses,
  LinearProgressUIProps,
} from "../material/LinearProgressUI";

const TopLoadingBar = ({ value, ...props }: LinearProgressUIProps) => {
  const [progress, setProgress] = useState<{
    value: number | undefined;
    completed: boolean;
  }>({
    value: 0,
    completed: false,
  });

  useEffect(() => {
    setProgress({
      value,
      completed: false,
    });
    if (value === 100)
      setTimeout(
        () => setProgress((prev) => ({ ...prev, completed: true })),
        400
      );
  }, [value]);

  return (
    <LinearProgressUI
      variant="determinate"
      {...props}
      value={progress.completed ? 0 : progress.value}
      sx={[
        (theme) => ({
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          borderRadius: 0,
          width: "100%",
          height: "0.2rem",
          zIndex: 9999999,
          background: "transparent",
          transition: "all 0.2s ease",
          opacity: progress.completed ? 0 : 1,

          ...theme.applyStyles("dark", {
            background: "transparent",
          }),

          [`& .${linearProgressClasses.bar1}`]: {
            borderRadius: 0,
            background: "#308fe8",
            transitionDuration: "300ms",
          },
        }),
        ...renderSxPropsArray(props?.sx),
      ]}
    />
  );
};

export default TopLoadingBar;
