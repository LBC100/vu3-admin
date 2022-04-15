<template>
	<a-layout style="height: 100%;">
		<a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
			<div class="logo">123</div>

			<a-menu theme="dark" mode="inline" @click="clickMenu" :openKeys="openKeys" v-model:selectedKeys="selectedKeys" @openChange="onOpenChange">
				<a-menu-item key="menu1">
					<user-outlined />
					<span>{{ '测试1' }}</span>
				</a-menu-item>

				<a-sub-menu key="sub1">
					<template #icon>
						<MailOutlined />
					</template>
					<template #title>
						Navigation One
					</template>
					<a-menu-item key="1">Option 1</a-menu-item>
					<a-menu-item key="2">Option 2</a-menu-item>
					<a-menu-item key="3">Option 3</a-menu-item>
					<a-menu-item key="4">Option 4</a-menu-item>
				</a-sub-menu>
				<a-sub-menu key="sub2">
					<template #icon></template>
					<template #title>
						<AppstoreOutlined />
						Navigation Two
					</template>
					<a-menu-item key="5">Option 5</a-menu-item>
					<a-menu-item key="6">Option 6</a-menu-item>
					<a-sub-menu key="sub3" title="Submenu">
						<a-menu-item key="7">Option 7</a-menu-item>
						<a-menu-item key="8">Option 8</a-menu-item>
					</a-sub-menu>
				</a-sub-menu>
				<a-sub-menu key="sub4">
					<template #icon>
						<SettingOutlined />
					</template>
					<template #title>
						Navigation Three
					</template>
					<a-menu-item key="9">Option 9</a-menu-item>
					<a-menu-item key="10">Option 10</a-menu-item>
					<a-menu-item key="11">Option 11</a-menu-item>
					<a-menu-item key="12">Option 12</a-menu-item>
				</a-sub-menu>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header style="background: #fff; padding: 0; display: flex;justify-content: space-between;">
				<div class="left-box">
					<menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
					<menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
				</div>
				<div class="right-box">右侧</div>
			</a-layout-header>
			<a-layout-content :style="{ margin: '16px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"><router-view /></a-layout-content>
		</a-layout>
	</a-layout>
</template>

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
import { defineComponent, ref, computed, onMounted, watch, reactive, toRefs } from 'vue';
import { getMenuMock } from '@/api/apiMock.js';
import { useRouter } from 'vue-router';
import to from 'await-to-js';

import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
	getMenuMockFn();

	console.log(window.location.pathname, '地址栏1');
});

let router = useRouter();
// 监听当前路由变化
// watch(
// 	() => router.currentRoute.value,
// 	e => {
// 		console.log(e, '路由变化了1');
// 	}
// );

// 菜单递归
const menuRecursion = (arr = []) => {
	return arr.map(ei => {
		return ei;
	});
};

// 获取菜单
const getMenuMockFn = async () => {
	// const res = await getMenuMock();
	const [err, res] = await to(getMenuMock());
	if (err) {
	}

	let newData = menuRecursion(res.data);

	console.log(res, '获取菜单3');
};

let layoutData = computed(() => {
	return store.state.layouts;
});

// 左侧菜单
// const selectedKeys = ref(['8']);
// const openKeys = ref(['sub2']);
const collapsed = ref(false);

const state = reactive({
	rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
	// openKeys: ['sub1'],
	// openKeys: ['sub2','sub3'],
	openKeys: [],
	selectedKeys: []
});

const clickMenu = (e, i) => {
	// state.openKeys = []
	// router.push(e.key);
	// console.log(e, '菜单点击1');
};

const { rootSubmenuKeys, openKeys, selectedKeys } = toRefs(state);

const onOpenChange = openKeys => {
	const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);

	if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
		state.openKeys = openKeys;
	} else {
		state.openKeys = latestOpenKey ? [latestOpenKey] : [];
	}

	console.log(openKeys, state.openKeys, '展开1');
};

// 监听路由
watch(
	() => router.currentRoute.value.path,
	(to, from) => {
		//要执行的方法
		state.selectedKeys = [to];
		console.log(to, from, state.selectedKeys, 'toPath');
	},
	{ immediate: true, deep: true }
);
</script>
<style lang="less" scoped>
/deep/ .trigger {
	font-size: 18px;
	line-height: 64px;
	padding: 0 24px;
	cursor: pointer;
	transition: color 0.3s;
}

/deep/ .trigger:hover {
	color: #1890ff;
}

.logo {
	height: 32px;
	background: rgba(255, 255, 255, 0.3);
	margin: 16px;
}

/deep/ .site-layout .site-layout-background {
	background: #fff;
}
</style>
