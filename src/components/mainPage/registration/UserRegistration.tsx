import React, { useEffect, useState } from "react";
import RoleBox from "../../../tools/boxes/RoleBox";
import { AlignCenterContainer } from "../../../tools/customeContainer/AlignCenterContainer";
import { CustomeContainer } from "../../../tools/customeContainer/CustomeContainer";
import TextField from "../../../tools/fields/textField/TextField";
import MainHeadeer from "../../header/mainHeader/MainHeadeer";
import PersonIcon from "@mui/icons-material/Person";
import Button from "../../../tools/button/Button";
import ToggleSwitch from "../../../tools/toggleSwitch/ToggleSwitch";
import FileUpload from "../../../tools/fileUpload/FileUpload";
import TextArea from "../../../tools/textArea/TextArea";
const UserRegistration: React.FC = () => {
  const [FirstName, setFirstName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [NationalCode, setNationalCode] = useState<string>("");
  const [ToggleState, setToggleState] = useState<number>(1);
  const ChangeSwitch = () => {
    if (ToggleState === 1) {
      setToggleState(2);
    } else {
      setToggleState(1);
    }
  };
  return (
    <>
      <MainHeadeer />
      {ToggleState === 1 ? (
        <AlignCenterContainer _align={"start"} _height="380px">
          <CustomeContainer _width="100%">
            <CustomeContainer _width="360px" sm_width="280px">
              <ToggleSwitch Click={ChangeSwitch} state={ToggleState} />
              <TextField
                lable={"First Name"}
                onChangeMethod={(e) => setFirstName(e.target.value)}
              />
              <TextField
                lable={"Last Name"}
                onChangeMethod={(e) => setLastName(e.target.value)}
              />
              <TextField
                lable={"Email"}
                onChangeMethod={(e) => setEmail(e.target.value)}
              />
              <TextField
                lable={"National Code"}
                onChangeMethod={(e) => setNationalCode(e.target.value)}
              />
              <FileUpload />

              <div className={`flex justify-end `}>
                <Button type="buuton" text="Next" link="./pricing" />
              </div>
            </CustomeContainer>
          </CustomeContainer>
        </AlignCenterContainer>
      ) : (
        <AlignCenterContainer _align={"start"} _height="170px">
          <CustomeContainer _width="100%">
            <h2></h2>
            <CustomeContainer _width="360px" sm_width="280px">
              <ToggleSwitch Click={ChangeSwitch} state={ToggleState} />
              <TextField
                lable={"Company Name"}
                onChangeMethod={(e) => setFirstName(e.target.value)}
              />
              <TextField
                lable={"Email"}
                onChangeMethod={(e) => setEmail(e.target.value)}
              />
              <TextField
                lable={"LineNumber"}
                onChangeMethod={(e) => setEmail(e.target.value)}
              />
              <TextArea lable="Address" onChangeMethod={(e) => setEmail(e.target.value)} />
              <FileUpload />

              <div className={`flex justify-end `}>
                <Button type="buuton" text="Next" link="./pricing" />
              </div>
            </CustomeContainer>
          </CustomeContainer>
        </AlignCenterContainer>
      )}
    </>
  );
};

export default UserRegistration;
