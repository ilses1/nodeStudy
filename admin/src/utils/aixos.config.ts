/**
 * @description axios 拦截器设置  响应拦截获取token 存储到localstorage  请求拦截读取token放入请求头
 */
import axios from 'axios';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    // 读取token   设置请求头
    const token = localStorage.getItem('token');
    if (token) {
      // "Bearer" 是一种身份验证机制，告诉服务器，紧随其后的 <token> 是一个访问令牌，用于身份验证和授权
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    // 获取token  存储token
    const token = response.headers.authorization;
    if (token) {
      localStorage.setItem('token', token);
    }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    // token过期，回到登录页
    if (error.response.status === 401) {
      // 移除token
      localStorage.removeItem('token');
      window.location.href = '/login';
      
    }
    return Promise.reject(error);
  });