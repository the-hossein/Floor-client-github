import React, { ReactComponentElement, ReactElement } from "react";
import PrimaryFooter from "../../components/footer/primaryFooter/PrimaryFooter";
import MainHeadeer from "../../components/header/mainHeader/MainHeadeer";
import Style from "./LeftSide.module.scss";

interface Props {
  content: ReactElement;
}
const LeftSide: React.FC<Props> = ({ content }) => {
  return (
    <div className={`${Style.left_side}`}>
      <>{content}</>
      <PrimaryFooter />
    </div>
  );
};

export default LeftSide;
