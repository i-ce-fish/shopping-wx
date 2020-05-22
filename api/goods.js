let rq = require('../utils/request')

function get(id) {
    return rq.request({
        url: 'goods/' + id,
        method: 'GET'
    })
}

module.exports = {
    get
}
