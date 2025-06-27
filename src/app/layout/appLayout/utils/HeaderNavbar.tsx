"use client";

import { NavModeSelectTheme } from "@/UI/Navbar";
import { memo } from "react";
import { usePageLoader } from "@/app/Main";
import { primary } from "@/UI/colors";
import SideBar, {
  sideBarButtonClasses,
  sideBarButtonDarkModeActiveStyles,
  sideBarLinkDarkModeActiveStyles,
  SideBarItemDef,
} from "@/UI/SideBar";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { cardMediaMainProps } from "@/UI/Functions";
import { HomeSvg, MailSvg, ProjectsSvg, UserSvg } from "../../icons";
import { alpha, Box } from "@mui/material";

const Items: () => SideBarItemDef[] = () => {
  const { startLoading } = usePageLoader();

  const mainProps: SideBarItemDef = {
    disableIconOnDesktop: true,
    slotProps: {
      root: {
        onClick: startLoading,
      },
    },
  };

  return [
    {
      id: "1",
      element: "Home",
      href: "/",
      startIcon: <HomeSvg />,
      ...mainProps,
    },
    {
      id: "2",
      element: "About",
      href: "/about",
      startIcon: <UserSvg />,
      ...mainProps,
    },
    {
      id: "3",
      element: "Skills",
      href: "/skills",
      startIcon: <ProjectsSvg />,
      ...mainProps,
    },
    {
      id: "4",
      startIcon: <MailSvg />,
      element: "Contact",
      href: "/contact",
      ...mainProps,
    },
    // {
    //   id: "MISC1",
    //   startIcon: <HamburgarMenuSvg />,
    //   element: "Level",
    //   children: [
    //     {
    //       id: "MISC4.1",
    //       label: "1.25",
    //       element: "Level 1a",
    //       children: [
    //         {
    //           id: "MISC4.1.1",
    //           label: "1.2",
    //           component: "div",
    //           element: "Level 2a",
    //         },
    //         {
    //           id: "MISC4.1.2",
    //           label: "1.1",
    //           element: "Level 2b",
    //           children: [
    //             {
    //               id: "MISC4.1.2.1",
    //               label: "1",
    //               component: "div",
    //               element: "Level 3a",
    //             },
    //             {
    //               id: "MISC4.1.2.2",
    //               label: "2",
    //               element: "Level 3b",
    //               component: "div",
    //             },
    //             {
    //               id: "MISC4.1.2.23",
    //               label: "2",
    //               element: "Level 3b",
    //               component: "div",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       id: "MISC4.2",
    //       element: "Level 1b",
    //       label: "1.25",
    //       component: "div",
    //     },
    //   ],
    // },
  ];
};

const HeaderNavbar = memo(() => {
  const theme = useTheme();
  const mobileMode = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <SideBar
        orientation="horizontal"
        items={Items}
        slotProps={
          mobileMode
            ? {}
            : {
                button: {
                  disableRipple: true,
                },
              }
        }
        sx={{
          [`& .${sideBarButtonClasses.button}`]: {
            borderRadius: "5rem",

            "&::before": {
              left: "0.6rem",
            },

            "&:hover": {
              background: "transparent",

              "&::before": {
                opacity: 0.6,
              },
            },
          },
          [`& .${sideBarButtonClasses.itemContent}`]: {
            padding: "0.35rem 1.1rem",
          },
        }}
        activeElementStyles={
          mobileMode
            ? {}
            : {
                link: (theme) => ({
                  background: "transparent",

                  ...theme.applyStyles("dark", {
                    ...sideBarLinkDarkModeActiveStyles,
                    background: "transparent",
                  }),
                  "&::before": {
                    opacity: 1,
                  },
                }),
                button: (theme) => ({
                  background: "transparent",

                  ...theme.applyStyles("dark", {
                    ...sideBarButtonDarkModeActiveStyles,
                    background: "transparent",
                  }),
                }),
              }
        }
        startElement={
          <>
            <Box
              className="imgBox"
              sx={{
                boxShadow: `0 15px 40px -15px ${alpha(primary.D100, 0.4)}`,
              }}
            >
              <CardMedia {...cardMediaMainProps("/logo.webp")} />
            </Box>
          </>
        }
        endElement={<NavModeSelectTheme />}
        disableEndElementInDrawer
      />
    </>
  );
});

export default HeaderNavbar;
