import Vue from 'vue'
/***
 * 防抖 单位时间只触发最后一次
 *  @param {?Number|300} time - 间隔时间
 *  @param {Function} fn - 执行事件
 *  @param {?String|"click"} event - 事件类型 例："click"
 *  @param {Array} binding.value - [fn,event,time]
 *  例：<el-button v-debounce="[reset,`click`,300]">刷新</el-button>
 *  也可简写成：<el-button v-debounce="[reset]">刷新</el-button>
 */
Vue.directive('debounce', {
  inserted: function(el, binding) {
    let [fn, event = "click", time = 300] = binding.value
    let timer
    el.addEventListener(event, () => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => fn(), time)
    })
  }
})

/***
 *  节流 每单位时间可触发一次
 *  第一次瞬间触发，最后一次不管是否达到间隔时间依然触发
 * 【考虑到input的change事件】
 *  @param {?Number|300} time - 间隔时间
 *  @param {Function} fn - 执行事件
 *  @param {?String|"click"} event - 事件类型 例："click"
 *  @param {Array} binding.value - [fn,event,time]
 *  例：<el-button v-throttle="[reset,`click`,300]">刷新</el-button>
 *  传递参数则：<el-button v-throttle="[()=>reset(param),`click`,300]">刷新</el-button>
 */
Vue.directive('throttle', {
  inserted: function(el, binding) {
    let [fn, event = "click", time = 300] = binding.value
    let timer, timer_end;
    el.addEventListener(event, () => {
      if (timer) {
        clearTimeout(timer_end);
        return timer_end = setTimeout(() => {
          // fn();
        }, time);
      }
      fn();
      timer = setTimeout(() => timer = null, time)
    })
  }
})





/**
 * 按钮loading状态
 * <a-button v-loading-btn type="primary" v-loading="[1000]" >测试</a-button>
 * <a-button v-loading-btn type="primary" v-loading >测试</a-button>
 */
Vue.directive('loading-btn', {
  inserted: function(el, binding) {
    if (binding.value == 'undefined' || binding.value == undefined) {
      binding.value = [];
    }

    let [time = 500, fn, event = "click", ] = binding.value;

    el.addEventListener(event, () => {
      let html = el.innerHTML;
      el.innerHTML =
        `<i aria-label="图标: loading" class="anticon anticon-loading"><svg viewBox="0 0 1024 1024" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class="anticon-spin"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg></i>` +
        html;


      let classStr = el.getAttribute("class");
      el.setAttribute("class", classStr + ' ant-btn-loading');
      el.blur()

      setTimeout(() => {
        el.innerHTML = html;
        el.setAttribute("class", classStr);
        el.focus();
      }, time);

      fn && fn();
    });
  }
})
