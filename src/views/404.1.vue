<template>
  <div class="box">
    <div class="bg">
      <div class="bg-left"></div>
      <div class="bg-left bg-right"></div>
    </div>
    <div :class="['box-content',dereaction?'':'row-content']">
      <!-- 竖屏为false -->
      <div :class="['img-contian',dereaction?'':'row-img']">
        <img src="@/assets/imgs/404.png" class="img" />  
      </div>
      <div :class="['box-text']">
        很抱歉您访问的页面<span style="color: #2444c5">不存在或已被删除！</span>
      </div>
      <!-- <div :class="['box-btn',dereaction?'':'row-box-btn']">
        <div class="box-btn-left">
          <img src="../assets/left.png" class="go-back" />
          <div>返回</div>
        </div>
        <div class="box-btn-left box-btn-right">首页</div>
      </div> -->
      <div class="bottom-btn" >
        <div class="bottom-btn-content" style="">
          <div class="bottom-btn-content-img" style=""><img src="@/assets/imgs/left.png" class="go-back" /></div>
          <div style="width:50%;">返回</div>
        </div>
        <div class="bottom-btn-content-text" style="">首页</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  data() {
    return {
      dereaction: true,
      ipadWidth:false,
      ipadPro:false,
    };
  },
  
mounted () {
     let width = document.documentElement.clientWidth
    let height = document.documentElement.clientHeight
      if(width<=1024&&width>=900 && height <1366){
          this.dereaction = true;
        }
        else{
          this.dereaction = false;
        }
    // 监听resize方法
    window.addEventListener("resize", this.renderResize, false)
},
onload(){
    alert()},
beforeUnmount () {
    // 移除监听
    window.removeEventListener("resize", this.renderResize, false)
    // alert("我被销毁了")
},
methods: {
    renderResize() {
        // 判断横竖屏
        let width = document.documentElement.clientWidth
        let height = document.documentElement.clientHeight
        console.log("宽度为",width)
        if(width<=1024&&width>=900){
          this.ipadWidth = true;
        }
        else{
          this.ipadWidth = false;
        }
        if(width>height) {
            // alert('横屏')
            this.dereaction = true;
        }
        else{
        //   alert("竖屏")
          this.dereaction = false;
        }
        
        // 做页面适配
        // 注意：renderResize方法执行时虚拟dom尚未渲染挂载，如果要操作vue实例，最好在this.$nextTick()里进行。
    }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  height: 100vh;
  width: 100%;
  position: relative;
}
.bg {
  height: 100%;
  display: flex;
}

.bg-left {
  flex: 1;
  background: #2444c5;
}
.bg-right {
  background: #ffffff;
}

.box-content {
  /* width: 100%; */
  width: 60%;
  position: absolute;
  /* transform: translateX(-50%); */
  transform: translate(-50%,-50%);

  left: 50%;
  top:50%;
  /* height: 90%; */
  
}

.row-box-content{
  height: 60%;
}

.ipad-box-content{
  height: 72%;
}
.box-content .img-contian {
  margin: 0 auto;
  width: 76%;
  display: flex;
  justify-content: center;
  max-width: 930px;
  min-width: 300px;
}
.box-content  .row-img{
    width: 90%;
}

.box-content .ipad-width{
  height: 60%;
}
.img-contian .img {
  width: 100%;
  /* height: 100%; */
}

.box-text {
  margin-top: 4.5%;
  font-weight: bold;
  font-size: 30px;
  color: #ffffff;
  text-align: center;
}

.row-box-text{
  margin-top: 11%;
  font-size: 24px;
}
.box-btn {
  margin: 0 auto;
  margin-top: 6.5%;
  display: flex;
  height: 50px;
  width: 158px;
  font-size: 18px;
  border-radius: 4px;
  text-align: right;
}

.row-box-btn{
  margin-top: 10%;
}
   
.box-btn-left {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  text-align: right;
  align-items: center;
  background: #ffffff;
  color: #2444c5;
  border-radius: 4px 0 0 4px;
}

.box-btn-right {
  background: #2444c5;
  justify-content: flex-start;
  color: #ffffff;
  border-radius:  0 4px  4px 0;

}

.go-back {
  height: 20px;
  width: 20px;
  /* margin-right: 5px; */
}

.row-img-contain{
 
  margin: 0 auto;
  width: 49%;
  /* height: 35%; */
  height: 50%;
  display: flex;
  justify-content: center;
}

.row-img-contain .img{
  
     height: 100%;
}

.row-content{
    width:80% ;
}

.bottom-btn{
display:flex;
justify-content: center;
 margin-top:7.5%;
 font-size: 18px;
border-radius: 4px;
}

.bottom-btn-content{
   width:78px;
   border-radius: 4px 0 0 4px;
    /* width: 150px; */
   height:50px;
   background:white;
   display: flex;
   align-items: center; 
   color: #2444C5;
}

.bottom-btn-content-text{
    color: #ffffff;
    width:78px;
    height:50px;
    background:#2444C5;
    display: flex;
    align-items: center;
    border-radius: 0 4px 4px 0;
}

.bottom-btn-content-img{
  width:57%;
  text-align: right;
  line-height: 0.5;
}
</style>