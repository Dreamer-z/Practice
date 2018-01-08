<template>
  <div class="head">
      <div class="title">Guapi</div>
      <div class="search">
        <yd-input class="searchInp" v-model="keyword" max="20" placeholder="请输入关键字" :show-clear-icon="true" :show-success-icon="false" :show-error-icon="false"></yd-input>
        <yd-button v-show="!windowSize" class="searchBtn" size="large" bgcolor="#06ecf7" color="#FFF">搜索</yd-button>
      </div>
      <ul class="headNav" ref="headNav" v-if="!windowSize">
        <li class="headNavLi"><a href="" @mouseenter="randomC()" @mouseleave="initC()">购票</a></li>
        <li class="headNavLi"><a href="" @mouseenter="randomC()" @mouseleave="initC()">开眼</a></li>
        <li class="headNavLi"><a href="" @mouseenter="randomC()" @mouseleave="initC()">Top250</a></li>
      </ul>
      <div class="mobileNavBox" v-else>
            <div class="mobileNavIconbox" @click="mobile()" :class="{open:mobileNav}">
                <span class="mobileNavIcon"></span>
                <span class="mobileNavIcon"></span>
                <span class="mobileNavIcon"></span>
            </div>
            <transition name="bounce">
                <ul class="mobileNav" v-show="mobileNav">
                    <li class="mobileNavLi"><a href="" @mouseenter="randomC()" @mouseleave="initC()">购票</a></li>
                    <li class="mobileNavLi"><a href="" @mouseenter="randomC()" @mouseleave="initC()">开眼</a></li>
                    <li class="mobileNavLi"><a href="" @mouseenter="randomC()" @mouseleave="initC()">Top250</a></li>
                </ul>
            </transition>
      </div>
  </div>
</template>

<script>
    export default{
        name:"headMain",
        data(){
            return{
                keyword:"",
                randomColor:"",
                windowSize:false,
                mobileNav:false,
            }
        },
        computed:{
            
        },
        methods:{
            randomC:function(e){
               this.randomColor = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
               event.currentTarget.style.color = this.randomColor;
            },
            initC(e){
                event.currentTarget.style.color = "#999";
            },
            widowsize(){
                window.resize = function(){
                    if (document.documentElement.clientWidth<=750) {
                       return this.windowSize = true;
                    }else{
                       return this.windowSize = false;
                    };
                };
                setTimeout(() => {
                    if (document.documentElement.clientWidth<=750) {
                       return this.windowSize = true;
                    }else{
                       return this.windowSize = false;
                    };
                }, 20);
            },
            mobile(){
                this.mobileNav = !this.mobileNav;
            },
        },
        created(){
           this.widowsize();
        },
        mounted(){
           this.widowsize();
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
    background: linear-gradient(to bottom,rgba(250, 255, 173, 0.8),rgba(242, 255, 34, 0.5),rgba(250, 255, 173, 0.8)); 
    color:#fb00c3;
    position:fixed;
    top:0;
    left:50%;
    margin-left:-50%;
    z-index:99;
}
.head:after,.head:before{
    content:"";
    display:block;
    clear:both;
}
.head .title{
    font-family:"hakuyoxingshu7000";
    float:left;
    font-size:.5rem;
}
.head .search{
    float:left;
    height:100%;
    margin-left:.8rem;
    overflow:hidden;
}
.head .search .searchInp{
    float:left;
    width:3rem;
    background-color:rgba(255,255,255,.8);
    height:.4rem;
    margin:.3rem 0;
    font-size:.2rem;
    border-radius:.25rem;
}
.head .search .searchInp input{
    padding:0 .2rem;
}
.head .search .searchBtn{
    float:left;
    height:.4rem;
    width:.8rem;
    font-size:.24rem;
    margin:.3rem 0;
    margin-left:.1rem;
    color:#fff;
    border-radius:.1rem;
    cursor:pointer;
}
.head .headNav{
    float:right;
    overflow:hidden;
    font-size:.2rem;
}
.head .headNav .headNavLi{
     float:left;
     padding:0 .1rem;
     margin:0 .2rem;
}
.head .headNav .headNavLi a{
    color:#999;
}
.head .headNav .headNavLi a:hover{
    border-bottom:1px solid skyblue;
}
.mobileNavBox{
    float:right;
    width:.5rem;
    height:1rem;
    position:relative;
}
.mobileNavIconbox{
    width:.5rem;
    height:.5rem;
    margin:.25rem 0;
    position:relative;
}
.mobileNavIconbox .mobileNavIcon{
    display:block;
    width:.5rem;
    height:.1rem;
    position:absolute;
    left:0;
    border-radius:.05rem;
    background-color:#fff;
    transition:all .3s;
    transform-origin: 50% 50%;
}
.mobileNavIconbox .mobileNavIcon:nth-of-type(1){
    top:0;
}
.mobileNavIconbox .mobileNavIcon:nth-of-type(2){
    top:.2rem;
}
.mobileNavIconbox .mobileNavIcon:nth-of-type(3){
    top:.4rem;
}
.mobileNavIconbox.open .mobileNavIcon:nth-of-type(1){
    top:.2rem;
    transform:rotateZ(45deg);
}
.mobileNavIconbox.open .mobileNavIcon:nth-of-type(2){
    display:none;
}
.mobileNavIconbox.open .mobileNavIcon:nth-of-type(3){
    top:.2rem;
    transform:rotateZ(-45deg);
}
.mobileNav{
    width:3rem;
    text-align:center;
    position:absolute;
    right:-.35rem;
    top:1rem;
    z-index:9;
}
.mobileNav .mobileNavLi{
    height:.8rem;
    line-height:.8rem;
    background-color: rgba(251, 0, 195,.3);
    color: #fff;
    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;
}
.bounce-enter-active{
    animation: bounce-in .5s;
} 
.bounce-leave-active {
    animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity:0;
    top:-.5rem;
  }
  50% {
    opacity:0;
    top:.5rem;
  }
  100% {
    opacity:1;
    top:1rem;
  }
}
</style>
