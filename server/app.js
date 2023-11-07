var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const UserRouter = require('./routes/admin/UserRouter');
const NewsRouter = require('./routes/admin/NewsRouter');
const JWT = require('./utils/JWT');


var app = express();
/*
 /adminapi/* - 后台系统用的
 /webapi/* - 企业官网用的
*/


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 1. 配置静态文件服务

//2. 配置 express.json() 中间件，确保在路由之前
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 3. 配置路由或其他中间件
// token授权处理中间件
app.use((req, res, next) => {
  // 如果token没过期 next
  // 如果token时间过期则 返回401

  // 如果是登录则放行页不执行后面代码
  if (req.url === '/adminapi/user/login') {
    next()
    return
  }
  const token = req.headers.authorization.split(' ')[1]//分割bearer，获取之后的token
  if (token) {
    // 没过期返回新token
    const payload = JWT.verify(token)//获取信息
    if (payload) {
      const newToken = JWT.generate({
        _id: payload._id,
        username: payload.username
      }, "10s")
      // newtoken 加入请求头
      res.header["Authorization"] = newToken
      next()
    } else {
      // 过期返回过期
      res.status(401).send({ code: 401, msg: 'token过期' })
    }
  } 
})
app.use(UserRouter)
app.use(NewsRouter)







// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
