/**
 * 布局
 */
export default {
	namespaced: true,
	state: {
		menu: [], // 菜单
	},
	getters: {
		// getMenu(state) {
		// 	return state.menu
		// },
	},
	mutations: {
		setMenu(state, list = []) {
			state.menu = list;
		}

	},
	actions: {

	}
}
