/**
 * @descriptions 数据库模型 mongodb  用户数据
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema//数据库模式
// user模型===》users集合


const UsrType = {
    username: String,
    password: String,
    gender: Number,//性别 0，1，2
    introduction: String,//简介
    avatar: String,
    role: Number//管理员1，编辑2
}
const UserModel = mongoose.model("user", new Schema(UsrType))


module.exports = UserModel