<template>
  <div class="movieDetails">
    <Head></Head>
    <div class="movieMsg">
        <div class="photoScore">
            <div class="photo"><img v-if="movieMsg.images" :src="movieMsg.images.large" alt=""></div>
          </div>
          <div class="introduce">
              <h3 class="movieName">{{movieMsg.title}}</h3>
              <div class="director" v-if="movieMsg.directors">导演：<span :dataid="movieMsg.directors[0].id">{{movieMsg.directors[0].name}}</span></div>
              <div class="protagonist" v-if="movieMsg.casts">
                  <div class="title">主演：</div>
                  <div class="li" v-for="item in movieMsg.casts" :key="item.index"><span>{{item.name}}</span></div>
              </div>
              <div class="writers protagonist" v-if="movieMsg.writers">
                  <div class="title">编剧：</div>
                  <div class="li" v-for="item in movieMsg.writers" :key="item.index"><span>{{item.name}}</span></div>
              </div>
              <div class="type protagonist" v-if="movieMsg.genres">
                  <div class="title">类型：</div>
                  <div class="li" v-for="item in movieMsg.genres" :key="item.index"><span>{{item}}</span></div>
              </div>
              <div class="countries protagonist" v-if="movieMsg.countries">
                  <div class="title">制片国家/地区：</div>
                  <div class="li" v-for="item in movieMsg.countries" :key="item.index"><span>{{item}}</span></div>
              </div>
              <div class="pubdates protagonist" v-if="movieMsg.pubdates">
                  <div class="title">上映日期：</div>
                  <div class="li" v-for="item in movieMsg.pubdates" :key="item.index"><span>{{item}}</span></div>
              </div>
              <div class="durations" v-if="movieMsg.durations">时长：<span>{{movieMsg.durations[0]}}</span></div>
          </div>
      </div>
    <div class="scorebox">
        <div class="score">
            <div class="title">豆瓣评分</div>
            <div class="cont" v-if="movieMsg.rating">
                <div class="averagenumber" v-if="parseInt(movieMsg.rating.average) > 0"><h2>{{movieMsg.rating.average}}</h2></div>
                <div class="averagenumber" v-else>暂无评分</div>
                <div class="averagestar">
                    <template v-if="parseInt(movieMsg.rating.average) > 0">
                        <div class="stars">
                            <yd-rate v-model="movieMsg.rating.stars" :readonly="true"></yd-rate>
                            <div class="commentNumber">{{movieMsg.ratings}}人评价</div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="stars"></div>
                    </template>
                </div>
            </div>
        </div>
        <div class="starDetails">
            <div class="li" v-for="(item, index) in ratArr" :key="item">
                <span>{{Math.abs(index-5)}}星：</span>
                <div class="progress"  v-if="ratArr">
                    <div class="width" :style="{width:item+'%',}"></div>
                    <div class="num">{{item+'%'}}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="short">
        <h3>简介：</h3>
        <p>{{movieMsg.summary}}</p>
    </div>
    <div class="video">
        <swiper class="banner" :options="swiperOption2" ref="mySwiper">
            <swiper-slide v-for="item in movieMsg.blooper_urls" :key="item">
                <video controls>
                    <source :src="item" type="mp4">
                </video>
            </swiper-slide>
        </swiper>
    </div>
    <template>
        <swiper class="banner" :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in movieMsg.directors" :key="item.index">
                <img  v-if="item.large" :src="item.large">
                <p>{{item.name}}</p>
                <p class="title">导演</p>
            </swiper-slide>
            <swiper-slide v-for="item in movieMsg.casts" :key="item.index">
                <img v-if="item.large" :src="item.large">
                <p>{{item.name}}</p>
                <p class="title">主演</p>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </template>
    <div class="shortComment" v-if="movieMsg.popular_comments">
        <div class="li" v-for="item in movieMsg.popular_comments" :key="item.index">
            <div class="title">
                <p><span>{{item.author.name}}</span>说：</p>
            </div>
            <div>{{item.content}}</div>
        </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import axios from "axios";
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import Head from '@/components/common/Header';
import Foot from '@/components/common/Footer';
export default {
  name:"",
  data(){
      return{
          movieMsg:{
              ratings:"",
          },
          ratArr:[],
          swiperOption2: {
            speed:1000,
            autoplay:2000,
            slidesPerView: '1',
          },
          swiperOption: {
            speed:1000,
            autoplay:2000,
            slidesPerView: '3',
            // pagination: {
            //     el: '.swiper-pagination'
            // }
          },
          directors:[],
      }
  },
  components: {
    swiper,
    swiperSlide,
    Head,
    Foot,
  },
  computed:{
    swiper() {
        return this.$refs.mySwiper.swiper;
    },
  },
  methods:{
    getMovie(){
        const self = this;
        axios
            .get("api/v2/movie/subject/"+this.$route.query.id, {
                params: {
                    apikey: "0b2bdeda43b5688921839c8ecb20399b",
                }
            })
            .then(function(response) {
                setTimeout(() => {
                    self.movieMsg = response.data;
                    self.movieMsg.rating.stars = Math.round(self.movieMsg.rating.stars/10);
                   function b() {
                        var keys=[];//定义一个数组用来接受key    
                        var values=0;//定义一个数组用来接受value
                        var arr = [];
                        for(var key in response.data.rating.details){   
                            values += parseFloat(response.data.rating.details[key]);
                            arr.push(response.data.rating.details[key]);     
                        };
                        for (let i = 0; i < arr.length; i++) {
                            self.ratArr.push((arr[i]/values*100).toFixed(2));
                        }
                        self.movieMsg.ratings = values;
                        return a(self.movieMsg,self.ratArr);
                    };
                    b();
                    function a(rat,arr){
                        self.movieMsg = rat;
                        self.ratArr = arr.reverse();
                    };
                    for(var key in self.movieMsg.directors){   
                        self.movieMsg.directors[key].large = self.movieMsg.directors[key].avatars.large;
                    };
                    for(var key in self.movieMsg.casts){   
                        self.movieMsg.casts[key].large = self.movieMsg.casts[key].avatars.large;
                    };
                    console.log(self.movieMsg);
                }, 20);
                return self.movieMsg;
            })
            .catch(function(error) {
                console.log(error);
            });
    },
  },
  created(){
      this.getMovie();
  },
  mounted(){

  }
}
</script>

