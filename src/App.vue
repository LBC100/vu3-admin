<template>
	<div id="app">
		<div v-if="layoutsComputed.menuList.length == 0" class="">
			<a-spin tip="正在验证权限..." :spinning="layoutsComputed.menuList.length == 0"></a-spin>
			<!-- 正在验证权限... -->
		</div>

		<router-view v-show="layoutsComputed.menuList.length != 0" />
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {};
	},
	watch: {},
	computed: {
		layoutsComputed() {
			return this.$store.getters['layouts/getMenuList'];
		}
	},
	mounted() {}
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
</style>
