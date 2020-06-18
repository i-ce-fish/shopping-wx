let rq = require('../utils/request')

function getList(data) {
    return rq.request({
        url: 'goodsizes',
        method: 'GET',
        data
    })
}

function get(id) {
    return rq.request({
        url: 'goodsizes/' + id,
        method: 'GET'
    })
}

module.exports = {
    getList,
    get
}
