import {
  TreeItemContent as MuiTreeItemContent,
  UseTreeItemStatus,
} from "@mui/x-tree-view";
import { sideBarButtonClasses } from "../SideBarButtonClasses";
import { treeItemContentStyles } from "../SideBarButtonStyles";
import { renderSxPropsArray } from "@/UI/Functions";
import { Theme, SxProps } from "@mui/material/styles";
import clsx from "clsx";

const TreeItemContent = ({ children, ...props }: TreeItemContentProps) => {
  return (
    <MuiTreeItemContent
      {...props}
      className={clsx(sideBarButtonClasses.itemContent, props?.className || "")}
      sx={[treeItemContentStyles, ...renderSxPropsArray(props?.sx)]}
    >
      {children}
    </MuiTreeItemContent>
  );
};

export interface TreeItemContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  status: UseTreeItemStatus;
  sx?: SxProps<Theme>;
}

export default TreeItemContent;