<style>
.movieDetails{
    padding:1rem 0;
}
.movieMsg{
    width: 7.5rem;
    padding: .25rem;
    overflow: hidden;
}
.photoScore,.introduce{
    float: left;
}
.photoScore{
    width: 2rem;
}
.photoScore img{
    display: block;
    width: 100%;
    height: 100%;
}
.introduce{
    margin-left: .2rem;
    color:#999;
}
.movieName{
    font-size: .3rem;
    color: #666;
}
.protagonist,.type{
    overflow: hidden;
    width: 4.8rem;
}
.protagonist .title,.type .title{float: left;}
.protagonist .li,.type .li{float: left;}
.protagonist .li span::before,.type .li span::before{
    content: " / ";
    color: #333;
}
.protagonist .li span,.type .li span{
    color: skyblue;
    padding-left: .05rem;
}
.protagonist .li:nth-of-type(2) span::before,.type .li:nth-of-type(2) span::before{
    content: "";
}
.scorebox{
    padding:0 .2rem;
    height: 1.5rem;
    overflow: hidden;
}
.scorebox .score{
    float: left;
    width: 3.2rem;
    background-color: #eee;
    padding: .1rem;
    border-radius: .1rem;
}
.scorebox .score .cont{
    overflow: hidden;
    height: 1rem;
}
.averagenumber{
    float: left;
    width: 1rem;
    line-height: 1rem;
    font-size: .4rem;
    text-align: center;
    color: red;
}
.averagestar{
    float: left;
    width: 2rem;
}
.averagestar .yd-rate{
  font-size: 0.28rem;
  width: 1.5rem;
  margin: .1rem auto;
}
.averagestar .yd-cell-left {
  width: 100%;
  height: 100%;
}
.averagestar .yd-rate a,
.averagestar .rate-active {
  width: 20%;
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0 !important;
  font-size: .3rem;
}
.averagestar .stars {
  height: 0.3rem;
  width: 100%;
  text-align: center;
}

.scorebox .score .cont .commentNumber{
    font-size:.24rem;
    width: 100%;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.starDetails{
    float: left;
    width:3.8rem;
    height: 1.5rem;
    padding: 0 .3rem;
}
.starDetails .li{
    position: relative;
    height: .3rem;
    line-height: .26rem;
    padding: .02rem 0;
    padding-left: .8rem;
    font-size: .2rem;
}
.starDetails .li span{
    position: absolute;
    left: 0;
    top: .05rem;
    width: .8rem;
}
.progress{
    width: 100%;
    height:100%;
    border-radius: .13rem;
    overflow: hidden;
    border: .01rem solid #eee;
    position: relative;
}
.progress .width{
    width: 0%;
    height: 100%;
    border-radius: .12rem;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    transition: all .5s ease;
    background-color: pink;
}
.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
.progress .num{
    width: 100%;
    height: 100%;
    font-size: .2rem;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
}
.short{
    padding: .2rem;
    background-color: #5b9600;
    color: #fff;
    margin: .2rem 0;
}
.short h3{
    font-size: .28rem;
    margin-bottom: .1rem;
}
.short p{
    line-height: .36rem;
}
.banner{
    height: 3rem;
    text-align: center;
}
.banner .swiper-slide img,.banner .swiper-slide .photo{
    display: block;
    width: 1.5rem;
    height: 2rem;
    margin: 0 auto;
    margin-bottom: .2rem;
}
.banner .swiper-slide img,.banner .swiper-slide .title{
    font-size: .2rem;
    color: #999;
}
.video{
    margin: .2rem 0;
    height: 4rem;
}
.video .banner{
    height: 4rem;
}
video{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
}
video::-internal-media-controls-download-button {
    display: none;
}

video::-webkit-media-controls-enclosure {
    overflow: hidden;
}
.shortComment .li{
    padding: .1rem .2rem;
}
.shortComment .li .title{
    line-height: .4rem;
}
.shortComment .li .title span{
    color:#5b9600;
}
</style>
