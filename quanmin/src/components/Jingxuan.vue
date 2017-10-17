<template>
  <div class="slider">
    <mt-swipe :auto="4000" class="w-sliders">
      <mt-swipe-item v-for="item in list" class="swiper-wrapper">
        <a href="" class="swiper-slide" style="width:3.75rem">
          <img :src="item.thumb" :alt="item.title">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div> 
</template>

<script>
import axios from 'axios'
export default {
  name: 'Jingxuan',
    data: function () {
    return {
      list: []
    }
  },
  mounted:function(){
    var that = this
    axios.get("json/page/app_images.json?_t=201710170943")
    .then(function(res){
      console.log(res);
      that.list =res.data["ios-focus"]
    })
    .catch(function(){
      console.log("出错了")
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider{
height: 100%;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    position: relative;
    height:2.5rem;
}
.slider .mint-swipe-indicators{
left:90%;
}
.w-sliders .swiper-slide img{
  width:100%;
}
</style>
