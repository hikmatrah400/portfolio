import {
  Box,
  BoxProps,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { linearTitle } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { getContactData } from "./HeaderSection";
import { grey } from "@/UI/colors";

export const StyledDivider = (props: BoxProps) => (
  <Box
    {...props}
    sx={(theme) => ({
      width: "100%",
      height: "1px",
      background: `-webkit-linear-gradient(180deg, rgb(252, 252, 252), ${grey[300]}, rgb(252, 252, 252))`,

      ...theme.applyStyles("dark", {
        background: `-webkit-linear-gradient(180deg, rgb(26, 26, 26), rgb(48, 56, 65), rgb(26, 26, 26))`,
      }),
    })}
  />
);

const DevolopmentRange = () => {
  const { data, isPending } = useQuery({
    queryKey: ["contactData"],
    queryFn: getContactData,
  });

  const gridSize = { xs: 12, sm: 6, md: 4 };

  return (
    <Stack sx={{ rowGap: "3.5rem" }}>
      <StyledDivider />

      <Grid
        columns={12}
        container
        spacing={2}
        rowGap={"3rem"}
        sx={(theme) => ({
          "& .rangeContainer": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },

          "& .titleRange": {
            fontSize: "3.5rem",
            fontWeight: "700",
          },
          "& .title": {
            fontSize: "1.2rem",
            fontWeight: "600",
            ...linearTitle(theme),
          },
        })}
      >
        <Grid size={gridSize} className="rangeContainer">
          <Typography className="titleRange" variant="h4">
            20+
          </Typography>
          <Typography className="title">Projects</Typography>
        </Grid>

        <Grid size={gridSize} className="rangeContainer">
          <Typography className="titleRange" variant="h4">
            10+
          </Typography>
          <Typography className="title">Frameworks</Typography>
        </Grid>

        <Grid size={gridSize} className="rangeContainer">
          <Typography className="titleRange" variant="h4">
            {isPending ? (
              <Skeleton sx={{ width: "5rem" }} />
            ) : data?.length > 0 ? (
              `${data.length}+`
            ) : (
              0
            )}
          </Typography>
          <Typography className="title">Contacts</Typography>
        </Grid>
      </Grid>

      <StyledDivider />
    </Stack>
  );
};

export default DevolopmentRange;
