/**
 * @description
 */

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
            res.send({
                code: '0',
                actionType: 'ok'
            })
        }
    }
}

module.exports = UserController