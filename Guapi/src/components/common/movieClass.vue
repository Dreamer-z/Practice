<template>
    <div>
        <ul class="hot">
            <li class="movieClass" v-for="index in json">

            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from "axios";
import vueAxios from "vue-axios";
Vue.use(axios);
Vue.use(vueAxios);
export default {
  name: "movieClass",
  data() {
    return {
      list: "",
      json: "",
      value: ""
    };
  },
  methods: {
    movieList(){
      axios({
        method: "GET",
        url: "https://api.douban.com/v2/movie/in_theaters",
        data: {
          city: "长沙"
        }
      }).then(function(response) {
          console.log(response);
      }).catch(function(err) {
          console.log(err);
      });
    },
  },
  created() {
    this.movieList();
  },
  mounred() {

  }
};
</script>

<style>
.hot {
  margin: 0.3rem;
}
.movieClass {
  width: 7.5rem;
  padding: 0.3rem;
  margin: 0 auto;
}
</style>
