import request from "../utils/request";

export function login(data) {
    return request({
        url: 'auth/login',
        method: 'POST',
        data: data
    })
}


export function wxLogin(data) {
    return request({
        url: "auth/signin",
        method: 'POST',
        data
    })
}


