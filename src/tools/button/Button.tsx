import React from "react";
import { Link } from "react-router-dom";
import Style from "./Button.module.scss";
interface Props {
  text: string;
  link?: string | undefined;
  type: string;
  clickMethod?: () => void;
}
const Button: React.FC<Props> = ({
  text,
  link,
  clickMethod,
  type = "link",
}) => {
  return (
    <>
      {type === "link" && link !== undefined ? (
        <Link className={Style.button} to={link}>
          {text}
        </Link>
      ) : (
        <a className={Style.button} onClick={clickMethod}>
          {text}
        </a>
      )}
    </>
  );
};

export default Button;
