import Button from "@mui/material/Button";
import { GroupBtnProps } from "./GroupBtnProps";
import { memo } from "react";
import { SearchRounded } from "@mui/icons-material";
import { renderSxPropsArray } from "@/UI/Functions";

const GroupBtn = memo(
  ({ icon = <SearchRounded />, children, ...props }: GroupBtnProps) => {
    return (
      <Button
        {...props}
        className={`group-btn-root ${props.className ? props.className : ""}`}
        sx={[
          () => ({
            minWidth: "2.7rem",
            border: "1px solid #DEE2E6",
            borderRadius: "0 0.4rem 0.4rem 0",
            borderLeft: "unset",
            "& svg": {
              fontSize: "1.2rem",
            },
          }),
          ...renderSxPropsArray(props?.sx),
        ]}
      >
        {icon}
        {children}
      </Button>
    );
  }
);

export default GroupBtn;
