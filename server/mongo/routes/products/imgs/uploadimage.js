const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");

/////////////////////////////////////////////////////
/*                                                 */
/*       /api/mongo/product/uploadImage            */
/*                                                 */
/////////////////////////////////////////////////////

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

// /* 이미지 파일 이름 지정 */
// const box = multer.diskStorage({
//   destination(req, file, done) {
//     done(null, "uploads/img/");
//   },
//   filename(req, file, done) {
//     const ext = path.extname(file.originalname);
//     const basename = path.basename(file.originalname, ext);
//     done(null, basename + "_" + new Date().getTime() + ext);
//   },
// });

const upload = multer({ 
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'pl2hteam',
    key(req, file, cb) {
      cb(null, `uploads/img/${Date.now()}${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
}).single("file");

/* 이미지 미리보기 */
router.post("/", (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.json({ success: false, err });

    console.log(req);
    return res.json({
      success: true,
      image: req.file.location,
      fileName: req.file.filename,
    });
  });
});

module.exports = router;
