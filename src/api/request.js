// import store from '@/store'
import axios from "axios";
import qs from "qs";
import Config from "@/config/config.js";

// import { useRouter } from 'vue-router';
// const router = useRouter();
import { message } from "ant-design-vue";
import router from "@/router/index.js";

axios.defaults.withCredentials = true; // 携带cookie

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在请求之前做些什么
    // console.log(config, '请求前1');
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // console.log(response, '请求成功了1');
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// 创建一个 axios 实例
const service = axios.create({
  // baseURL: Config.apiBaseURL,
  timeout: 30000, // 请求超时时间,
});

export const request = async (opt = {}) => {
  console.log("请求了", opt);
  opt.url = `${Config.apiBaseUrl}${opt.url}`;

  return new Promise((resolve, reject) => {
    service(opt)
      .then((res) => {
        console.log(res.data, res.data.code, "成功了1");
        if (res.data.code == 401) {
          // console.log(router, "路由1");

          message.info("令牌过期或错误");

          setTimeout(() => {
            router.push(`/user/login`);
          }, 2000);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      })
      .finally((e) => {});
  });
};

export default service;
