import mockjs from 'mockjs';

mockjs.setup({
	timeout: '200-600' // 指定被拦截的 Ajax 请求的响应时间，单位是毫秒。值可以是正整数，例如 400，表示 400 毫秒 后才会返回响应内容；也可以是横杠 '-' 风格的字符串，例如 '200-600'，表示响应时间介于 200 和 600 毫秒之间。默认值是'10-100'。
})


const Random = mockjs.Random;
//统一返回
let Result = {
	code: 0,
	msg: '操作成功',
	data: null,
}

let baseUrl = '/apiMockjs'

// 获取菜单
mockjs.mock(`${baseUrl}/getMenu`, 'get', () => {
	Result.data = {
		test: '模拟数据'
	}
	return Result;
})

// 获取验证码
// mockjs.mock(`${baseUrl}/getMenu`, 'get', () => {
// 	Result.data = {
// 		token: Random.string(21),
// 		captchaImg: Random.dataImage('100x40', 'aeiou')
// 	}
// 	return Result;
// })

// //post请求登录验证
// mockjs.mock('/login', 'post', () => {
// 	return Result;
// })
