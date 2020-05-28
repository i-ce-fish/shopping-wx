let rq = require('../utils/request')

function login(data) {
    return rq.request({
        url: 'auth/login',
        method: 'POST',
        data: data
    })
}


function wxLogin(data) {
    return rq.request({
        url: "auth/todo",
        method:'GET',
        data
    })
}



module.exports = {
    login,wxLogin
}
