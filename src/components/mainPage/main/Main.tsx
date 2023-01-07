import React from "react";
import Style from "../MainPage.module.scss";
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AlignCenterContainer } from "../../../tools/customeContainer/AlignCenterContainer";
const Main: React.FC = () => {
  return (
    <AlignCenterContainer _height="120px">
      <div className={Style.mainpage_box}>
        <img className={Style.mainpage_logo} src={Logo} />
        <Link className={`${Style.Signup_button}`} to={"/login"}>
          Sign Up
        </Link>
        <Link className={`${Style.Signin_button}`} to={"/login"}>
          Log in
        </Link>
      </div>
    </AlignCenterContainer>
  );
};

export default Main;
