import request from "../utils/request";

export function getGood(id) {
    return request({
        url: 'goods/' + id,
        method: 'GET'
    })
}


export function getGoods(data) {
    return request({
        url: "goods",
        method: "get",
        contentType: 'json',
        data
    })
}


export function addGood(data) {
    return request({
        url: "goods",
        method: "post",
        data
    })
}

export function putGood(id, data) {
    return request({
        url: `goods/${id}`,
        method: "put",
        data
    })
}

export function delGood(id) {
    return request({
        url: `goods/${id}`,
        method: "delete"
    })
}
