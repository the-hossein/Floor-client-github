import React from "react";
import RoleBox from "../../../tools/boxes/RoleBox";
import { CustomeContainer } from "../../../tools/customeContainer/CustomeContainer";
import Style from "./ChooseRole.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import MainHeadeer from "../../header/mainHeader/MainHeadeer";
import { AlignCenterContainer } from "../../../tools/customeContainer/AlignCenterContainer";
const ChooseRole: React.FC = () => {
  return (
    <>
      <MainHeadeer />
      <AlignCenterContainer _height="250px">
        <CustomeContainer _width="100%">
          <h2 className={Style.page_title}>
            Wich of the following position do you want to sign up with?
          </h2>
          <CustomeContainer _width="400px" sm_width="300px">
            <RoleBox
              link=""
              title="Manager"
              icon={<PersonIcon />}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            />
            <RoleBox
              link=""
              title="Resident"
              icon={<PersonIcon />}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            />
            <RoleBox
              link=""
              title="Tourist"
              icon={<PersonIcon />}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
            />
          </CustomeContainer>
        </CustomeContainer>
      </AlignCenterContainer>
    </>
  );
};

export default ChooseRole;
