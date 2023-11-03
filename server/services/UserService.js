const UserModel = require("../models/UseModel");

const UserService = {
    login: async (username, userpassword) => {
        // 数据库查询
        return UserModel.find({
            username, userpassword
        })
    },


    upload: async (_id, username, introduction, gender, avatar) => {
        // 数据库更新一个
        UserModel.updateOne({ _id }, { username, introduction, gender, avatar })
    }
}

module.exports = UserService;