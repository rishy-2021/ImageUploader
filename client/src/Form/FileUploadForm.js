import React, { useState } from "react";

import { singleFileUpload } from "../data/api";

const FileUploadScreen = (props) => {
  const [singleFile, setSingleFile] = useState("");

  //   const [title, setTitle] = useState("");

  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
  };

  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append("file", singleFile);
    await singleFileUpload(formData);
    props.getsingle();
  };

  return (
    <div className="row mt-3">
      <div className="col-6">
        <div className="form-group">
          <label>Select Single File</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => SingleFileChange(e)}
          />
        </div>
        <div className="row">
          <div className="col-10">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => uploadSingleFile()}
            >
              Upload
            </button>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadScreen;
