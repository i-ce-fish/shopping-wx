let rq = require('../utils/request')

function getList(data) {
  return rq.request({
    url: 'blogs',
    method: 'get',
    data
  })
}

function get(id) {
  return rq.request({
    url: 'blogs/' + id,
    method: 'get'
  })
}

function add(data) {
  return rq.request({
    url: 'blogs',
    method: 'post',
    data
  })
}

function put(id, data) {
  return rq.request({
    url: 'blogs/' + id,
    method: 'put',
    data
  })
}

function del(id) {
  return rq.request({
    url: 'blogs/' + id,
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
