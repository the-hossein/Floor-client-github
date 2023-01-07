import React from "react";
import Style from "./MainHeader.module.scss";
import Logo from "../../../assets/images/logo.png";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
const MainHeadeer: React.FC = () => {
  return (
    <header className={Style.header}>
      <div className={Style.header_logo}>
        <img src={Logo} />
      </div>
      <div className={Style.header_items}>
        <GridViewRoundedIcon />
      </div>
    </header>
  );
};

export default MainHeadeer;
