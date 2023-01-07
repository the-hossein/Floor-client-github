import React from "react";
import { Link } from "react-router-dom";
import Style from "./PrimaryFooter.module.scss";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SuportIcon from "../../../assets/images/support.webp"
const PrimaryFooter: React.FC = () => {
  return (
    <footer className={Style.primary_footer}>
      <Link to={""} className={Style.support_box}>
        <img src={SuportIcon}/>
      </Link>
      <div>
        <ul>
          <li>
            <Link to={""}>About us</Link>
          </li>
          <li>
            <Link to={""}>Term & Condition</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default PrimaryFooter;
