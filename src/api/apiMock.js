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
				icon: 'HomeOutlined',
				meta: {
					title: '首页'
				},
			},
			{
				path: '/base/about',
				name: 'baseAbout',
				icon: 'BarsOutlined',
				hideMenu: 1, // 菜单隐藏, 直接输入路由可访问
				meta: {
					title: '关于'
				},
			},
			{
				path: '/goods',
				name: 'goods',
				icon: 'BarsOutlined',
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
						children: [
							{
								path: '/goods/jacket',
								name: 'goodsJacket',
								meta: {
									title: '夹克'
								},
								children: [
									{
										path: '/goods/menJacket',
										name: 'goodsMenJacket',
										meta: {
											title: '男夹克'
										},
									},
								]
							},
						]
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
								hideMenu: 1,
								meta: {
									title: '女鞋'
								},
							}
						]
					}
				]
			},
			{
				path: '/plant',
				name: 'plant',
				meta: {
					title: '植物/蔬菜'
				},
				children: [
					{
						path: '/plant/Tree',
						name: 'plantTree',
						meta: {
							title: '树'
						},
						children: [
							{
								path: '/plant/appleTree',
								name: 'goodsAppleTree',
								meta: {
									title: '苹果树'
								},
							},
						]
					},
					{
						path: '/plant/radish',
						name: 'plantRadish',
						meta: {
							title: '萝卜'
						},
						children: [
							{
								path: '/plant/whiteRadish',
								name: 'plantWhiteRadish',
								meta: {
									title: '白萝卜'
								},
							},
							{
								path: '/plant/carrot',
								name: 'plantCarrot',
								meta: {
									title: '红萝卜'
								},
							},
						]
					}
				]
			},
					
		]
	}
	return promiseFunction(data)
}

