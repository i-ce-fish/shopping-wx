import request from "../utils/request";



export function getArticles(data) {
    return request({
        url: 'articles',
        method: 'GET',
        contentType: 'json',
        data
    })
}

export function getArticle(id) {
    return request({
        url: "articles/" + id,
        method: "GET"
    })
}

export function addArticle(data) {
    return request({
        url: "articles",
        method: "POST",
        data
    })
}

export function putArticle(id, data) {
    return request({
        url: "articles/" + id,
        method: "PUT",
        data
    })
}

export function delArticle(id) {
    return request({
        url: "articles/" + id,
        method: "DELETE"
    })
}


