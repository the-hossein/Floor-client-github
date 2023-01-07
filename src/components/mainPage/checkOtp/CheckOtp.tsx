import React, { useEffect, useState } from "react";
import Style from "../MainPage.module.scss";
import Logo from "../../../assets/images/logo.png";
import Button from "../../../tools/button/Button";
import CheckCode from "../../../tools/fields/checkCode/CheckCode";
import { CustomeContainer } from "../../../tools/customeContainer/CustomeContainer";
import { TimerState } from "../../../models/enums/TimerState";
import { AlignCenterContainer } from "../../../tools/customeContainer/AlignCenterContainer";
import { useNavigate } from "react-router-dom";

const CheckOtp: React.FC = () => {
  const [code, setcode] = useState<string[]>(["", "", "", ""]);
  const [finalCode, setfinalCode] = useState<string>("");
  const [timerValue, settimerValue] = useState<number>(59);
  const [timerState, settimerState] = useState<TimerState>(TimerState.Timer);
  const [timerText, settimerText] = useState<string>("00:" + timerValue);
  const navigate = useNavigate();
  useEffect(() => {
    UpdateTimer();
  }, [timerValue]);
  const SubmitPhoneNumber = () => {
    navigate("/registration");
  };
  const UpdateTimer = () => {
    if (timerState === TimerState.Timer) {
      timerValue > 0 &&
        setTimeout(() => {
          settimerValue(timerValue - 1);
          if (timerValue < 10) {
            settimerText("00:0" + timerValue);
          } else {
            settimerText("00:" + timerValue);
          }
        }, 500);
      if (timerValue === 0) {
        setTimeout(() => {
          settimerState(TimerState.Resend);
        }, 500);
      }
    }
  };

  const SetOtpCode = (nextNumber: string, index: number) => {
    code[index] = nextNumber;
    setcode(code);
    if (
      code[0].length > 0 &&
      code[1].length > 0 &&
      code[2].length > 0 &&
      code[3].length > 0
    ) {
      var Code: string = "";
      for (var i: number = 0; i < 4; i++) {
        Code = Code + code[i];
      }
      setfinalCode(Code);
    }
  };
  return (
    <AlignCenterContainer _height="100px">
      <div className={Style.mainpage_box}>
        <img className={Style.mainpage_logo} src={Logo} />
        <CustomeContainer _width={"auto"}>
          <CheckCode setMethod={SetOtpCode} />
          <div className={`flex justify-end ${Style.otp_timer}`}>
            {timerState === TimerState.Resend ? (
              <a
                onClick={(e) => {
                  settimerValue(10);
                  settimerText("00:59");
                  settimerState(TimerState.Timer);
                }}
                className={Style.resend}
              >
                Resend Code
              </a>
            ) : (
              <a>{`${timerText}`}</a>
            )}
          </div>
          <div className={`${Style.login_btn}`}>
            <Button type="buuton" text="Next" link="./" clickMethod={SubmitPhoneNumber}/>
          </div>
        </CustomeContainer>
      </div>
    </AlignCenterContainer>
  );
};

export default CheckOtp;
