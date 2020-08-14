import request from "../utils/request";

// import request from "../utils/request";

export function getCatalogs(data) {
    return request({
        url: 'catalogs',
        method: 'get',
        contentType: 'json',
        data: data
    })
}


