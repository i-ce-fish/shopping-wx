export function getAddresses(data) {
    return request({
        url: 'addresses',
        method: 'get',
        contentType: 'json',

        data

    })
}

export function getAddress(id) {
    return request({
        url: 'addresses/' + id,
        method: 'get'
    })
}

export function addAddress(data) {
    return request({
        url: 'addresses',
        method: 'post',
        data
    })
}

export function putAddress(id, data) {
    return request({
        url: 'addresses/' + id,
        method: 'put',
        data
    })
}

export function delAddress(id) {
    return request({
        url: 'addresses/' + id,
        method: 'delete'
    })
}

