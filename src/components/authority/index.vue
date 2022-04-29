<template>
	<slot v-if="hasPermission"></slot>
</template>

<script setup>
// props
const { value } = defineProps({
	value: {
		type: Object,
		default: () => ({})
	}
});

import { computed } from 'vue';

import { useStore } from 'vuex';
const store = useStore();



// 权限码
let hasPermission = computed(() => {
	const { code = [] } = value;
	
	let codeList = store.getters['layouts/getPermissionCodes'].permissionCodes;
	let hasPermission = codeList.find(e => {
		return code.find(j => j == e);
	});
	// console.log(codeList, hasPermission, code, value, '结果1');
	return hasPermission;
});
</script>
