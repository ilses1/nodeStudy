/**
 * @description
 */

const NewsService = require('../../services/NewsService')
const JWT = require('../../utils/JWT')

const NewsController = {

    add: async (req, res) => {
        const { title, content, category, ispublish } = req.body
        // 从token中获取用户id
        const payload = JWT.verify(req.headers.authorization.split(' ')[1])
        // 处理用户头像
        const cover = req.file ? `/newsUploads/${req.file.filename}` : ""

        // 调用service层
        await NewsService.add({
            title, content, category: Number(category), ispublish: Number(ispublish), cover,
            editTime: new Date()
        })
        // 返回前端数据
        res.send({
            actionType: "ok",
        })

    }
}

module.exports = NewsController