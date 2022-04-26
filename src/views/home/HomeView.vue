<template>
	<div class="home">
		{{ num }}
		<a-button type="primary" @click="addNum">更改权限</a-button>

		<div class="" v-for="(item, index) in arr" :key="index">{{ item }}</div>
		{{ obj }}
		<a-button type="primary" @click="toAbout">去关于</a-button>
		<a-button type="primary" @click="router.push('/user/login')">去登录</a-button>
		<img alt="Vue logo" src="@/assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';

import { ref, onMounted } from 'vue';

import { useRoute, useRouter } from 'vue-router'

let route = useRoute();
let router = useRouter();

import { useStore } from 'vuex';
const store = useStore();

// 像在平常的setup中一样的写,但是不需要返回任何变量
const num = ref(0); //在此处定义的 num 可以直接使用
const addNum = () => {
	//函数也可以直接引用,不用在return中返回
	num.value++;
	// arr.value.push(1)
	obj.value.test = 2;

	store.commit('layouts/setMenu', [
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
			auth: 0, // 1有权限, 0 无权限
			meta: {
				title: '关于'
			},
		},
	]);
};

const toAbout = () => {
	console.log(route, "路由信息");
	router.push('/base/about');
}


const arr = ref([]);
const addArr = () => {
	arr.value.push(1);
};

const obj = ref({
	test: 1
});
</script>
