/**
 * 模拟请求
 */

const promiseFunction = async (data = {}, delay = 500) => {
	return new Promise(function(resolve, reject) {
		setTimeout(() => resolve(data), delay);
	});
}


// 获取菜单
export async function getMenuMock() {
	let data = {
		data: [
			{
				path: '/base/home',
				name: 'baseHome',
				meta: {
					title: '首页'
				},
			},
			{
				path: '/base/about',
				name: 'baseAbout',
				meta: {
					title: '关于'
				},
			},
			{
				path: '/goods',
				name: 'goods',
				meta: {
					title: '商品'
				},
				children: [
					{
						path: '/goods/clothing',
						name: 'goodsClothing',
						meta: {
							title: '衣服'
						},
					},
					{
						path: '/goods/shoe',
						name: 'goodsShoe',
						meta: {
							title: '鞋子'
						},
						children: [
							{
								path: '/goods/menShoes',
								name: 'goodsMenShoes',
								meta: {
									title: '男鞋'
								},
							},
							{
								path: '/goods/womenShoes',
								name: 'goodsWomenShoes',
								meta: {
									title: '女鞋'
								},
							}
						]
					}
				]
			},
		]
	}
	return promiseFunction(data)
}

