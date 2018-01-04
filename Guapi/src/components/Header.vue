<template>
  <div class="head">
      <div class="title">Guapi</div>
      <div class="search">
        <yd-input v-model="input1" max="20" placeholder="请输入用户名" :show-clear-icon="true" :show-success-icon="false" :show-error-icon="false"></yd-input>
        <span>用户名：</span>
      </div>
  </div>
</template>

<script>
    export default{
        name:"headMain",
        data(){
            return{
                input1:"",
                input2:"",
            }
        }
    }
</script>

<style>
.head{
    width:100%;
    height:1rem;
    line-height:1rem;
    font-size:.3rem;
    padding:0 .36rem;
    background: -webkit-linear-gradient(to bottom,rgba(180, 249, 172,.8),rgba(65, 247, 44, 0.5),rgba(180, 249, 172,.8)); 
    background: -o-linear-gradient(to bottom,rgba(180, 249, 172,.8),rgba(65, 247, 44, 0.5),rgba(180, 249, 172,.8)); 
    background: -moz-linear-gradient(to bottom,rgba(180, 249, 172,.8),rgba(65, 247, 44, 0.5),rgba(180, 249, 172,.8)); 
    background: linear-gradient(to bottom,rgba(180, 249, 172,1),rgba(65, 247, 44, 0.5),rgba(180, 249, 172,1)); 
    color:#fff;
    overflow:hidden;
    position:fixed;
    top:0;
    left:50%;
    margin-left:-50%;
}
.head .title{
    font-family:"hakuyoxingshu7000";
    float:left;
}
.head .search{
float:left;
height:100%;
margin-left:1rem;
}
</style>
