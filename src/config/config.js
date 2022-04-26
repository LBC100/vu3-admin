/**
 * 业务配置
 */
// 请求接口地址 如果没有配置自动获取当前网址路径
let API_URL;
let UPLOAD_URL;
const NODE_ENV = process.env.NODE_ENV;
// console.log(NODE_ENV,`${location.origin}/v1/`)



if (NODE_ENV === 'development') {
	// 开发环境

	API_URL = 'https://www.baidu.com';

	// 上传文件
	UPLOAD_URL = '' // 上传
} else {
	// API_URL = process.env.API_URL || `${location.origin}/v1/`;
	API_URL = `${location.origin}/alone/v1/`;
	UPLOAD_URL = `${location.origin}/upload/v1`;
}

// 路由白名单 不用校验权限
let routeWhiteList = ['/403', '/404', '/user/login'];




const Config = {
	VERSION: '1.0.0', // 版本号
	routeWhiteList: routeWhiteList,

	// 接口请求地址

	fileApiUrl: UPLOAD_URL,
	apiBaseUrl: API_URL,

	// 布局配置
	layoutSet: {

	},
}

export default Config
