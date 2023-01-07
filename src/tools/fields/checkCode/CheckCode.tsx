import React from "react";
import Style from "./CheckCode.module.scss";

interface Props {
  setMethod: (nextNumber: string, index: number) => void;
}
const CheckCode: React.FC<Props> = ({ setMethod }) => {
  const handleNextInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const nextSibiling = document.getElementById(`box${index + 1}`);

    if (nextSibiling !== null && e.target.value.length > 0) {
      nextSibiling.focus();
    }
    setMethod(e.target.value, index - 1);
  };
  return (
    <>
      <label className={Style.otp_lable}>send code to 09223911485</label>
      <div className={Style.code_card}>
        <input
          id={`box1`}
          type="text"
          maxLength={1}
          onChange={(e) => handleNextInput(e, 1)}
        />
        <input
          id={`box2`}
          type="text"
          maxLength={1}
          onChange={(e) => handleNextInput(e, 2)}
        />
        <input
          id={`box3`}
          type="text"
          maxLength={1}
          onChange={(e) => handleNextInput(e, 3)}
        />
        <input
          id={`box4`}
          type="text"
          maxLength={1}
          onChange={(e) => handleNextInput(e, 4)}
        />
      </div>
    </>
  );
};

export default CheckCode;
