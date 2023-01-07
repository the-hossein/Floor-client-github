import React, { ReactElement } from "react";
import Style from "./TextArea.module.scss";
interface Props {
  icon ? : ReactElement;
  lable: string;
  onChangeMethod:(param? : any)  => void;
}
const TextArea: React.FC<Props> = ({ icon, lable, onChangeMethod }) => {
  return (
    <div className={Style.flooe_textarea}>
      <div>
        {icon}
        <span>{lable}</span>
      </div>
      <textarea onChange={onChangeMethod} />
    </div>
  );
};

export default TextArea;
