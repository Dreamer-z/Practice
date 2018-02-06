<template>
  <div class="index">
    <Head></Head>
    <div class="main">
        <div class="movieType"><span>正在热映</span></div>
        <movieClass type="in_theaters"></movieClass>
        <div class="movieType"><span>即将上映</span></div>
        <movieClass type="coming_soon"></movieClass>
        <div class="movieType"><span>口碑榜</span></div>
        <movieClass type="weekly"></movieClass>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
    import Head from '@/components/common/Header';
    import Foot from '@/components/common/Footer';
    import movieClass from '@/components/common/movieClass';
    export default {
        name:'index',
        data(){
            return{
                msg:"Hello Vue!",
            }
        },
        components:{
            Head,
            Foot,
            movieClass,
        }
    }
</script>

<style>
    .index{
        color:skyblue;
    }
    .index img{
        width:.3rem;
    }
    .main{
        margin-top: 1rem;
        margin-bottom: .8rem;
    }
    .movieType{
        padding: .2rem ;
        color: #333;
        font-size: .3rem;
    }
    .movieType span{
        padding:.1rem 0;
        border-bottom: .05rem solid pink;
    }
</style>