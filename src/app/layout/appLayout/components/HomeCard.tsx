import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import CardUI, { CardUIProps } from "@/UI/material/CardUI";
import { renderSxPropsArray } from "@/UI/Functions";

const HomeCard = ({
  icon,
  title,
  content,
  disableTransition = false,
  children,
  ...props
}: HomeCardPorps) => {
  return (
    <>
      <CardUI
        size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
        className="homeCard"
        {...props}
        sx={[
          () => ({
            padding: "1.25rem",
            border: "none",
            transition: "all 0.2s ease",

            ...(disableTransition
              ? {}
              : {
                  "&:hover": {
                    transform: "scale(1.04)",
                  },
                }),
          }),
          ...renderSxPropsArray(props?.sx),
        ]}
      >
        {children ?? (
          <Box sx={homeCardStyles}>
            <Box className="cardIconBox">{icon}</Box>
            <Typography variant="h2" className="cardTitle">
              {title}
            </Typography>
            <Typography component="p" className="cardContent">
              {content}
            </Typography>
          </Box>
        )}
      </CardUI>
    </>
  );
};

const homeCardStyles: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  gap: "0.9rem",

  "& .cardIconBox": {
    position: "relative",
    border: "1px solid",
    borderColor: "rgb(232, 232, 232)",
    borderRadius: "0.6rem",
    padding: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "0.2rem",
    background: "rgb(254, 254, 254)",

    "& svg": {
      fontSize: "1.5rem",
    },
  },

  "& .cardTitle": {
    fontSize: "0.94rem !important",
    color: "rgb(17, 17, 17)",
  },

  "& .cardContent": {
    textAlign: "left",
    color: grey[800],
    fontSize: "0.9rem",
  },

  ...theme.applyStyles("dark", {
    "& .cardIconBox": {
      background: "rgb(45, 47, 53)",
      borderColor: "rgb(46, 48, 54)",
    },
    "& .cardTitle": {
      color: "rgb(245, 245, 245)",
    },
    "& .cardContent": {
      color: grey[400],
    },
  }),
});

interface HomeCardPorps extends CardUIProps {
  icon?: ReactNode;
  title?: string;
  content?: string;
  disableTransition?: boolean;
}

export default HomeCard;
