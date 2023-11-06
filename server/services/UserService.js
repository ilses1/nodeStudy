const UserModel = require("../models/UserModel");

const UserService = {
    // 1.登录
    login: async (username, userpassword) => {
        // 数据库查询
        return UserModel.find({
            username, userpassword
        })
    },
    // 2.上传 更新
    upload: async ({ _id, username, introduction, gender, avatar }) => {
        // 数据库更新一个
        // 判断是否有头像，有则更新，无则不更新头像
        if (avatar) {
            UserModel.updateOne({ _id }, { username, introduction, gender, avatar })
        } else {
            UserModel.updateOne({ _id }, { username, introduction, gender })
        }
    },
    // 3.增加用户
    add: async ({ username, introduction, gender, avatar, role, password }) => {
        // 数据库更新一个
        // 判断是否有头像，有则更新，无则不更新头像
        UserModel.create({ username, introduction, gender, avatar, role, password })
    }
}

module.exports = UserService;