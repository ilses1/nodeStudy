var express = require('express');
var NewsRouter = express.Router();
var NewsController = require('../../controllers/admin/NewsController');
// 文件上传
const multer = require('multer')
const upload = multer({ dest: 'public/newsUploads/' })
// 设计文件上传，需要加上multer中间件
NewsRouter.post('/adminapi/news/add', upload.single("file"), NewsController.add);
NewsRouter.get('/adminapi/news/list', NewsController.getList);
NewsRouter.delete('/adminapi/news/list/:id', NewsController.delList);
NewsRouter.put('/adminapi/news/publish', NewsController.publish);


module.exports = NewsRouter;
