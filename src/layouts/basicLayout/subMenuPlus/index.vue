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
import { computed } from 'vue';

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

// console.log(data, '菜单1');
const titleClick = (ev, data) => {
	let item = menuData.value.openKeys.find(e => {
		// e.pathKeyStr.indexOf(data.path)
		if (e.pathKeyStr) {
			return e.pathKeyStr.indexOf(data.path) != -1;
		}
		console.log(e.pathKeyStr, '测试1');
	});
	// store.commit("layouts/setOpenKeysStore", item.openKeys);
	// console.log(ev, data, menuData.value.openKeys, '菜单2 - a-sub-menu');
	console.log(item.openKeys, menuData.value.openKeys, data, '菜单3 - a-sub-menu');
};
</script>

<style lang="less" scoped></style>
