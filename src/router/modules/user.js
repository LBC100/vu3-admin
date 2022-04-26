import blank from '@/layouts/basicLayout/blank/index.vue'

export default {
	path: '/user',
	name: 'user',
	redirect: '/user/login',
	component: blank,
	children: [{
			path: '/user/login',
			name: 'userLogin',
			meta: {
				title: '登录'
			},
			component: () => import('@/views/user/login/index.vue')
		},
	]
}
