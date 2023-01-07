
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Style from "./RoleBox.module.scss";
interface Props {
  title: string;
  icon: ReactElement;
  description: string;
  link: string;
}
const RoleBox: React.FC<Props> = ({ title, icon, description, link }) => {
  return (
    <Link to={link} className={Style.box}>
      <h3>
        {icon}
        <span>{title}</span>
      </h3>
      <p>{description}</p>
    </Link>
  );
};

export default RoleBox;
