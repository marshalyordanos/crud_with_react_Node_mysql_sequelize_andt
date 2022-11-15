const multer = require("multer");
const catchAsync = require("../utils/catchAsync");
const { File } = require("../models");
const AppError = require("../utils/appError");

let file_formats = [
  "PDF",
  "DOCX",
  "TXT",
  "WPS",
  "WPD",
  "DOC",
  "PPT",
  "PPTX",
  "WPD",
  "DOC",
  "RAR",
  "ZIP",
  "TAR",
  "GZ",
  "ARC",
];

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, "public/img");
    } else if (file.mimetype.startsWith("audio")) {
      cb(null, "public/audio");
    } else if (file.mimetype.startsWith("video")) {
      cb(null, "public/video");
    } else if (
      file_formats.includes(file.originalname.split(".")[1].toUpperCase())
    ) {
      cb(null, "public/file");
    }
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".")[1];
    cb(null, `file-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  console.log(file, "marshal");
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else if (file.mimetype.startsWith("audio")) {
    cb(null, true);
  } else if (file.mimetype.startsWith("video")) {
    cb(null, true);
  } else if (
    file_formats.includes(file.originalname.split(".")[1].toUpperCase())
  ) {
    cb(null, true);
  } else {
    cb(new AppError("Please Enter Valid file type", 400));
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
});
exports.uploadChatFile = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "videoImage", maxCount: 1 },

  { name: "audio", maxCount: 1 },
  { name: "video", maxCount: 1 },
  { name: "file", maxCount: 1 },
]);

exports.createFile = catchAsync(async (req, res, next) => {
  //   req.body.user = req.user.id;
  console.log(
    "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
  );
  //   console.log(req.files, req.body);
  if (req.files?.image) {
    console.log(req.files.image);
    req.body.image = req.files.image[0].filename;

    req.body.orginalName = req.files.image[0].originalname;
    req.body.size = req.files.image[0].size;
  } else if (req.files?.video) {
    req.body.video = req.files.video[0].filename;
    req.body.orginalName = req.files.video[0].originalname;
    req.body.size = req.files.video[0].size;
  } else if (req.files?.audio) {
    req.body.audio = req.files.audio[0].filename;
    req.body.orginalName = req.files.audio[0].originalname;
    req.body.size = req.files.audio[0].size;
  } else if (req.files?.file) {
    req.body.orginalName = req.files.file[0].originalname;

    req.body.file = req.files.file[0].filename;
    req.body.size = req.files.file[0].size;
  } else {
    return next(new AppError("Please provide a file", 400));
  }
  const post = await File.create(req.body);

  res.status(201).json({
    status: "success",
    data: post,
  });
});

exports.getAllPost = catchAsync(async (req, res, next) => {
  const posts = await File.findAll({ order: [["createdAt", "DESC"]] });

  res.status(200).json({
    status: "success",
    data: posts,
  });
});

exports.getPost = catchAsync(async (req, res, next) => {
  const post = await File.findByPk(req.params.id);
  if (!post) {
    return next(new AppError("the is no file in this id!", 440));
  }
  res.status(200).json({
    status: "success",
    data: post,
  });
});
exports.deletePost = catchAsync(async (req, res, next) => {
  const post = await File.findByPk(req.params.id);
  if (!post) {
    return next(new AppError("the is no file in this id!", 440));
  }
  post.destroy();

  res.status(203).json({
    status: "success",
    data: post,
  });
});
