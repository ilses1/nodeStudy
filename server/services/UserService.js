const UserModel = require("../models/UseModel");

const UserService = {
    login: async (username, userpassword) => {
        return UserModel.find({
            username, userpassword
        })
    }
}

module.exports = UserService;