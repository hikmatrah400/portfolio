import { renderSxPropsArray } from "@/UI/Functions";
import Box, { BoxProps } from "@mui/material/Box";
import clsx from "clsx";
import { sideBarButtonClasses } from "../SideBarButtonClasses";

const ItemIcon = ({
  children,
  iconProps = {
    disableIconOnDesktop: undefined,
    disableIconOnMobile: undefined,
  },
  ...props
}: ItemIconProps) => {
  const { disableIconOnDesktop, disableIconOnMobile } = iconProps;

  return (
    <Box
      className={clsx(sideBarButtonClasses.icon, props?.className || "")}
      {...props}
      sx={[
        {
          background: "transparent",
          width: "1.6rem",
          height: "1.3rem",
          borderRadius: "0",
          display: disableIconOnDesktop
            ? { xs: "flex", md: "none" }
            : disableIconOnMobile
            ? { xs: "none", md: "flex" }
            : "flex",
          alignItems: "center",
          justifyContent: "center",

          "& svg": {
            fontSize: "1.5rem",
          },
        },
        ...renderSxPropsArray(props?.sx),
      ]}
    >
      {children}
    </Box>
  );
};

export interface ItemIconProps extends BoxProps {
  iconProps?: {
    disableIconOnDesktop?: boolean;
    disableIconOnMobile?: boolean;
  };
}

export default ItemIcon;
