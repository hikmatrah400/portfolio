"use client";

import Stack, { StackProps } from "@mui/material/Stack";
import LinearProgressUI, {
  linearProgressClasses,
  LinearProgressUIProps,
} from "../material/LinearProgressUI";
import { renderSxPropsArray } from "../Functions";

const SectionLoading = ({ progressProps, ...props }: SectionLoadingProps) => {
  return (
    <Stack
      {...props}
      sx={[
        {
          width: "100%",
          height: "calc(100vh - 11rem)",
          justifyContent: "center",
          alignItems: "center",
        },
        ...renderSxPropsArray(props?.sx),
      ]}
    >
      <LinearProgressUI
        {...progressProps}
        sx={[
          (theme) => ({
            width: { xs: "20rem", md: "25rem" },
            height: "0.25rem",

            [`& .${linearProgressClasses.bar2}`]: {
              background: " #999DA1",
            },

            ...theme.applyStyles("dark", {
              background: " #4F555B",

              [`& .${linearProgressClasses.bar1}`]: {
                background: " #fff",
              },
            }),
          }),
          ...renderSxPropsArray(progressProps?.sx),
        ]}
      />
    </Stack>
  );
};

export interface SectionLoadingProps extends StackProps {
  progressProps?: LinearProgressUIProps;
}

export default SectionLoading;
