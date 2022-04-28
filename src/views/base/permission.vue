<template>
	<div class="box">
		权限
	</div>
</template>

<script setup>

import { ref, onMounted,computed } from 'vue';

import { useRoute, useRouter } from 'vue-router'

let route = useRoute();
let router = useRouter();

import { useStore } from 'vuex';
const store = useStore();

</script>
