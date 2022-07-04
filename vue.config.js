const {
	defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,

	devServer: {
		// disableHostCheck: true,
		// host: '192.168.3.10',   // 通过ipconfig查看本机IP
		port: 8009,

		// proxy: {
		// 	'/api': {
		// 		target: 'http://localhost:5100/api', // 接口的域名
		// 		// secure: false,  // 如果是https接口，需要配置这个参数
		// 		changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
		// 		pathRewrite: {
		// 			'^/api': '' // 把 /api 开头的路径替换为 ''
		// 		}
		// 	}
		// }

	},
	lintOnSave: false,


})
