var express = require('express');
const UserController = require('../../controllers/admin/UserController');
var UserRouter = express.Router();

// 图片上传
const multer = require('multer')
const upload = multer({ dest: 'public/avatwrUploads/' })

UserRouter.post('/adminapi/user/login', UserController.login);
UserRouter.post('/adminapi/user/upload', upload.single('file'), UserController.upload);
// 用户的增删改查
UserRouter.post('/adminapi/user/add', upload.single('file'), UserController.add);
UserRouter.get('/adminapi/user/list', UserController.getList);
UserRouter.get('/adminapi/user/list/:id', UserController.getList);
UserRouter.delete('/adminapi/user/list/:id', UserController.delList);
UserRouter.put('/adminapi/user/list/:id', UserController.putList);

module.exports = UserRouter;
