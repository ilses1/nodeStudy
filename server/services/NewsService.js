const NewsModel = require("../models/NewsModel");

const NewsService = {
    add: ({
        title, content, category, isPublish, cover, editTime
    }) => {

        return NewsModel.create({
            title, content, category, isPublish, cover, editTime
        })
    },
    getList: ({ _id }) => {
        return _id ? NewsModel.find({ _id }) : NewsModel.find()
    },
    publish: ({ _id, isPublish, editTime }) => {
        return NewsModel.updateOne({ _id }, { isPublish, editTime })
    },
    delList: ({ _id }) => {
        return NewsModel.deleteOne({ _id })
    },
    updateList: async ({ _id, title, content, category, isPublish, cover, editTime }) => {
        return cover ? NewsModel.updateOne({ _id }, { title, content, category, isPublish, editTime, cover }) :
            NewsModel.updateOne({ _id }, { title, content, category, isPublish, editTime })
    }

}

module.exports = NewsService;