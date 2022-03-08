import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app =  createApp(App)

// 引入css
// import 'ant-design-vue/dist/antd.css';
import { antArr } from "@/components/AntDesignVue.js";
// import { DatePicker, Input, Button } from "ant-design-vue";

// import Antd from 'ant-design-vue'
// app.use(Antd)
// app.use(Button)



for (const item of antArr) {
  app.use(item);
}


app.use(store).use(router).mount('#app')
