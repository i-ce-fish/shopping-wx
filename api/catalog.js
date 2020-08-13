let rq = require('../utils/request')

function getList(data) {
    return rq.request({
        url: 'catalogs',
        method: 'get',
        contentType: 'json',
        data: data
    })
}

module.exports = {
    getList
}
