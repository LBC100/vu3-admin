import basicLayout from '@/layouts/basicLayout/index.vue'

export default {
	path: '/base',
	name: 'base',
	redirect: '/base/home',
	component: basicLayout,
	children: [{
			path: '/base/home',
			name: 'baseHome',
			meta: {
				title: '首页'
			},
			component: () => import('@/views/home/HomeView.vue')
		},
		{
			path: '/base/about',
			name: 'baseAbout',
			meta: {
				title: '关于'
			},
			component: () => import('@/views/about/AboutView.vue')
		},
		{
			path: '/base/permission',
			name: 'basePermission',
			meta: {
				title: '权限'
			},
			component: () => import('@/views/base/permission.vue')
		},
	]
}
