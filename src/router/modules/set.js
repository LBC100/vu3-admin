import basicLayout from '@/layouts/basic-layout/index.vue'

export default {
	path: '/set',
	name: 'set',
	redirect: '/set/about',
	component: basicLayout,
	children: [
		{
			path: '/set/about',
			name: 'about',
			meta: {
				title: '关于'
			},
			component: () => import('@/views/about/AboutView.vue')
		},
	]
}
