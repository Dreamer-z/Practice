<template>
  <div class="hot" v-if="mdata.total" :class="{hotMobile:windowSize}">
    <div :class="{mobileMovieClass:windowSize}" class="movieClass" v-for="item in mdata.subjects" :key="item.index" @click="movieDetails(item.id)">
      <div class="poster">
        <img :src="item.images.large" alt="">
      </div>
      <div class="title" >{{item.title}}</div>
      <template v-if="parseInt(item.rating.stars) > 0">
        <div class="stars">
          <div>
            <span class="starnum">{{item.rating.stars}}</span>
            <yd-rate v-model="item.rating.stars" :readonly="true"></yd-rate>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="stars">暂无评分</div>
      </template>
    </div>
  </div>
  <div class="hot" :class="{hotMobile:windowSize}" v-else>
    <div :class="{mobileMovieClass:windowSize}" class="movieClass" v-for="item in mdata.subjects" :key="item.index" @click="movieDetails(item.subject.id)">
      <div class="poster">
        <img :src="item.subject.images.large" alt="">
      </div>
      <div class="title" >{{item.subject.title}}</div>
      <template v-if="parseInt(item.subject.rating.stars) > 0">
        <div class="stars">
          <div>
            <span class="starnum">{{item.subject.rating.stars}}</span>
            <yd-rate v-model="item.subject.rating.stars" :readonly="true"></yd-rate>
          </div>
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
  props:["type"],
  data() {
    return {
      list: "",
      mdata: [],
      value: "",
      windowSize: false,
    };
  },
  computed:{

  },
  methods: {
    movieList() {
      const self = this;
      axios
        .get("api/v2/movie/"+this.type, {
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
            self.mdata = response.data;
            if (self.mdata.total) {
              for (let i = 0; i < self.mdata.subjects.length; i++) {
                self.mdata.subjects[i].rating.stars = Math.round(self.mdata.subjects[i].rating.stars / 10);
              };
            } else {
              for (let i = 0; i < self.mdata.subjects.length; i++) {
                self.mdata.subjects[i].subject.rating.stars = Math.round(self.mdata.subjects[i].subject.rating.stars / 10);
              };
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
.hot .stars {
  height: 0.4rem;
  line-height: 0.4rem;
  min-width: 1rem;
  text-align: center;
}
.hot .stars>div{
  height: 0.4rem;
  width: 1.85rem;
  line-height: 0.4rem;
  margin: 0 auto;
  overflow: hidden;
}
.hot .stars .starnum{
  float: left;
  margin-right: .1rem;
}
.hot .yd-rate{
  float: right;
}
.hot .yd-cell-left {
  width: 100%;
  height: 100%;
}
.hot .yd-rate a,
.hot .rate-active {
  width: 20%;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.28rem;
  padding: 0 !important;
}
.hot .yd-rate a:after {
  width: 100%;
  height: 100%;
}

</style>
