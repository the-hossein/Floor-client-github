import React from "react";
import { RightSideStyle } from "./RightSideStyle";
interface Props {
  background: string;
}
export const RightSide: React.FC<Props> = ({ background }) => {
  return <RightSideStyle bg={`url('${background}')`} top={0}></RightSideStyle>;
};
