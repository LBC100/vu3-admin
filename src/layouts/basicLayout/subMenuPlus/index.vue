<template>
	<!-- <div class=""></div> -->
	<a-sub-menu :key="data.path" @titleClick="titleClick($event, data)">
		<template #icon>
			<Icon :icon="data.icon" />
		</template>

		<template #title>
			<span>{{ data.meta.title }}</span>
		</template>
		<template v-if="data.children" v-for="item in data.children" :key="item.path">
			<template v-if="!item.children && item.hideMenu != 1">
				<a-menu-item :key="item.path">
					<template #icon>
						<Icon :icon="item.icon" />
					</template>
					{{ item.meta.title }}
				</a-menu-item>
			</template>
			<template v-if="item.children && item.hideMenu != 1">
				<subMenuPlus :data="item" :key="item.path" />
			</template>
		</template>
	</a-sub-menu>
</template>

<!-- 递归菜单组件 -->

<script>
import { Icon } from '@/components/iconPlus';
export default {
	name: 'subMenuPlus'
	// props: {
	// 	data: {
	// 		type: Array,
	// 		default: () => []
	// 	}
	// }
};
</script>

<script setup>
import { computed, nextTick } from 'vue';

import { useStore } from 'vuex';
const store = useStore();

// props
const { data } = defineProps({
	data: {
		type: Object,
		default: () => ({
			data: {
				meta: {
					title: ''
				}
			}
		})
	}
});

// 菜单数据
let menuData = computed(() => {
	return store.getters['layouts/getMenuList'];
});

// 左侧菜单选中展开列表
// let openKeysStore = computed(() => {
// 	return store.state.layouts.openKeysStore;
// });

// 左侧菜单改变展开列表
let openChangeKeys = computed(() => {
	return store.state.layouts.openChangeKeys;
});

const titleClick = async (ev, data) => {
	let item = menuData.value.openKeys.find(e => e.name == data.name);

	// await nextTick()	// 会返回一个Promise对象,所以可以使用await,等待nextTick()结束再执行后续操作

	nextTick(() => {
		let arr = [];
		for (let index = 0; index < item.openKeys.length; index++) {
			const element = item.openKeys[index];

			if (openChangeKeys.value.find(e => e == element)) {
				arr.push(element);
			}
		}

		store.commit('layouts/setOpenKeysStore', arr);
		// console.log('openKeysStore.value nextTick =>', openKeysStore.value, 'old =>', openKeys, '点击item =>', item.openKeys, 'openChangeKeys =>', openChangeKeys.value, '过滤后 =>', arr, '菜单5 nextTick - a-sub-menu');
	});
};
</script>

<style lang="less" scoped></style>
