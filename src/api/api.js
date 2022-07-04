import {
	request
} from './request'

let baseUrl = '/api'

// 获取菜单
export function getMenuMock(data = {}) {
	return request({
		url: `${baseUrl}/v1/account/getMenuList`,
		data,
		method: 'get'
	})
}
