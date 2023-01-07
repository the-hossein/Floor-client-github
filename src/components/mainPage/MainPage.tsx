import React, { ReactElement, useLayoutEffect, useState } from "react";

import LeftSide from "../../tools/leftSide/LeftSide";
import { RightSide } from "../../tools/rightSide/RightSide";
import Image1 from "../../assets/images/SetiaCity.jpeg";
import { Link } from "react-router-dom";
import PhoneNumberValidation from "../../tools/fields/phoneNumberValidation/PhoneNumberValidation";

import Main from "./main/Main";
import Login from "./login/Login";
import CheckOtp from "./checkOtp/CheckOtp";
import ChooseRole from "./chooseRole/ChooseRole";
import UserRegistration from "./registration/UserRegistration";
interface Props {
  type: string;
}
const SwitchingPage = (page: string) => {
  switch (page) {
    case "main":
      return <Main />;
      break;
    case "login":
      return <Login />;
    case "otp":
      return <CheckOtp />;
    case "registration":
      return <UserRegistration />;
  
    /*   case "role":
      return <ChooseRole />; */
    default:
      return <Main />;
      break;
  }
};
const MainPage: React.FC<Props> = ({ type }) => {
  return (
    <>
      <LeftSide content={<>{SwitchingPage(type)}</>} />
      <RightSide background={Image1} />
    </>
  );
};

export default MainPage;
