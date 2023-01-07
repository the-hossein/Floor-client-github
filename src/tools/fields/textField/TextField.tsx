import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { ChangeEvent, ChangeEventHandler, HtmlHTMLAttributes, InputHTMLAttributes, ReactElement } from "react";
import Style from "./TextField.module.scss";
interface Props<T> {
  icon?: ReactElement;
  lable?: string;
  placeHolder?: string;
  onChangeMethod:(param? : any)  => void;
}
const TextField = <T,>({ icon, lable, onChangeMethod }: Props<T>) => {
  return (
    <div className={Style.flooe_field}>
      <div>
        {icon}
        <span>{lable}</span>
      </div>
      <input type={"text"} onChange={onChangeMethod} />
    </div>
  );
}; 

export default TextField;
