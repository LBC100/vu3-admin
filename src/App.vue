<template>
	<div id="app">
		<div style="" v-if="layoutsComputed.menuList.length == 0 && !noVerification" class="loading-container"><a-spin class="spin" tip="正在加载..." :spinning="layoutsComputed.menuList.length == 0"></a-spin></div>


		<router-view v-show="layoutsComputed.menuList.length != 0 || noVerification" />

		<!-- <router-view /> -->
	</div>
</template>

<script>
import Config from '@/config/config.js';
export default {
	name: 'app',
	data() {
		return {
			noVerification: false
		};
	},
	watch: {},
	computed: {
		layoutsComputed() {
			return this.$store.getters['layouts/getMenuList'];
		}
	},
	beforeCreate() {
		// const res = this.$store.dispatch('layouts/getMenuAction'); // 先请求一次
	},
	created() {
		let path = window.location.pathname.replace(Config.routeBaseURL, '');
		let boolanRouteWhiteList = Config.routeWhiteList.find((e) => e.path == path);
		
		// 白名单路由直接显示 免验证
		if (boolanRouteWhiteList) {
			this.noVerification = true;
		} else {
			this.noVerification = false;
		}

		// console.log(this.$route, window.location.pathname, path, 'app - created');
	},
	mounted() {
		// console.log(this.$route, window.location, 'app - mounted');
	}
};
</script>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
}
.loading-container {
	height: 100vh;
	position: relative;
	
	.spin {
		position: absolute;
		top: 25%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
}
</style>
