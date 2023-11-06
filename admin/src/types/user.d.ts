export type UserType = {
    username: String,
    password: String,
    gender?: Number,//性别 0，1，2
    introduction?: String,//简介
    avatar?: String,
    role?: Number//管理员1，编辑2
}