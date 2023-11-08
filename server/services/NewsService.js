const NewsModel = require("../models/NewsModel");

const NewsService = {
    add: ({
        title, content, category, isPublish, cover, editTime
    }) => {

        return NewsModel.create({
            title, content, category, isPublish, cover, editTime
        })
    },
    getList: () => {
        return NewsModel.find()
    }

}

module.exports = NewsService;