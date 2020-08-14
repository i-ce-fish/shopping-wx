import request from "../utils/request";

export function addGoodorder(data) {
    return request({
        url: 'goodorders',
        method: 'post',
        data
    })
}

