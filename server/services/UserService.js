const UserModel = require("../models/UserModel");

const UserService = {
    // 1.登录
    login: async ({ username, password }) => {
        console.log('service层接收de 数据', username, password);
        // 数据库查询
        return UserModel.find({
            username, password
        })
    },
    // 2.上传 更新
    upload: async ({ _id, username, introduction, gender, avatar }) => {
        // 数据库更新一个
        // 判断是否有头像，有则更新，无则不更新头像
        if (avatar) {
            return UserModel.updateOne({ _id }, { username, introduction, gender, avatar })
        } else {
            return UserModel.updateOne({ _id }, { username, introduction, gender })
        }
    },
    // 3.增加用户
    add: async ({ username, introduction, gender, avatar, role, password }) => {
        // 数据库更新一个
        // 判断是否有头像，有则更新，无则不更新头像
        UserModel.create({ username, introduction, gender, avatar, role, password })
    },
    // 4.获取用户列表
    getList: async () => {
        // 返回所有数据
        return UserModel.find();
    },
    //5 .删除某一用户
    delList: async ({ _id }) => {
        return UserModel.deleteOne({ _id })
    }
}

module.exports = UserService;