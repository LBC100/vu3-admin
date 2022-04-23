import basicLayout from '@/layouts/basic-layout/index.vue'

export default {
	path: '/goods',
	name: 'goods',
	redirect: '/goods/menJacket',
	component: basicLayout,
	children: [
		{
			path: '/goods/menJacket',
			name: 'goodsJacket',
			meta: {
				title: '男夹克'
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
