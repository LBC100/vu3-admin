import {
	createVNode
} from 'vue'


import {
	createFromIconfontCN
} from '@ant-design/icons-vue';
export const IconFont = createFromIconfontCN({
	scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

// export const Icon = (props = {}) => {
// 	const {
// 		type
// 	} = props;
// 	// const antIcon = $Icon;
// 	return createVNode('IconFont', { type: type });
// };


// import {
// 	createVNode
// } from 'vue'
// import * as $Icon from '@ant-design/icons-vue'

// export const Icon = (props={}) => {
// 	const {
// 		icon
// 	} = props;
// 	const antIcon = $Icon;
// 	return createVNode(antIcon[icon]);
// };
