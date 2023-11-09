const ProductModel = require("../models/ProductModel");

const ProductService = {
    add: ({
        title, introduction, detail, cover, editTime
    }) => {
        return ProductModel.create({
            title, introduction, detail, cover, editTime
        })
    },
    getList: ({ _id }) => {
        return _id ? ProductModel.find({ _id }) : ProductModel.find()
    },
    publish: ({ _id, isPublish, editTime }) => {
        return ProductModel.updateOne({ _id }, { isPublish, editTime })
    },
    delList: ({ _id }) => {
        return ProductModel.deleteOne({ _id })
    },
    updateList: async ({ _id, title, introduction, detail, cover, editTime }) => {
        return cover ? ProductModel.updateOne({ _id }, { title, introduction, detail, cover, editTime }) :
            ProductModel.updateOne({ _id }, { title, introduction, detail, editTime })
    }

}

module.exports = ProductService;