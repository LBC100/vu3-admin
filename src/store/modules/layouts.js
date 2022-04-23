/**
 * 布局
 */

// 菜单递归
const menuRecursion = (arr = [], treeNum = 0, ) => {
	treeNum++;
	return arr.map((ei, index) => {
		// 子集
		if (ei.children) {
			// 初始化
			ei.children = menuRecursion(ei.children, treeNum);
			ei.isRoot = false;
		} else {
			ei.isRoot = true;
		}

		ei.treeNum = treeNum;
		return ei;
	});
};



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

			console.log(openKeysArr, state.menuList, pathAllPermission, "递归菜单3");
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

	}
}
