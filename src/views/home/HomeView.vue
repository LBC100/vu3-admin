<template>
	<div class="home">
		{{ num }}
		<a-button type="primary" @click="addNum">按钮1</a-button>

		<div class="" v-for="(item, index) in arr" :key="index">{{ item }}</div>
		{{ obj }}

		<img alt="Vue logo" src="@/assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';

import { ref, onMounted, } from 'vue';

import { useStore } from 'vuex';
const store = useStore();



// 像在平常的setup中一样的写,但是不需要返回任何变量
const num = ref(0); //在此处定义的 num 可以直接使用
const addNum = () => {
	//函数也可以直接引用,不用在return中返回
	num.value++;
	// arr.value.push(1)
	obj.value.test = 2;
	
	store.commit("layouts/setMenu", ['测试']);
};

const arr = ref([]);
const addArr = () => {
	arr.value.push(1);
};

const obj = ref({
	test: 1
});


</script>
