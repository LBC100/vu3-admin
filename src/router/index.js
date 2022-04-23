import {
	createRouter,
	createWebHistory
} from 'vue-router'

import basicLayout from '@/layouts/basic-layout/index.vue'
import base from './modules/base.js'
import set from './modules/set.js'
import goods from './modules/goods.js'

/**
 * hideMenu: 1, // 1: 隐藏 0或不设置: 不隐藏 菜单隐藏, 直接输入路由可访问
 * auth: 0, // 1有权限(默认undefined, 有权限), 0 无权限(不返回菜单, 或设置为0) 
 */

const routes = [
	base,
	goods,
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

/**
 * 进入路由前 路由拦截 权限验证
 */
router.beforeEach(async (to, from, next) => {
	
	next()
})

/**
 * 进入路由后
 */
router.afterEach(async to => {
	// 更改标题
	window.document.title = to.meta.title || '标题'


	// 返回页面顶端
	window.scrollTo(0, 0)
})

export default router
