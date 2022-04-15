/**
 * 模拟请求
 */

import request from './request'

let baseUrl = '/apiMockjs'

// 获取菜单
export function getMenuMock(data={}) {
	return request({
		url: `${baseUrl}/getMenu`,
		data,
		method: 'get'
	})
}