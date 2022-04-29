// permission.js
import store from '@/store'

/**
 * @param {Object} el
 * @param {Object} binding
 * <a-button v-permission="{ code: [1000, 1001] }">测试权限显示</a-button>
 */
function checkPermission(el, binding) {
	const {
		value = {},
	} = binding;
	const {
		code,
		event = "click",
	} = value;
	console.log(value, event, '验证权限 - 指令');

	function eventHandler(e) {
		console.log('点击了1', e);
	}
	// 用于销毁前注销事件监听
	el.__click_outside__ = eventHandler

	// 添加事件监听
	el.addEventListener(event, eventHandler);
}

export default {
	mounted(el, binding) {
		checkPermission(el, binding)
	},
	// update(el, binding) {
	// 	checkPermission(el, binding)
	// },
	unmounted(el, binding) {
		const {
			value,
			event = "click",
		} = binding;
		// 移除事件监听
		el.removeEventListener(event, el.__click_outside__)
		console.log('移除了2', el.__click_outside__);
		// 删除无用属性
		delete el.__click_outside__;
	}
}
