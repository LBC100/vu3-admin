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
let openKeysStore = computed(() => {
	return store.state.layouts.openKeysStore;
});

// 左侧菜单改变展开列表
let openChangeKeys = computed(() => {
	return store.state.layouts.openChangeKeys;
});

// console.log(data, '菜单1');
const titleClick = async (ev, data) => {
	let item = menuData.value.openKeys.find(e => e.name == data.name );
	// let openKeysStoreStr = openKeysStore.value.join(',');
	// let openKeysStr = item.openKeys.join(',');
	// let arr = []
	// if(openKeysStoreStr == openKeysStr) {
	// 	for (let i = 0; i < item.openKeys.length - 1; i++) {
	// 	  const element = item.openKeys[i];
	// 	  arr.push(element)
	// 	}
	// }
	await nextTick()	// 会返回一个Promise对象,所以可以使用await,等待nextTick()结束再执行后续操作
	console.log(openChangeKeys.value, '菜单6 - a-sub-menu');
	
	store.commit("layouts/setOpenKeysStore", openChangeKeys);
	// console.log(ev, data, menuData.value.openKeys, '菜单2 - a-sub-menu');
	// console.log(item.openKeys, menuData.value.openKeys, data, '菜单3 - a-sub-menu');
	console.log(openKeysStore.value, item.openKeys, '菜单5 - a-sub-menu');
	
};
</script>

<style lang="less" scoped></style>
