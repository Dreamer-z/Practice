<template>
  <div class="index">
    <Head></Head>
    <div class="main">
        <movieClass></movieClass>
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
</style>