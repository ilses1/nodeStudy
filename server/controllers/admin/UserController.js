/**
 * @description
 */

const JWT = require('../../utils/JWT')
const UserService = require("../../services/UserService")

const UserController = {
    login: async (req, res) => {
        var result = await UserService.login(req.body)
        if (result.length === 0) {
            res.send({
                code: '-1',
                error: '用户名或密码错误'
            })
        } else {
            // 登录成功后，生成token返回token
            const token = JWT.generate({
                _id: result[0]._id,
                username: result[0].username
            }, '24h')
            // token放入请求头
            res.header("Authorization", token)

            res.send({
                code: '0',
                ActionType: 'OK',
                data: {
                    username: result[0].username,
                    gender: result[0].gender ? result[0].gender : 0,
                    introduction: result[0].introduction,
                    avatar: result[0].avatar,
                    role: result[0].role,
                }
            })
        }
    },
    upload: async (req, res) => {
        const { username, introduction, gender } = req.body
        // 获取token
        const token = req.headers.authorization.split(' ')[1]
        const payload = JWT.verify(token)

        const avatar = req.file ? `/avatwrUploads/${req.file.filename}` : ""

        // 调用service更新数据
        await UserService.upload({ _id: payload._id, username, introduction, gender: Number(gender), avatar })

        //   成功返回数据
        if (avatar) {
            res.send({
                ActionType: "OK", data: {
                    username,
                    introduction,
                    gender: Number(gender),
                    avatar
                }
            })
        } else {
            res.send({
                ActionType: "OK", data: {
                    username,
                    introduction,
                    gender: Number(gender),
                }
            })
        }
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
            ActionType: "OK",
        })

    }
    ,
    getList: async (req, res) => {
        const result = await UserService.getList(req.params)
        res.send({
            ActionType: "OK",
            data: result
        })
    },
    delList: async (req, res) => {
        // url上参数
        // console.log(req.params.id);
        const result = await UserService.delList({ _id: req.params.id })
        res.send({
            ActionType: "OK",
            data: result
        })
    },
    putList: async (req, res) => {
        const result = await UserService.putList(req.body)
        res.send({
            ActionType: "OK"
        })
    }
}

module.exports = UserController