import {
	createRouter,
	createWebHistory
} from 'vue-router'

import basicLayout from '@/layouts/basic-layout/index.vue'
import baseOne from './modules/baseOne.js'
import base from './modules/base.js'
import set from './modules/set.js'


const routes = [
	// ...baseOne,
	// {
	// 	path: '/',
	// 	name: 'home',
	// 	meta: {
	// 		title: '首页'
	// 	},
	// 	component: () => import('@/views/home/HomeView.vue')
	// },
	base,
	set,
	{
		path: '/404',
		name: '404',
		meta: {
			keepAlive: true
		},
		component: () => import('@/views/404.vue')
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/404'
	}
]
console.log(process.env, "全局文件1");
const router = createRouter({
	history: createWebHistory(process.env.VUE_APP_BASE_URL),
	routes
})

export default router
