<template>
  <div class="home">
	  <a-button type="primary">按钮1</a-button>
	  
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  mounted() {
  	console.log(process.env, "全局文件2");
  }
}
</script>
