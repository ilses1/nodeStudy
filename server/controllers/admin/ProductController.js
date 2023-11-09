/**
 * @description
 */

const ProductService = require('../../services/ProductService')
const JWT = require('../../utils/JWT')

const ProductController = {
    add: async (req, res) => {
        const { title, introduction, detail } = req.body
        // 处理用户头像
        const cover = req.file ? `/productUploads/${req.file.filename}` : ""
        // 调用service层
        await ProductService.add({
            title, introduction, detail, cover,
            editTime: new Date()
        })
        // 返回前端数据
        res.send({
            ActionType: "OK",
        })

    },
    getList: async (req, res) => {
        const result = await ProductService.getList({ _id: req.params.id })
        res.send({
            ActionType: "OK",
            data: result
        })
    },
    publish: async (req, res) => {
        const result = await ProductService.publish({ ...req.body, editTime: new Date() })

        res.send({
            ActionType: "OK",
        })
    },
    delList: async (req, res) => {
        const result = await ProductService.delList({ _id: req.params.id })
        res.send({
            ActionType: "OK",
            data: result
        })
    },
    updateList: async (req, res) => {
        const { title, introduction, detail, _id } = req.body
        // 处理用户头像
        const cover = req.file ? `/productUploads/${req.file.filename}` : ""
        const result = ProductService.updateList({
            _id,
            title, introduction, detail, cover,
            editTime: new Date()
        })

        res.send({
            ActionType: "OK",
            data: result
        })
    }
}

module.exports = ProductController