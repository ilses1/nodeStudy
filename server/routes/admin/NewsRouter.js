var express = require('express');
var NewsRouter = express.Router();
import NewsController from '../controllers/newsController';
// 文件上传
const multer = require('multer')
const upload = multer({ dest: 'public/newsUploads/' })
// 设计文件上传，需要加上multer中间件
NewsRouter.post('/adminapi/news/add', upload.single("file"), NewsController.add);


module.exports = NewsRouter;
