import { Code } from "@mui/icons-material";
import React, { useState } from "react";
import CountrySelect from "../../dropDown/CountrySelect";
import Dropdown from "../../dropDown/CountrySelect";

import Style from "./PhoneValidation.module.scss";
import PersonIcon from "@mui/icons-material/Person";
interface Props {
  setMethod: (phoneNumber: string, code: string, country: string) => void;
}
const PhoneNumberValidation: React.FC<Props> = ({ setMethod }) => {
  const [PhoneNumber, setPhoneNumber] = useState<string>("");
  const [CheckValidation, setCheckValidation] = useState<boolean>(true);
  const [CountryCode, setCountryCode] = useState<string>("1");
  const [CountrySymbol, setCountrySymbol] = useState<string>("us");
  const [preload, setpreload] = useState<boolean>(false);
  const [editable, seteditable] = useState<boolean>(false);
  const CheckPhoenValidation = (number: string) => {
    const phoneRe: RegExp = /^[1-9]\d{2}[0-9]\d{2}(\d{3}|\d{4})$/;
    const digits: string = number.replace(/\D/g, "");
    return phoneRe.test(digits);
  };
  const EditCountry = (state: boolean) => {
    seteditable(state);
  };
  const ChangePhonenNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Test: boolean = CheckPhoenValidation(e.target.value);
    if (Test === true) {
      setCheckValidation(true);
      setMethod(e.target.value, CountryCode, CountrySymbol);
    } else {
      setCheckValidation(false);
    }
  };
  const CheckNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
    var e = event || window.event;
    if (event.charCode >= 48 && event.charCode <= 57) {
      return true;
    } else {
      if (e.preventDefault) e.preventDefault();
    }
  };
  const ChangeCountry = (code: string, symbol: string) => {
    setpreload(true);
    setCountryCode(code);
    setCountrySymbol(symbol);
    setpreload(false);
  };
  return (
    <>
      <label className={Style.phone_lable}>
        <PersonIcon />
        <span>PhoneNumber</span>
      </label>
      <div
        className={`${Style.custome_field} ${
          CheckValidation === false && Style.error_border
        }`}
      >
        <CountrySelect
          EditState={editable}
          EditCountry={EditCountry}
          ChangeCountry={ChangeCountry}
        />

        {editable === false && (
          <input
            maxLength={10}
            onKeyPress={(e) => CheckNumber(e)}
            onChange={(e) => ChangePhonenNumber(e)}
          />
        )}
      </div>
    </>
  );
};

export default PhoneNumberValidation;
