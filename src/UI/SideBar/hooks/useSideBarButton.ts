import { use } from "react";
import { SideBarButtonContext } from "../SideBarButton";

export const useSideBarButton = () => {
  const context = use(SideBarButtonContext);
  if (!context)
    throw new Error(
      "useSideBarButton hook must be within in a SideBarButtonContext."
    );
  return context;
};
