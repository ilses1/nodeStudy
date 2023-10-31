var express = require('express');
var UserRouter = express.Router();

/* GET home page. */
UserRouter.post('/adminapi/user/login',UserController.login);

module.exports = UserRouter;
