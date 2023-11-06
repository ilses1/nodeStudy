const NewsModel = require("../models/NewsModel");

const NewsService = {
    add: ({
        title, content, category, ispublish, cover, editTime
    }) => {
        return NewsModel.create({
            title, content, category, ispublish, cover, editTime
        })
    }

}

module.exports = NewsService;