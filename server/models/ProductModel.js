/**
 * @descriptions 数据库模型 mongodb  用户数据
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema//数据库模式
// user模型===》users集合


const ProductType = {
    title: String,
    introduction: String,
    detail: String,
    cover: String,//封面
    editTime: Number//编辑时间
}
const ProductModel = mongoose.model("product", new Schema(ProductType))


module.exports = ProductModel