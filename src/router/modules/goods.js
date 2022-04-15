import basicLayout from '@/layouts/basic-layout/index.vue'

export default {
	path: '/goods',
	name: 'goods',
	redirect: '/goods/clothing',
	component: basicLayout,
	children: [{
			path: '/goods/clothing',
			name: 'goodsClothing',
			meta: {
				title: '衣服'
			},
			component: () => import('@/views/home/HomeView.vue')
		},
		{
			path: '/goods/menShoes',
			name: 'goodsMenShoes',
			meta: {
				title: '男鞋'
			},
			component: () => import('@/views/about/AboutView.vue')
		},
		{
			path: '/goods/womenShoes',
			name: 'goodsWomenShoes',
			meta: {
				title: '女鞋'
			},
			component: () => import('@/views/home/HomeView.vue')
		},
	]
}
