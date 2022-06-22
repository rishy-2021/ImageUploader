import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { getSingleFiles } from "./data/api";
import FileUploadScreen from "./Form/FileUploadForm";

const url2 = "http://localhost:8080/api/singleFile/";

function App() {
  const [singleFiles, setSingleFiles] = useState([]);

  const getSingleFileslist = async () => {
    try {
      const fileslist = await getSingleFiles();
      setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  };

  let imgid = "";
  const deleted = async () => {
    console.log(imgid);

    await axios
      .delete(`${url2}${imgid}`)
      .then(() => {
        console.log("image deleted");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const idupdate = (pid) => {
    // e.preventDefault();
    console.log(pid);
    imgid = pid;
  };

  useEffect(() => {
    getSingleFileslist();
  });
  return (
    <>
      <div className="container">
        <h3 className=" font-weight-bolder border-bottom text-center">
          Image Upload
        </h3>
        <FileUploadScreen getsingle={() => getSingleFileslist()} />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-6">
            <h4 className="text-success font-weight-bold">Uploaded Image</h4>
            <div className="row">
              {singleFiles.map((file, index) => (
                <div className="col-6">
                  <div className="card mb-2 border-0 p-0">
                    <img
                      src={`http://localhost:8080/${file.filePath}`}
                      height="200"
                      className="card-img-top img-responsive"
                      alt="img"
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // console.log(${file._id});
                      idupdate(`${file._id}`);
                      deleted();
                    }}
                  >
                    Delete Image
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
