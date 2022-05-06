<template>
	<div class="box">
		权限 {{ permissionCodes }}
		<a-button>测试权限</a-button>
		<a-button v-permission="{ code: [2000, 2001] }">测试权限显示 - 指令 - 指令方式不能动态更改权限</a-button>

		<authority :value="{ code: [2001] }"><a-button>测试权限显示 - 动态</a-button></authority>

		<a-button type="primary" @click="addNum">更改权限</a-button>
	</div>
</template>

<script setup>
import authority from '@/components/authority/index.vue';

import { ref, onMounted, computed } from 'vue';

import { useRoute, useRouter } from 'vue-router';

let route = useRoute();
let router = useRouter();

import { useStore } from 'vuex';
const store = useStore();

onMounted(() => {
	let myrng = new Math.seedrandom('hello.');
	console.log(myrng(), '随机1'); // Always 0.9282578795792454
	console.log(myrng(), '随机2'); // Always 0.3752569768646784
	
	let prng = new Math.seedrandom('added entropy.', { entropy: true });
	console.log(prng(), '随机3');
});

// 权限码
let permissionCodes = computed(() => {
	return store.getters['layouts/getPermissionCodes'];
});

const addNum = () => {
	let data = {
		roleName: 'admin',
		menuData: [
			{
				path: '/base/home',
				name: 'baseHome',
				icon: 'HomeOutlined',
				meta: {
					title: '首页'
				}
			},
			{
				path: '/base/about',
				name: 'baseAbout',
				icon: 'BarsOutlined',
				hideMenu: 1, // 菜单隐藏, 直接输入路由可访问
				// auth: 0, // 1有权限, 0 无权限
				meta: {
					title: '关于'
				}
			},
			{
				path: '/base/permission',
				name: 'basePermission',
				icon: 'HomeOutlined',
				meta: {
					title: '权限'
				}
			}
		],
		permissionCodeTag: '管理员',
		permissionCodes: [2001]
	};

	store.commit('layouts/setMenu', data.menuData);
	store.commit('layouts/setMenuAndPermissionCodeData', data);
};
</script>
