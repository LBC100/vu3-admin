// import store from '@/store'
import axios from 'axios'
import qs from 'qs';


// 创建一个 axios 实例
const service = axios.create({
	// baseURL: Config.apiBaseURL,
	timeout: 6000000, // 请求超时时间,
})

axios.defaults.withCredentials = true // 携带cookie

// 请求拦截器


export default service
