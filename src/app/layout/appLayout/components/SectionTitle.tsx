import { renderSxPropsArray } from "@/UI/Functions";
import { grey } from "@/UI/colors";
import Stack, { StackProps } from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CSSObject, Theme } from "@mui/material/styles";
import clsx from "clsx";

const SectionTitle = ({
  title,
  caption,
  children,
  ...props
}: SectionTitleProps) => {
  return (
    <Stack
      {...props}
      className={clsx(sectionTitleClasses.root, props?.className || "")}
      sx={[
        (theme) => ({
          gap: "1.5rem",
          alignItems: { xs: "center", md: "flex-start" },

          [`& .${sectionTitleClasses.smallTitle}`]: {
            textTransform: "uppercase",
            color: " #82838F",
            fontSize: "0.8rem",
            fontWeight: "600",
            textAlign: { xs: "center", md: "start" },
          },

          [`& .${sectionTitleClasses.title}`]: {
            fontSize: { xs: "2.1rem", md: "2.75rem" },
            fontWeight: "bold",
            fontFamily: "MyPublicBoldSans",
            textAlign: { xs: "center", md: "start" },

            [`& .${sectionTitleClasses.linearTitle}`]: linearTitle(theme),
          },

          [`& .${sectionTitleClasses.content}`]: {
            fontSize: "1.1rem",
            color: grey[600],
            textAlign: { xs: "center", md: "start" },
          },
          [`& .${sectionTitleClasses.contentList}`]: {
            fontSize: "0.9rem",
            color: grey[500],
            fontWeight: "600",
            fontStyle: "italic",
            textAlign: { xs: "center", md: "start" },
          },

          ...theme.applyStyles("dark", {
            [`& .${sectionTitleClasses.content}`]: {
              color: grey[500],
            },
            [`& .${sectionTitleClasses.contentList}`]: {
              color: grey[600],
            },
          }),
        }),
        ...renderSxPropsArray(props?.sx),
      ]}
    >
      {caption && (
        <span className={sectionTitleClasses.smallTitle}>{caption}</span>
      )}
      <Typography component={"h1"} className={sectionTitleClasses.title}>
        {title[0]}
        <span className={sectionTitleClasses.linearTitle}> {title[1]}</span>
      </Typography>

      {children}
    </Stack>
  );
};

export interface SectionTitleProps extends Omit<StackProps, "title"> {
  caption?: string;
  title: [string, string];
}

export const linearTitle: (theme: Theme) => CSSObject = (theme) => ({
  background: `-webkit-linear-gradient(180deg, rgb(233, 233, 233), rgb(149, 151, 152))`,
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",

  ...theme.applyStyles("dark", {
    background: `-webkit-linear-gradient(180deg, rgb(38, 44, 52), rgb(164, 167, 173))`,
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }),
});

export const sectionTitleClasses = {
  root: "sectionBox",
  smallTitle: "smallTitle",
  title: "sectionTitle",
  linearTitle: "linearTitle",
  contentBox: "sectionContentBox",
  content: "content",
  contentList: "contentList",
};

export default SectionTitle;
