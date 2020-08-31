<template>
  <div id="mubanxiangqing">

    <NavBar navBarTitle="模板详情" :isArrow="true" />

    <div class="swiper">
      <van-swipe class="van-swiper" 
                 loop show-indicators 
                 :autoplay="1500" 
                 indicator-color="white">
        <van-swipe-item class="van-swiper-item" v-for="(item, index) in swiperImg" :key="index">
          <img class="swperImg" :src="item.img" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="tuwenjieshao">
      <div class="title">
        <img class="line" src="~assets/img/photo/mubanxiangqing/line.png" alt="">
        <span class="text">图文介绍</span>
      </div>
      <div class="content">
        世界因伟人而改变历史，个人因命运而改变人生，但<br />
        命运把握在自己手中。春天再美丽，也只是短暂的一<br />
        季，平凡的的人即或风光，也将湮灭于尘世，淡定人<br />
        生吧!过好每一天安然的自己。拍拍胸脯问一问自己，<br />
        你的一生还有多少天要欺骗自己，愚昧的思想，永远<br />
        是你心中的阴霾。语文其实是情感的浓缩，而我要做<br />
        的，就是解剖这些情感。
      </div>
    </div>

    <div class="qitamuban">
      <div class="title">
        <img class="line" src="~assets/img/photo/mubanxiangqing/line.png" alt="">
        <span class="text">图文介绍</span>
      </div>
      <div class="content">
        <van-grid class="van-grid" :border="false" :column-num="3">
          <van-grid-item class="van-grid-item" v-for="(item, index) in mubanImg" :key="index">
            <img class="mubanImg" :src="item.img" />
            <span class="text">{{item.text}}</span>
          </van-grid-item>
        </van-grid>
      </div>
      
    </div>

    <div class="button">
      <button class="btn1" @click="mubanyulan">预览模板</button>
      <button class="btn2">立即制作</button>
    </div>  
    

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import { Swipe, SwipeItem } from 'vant';
  import { Grid, GridItem } from 'vant';

  export default {
    name: 'Mubanxiangqing',
    components: {
      NavBar,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Grid.name]: Grid,
      [GridItem.name]: GridItem,
    },
    props: {
      
    },
    data () {
      return {
        swiperImg: [
          {img: require('assets/img/photo/mubanxiangqing/swiper1.png')},
          {img: require('assets/img/photo/mubanxiangqing/swiper2.png')},
          {img: require('assets/img/photo/mubanxiangqing/swiper3.png')},
        ],
        mubanImg: [
          {img: require('assets/img/photo/mubanxiangqing/muban1.png'), text: '布艺相册'},
          {img: require('assets/img/photo/mubanxiangqing/muban2.png'), text: '怀旧相册'},
          {img: require('assets/img/photo/mubanxiangqing/muban3.png'), text: '卡通相册'},
        ]
      };
    },
    computed: {
      
    },
    methods: {
      mubanyulan() {
        this.$router.push('/photo/mubanyulan')
      }
    },
  }
</script>

<style scoped lang="less">
  #mubanxiangqing {
    background-color: #F8F8F8;
    padding-bottom: 1.35rem;
    .swiper {
      .van-swiper {
        .van-swiper-item {
          height: 5.28rem;
          color: #fff;
          font-size: 20px;
          line-height: 150px;
          text-align: center;
          background-color: #39a9ed;
          .swperImg {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .tuwenjieshao {
      background-color: white;
      margin-bottom: .2rem;
      padding-bottom: .4rem;
      .title {
        font-size: 0.4rem;
        color: #2E2D27;
        margin-left: .4rem;
        padding-top: .5rem;
        .line {
          width: 0.093333rem;
          height: 0.346667rem;
        }
        .text {
          margin-left: .2rem;
        }
      }
      .content {
        margin: 0 auto;
        margin-top: 0.4rem;
        color: #2E2D27;
        font-size: 0.4rem;
        line-height: 0.64rem;
        width: 9.333333rem;
      }
    }
    .qitamuban {
      background-color: white;
      margin-bottom: .2rem;
      .title {
        font-size: 0.4rem;
        color: #2E2D27;
        margin-left: .4rem;
        padding-top: .5rem;
        .line {
          width: 0.093333rem;
          height: 0.346667rem;
        }
        .text {
          margin-left: .2rem;
        }
      }
      .content {
        .van-grid {
          .van-grid-item {
            .mubanImg {
              width: 2.8rem;
            }
            .text {
              margin-top: .4rem;
              color: #2E2D27;
              font-size: 0.373333rem;
            }
          }
        }
      }
    }
    .button {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 0.426667rem;
      color: #2E2D27;
      .btn1 {
        width: 50%;
        border: none;
        height: 1.333333rem;
        line-height: 1.333333rem;
        background-color: white;
      }
      .btn2 {
        width: 50%;
        border: none;
        height: 1.333333rem;
        line-height: 1.333333rem;
        background-color: #FFE600;
      }
    }
  }
</style>