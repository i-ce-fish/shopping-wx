let rq = require('../utils/request')

function login(data) {
	return rq.request({
		url: 'auth/login',
		method: 'POST',
		data: data
	})
}
module.exports = {
	login
}
