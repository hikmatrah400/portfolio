import { use } from "react";
import { SideBarContext } from "../defaultProps";

export const useSideBar = () => {
  const context = use(SideBarContext);
  if (!context)
    throw new Error("useSideBar hook must be within in a SideBarContext");

  return context;
};
