import { Theme } from "@mui/material/styles";
import type { DataGridProComponents } from "@mui/x-data-grid-pro/themeAugmentation";
import { grey } from "@mui/material/colors";

export const dataGridCustomizations: DataGridProComponents<Theme> &
  DataGridProComponents<Theme> = {
  MuiDataGrid: {
    styleOverrides: {
      root: {
        fontWeight: "600",
        border: "none",
        borderRadius: "0",
        background: "transparent",

        "& .MuiDataGrid-filler div": {
          border: "none !important",
        },
      },
      columnHeader: ({ theme }) => ({
        background: "rgb(243, 245, 248)",
        color: "rgb(101, 108, 114)",
        border: "none !important",
        padding: "0rem 1.5rem",

        ...theme.applyStyles("dark", {
          background: " #27313C",
          color: "rgb(153, 163, 173)",
        }),
      }),
      row: ({ theme }) => ({
        "&:hover": {
          background: " #F4F7F8",
        },

        ...theme.applyStyles("dark", {
          "&:hover": {
            background: " #232E37",
          },
        }),
      }),
      "columnHeader--sorted": ({ theme }) => ({
        color: "rgb(54, 55, 58)",

        "& svg": {
          color: " #6B7887",
        },

        ...theme.applyStyles("dark", {
          color: "rgb(252, 253, 255)",

          "& svg": {
            color: "rgb(153, 163, 173)",
          },
        }),
      }),
      cell: ({ theme }) => ({
        padding: "0rem 1.5rem",
        color: "rgb(54, 55, 58)",
        borderTop: "1px dotted",
        borderColor: grey[300],
        fontSize: "0.95rem",

        ...theme.applyStyles("dark", {
          color: "rgb(252, 253, 255)",
          borderColor: grey[800],
        }),
      }),
      footerContainer: {
        borderTop: "1px dotted",
      },
      columnHeaderCheckbox: {
        padding: "0",
      },
      cellCheckbox: {
        padding: "0.5rem",
      },
    },
  },
};
