/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import axios from "axios";

function upload(path: string, userForm: any) {
    const params = new FormData()
    for (const i in userForm) {
        params.append(i, userForm[i])
    }
    // console.log(params)
    return axios.post(path, params, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(res => res.data)
}

export default upload