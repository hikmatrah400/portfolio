import React, { ReactNode, memo, useMemo } from "react";
import { ButtonProps } from "@mui/material/Button";
import Stack, { StackProps } from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid, { GridProps } from "@mui/material/Grid";
import {
  gridContainerStyle,
  homeContentStyle,
  homeMainButtonsStyle,
  homeMainContentStyle,
  stockItemsBoxStyle,
} from "../../styles/homePageStyles";
import NavLink, { NavLinkProps } from "@/UI/material/NavLink";
import IconButton from "@mui/material/IconButton";
import { renderSxPropsArray } from "@/UI/Functions";
import clsx from "clsx";
import DetailContentBox from "@/UI/material/DetailContentBox";
import { ContainedButton } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { primary } from "@/UI/colors";
import { AutoFixHighRounded, PhoneForwardedRounded } from "@mui/icons-material";
import axios from "axios";
import { Box } from "@mui/material";
import { SiNextdotjs } from "react-icons/si";
import { MaterilaUISvg, ViteSvg } from "../../../icons";
import { JavaScriptSvg, MongoDBSvg, TypeScriptSvg } from "../../svgs";

const icons = [
  <JavaScriptSvg />,
  <TypeScriptSvg />,
  <SiNextdotjs />,
  <MongoDBSvg style={{ fontSize: "1.9rem" }} />,
  <ViteSvg />,
  <MaterilaUISvg style={{ color: " #027ff4" }} />,
];

const HeaderSection = ({
  mainTitle,
  content,
  disableContacts = false,
  disableFooterIcons = false,
  buttons = [
    {
      element: "Contact Us",
      href: "/contact",
      startIcon: <PhoneForwardedRounded />,
      caption: "now",
    },
    {
      element: "View Skills",
      href: "/skills",
      startIcon: <AutoFixHighRounded />,
    },
  ],
  sectionElement,
  sectionContainerProps,
  startLoading,
  ...props
}: CommonProps) => {
  const { data, isPending } = useQuery({
    queryKey: ["contactData"],
    queryFn: getContactData,
  });

  return (
    <>
      <Grid
        container
        columns={12}
        gap={{ xs: 7, md: 8, lg: 12 }}
        {...props}
        className={clsx("headerSection-root", props?.className || "")}
        data-aos="fade-up"
        sx={[() => gridContainerStyle, ...renderSxPropsArray(props?.sx)]}
      >
        <AnimatedDot />
        <AnimatedDot />
        <AnimatedDot orientation="vertical" />
        <AnimatedDot />

        <Stack
          {...sectionContainerProps}
          sx={[
            {
              gap: "1.7rem",
            },
            ...renderSxPropsArray(sectionContainerProps?.sx),
          ]}
        >
          {useMemo(
            () => (
              <Stack sx={{ gap: "inherit" }}>
                <Typography component={"span"} sx={homeMainContentStyle}>
                  <span className="title">{mainTitle[0]}</span>

                  <span className="title2">
                    <span>{mainTitle[1]}</span>
                    <span className="linearTitle"> {mainTitle[2]}</span>
                  </span>
                </Typography>

                <Typography sx={homeContentStyle}>{content}</Typography>
              </Stack>
            ),
            []
          )}

          {!disableContacts && (
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                mt: "1rem",
              }}
            >
              {useMemo(
                () => (
                  <DetailContentBox
                    loading={isPending}
                    icon={[
                      "/avatar/avatar-2.webp",
                      "/avatar/avatar-3.webp",
                      "/avatar/avatar-4.webp",
                    ]}
                    title={`${
                      Array.isArray(data)
                        ? data?.length > 0
                          ? `${data.length}+`
                          : 0
                        : 0
                    } Contacts People`}
                    slotProps={{
                      icon: {
                        sx: (theme) => ({
                          padding: "0",
                          borderRadius: "50%",
                          width: "2.3rem",
                          height: "2.3rem",
                          border: "2px solid",
                          borderColor: "#fff",

                          ...theme.applyStyles("dark", {
                            borderColor: primary["D300"],
                          }),
                        }),
                      },
                    }}
                  />
                ),
                [data, isPending]
              )}
            </Stack>
          )}

          {sectionElement}

          {useMemo(
            () => (
              <>
                <Stack sx={homeMainButtonsStyle}>
                  {buttons.map((elm, i) => {
                    const { element, href, caption, ...other } = elm;
                    return (
                      <ContainedButton
                        key={i}
                        fullWidth
                        component={NavLink}
                        {...other}
                        className={`${i === 1 ? "btnOutlined" : ""} ${
                          other.className || ""
                        }`}
                        sx={{ padding: 0, width: { xs: "50%", md: "auto" } }}
                        onClick={(e) => {
                          startLoading();
                          other?.onClick?.(e);
                        }}
                        href={href || ""}
                      >
                        <span className="buttonContent">
                          {element}
                          {i === 0 && caption && (
                            <span className="linkContent">{caption}</span>
                          )}
                        </span>
                      </ContainedButton>
                    );
                  })}
                </Stack>

                {!disableFooterIcons && (
                  <Stack className="stockItemsBox" sx={stockItemsBoxStyle}>
                    <Typography sx={{ fontWeight: "600" }}>
                      Expert in
                    </Typography>

                    <Stack className="iconsBox">
                      {icons.map((elm, i) => (
                        <IconButton
                          key={i}
                          disableRipple
                          sx={{ cursor: "unset" }}
                        >
                          {elm}
                        </IconButton>
                      ))}
                    </Stack>
                  </Stack>
                )}
              </>
            ),
            []
          )}
        </Stack>
      </Grid>
    </>
  );
};

export const getContactData = async () => {
  try {
    const res = await axios.get("/api/contact");
    return res.status === 201 ? res.data : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

const AnimatedDot = memo(
  ({
    orientation = "horizontal",
  }: {
    orientation?: "horizontal" | "vertical";
  }) => {
    const id = `${orientation}dot`;
    const pos = orientation === "horizontal" ? "X" : "Y";

    return (
      <Box
        className="sectionCircle"
        sx={{
          padding: "0.45rem",
          position: "absolute",
          borderRadius: "50%",
          background: "#fff",
          pointerEvents: "none",
          animation: `${id} 6s ease-in-out infinite alternate-reverse both`,

          [`@keyframes ${id}`]: {
            "0%": {
              transform: `translate${pos}(-1rem)`,
            },
            "100%": {
              transform: `translate${pos}(1rem)`,
            },
          },
        }}
      ></Box>
    );
  }
);

type CommButtonProps = {
  element: ButtonProps["children"];
  href?: NavLinkProps["href"];
  caption?: string;
} & Omit<ButtonProps, "children">;

export interface CommonProps extends GridProps {
  mainTitle: (string | number)[];
  content: string;
  buttons?: CommButtonProps[];
  disableContacts?: boolean;
  disableFooterIcons?: boolean;
  startLoading: () => void;
  sectionElement?: ReactNode;
  sectionContainerProps?: StackProps;
}

export default HeaderSection;
