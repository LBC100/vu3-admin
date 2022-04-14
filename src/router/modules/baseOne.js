

export default [
	{
		path: '/',
		name: 'home',
		meta: {
			title: '首页'
		},
		component: () => import('@/views/home/HomeView.vue')
	},
]
