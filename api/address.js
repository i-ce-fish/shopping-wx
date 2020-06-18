let rq = require('../utils/request')

function getList(data) {
    return rq.request({
        url: 'addresses',
        method: 'get',
        data
    })
}

function get(id) {
    return rq.request({
        url: 'addresses/' + id,
        method: 'get'
    })
}

function add(data) {
    return rq.request({
        url: 'addresses',
        method: 'post',
        data
    })
}

function put(id, data) {
    return rq.request({
        url: 'addresses/' + id,
        method: 'put',
        data
    })
}

function del(id) {
    return rq.request({
        url: 'addresses/' + id,
        method: 'delete'
    })
}

module.exports = {
    getList,
    get,
    add,
    put,
    del
}
