import request from "../utils/request";

export function getGood(id) {
    return request({
        url: 'goods/' + id,
        method: 'GET'
    })
}


