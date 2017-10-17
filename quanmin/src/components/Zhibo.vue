<template>
<div class="zb_wrap">
  <a class="zb_list"  v-for="item in list">
    <div class="zb_thumb">
       <img :src="item.thumb" :alt="item.title">
    </div>
  </a>
</div>
</template>


<script>
import axios from 'axios'
export default {
  name: 'Zhibo',
    data: function () {
    return {
      list: []
    }
  },
  mounted:function(){
    var that = this
    axios.get("json/play/list.json?_t=201710170956")
    .then(function(res){
      console.log(res);
      that.list =res.data["data"]
    })
    .catch(function(){
      console.log("出错了")
    })
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zb_wrap{
  width:100%;
}
.zb_list{
  display: block;
  float: left;
  width:47.2%;
  padding:.1rem;

}
.zb_thumb{
 width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    background-size: cover;

}
.zb_thumb img{
  width:100%;
}
</style>
