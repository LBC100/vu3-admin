import basicLayout from '@/layouts/basic-layout/index.vue'

export default {
	path: '/',
	name: 'base',
	redirect: '/base/home',
	component: basicLayout,
	children: [{
			path: '/base/home',
			name: 'base_home',
			meta: {
				title: '首页'
			},
			component: () => import('@/views/home/HomeView.vue')
		},
		{
			path: '/base/about',
			name: 'base_about',
			meta: {
				title: '关于'
			},
			component: () => import('@/views/about/AboutView.vue')
		},
	]
}
