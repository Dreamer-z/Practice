<template>
  <div class="foot">
      <a href="http://www.miitbeian.gov.cn/">湘ICP备17012545号-1</a>
  </div>
</template>

<script>
    export default{
        name:"footMain",
        data(){
            return{
                msg:"",
            }
        }
    }
</script>

<style>
    .foot{
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        position: fixed;
        left: 50%;
        bottom: 0;
        margin-left: -50%;
        background-color:rgba(250, 255, 173, 0.6);
        color:#fb00c3;
        text-align: center;
    }
</style>
