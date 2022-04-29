import {
	createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App);

import {
	antArr
} from "@/components/AntDesignVue.js";

// 引入css
import 'ant-design-vue/dist/antd.css';

// 自定义指令
import registerDirectives from '@/directives'
registerDirectives(app); // 注册指令


// 引入mockjs
require('./mock/mock.js')

async function bootstrap() {

	// ant-design-vue
	for (const item of antArr) {
		app.use(item);
	}
	
	


	app.use(store);
	app.use(router);
	app.mount('#app');
}

bootstrap();
