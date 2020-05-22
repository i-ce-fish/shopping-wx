let rq = require('../utils/request')

function getList(data) {
	return rq.request({
		url: 'catalogs',
		method: 'get',
		data: data
	})
}
module.exports = {
	getList
}
