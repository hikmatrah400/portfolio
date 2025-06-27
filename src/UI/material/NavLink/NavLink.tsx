"use client";

import { usePathname } from "next/navigation";
import { NavLinkProps } from "./NavLinkProps";
import NextLink from "next/link";
import clsx from "clsx";
import Box from "@mui/material/Box";
import { renderSxPropsArray } from "@/UI/Functions";

const NavLink = ({
  exactPath = true,
  href,
  children,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = exactPath ? pathname === href : pathname.startsWith(href);

  return (
    <Box
      {...props}
      component={NextLink}
      href={href}
      className={clsx(props?.className || "", isActive ? "active" : "")}
      sx={[{ display: "block" }, ...renderSxPropsArray(props?.sx)]}
    >
      {children}
    </Box>
  );
};

export default NavLink;
