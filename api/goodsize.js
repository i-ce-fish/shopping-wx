let rq = require('../utils/request')

function getList(data) {
    return rq.request({
        url: 'goodsizes',
        method: 'GET',
        data
    })
}

module.exports = {
    getList
}
