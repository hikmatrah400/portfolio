"use client";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { footerData } from "../data/footerData";
import {
  footerCopyRightStyles,
  footerLeftSideStyles,
  footerRightSideStyles,
} from "../styles/footerStyles";
import { FacebookRounded, GitHub, WhatsApp } from "@mui/icons-material";
import { memo } from "react";
import NavLink, { NavLinkProps } from "@/UI/material/NavLink";
import CardMedia from "@mui/material/CardMedia";
import { usePageLoader } from "@/app/Main";

const Footer = memo(() => {
  const { startLoading } = usePageLoader();

  return (
    <Container
      component="footer"
      sx={() => ({
        minWidth: { xs: "auto", xl: "75rem" },
        px: "1rem",
        pt: { xs: "2rem", md: "3rem" },
        pb: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      })}
    >
      <Grid
        container
        size={12}
        sx={{ justifyContent: "space-between", gap: { xs: "2rem", md: "0" } }}
      >
        <Grid size={{ xs: 12, sm: 4, md: 4, lg: 6 }} sx={footerLeftSideStyles}>
          <Stack className="footerHeader">
            <Box className="imgBox">
              <CardMedia
                component="img"
                loading="lazy"
                height={100}
                width={100}
                image="/logo.webp"
                alt="Browser can't support this image"
                sx={{ objectFit: "unset" }}
              />
            </Box>

            <Typography className="footerTitle" variant="h2">
              Developer Portfolio
            </Typography>
          </Stack>

          <Stack className="footerHeaderContent">
            <Typography className="title" variant="h4">
              Developers:
            </Typography>
            <Typography className="title colorFul" component="span">
              Mohammadullah & Munirullah
            </Typography>
          </Stack>
        </Grid>

        <Grid
          container
          size={{ xs: 12, sm: 6, md: 7, lg: 6 }}
          spacing={2}
          sx={footerRightSideStyles}
        >
          {footerData.map((elm, i) => (
            <Grid
              key={i}
              size={{ xs: 6, md: 6 }}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography className="footerRightTitle">{elm.title}</Typography>

              <Box className="linksContainer">
                {elm.contents.map((elm, i) => (
                  <NavLink key={i} href={elm.to} onClick={startLoading}>
                    {elm.label}
                  </NavLink>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Divider sx={{ mt: "0.9rem" }} />

      <Stack sx={footerCopyRightStyles}>
        <Typography component={"span"} className="footerCopyRight">
          Copyright © 2025 Portfolio, All rights reserved.
        </Typography>

        <Stack className="footerLinkBtnBox">
          <FooterIconButton
            href={"https://www.facebook.com/share/163oTHBAYw/?mibextid=qi2Omg"}
          >
            <FacebookRounded />
          </FooterIconButton>
        </Stack>
      </Stack>
    </Container>
  );
});

export const FooterIconButton = ({
  href,
  linkProps,
  children,
  ...props
}: IconButtonProps & {
  href: NavLinkProps["href"];
  linkProps?: Omit<NavLinkProps, "href">;
}) => (
  <IconButton
    size="small"
    {...props}
    className={`footerLinkBtn ${props?.className || ""}`}
  >
    <NavLink href={href} target="_blank" {...linkProps}>
      {children}
    </NavLink>
  </IconButton>
);

export default Footer;
