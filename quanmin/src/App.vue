<template>
  <div id="app">
    <header>
      <img src="static/imgs/logo.png">
      <div class="hea_right">
        <a class="hea_a chongzhi" href="">充值</a>
        <a class="hea_a orgin" href="">登陆</a>
      </div> 
    </header>
    <div class="nav">
        <router-link exact to="/">精选</router-link>
        <router-link exact to="/zhibo">直播</router-link>
        <router-link exact to="/fenlei">分类</router-link>    
  </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{

  padding:0;
  margin:0;
  text-decoration: none;
}
header{
  background:#ff5253;
  height:.89rem;;
}
header img{
 width:1.4rem;
 height:.44rem;
 background-size:contain;
 margin-left: .3rem;
 float:left;
 margin-top:.25rem;
}
.hea_right{
  float:right;
  line-height:.89rem;
  height:.89rem;
}
.hea_right .chongzhi{
  float:left;
  font-size:.3rem;
  color:white;
  line-height:.5rem;
  margin-top:.22rem;
  margin-right:.4rem;
}
.orgin{
  float:left;

width:1.2rem;
line-height:.5rem;
padding:.04rem 0;
margin-top:.15rem;
margin-right:.3rem;
border-radius:1rem;
border:.04rem solid #fff;
color:#fff;
font-size:.3rem;
text-align:center;
}
.nav{
  width:100%;
  display:flex;
  align-items: center;
}
.nav a{
  font-size:.32rem;
  height:.89rem;
  width:33.333333%;
  text-align: center;
  box-sizing: border-box;
  padding-top: .29rem;
  line-height:1;
  position:relative;
  display:inline-block;
  color:black;
}

</style>
