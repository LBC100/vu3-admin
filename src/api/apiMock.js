/**
 * 模拟请求
 */


// 获取菜单
export function getMenuMock() {
	return new Promise(function(resolve, reject) {
		let data = {
			data: [{
				path: '/',
				name: 'base',
				redirect: '/base/home',
				children: [{
						path: '/base/home',
						name: 'home',
						meta: {
							title: '首页'
						},
					},
					{
						path: '/base/about',
						name: 'about',
						meta: {
							title: '关于'
						},
					},
				]
			}]
		}

		setTimeout(() => resolve(data), 500);
	});
}
