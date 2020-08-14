import request from "../utils/request";

export function getBlogs(data) {
  return request({
    url: 'blogs',
    method: 'get',
    contentType: 'json',
    data
  })
}

export function getBlog(id) {
  return request({
    url: 'blogs/' + id,
    method: 'get'
  })
}

export function addBlog(data) {
  return request({
    url: 'blogs',
    method: 'post',
    data
  })
}

export function putBlog(id, data) {
  return request({
    url: 'blogs/' + id,
    method: 'put',
    data
  })
}

export function delBlog(id) {
  return request({
    url: 'blogs/' + id,
    method: 'delete'
  })
}


