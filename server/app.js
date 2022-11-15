const express = require("express");
const cors = require("cors");
const path = require("path");

const fileRouter = require("./routers/fileRouter");
const { errHandling } = require("./utils/errorhandler");
const app = express();
const publicDirectoryPath = path.join(__dirname, "/public");

app.use(express.json());
app.use(cors());
app.use(express.static(publicDirectoryPath));

app.use("/file", fileRouter);
app.use(errHandling);
module.exports = app;
