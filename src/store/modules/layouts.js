/**
 * 布局
 */
export default {
	namespaced: true,
	state: {
		menuList: [], // 菜单
	},
	getters: {
		// getMenu(state) {
		// 	return state.menuList
		// },
	},
	mutations: {
		setMenu(state, list = []) {
			state.menuList = list;
		}

	},
	actions: {

	}
}
