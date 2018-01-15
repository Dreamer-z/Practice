<template>
  <div class="hot" v-if="mdata.length" :class="{hotMobile:windowSize}">
    <div :class="{mobileMovieClass:windowSize}" class="movieClass" v-for="item in mdata" :key="item.index" @click="movieDetails(item.id)">
      <div class="poster">
        <img :src="item.images.large" alt="">
      </div>
      <div class="title" >{{item.title}}</div>
      <template v-if="parseInt(item.rating.stars) > 0">
        <div class="stars">
          <yd-rate v-model="item.rating.stars" :readonly="true"></yd-rate>
        </div>
      </template>
      <template v-else>
        <div class="stars">暂无评分</div>
      </template>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
export default {
  name: "movieClass",
  data() {
    return {
      list: "",
      mdata: [],
      value: "",
      windowSize: false
    };
  },
  methods: {
    movieList() {
      const self = this;
      axios
        .get("api/v2/movie/in_theaters", {
          params: {
            city: "长沙",
            apikey: "0b2bdeda43b5688921839c8ecb20399b",
            count: "12",
            star: "0",
            total: "20"
          }
        })
        .then(function(response) {
          setTimeout(() => {
            self.mdata = response.data.subjects;
            for (let i = 0; i < self.mdata.length; i++) {
              self.mdata[i].rating.stars = Math.round(
                self.mdata[i].rating.stars / 10
              );
            }
          }, 20);
          return self.mdata;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    widowsize() {
      window.resize = function() {
        if (document.documentElement.clientWidth <= 750) {
          return (this.windowSize = true);
        } else {
          return (this.windowSize = false);
        }
      };
      setTimeout(() => {
        if (document.documentElement.clientWidth <= 750) {
          return (this.windowSize = true);
        } else {
          return (this.windowSize = false);
        }
      }, 20);
    },
    movieDetails(id){
      this.$router.push({name:'movieDetails',query:{'id':id}});
    },
  },
  created() {
    this.widowsize();
    this.movieList();
  },
  mounted() {
    this.widowsize();
  }
};
</script>

<style>
.hot {
  width: 12rem;
  margin: 0 auto;
  overflow: hidden;
}
.hot.hotMobile {
  width: 7.5rem;
}
.movieClass {
  float: left;
  width: 2.6rem;
  margin: 0.2rem;
  overflow: hidden;
}
.movieClass.mobileMovieClass {
  width: 2.1rem;
}
.movieClass .poster {
  width: 100%;
  height: 4rem;
}
.movieClass.mobileMovieClass .poster {
  width: 100%;
  height: 3rem;
}
.poster img {
  width: 100%;
  height: 100%;
}
.movieClass .title {
  font-size: 0.22rem;
  text-align: center;
  height: 0.56rem;
  line-height: 0.28rem;
  margin: 0.1rem 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #333;
}
.stars {
  height: 0.4rem;
  line-height: 0.4rem;
  width: 100%;
  text-align: center;
}
.yd-cell-item {
  height: 0.4rem;
  width: 100%;
  padding: 0;
  margin: 0 auto;
}
.yd-cell-left {
  width: 100%;
  height: 100%;
}
.yd-rate a,
.rate-active {
  width: 20%;
  height: 0.38rem;
  padding-left: 0.06rem;
  font-size: 0.36rem;
}
.movieClass.mobileMovieClass .rate-active {
  height: 0.4rem;
}
.yd-rate a:after {
  width: 90%;
  height: 0.38rem;
}
.movieClass.mobileMovieClass .yd-rate a:after {
  height: 0.44rem;
}
</style>
