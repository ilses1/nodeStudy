/**
 * @descriptions 数据库模型 mongodb  用户数据
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema//数据库模式
// user模型===》users集合


const NewsType = {
    title: String,
    content: String,
    category: Number,//种类 0，1，2
    isPublish: Number,//是否发布
    cover: String,//封面
    editTime: Number//编辑时间
}
const NewsModel = mongoose.model("news", new Schema(NewsType))


module.exports = NewsModel