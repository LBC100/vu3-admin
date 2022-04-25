/**
 * 布局
 */
import to from 'await-to-js';
import {
	getMenuMock
} from '@/api/apiMock.js';


export default {
	namespaced: true,
	state: {
		menuList: [], // 菜单
	},
	getters: {
		getMenuList(state) {
			let openKeysArr = []; // '/goods', '/goods/clothing', '/goods/jacket'
			let pathAllPermission = []; // '/goods', '/goods/clothing', '/goods/jacket'

			const menuRecursionFor = (arr = [], fatherItem, copyMenuList02 = []) => {

				for (let i = 0; i < arr.length; i++) {
					let item = arr[i];
					let itemCopy = copyMenuList02[i]; // 使用同一个循环 递归出所有path

					if (itemCopy.auth != 0) {
						pathAllPermission.push(itemCopy.path)
					}

					// console.log(itemCopy,   "1递归菜单7");

					if (fatherItem) {
						item.path = fatherItem.path + ',' + item.path;
					}
					if (item.children) {
						// console.log(item, i, "1递归菜单6");
						menuRecursionFor(item.children, item, itemCopy.children)
					} else {
						if (fatherItem) {
							item.pathKeyStr = fatherItem.path

							item.openKeys = fatherItem.path.split(',')
							// console.log(item,  "1递归菜单7");
						}
						openKeysArr.push(item);
						// console.log(item, i, "1递归菜单7");
					}
					// console.log(item, "递归菜单2");
				}
			};

			let copyMenuList = JSON.parse(JSON.stringify(state.menuList));
			let copyMenuList02 = state.menuList

			menuRecursionFor(copyMenuList, null, copyMenuList02);

			// console.log(openKeysArr, state.menuList, pathAllPermission, "递归菜单3");
			// pathAllPermission.push('/403');
			return {
				menuList: state.menuList, // 左侧菜单
				openKeys: openKeysArr, // 路由展开
				pathAllPermission: pathAllPermission // 所有权限
			};
		},
	},
	mutations: {
		setMenu(state, list = []) {
			state.menuList = list;
		}

	},
	actions: {
		async getMenuAction(context) {
			const [err, res] = await to(getMenuMock());
			if (err) {
				console.log('获取菜单报错5' );
			}

			console.log(res, 'actions 获取菜单1');
			context.commit('setMenu', res.data);
			return res
			// context.commit('addNum', num);
		},
	}
}
