/**
 * @description
 */

const jwt = require('../../utils/JWT')
const UserService = require("../../services/UserService")

const UserController = {
    login: async (req, res) => {
        console.log(req, 'req.body,UserController')
        var result = await UserService.login(req.body)
        if (result.length === 0) {
            res.send({
                code: '-1',
                error: '用户名或密码错误'
            })
        } else {
            // 登录成功后，生成token返回token
            const token = JWT.generateToken({
                _id: result[0].id,
                username: result[0].username
            })
            // token放入请求头
            res.headers('Authorization',token)
            res.send({
                code: '0',
                actionType: 'ok'
            })
        }
    }
    // login: async (req, res) => {
    //     console.log(req.body,'req.body')
    //     //req.body 
    //     var result = await UserService.login(req.body)

    //     if (result.length === 0) {
    //         res.send({
    //             code: "-1",
    //             error: "用户名密码不匹配"
    //         })
    //     } else {
    //         res.send({
    //             ActionType: "OK"
    //         })
    //     }
    // }
}

module.exports = UserController