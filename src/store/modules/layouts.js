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

// let arrMenu = []
// const menuRecursionFor = (arr = [], fatherItem) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		let item = arr[i];
// 		if(item.children) {
// 			menuRecursionFor(item.children)
// 		}else {
// 			arrMenu.push(item)
// 		}
// 		console.log(item, "递归菜单2");
// 	}
// };

// console.log(arrMenu, "递归菜单3");



export default {
	namespaced: true,
	state: {
		menuList: [], // 菜单
	},
	getters: {
		getMenuList(state) {
			let arrMenu = []; // '/goods', '/goods/clothing', '/goods/jacket'
			// let arrMenu02 = []; // '/goods', '/goods/clothing', '/goods/jacket'
			
			const menuRecursionFor = (arr = [], fatherItem) => {
				
				for (let i = 0; i < arr.length; i++) {
					let item = arr[i];
					
					if(fatherItem) {
						item.path =  fatherItem.path + ',' + item.path
					}else {
						
					}
					if(item.children) {
						
						console.log(item, i, "1递归菜单6");
						
						
						menuRecursionFor(item.children, item)
					}else {
						if(fatherItem) {
							item.pathKeyStr = fatherItem.path
							item.openKeys = fatherItem.path.split(',')
						}
						arrMenu.push(item);
						console.log(item, i, "1递归菜单7");
					}
					console.log(item, "递归菜单2");
				}
			};
			
			let arr = menuRecursionFor(state.menuList);
			
			let arr02 = menuRecursion(state.menuList);
			
			// console.log(arr, "递归菜单1");
			console.log( arrMenu,  "递归菜单3");
			return arr02;
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
