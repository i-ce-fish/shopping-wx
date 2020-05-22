let rq = require('../utils/request')

function getList(data) {
	return rq.request({
		url: 'articles',
		method: 'GET',
		data
	})
}

function get(id) {
	return rq.request({
		url: "articles/" + id,
		method: "GET"
	})
}

function add(data) {
	return rq.request({
		url: "articles",
		method: "POST",
		data
	})
}

function put(id, data) {
	return rq.request({
		url: "articles/" + id,
		method: "PUT",
		data
	})
}

function del(id) {
	return rq.request({
		url: "articles/" + id,
		method: "DELETE"
	})
}
module.exports = {
	getList,
	get,
	add,
	put,
	del
}
