const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  devServer: {
	  // disableHostCheck: true,
	  // host: '192.168.3.10',   // 通过ipconfig查看本机IP
	  port: 8009,
  },
  lintOnSave: false,
  
  
})
