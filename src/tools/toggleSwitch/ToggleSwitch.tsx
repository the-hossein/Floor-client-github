import React from "react";
import Style from "./ToggleSwitch.module.scss";

interface Props {
  state: number;
  Click: () => void;
}
const ToggleSwitch: React.FC<Props> = ({ state, Click }) => {
  return (
    <div className={`${Style.switch_box} ${Style.switch_border}`}>
      {state === 1 ? (
        <>
          <div className={Style.left}></div>
          <a className={`${Style.active}`}>Personal</a>
          <a onClick={Click}>Business</a>
        </>
      ) : (
        <>
          <div className={Style.right}></div>
          <a onClick={Click}>Personal</a>
          <a className={`${Style.active}`}>Business</a>
        </>
      )}
    </div>
  );
};

export default ToggleSwitch;
