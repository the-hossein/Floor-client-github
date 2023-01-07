import Style from "./FileUpload.module.scss";
import React from "react";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
const FileUpload: React.FC = () => {
  return (
    <div className={Style.fileupload_card}>
      <div>
        <UploadFileRoundedIcon />
        <input type="file" />
      </div>
      <p>Upload Your Document</p>
    </div>
  );
};

export default FileUpload;
