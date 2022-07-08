import basicLayout from '@/layouts/basicLayout/index.vue'

export default {
	path: '/set',
	name: 'set',
	redirect: '/set/gameSet',
	component: basicLayout,
	children: [
		{
			path: '/set/gameSet',
			name: 'gameSet',
			meta: {
				title: '游戏设置'
			},
			component: () => import('@/views/set/gameSet.vue')
		},
		{
			path: '/set/about',
			name: 'setAbout',
			meta: {
				title: '关于'
			},
			component: () => import('@/views/about/AboutView.vue')
		},
	]
}
