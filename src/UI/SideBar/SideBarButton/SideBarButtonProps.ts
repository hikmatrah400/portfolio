import { SxProps, Theme } from "@mui/material/styles";
import { UseTreeItemParameters } from "@mui/x-tree-view/useTreeItem";

export interface SideBarButtonProps
  extends UseTreeItemParameters,
    Omit<React.HTMLAttributes<HTMLLIElement>, "onFocus"> {
  sx?: SxProps<Theme>;
}
