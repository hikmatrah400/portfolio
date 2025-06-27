import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { SectionTitle } from "../../components";
import { grey, primary } from "@/UI/colors";

const InterfaceStartterSection = () => {
  return (
    <Grid
      container
      columns={12}
      size={12}
      sx={(theme) => ({
        width: "100%",
        py: "4.5rem",
        position: "relative",
        rowGap: "2rem",

        "& .sectionPart1Box": {
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          rowGap: "3.5rem",

          "& .browseBtn": {
            textTransform: "capitalize",
            border: `1px solid ${grey[300]}`,
            padding: "0.6rem 0.85rem",
            color: primary["D200"],
            fontSize: "0.95rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            "& svg": {
              fontSize: "1.25rem",
              marginLeft: "0.45rem",
            },
          },
        },

        "& .sectionPart2Box": {
          display: "flex",
          flexDirection: "column",
          rowGap: "0.5rem",
          alignItems: { xs: "center", md: "flex-start" },

          "& .text": {
            fontSize: "1.2rem",
            textAlign: { xs: "center", md: "start" },
          },
          "& .textContent": {
            color: grey[500],
            fontSize: "1.2rem",
            textAlign: { xs: "center", md: "start" },

            ...theme.applyStyles("dark", {
              color: grey[600],
            }),
          },
        },
      })}
    >
      <Grid size={{ xs: 12, md: 7 }} container className="sectionPart1Box">
        <SectionTitle
          title={["Large bundle of", "Projects"]}
          caption="Interface Starter Kit"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 5 }} className="sectionPart2Box">
        <Typography component={"h2"} className="text">
          Explore a comprehensive range of projects
        </Typography>
        <span className="textContent">
          like store, marketing platforms, authentication systems, admin
          dashboard, and others database-driven websites and applications.
        </span>
      </Grid>
    </Grid>
  );
};

export default InterfaceStartterSection;
