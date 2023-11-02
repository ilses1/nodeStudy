/**
 * @description 后端生成 token 过期时间，校验token
 */


// 因引入jsonwebtoken
const jsonwebtoken = require('jsonwebtoken');
// "secret"是用于对JWT进行签名和验证的密钥
const secret = '123456';

const JWT = {
    // 1.生成
    generate(value, exprires) {
        return jsonwebtoken.sign(value, secret, { expiresIn: exprires })
    },
    // 2.验证
    vertify(token) {
        // 不要忘记返回
        // try catch 捕获错误，防止程序崩溃
        try {
           return jsonwebtoken.verify(token, secret)
       } catch (error) {
        return false
       }
    }
}



// 导出
module.exports = JWT;