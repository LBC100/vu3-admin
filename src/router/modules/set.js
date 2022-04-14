import basicLayout from '@/layouts/basic-layout/index.vue'
import blank from '@/layouts/basic-layout/blank/index.vue'

export default {
	path: '/set',
	name: 'set',
	redirect: '/set/about',
	component: basicLayout,
	children: [{
		path: '',
		name: 'test',
		meta: {
			title: '关于'
		},
		redirect: '/set/about',
		component: blank,
		children: [{
			path: '/set/about',
			name: 'set',
			meta: {
				title: '设置'
			},
			component: () => import('@/views/about/AboutView.vue')
		}, ]

	}, ]
}
