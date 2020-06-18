let rq = require('../utils/request')

function add(data) {
    return rq.request({
        url: 'goodorders',
        method: 'post',
        data
    })
}
module.exports = {
    add
}
