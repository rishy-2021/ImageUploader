"use strict";

const express = require("express");
const { upload } = require("../helpers/helper");
const {
  singleFileUpload,
  getallSingleFiles,
  deleteUser,
} = require("../controllers/uploadController");
const router = express.Router();

router.post("/singleFile", upload.single("file"), singleFileUpload);

router.delete("/singleFile/:id", deleteUser);

router.get("/getSingleFiles", getallSingleFiles);

module.exports = {
  routes: router,
};
