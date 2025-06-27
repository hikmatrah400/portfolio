import { CardInfoProps } from "../CardInfo";
import { IconBtnUIProps } from "../IconBtnUI";

type OmitIconBtnProps = Omit<IconBtnUIProps, "icon">;
export interface SimplePaginationUIProps extends CardInfoProps {
  firstPageProperties: OmitIconBtnProps;
  prevPageProperties: OmitIconBtnProps;
  nextPageProperties: OmitIconBtnProps;
  lastPageProperties: OmitIconBtnProps;
}

export * from "../CardInfo";
