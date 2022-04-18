<template>
	<!-- <div class=""></div> -->
	<a-sub-menu :key="data.path" @titleClick="titleClick">
		<template #icon>
			<MailOutlined />
		</template>

		<template #title>
			<span>{{ data.meta.title }}</span>
		</template>
		<template v-if="data.children" v-for="item in data.children" :key="item.path">
			<template v-if="!item.children">
				<a-menu-item :key="item.path">
					<template #icon>
						<PieChartOutlined />
					</template>
					{{ item.meta.title }}
				</a-menu-item>
			</template>
			<template v-else>
				<subMenuPlus :data="item" :key="item.path" />
			</template>
		</template>
	</a-sub-menu>
</template>

<script>
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
import {
	MailOutlined,
	CalendarOutlined,
	AppstoreOutlined,
	SettingOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined
} from '@ant-design/icons-vue';
const { data } = defineProps({
	// data: Array
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
}
</script>

<style lang="less" scoped></style>
