/**
 * @description
 */

const JWT = require('../../utils/JWT')
const UserService = require("../../services/UserService")

const UserController = {
    login: async (req, res) => {
        console.log(req.body, 'req.body,UserController')
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
            res.headers('Authorization', token)
            res.send({
                code: '0',
                actionType: 'ok'
            })
        }
    },
    upload: async (req, res) => {
        const { username, introduction, gender } = req.body
        // 获取token
        const token = req.headers.authorization.split(' ')[1]
        const payload = JWT.verify(token)
        const avatar = `/avatwrUploads/${req.body.file.filename}`

        // 调用service更新数据
        await UserService.upload({ _id: payload._id, username, introduction, gender: Number(gender), avatar })

        //   成功返回数据
        res.send({
            actionType: "ok", data: {
                username,
                introduction,
                gender: Number(gender),
                avatar
            }
        })
    },
    add: async (req, res) => {
        const { username, introduction, gender, role, password } = req.body
        // 从token中获取用户id
        const payload = JWT.verify(req.headers.authorization.split(' ')[1])
        // 处理用户头像
        const avatar = req.file ? `/avatarUploads/${req.file.filename}` : ""
        // 调用service层
        await UserService.add({ id: payload._id, username, introduction, gender: Number(gender), avatar, role: Number(role), password })
        // 返回前端数据
        res.send({
            actionType: "ok",
        })

    }
}

module.exports = UserController