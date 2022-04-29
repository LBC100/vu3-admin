<template>
	<a-layout style="height: 100%;">
		<a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
			<div class="logo">123</div>

			<a-menu theme="dark" mode="inline" @click="clickMenu" :openKeys="openKeysStore" v-model:selectedKeys="selectedKeys" @openChange="onOpenChange">
				<template class="" v-for="(item, index) in menuData.menuList" :key="item.path">
					<a-menu-item v-if="!item.children && item.hideMenu != 1" :key="item.path">
						<Icon :icon="item.icon" />
						<span>{{ item.meta.title }}</span>
					</a-menu-item>

					<subMenuPlus v-if="item.children && item.hideMenu != 1" :data="item" />
				</template>
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
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { Icon } from '@/components/iconPlus';
import { defineComponent, ref, computed, onMounted, watch, reactive, toRefs } from 'vue';
import { getMenuAndPermissionCodesMock } from '@/api/apiMock.js';
import { useRouter } from 'vue-router';
import subMenuPlus from './subMenuPlus';

import to from 'await-to-js';

import { useStore } from 'vuex';
const store = useStore();

onMounted(() => {
	getMenuAndPermissionCodesMockFn();

	console.log(window.location.pathname, menuData, '地址栏1');
});

let router = useRouter();

// 获取菜单
onMounted(() => {
	// store.dispatch('layouts/getMenuAction');
});
// const menuList = ref([]);
const getMenuAndPermissionCodesMockFn = async () => {
	// const res = await getMenuAndPermissionCodesMock();
	// const [err, res] = await to(getMenuAndPermissionCodesMock());
	// if (err) {
	// }
	// store.commit('layouts/setMenu', res.data);
	// console.log(res, '获取菜单3');
};

// 左侧菜单
// const selectedKeys = ref(['8']);
// const openKeys = ref(['sub2']);
const collapsed = ref(false);

const state = reactive({
	rootSubmenuKeys: ['/goods', '/plant'],
	// openKeys: ['sub1'],
	// openKeys: ['sub2','sub3'],
	openKeys: [],
	selectedKeys: []
});

// 左侧菜单选中展开列表
let openKeysStore = computed(() => {
	return store.state.layouts.openKeysStore;
});

// 一层左侧菜单
let oneLayerStr = computed(() => {
	let arr = [];
	menuData.value.menuList.map(e => {
		if (!e.children) {
			arr.push(e.path);
		}
	});

	return arr;
});

// 菜单数据
let menuData = computed(() => {
	return store.getters['layouts/getMenuList'];
});

// 根据路由地址展开左侧菜单
watch(
	menuData,
	(newValue, oldValue) => {
		let to = window.location.pathname.replace('/admin', '');
		let data = newValue.openKeys.find(e => e.path.indexOf(to) != -1);

		if (data && data.openKeys && data.hideMenu != 1) {
			store.commit('layouts/setOpenKeysStore', data.openKeys);
			// state.openKeys = data.openKeys;
		}
		// console.log('menuData变了', data, to, newValue, oldValue);
	},
	{ deep: true, immediate: true }
);

const clickMenu = e => {
	if (oneLayerStr.value.find(j => j == e.key)) {
		// 没有子菜单
		store.commit('layouts/setOpenKeysStore', []);
		// state.openKeys = [];
	}

	router.push(e.key);

	// console.log(e, oneLayerStr,  '菜单点击1');
};

const { rootSubmenuKeys, openKeys, selectedKeys } = toRefs(state);

const onOpenChange = openKeys => {
	store.commit('layouts/setOpenChangeKeys', openKeys);
};

// 监听路由 根据地址设置选中的菜单
watch(
	() => router.currentRoute.value.path,
	(to, from) => {
		// 要执行的方法
		state.selectedKeys = [to];
		// let arr = menuData.value.openKeys.filter((e) => e.path.indexOf(to) != -1);

		// console.log(to, from, state.selectedKeys, menuData.value, '路由1');
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
