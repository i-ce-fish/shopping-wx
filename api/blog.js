
let rq = require('../utils/request')

function getList(params) {
  return rq.request({
    url: '/blogs',
    method: 'get',
    params
  })
}

 function get(id) {
  return rq.request({
    url: '/blogs/' + id,
    method: 'get'
  })
}

 function add(data) {
  return rq.request({
    url: '/blogs',
    method: 'post',
    data
  })
}

 function put(id, data) {
  return rq.request({
    url: '/blogs/' + id,
    method: 'put',
    data
  })
}

 function del(id) {
  return rq.request({
    url: '/blogs/' + id,
    method: 'delete'
  })
}

module.exports = {
  getList:getList,
  get:get,
  add:add,
  put:put,
  del:del
}