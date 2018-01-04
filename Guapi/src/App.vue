<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Font1 from "@/font/comicbd.ttf";
import Font2 from '@/font/hakuyoxingshu.ttf';
import Font3 from '@/font/FZLTCXHJW.ttf';
import Font4 from '@/font/ygyxsziti2.0.ttf';
export default {
  name: 'app',
  data(){
    return{

    }
  },
  computed:{
 
  },
  methods:{

  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
* {
    margin: 0;
    border: 0;
    padding: 0;
    font-style: normal;
}

html,
body {
    color: #333;
    font-family: 'Avenir', Helvetica, Arial, sans-serif, "Comic Sans MS", "hakuyoxingshu7000", "方正兰亭超细黑简体", "叶根友毛笔行书2.0版";
    -webkit-touch-callout: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    user-select: none;
}

body {
    /* max-width: 7.5rem; */
    margin: 0 auto;
    background-color: #fff;
}
</style>
