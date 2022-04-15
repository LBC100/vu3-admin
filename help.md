深拷贝
	JSON.parse(JSON.stringify(copyObj));

api
	import {  } from "@/api/api.js";
	
模拟请求
	import {  } from "@/api/apiMock.js";


import to from 'await-to-js';

const [err, res] = await to(getMenu());
if (err) {
	console.log('错误处理1');
};

const getMenuMockFn = () => {
	getMenuMock().then((res) => {
		
	}).catch((err) => {
		
	}).finally(()=> {
		
	})
}

vuex
	import { useStore } from 'vuex';
	const store = useStore();
	
　　// 取值
		let dataList = computed(() => {
			return store.state.dataList;
		});
　　//commit提交
　　const myCommit = () =>{\
　　　　store.commit("commitValue");
　　}

监听路由
	// 监听路由
	watch(
		() => router.currentRoute.value.path,
		(to, from) => {
			//要执行的方法
			state.selectedKeys = [to];
			console.log(to, from, state.selectedKeys, 'toPath');
		},
		{ immediate: true, deep: true }
	);

	let router = useRouter();
	// 监听当前路由变化
	watch(
		() => router.currentRoute.value,
		e => {
			console.log(e, '路由变化了1');
		}
	);


时间
	const dayjs = require('dayjs');
	dayjs().format('YYYY-MM-DD');

跳转
this.$router.push();
	this.$router.push({
		path: '/admin/systemSet/editRate',
		query: {
			data: JSON.stringify(newCheckListData)
		}
	});


	this.opt = JSON.parse(this.$route.query.data);


地址栏参数

  this.$route.query.XXX

动态修改地址栏参数
  this.$router.push({
    query:{
      id: 123
    }
  });


背景图片
  background-image: url('~@/assets/image/123.png');

图片
	<img src="@/assets/image/123.png" alt="" />



    

按钮样式
	/deep/ .ivu-btn {
		
	}




表格超出省略
	ellipsis: true,
	tooltip: true

then catch finally

回到上一页
	this.$router.go(-1); // 回到上一页。




localStorage 存储

// 保存
function setLocal (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}
// 获取
function getLocal (key) {
  return  JSON.parse(window.localStorage.getItem(key))
}
// 删除
function removeLocal (key) {
  window.localStorage.removeItem(key)
}
export { setLocal, getLocal, removeLocal }




精确计算

  import Decimal from 'decimal.js';
   let num = new Decimal(this[key]).toNumber().toFixed(2);


打开新窗口
window.open('http://www.baodu.com','_blank');

弹窗确认 结束

// 混入

  import mixinApp from '@/mixins/app';
  export default {
    mixins: [mixinApp],

先加混入, 时区
{{ packageInfo.endTime | timeZone }}


