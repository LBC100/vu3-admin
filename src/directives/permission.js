// permission.js
import store from '@/store'

/**
 * TIP
 * 指令方式不能动态更改权限
 * @param {*} el 
 * @param {*} binding 
 */
function checkPermission(el, binding) {
	const {
		value = {},
	} = binding;
	const {
		code = []
	} = value;
	const permissionCodes = store.getters['layouts/getPermissionCodes'];
	let codeList = permissionCodes.permissionCodes;
	let hasPermission = codeList.find((e) => {
		return code.find((j) => j == e);
	});
	
	if (!hasPermission) {
		el.parentNode && el.parentNode.removeChild(el)
	}
	// console.log('验证权限 - 指令', !hasPermission, code, value, permissionCodes, );

}

export default {
	mounted(el, binding) {
		checkPermission(el, binding)
	},
	update(el, binding) {
		checkPermission(el, binding)
	},
}
