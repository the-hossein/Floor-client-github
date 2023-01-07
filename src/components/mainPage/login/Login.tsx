import React, { useState } from "react";
import Style from "../MainPage.module.scss";
import Logo from "../../../assets/images/logo.png";
import { redirect, useNavigate } from "react-router-dom";
import PhoneNumberValidation from "../../../tools/fields/phoneNumberValidation/PhoneNumberValidation";
import Button from "../../../tools/button/Button";
import { CustomeContainer } from "../../../tools/customeContainer/CustomeContainer";
import { AlignCenterContainer } from "../../../tools/customeContainer/AlignCenterContainer";

const Login: React.FC = (props) => {
  const [PhoneNumber, setPhoneNumber] = useState<string>("");
  const [code, setcode] = useState<string>("1");
  const [Country, setCountry] = useState("us");
  const [nextStap, setnextStap] = useState<boolean>(false);
  const navigate = useNavigate();
  const SetFullPhoneNumber = (
    phoneNumber: string,
    code: string,
    country: string
  ) => {
    setCountry(country);
    setcode(code);
    setPhoneNumber(`+${code}${phoneNumber}`);
  };
  const SubmitPhoneNumber = () => {
    navigate("/otp");
  };
  return (
    <AlignCenterContainer _height="100px">
      <div className={Style.mainpage_box}>
        <img className={Style.mainpage_logo} src={Logo} />
        <CustomeContainer _width="auto">
          <PhoneNumberValidation setMethod={SetFullPhoneNumber} />
          <div className={`${Style.login_btn}`}>
            <Button type="button" text="Next" clickMethod={SubmitPhoneNumber} />
          </div>
        </CustomeContainer>
      </div>
    </AlignCenterContainer>
  );
};

export default Login;
