import basicLayout from '@/layouts/basicLayout/index.vue'

export default {
	path: '/set',
	name: 'set',
	redirect: '/set/about',
	component: basicLayout,
	children: [
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
