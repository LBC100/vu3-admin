<template>
	<!-- 页面 -->
	<router-view v-slot="{ Component }" >
		<transition name="fade"><component :is="Component" /></transition>
	</router-view>
</template>

<script setup></script>
<style lang="less" scoped></style>
