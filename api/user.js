import request from '@/utils/request.js'

export function login(data) {
	return request({
		url: '/api/auth/login',
		method: 'POST',
		data:data
	})
}

export function getColor() {
	return request({
    url:'/api/siteconfig/pcolors',
    method:'GET'
	})
}

