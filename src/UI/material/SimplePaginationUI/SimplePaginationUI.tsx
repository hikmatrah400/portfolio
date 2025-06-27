import Box from "@mui/material/Box";
import CardInfo from "../CardInfo";
import { SimplePaginationUIProps } from "./SimplePaginationUIProps";
import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
} from "@mui/icons-material";
import IconBtnUI from "../IconBtnUI";
import { useMemo } from "react";

const SimplePaginationUI = ({
  firstPageProperties,
  prevPageProperties,
  nextPageProperties,
  lastPageProperties,
  ...props
}: SimplePaginationUIProps) => {
  return (
    <>
      <CardInfo gridSize={12} {...props}>
        <Box
          sx={{
            padding: 0,

            "& button": {
              alignItems: "center",
              margin: "0 0.1rem",

              "& svg": {
                fontSize: "1.15rem",
                color: "rgb(47, 47, 47)",
              },
            },
          }}
        >
          {useMemo(
            () => (
              <IconBtnUI
                title="First Page"
                icon={<FirstPage />}
                {...firstPageProperties}
              />
            ),
            [firstPageProperties]
          )}
          {useMemo(
            () => (
              <IconBtnUI
                title="Previous Page"
                icon={<KeyboardArrowLeft />}
                {...prevPageProperties}
              />
            ),
            [prevPageProperties]
          )}
          {useMemo(
            () => (
              <IconBtnUI
                title="Next Page"
                icon={<KeyboardArrowRight />}
                {...nextPageProperties}
              />
            ),
            [nextPageProperties]
          )}
          {useMemo(
            () => (
              <IconBtnUI
                title="Last Page"
                icon={<LastPage />}
                {...lastPageProperties}
              />
            ),
            [lastPageProperties]
          )}
        </Box>
      </CardInfo>
    </>
  );
};

export default SimplePaginationUI;
