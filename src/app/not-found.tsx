"use client";

import React from "react";
import { HeaderSection } from "./layout/appLayout";
import { usePageLoader } from "./Main";
import LoginRounded from "@mui/icons-material/LoginRounded";
import { useRouter } from "next/navigation";
import HomeWorkRounded from "@mui/icons-material/HomeWorkRounded";
import { CardMedia, Stack } from "@mui/material";

const NotFound = () => {
  const router = useRouter();
  const { startLoading } = usePageLoader();

  return (
    <Stack>
      <HeaderSection
        mainTitle={["", "Page not", "Found!"]}
        content="You're on a wrong path, please click on go Back or Home Page button."
        startLoading={startLoading}
        disableContacts
        disableFooterIcons
        buttons={[
          {
            startIcon: <LoginRounded />,
            element: "Go back",
            caption: "previous",
            component: "button",
            onClick: () => router.back(),
          },
          {
            startIcon: <HomeWorkRounded />,
            element: "Home Page",
            href: "/",
          },
        ]}
        sectionElement={
          <>
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginBottom: "2rem",
                mt: "1.7rem",

                "& img": {
                  width: { xs: "75%", sm: "60%", lg: "25%" },
                  height: { xs: "75%", sm: "60%", lg: "25%" },
                },
              }}
            >
              <CardMedia
                image="/main/404Page.svg"
                component="img"
                loading="lazy"
              />
            </Stack>
          </>
        }
        sectionContainerProps={{
          sx: {
            gap: "1.1rem",
          },
        }}
      />
    </Stack>
  );
};

export default NotFound;
