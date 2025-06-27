import CardUI, { CardUIProps } from "@/UI/material/CardUI";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";

const SkillsCard = ({
  title,
  caption,
  icons,
  background,
  ...props
}: SkillsCardProps) => {
  return (
    <CardUI
      size={{ xs: 12, md: 6 }}
      {...props}
      sx={(theme) => ({
        position: "relative",
        height: { xs: "auto", sm: "19rem" },
        alignItems: "flex-start",
        overflow: "hidden",
        borderRadius: "1.5rem",
        padding: "2rem",
        paddingTop: { xs: "9.5rem", sm: "2rem" },
        transition: "all 0.3s ease",

        "&:hover": {
          transform: "scale(1.025)",
        },

        "& svg": {
          fontSize: "2rem !important",
          marginRight: "0.5rem",
        },

        "& .animateIcons": {
          width: { xs: "100%", sm: "12rem" },
          position: "absolute",
          right: { xs: 0, sm: "1.5rem" },
          top: { xs: 0, sm: "unset" },
          marginTop: "1rem",
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          flexWrap: "wrap",
          gap: "0.7rem",

          "& svg": {
            color: `${background} !important`,
            fontSize: { xs: "3.3rem !important", sm: "3.7rem !important" },
          },
        },

        "&::before": {
          content: '""',
          position: "absolute",
          width: "30rem",
          height: "30rem",
          borderRadius: { xs: "50%", sm: "4.5rem" },
          background: `linear-gradient(90deg, ${alpha(
            background,
            0.1
          )}, rgb(255, 255, 255))`,
          right: { xs: "-2.5rem", sm: "-20rem" },
          top: { xs: "-22.5rem", sm: "-11.5rem" },
          transform: { xs: "rotate(-80deg)", sm: "rotate(40deg)" },
          boxShadow: `inset 3px -3px 50px ${alpha(background, 0.1)}`,
          zIndex: 2,

          ...theme.applyStyles("dark", {
            background: `linear-gradient(90deg, ${alpha(
              background,
              0.1
            )}, rgba(255, 255, 255, 0))`,
          }),
        },

        "& .cardContent": {
          marginTop: "1rem",
          fontSize: "0.95rem",
        },
      })}
    >
      <Box className="animateIcons">{icons}</Box>

      <Stack sx={{ width: { xs: "100%", sm: "55%" } }}>
        <span className="cardTitle">{title}</span>
        <span className="cardContent">{caption}</span>

        <Box sx={{ mt: "1.5rem" }}>{icons}</Box>
      </Stack>
    </CardUI>
  );
};

export interface SkillsCardProps extends CardUIProps {
  title: string;
  caption: string;
  icons: React.JSX.Element;
  background: string;
}

export default SkillsCard;
