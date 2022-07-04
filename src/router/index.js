import {
	createRouter,
	createWebHistory
} from 'vue-router'

import awaitTo from 'await-to-js';
import {
	getMenuMock
} from '@/api/apiMock.js';
import Config from '@/config/config.js';

import store from '@/store/index'

import base from './modules/base.js'
import user from './modules/user.js'
import set from './modules/set.js'
import goods from './modules/goods.js'

/**
 * hideMenu: 1, // 1: 隐藏 0或不设置: 不隐藏 菜单隐藏, 直接输入路由可访问
 * auth: 0, // 1有权限(默认undefined, 有权限), 0 无权限(不返回菜单, 或设置为0) 
 */

const routes = [
	// '/' 路由
	{
		path: '/',
		name: '首页',
		redirect: '/base/home',
		component: () => import('@/views/blank.vue')
	},
	base,
	goods,
	user,
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
		path: '/403',
		name: '403',
		meta: {
			keepAlive: true
		},
		component: () => import('@/views/403.vue')
	},

	{
		path: '/:pathMatch(.*)',
		redirect: '/404'
	}
]



// console.log(process.env, "全局文件1");
const router = createRouter({
	history: createWebHistory(Config.routeBaseURL),
	routes
})

/**
 * 进入路由前 路由拦截 权限验证
 */
// store.dispatch('layouts/getMenuAction');
router.beforeEach(async (to, from, next) => {
	
	// console.log(indexWhiteItem, to, '白名单1');
	
	// '/' 默认页面开始 从 '/' =>  指定页面
	// if(to.path == '/404' && to.redirectedFrom && to.redirectedFrom.path == '/') {
	if(to.path == '/') {
		next({
			path: Config.rootPage,
			replace: true
		});
		return true
	}
	// '/' 默认页面 结束


	// 免验证白名单
	let indexWhiteItem = Config.routeWhiteList.find((e) => e.path == to.path);
	
	if (indexWhiteItem) {
		if (indexWhiteItem.requestMenu) {
			store.dispatch('layouts/getMenuAction'); // 先请求一次左侧菜单(左侧菜单亦是权限列表) 异步
		}
		next();
		return true
	}



	// 获取菜单
	let menuData = store.getters['layouts/getMenuList'];
	if (menuData.pathAllPermission.length == 0) { // 第一次初始化
		const res = await store.dispatch('layouts/getMenuAction'); // 先请求一次左侧菜单(左侧菜单亦是权限列表) 同步

		menuData = store.getters['layouts/getMenuList'];
	}



	let pathAllPermission = menuData.pathAllPermission;

	console.log(pathAllPermission, menuData, to.path, from, '路由守卫1');

	if (pathAllPermission && pathAllPermission.length != 0) {
		let boolanPermission = pathAllPermission.find((e) => e == to.path)
		if (boolanPermission) { // 有权限
			next();
		} else { // 无权限
			next({
				path: '/403'
			});
		}
	} else {
		next({
			path: '/403'
		});
	}



	// next();
	// next(false);
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
