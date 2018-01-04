<template>
  <div class="index">
    <Head></Head>
    <img src="./../assets/logo.png">
    <p>{{msg}}</p>
    <Foot></Foot>
  </div>
</template>

<script>
    import Head from '@/components/Header';
    import Foot from '@/components/Footer';
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
</style>