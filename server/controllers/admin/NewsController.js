/**
 * @description
 */

const NewsService = require('../../services/NewsService')
const JWT = require('../../utils/JWT')

const NewsController = {
    add: async (req, res) => {
        const { title, content, category, isPublish } = req.body

        // 从token中获取用户id
        const payload = JWT.verify(req.headers.authorization.split(' ')[1])
        // 处理用户头像
        const cover = req.file ? `/newsUploads/${req.file.filename}` : ""

        // 调用service层
        await NewsService.add({
            title, content, category: Number(category), isPublish: Number(isPublish), cover,
            editTime: new Date()
        })
        // 返回前端数据
        res.send({
            ActionType: "OK",
        })

    },
    getList: async (req, res) => {
        const result = await NewsService.getList({ _id: req.params.id })
        res.send({
            ActionType: "OK",
            data: result
        })
    },
    publish: async (req, res) => {
        const result = await NewsService.publish({ ...req.body, editTime: new Date() })

        res.send({
            ActionType: "OK",
        })
    },
    delList: async (req, res) => {
        const result = await NewsService.delList({ _id: req.params.id })
        res.send({
            ActionType: "OK",
            data: result
        })
    },
    updateList: async (req, res) => {
        const { title, content, category, isPublish, _id } = req.body
        // 处理用户头像
        const cover = req.file ? `/newsUploads/${req.file.filename}` : ""
        const result = NewsService.updateList({
            _id,
            title, content, category: Number(category), isPublish: Number(isPublish), cover,
            editTime: new Date()
        })

        res.send({
            ActionType: "OK",
            data: result
        })
    }
}

module.exports = NewsController