const express = require("express");
const {
  createFile,
  uploadChatFile,
  getAllPost,
  deletePost,
  getPost,
} = require("../controllers/fileController");
const router = express.Router();

router.route("/").post(uploadChatFile, createFile).get(getAllPost);
router.route("/:id").delete(deletePost).get(getPost);

module.exports = router;
