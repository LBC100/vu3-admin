<template>
	<!-- <div class=""></div> -->
	<a-sub-menu  :key="data.path" @titleClick="titleClick">
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
// console.log(data, '菜单1');
const titleClick = (e, i) => {
	// console.log(e, i, '菜单2');
};
</script>

<style lang="less" scoped></style>
