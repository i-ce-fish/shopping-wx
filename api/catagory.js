import request from "../utils/request";

export function logintest(data) {
    return request({
        url: 'auth/login',
        method: 'POST',
        data: data
    })
}

