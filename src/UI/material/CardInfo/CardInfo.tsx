import "./CardInfo.scss";
import AutoAwesomeRounded from "@mui/icons-material/AutoAwesomeRounded";
import { memo } from "react";
import CardUI from "../CardUI";
import { Box, Stack } from "@mui/material";
import { CardInfoProps } from "./CardInfoProps";
import { renderSxPropsArray } from "@/UI/Functions";

const CardInfo = memo(
  ({
    label,
    value,
    startComponent = <StarSvg />,
    children,
    ...props
  }: CardInfoProps) => {
    return (
      <>
        <CardUI
          {...props}
          className={`cardInfo-root ${props.className ? props.className : ""}`}
          sx={[
            () => ({ ...cardSxProps, overflow: "auto" }),
            ...renderSxPropsArray(props?.sx),
          ]}
        >
          <Stack
            sx={{
              gap: "1rem",
              justifyContent: "space-between",
              flexDirection: "row",
              minWidth: "max-content",
              width: "100%",
            }}
          >
            <Box className="main">
              {startComponent}
              <Box className="label">{label}</Box>
            </Box>
            {children ? (
              children
            ) : (
              <Box className="number">
                {typeof value === "number" ? value.toLocaleString() : value}
              </Box>
            )}
          </Stack>
        </CardUI>
      </>
    );
  }
);

const cardSxProps = {
  fontSize: "0.9rem",
  fontWeight: "600",
  color: "#000",
  padding: "0rem 1.6rem",
};

const StarSvg = () => (
  <AutoAwesomeRounded
    sx={{
      fontSize: "1.15rem",
      marginTop: "0.11rem",
      marginRight: "0.5rem",
      color: "rgb(0, 153, 219)",
    }}
  />
);

export default CardInfo;
