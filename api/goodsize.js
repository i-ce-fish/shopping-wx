import request from "../utils/request";

export function getGoodsizes(data) {
    return request({
        url: 'goodsizes',
        method: 'GET',
        contentType: 'json',
        data
    })
}

export function getGoodsize(id) {
    return request({
        url: 'goodsizes/' + id,
        method: 'GET'
    })
}

