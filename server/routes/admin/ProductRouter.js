var express = require('express');
var ProductRouter = express.Router();
var ProductController = require('../../controllers/admin/ProductController');
// 文件上传
const multer = require('multer')
const upload = multer({ dest: 'public/productUploads/' })
// 设计文件上传，需要加上multer中间件
ProductRouter.post('/adminapi/Product/add', upload.single("file"), ProductController.add);
ProductRouter.get('/adminapi/Product/list', ProductController.getList);
ProductRouter.post('/adminapi/Product/list', upload.single("file"), ProductController.updateList);
ProductRouter.get('/adminapi/Product/list/:id', ProductController.getList);
ProductRouter.delete('/adminapi/Product/list/:id', ProductController.delList);
// ProductRouter.put('/adminapi/Product/publish', ProductController.publish);


module.exports = ProductRouter;
