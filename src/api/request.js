// import store from '@/store'
import axios from 'axios'
import qs from 'qs';


// 创建一个 axios 实例
const service = axios.create({
	// baseURL: Config.apiBaseURL,
	timeout: 30000, // 请求超时时间,
})

axios.defaults.withCredentials = true // 携带cookie

// 请求拦截器
axios.interceptors.request.use(
	function(config) {
		// 在请求之前做些什么
		// console.log(config, '请求前1');
		return config
	},
	function(error) {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 响应拦截器
axios.interceptors.response.use(
	function(response) {
		// 对响应数据做点什么
		// console.log(response, '请求成功了1');
		return response
	},
	function(error) {
		// 对响应错误做点什么
		return Promise.reject(error)
	}
)


export default service
