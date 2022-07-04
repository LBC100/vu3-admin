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

	API_URL = 'http://localhost:5100';

	// 上传文件
	UPLOAD_URL = '' // 上传
} else {
	// API_URL = process.env.API_URL || `${location.origin}/v1/`;
	API_URL = `${location.origin}/amdin/v1/`;
	UPLOAD_URL = `${location.origin}/upload/v1`;
}

// 路由白名单 不用校验权限 requestMenu: 请求菜单. 免验证页面默认不请求菜单
let routeWhiteList = [{
		path: '/'
	},
	{
		path: '/403'
	},
	{
		path: '/404'
	},
	{
		path: '/user/login'
	},
	{
		path: '/base/home',
		requestMenu: true
	},
];




const Config = {
	VERSION: '1.0.0', // 版本号
	routeWhiteList: routeWhiteList,

	rootPage: '/base/home',
	routeBaseURL: '/admin',

	// 接口请求地址

	fileApiUrl: UPLOAD_URL,
	apiBaseUrl: API_URL,

	// 布局配置
	layoutSet: {

	},
}

export default Config
