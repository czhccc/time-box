<template>
  <div id="photo">

    <NavBar navBarTitle="相盒" :isArrow="false" />

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

    <div class="list">
      <div class="muban">
        <van-cell-group class="item" @click="xiangcemuban">
          <van-cell class="van-cell" title="相册模板" is-link value="更多" />
        </van-cell-group>
        <van-grid class="van-grid" :border="false" :column-num="3">
          <van-grid-item class="van-grid-item" v-for="(item, index) in mubanImg" :key="index">
            <img class="mubanImg" :src="item.img" />
            <span class="text">{{item.text}}</span>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="muban">
        <van-cell-group class="item" @click="xiangceliebiao">
          <van-cell class="van-cell" title="已选相册" is-link value="更多" />
        </van-cell-group>
        <van-grid class="van-grid" :border="false" :column-num="3">
          <van-grid-item class="van-grid-item" v-for="(item, index) in yixuanImg" :key="index">
            <img class="mubanImg" :src="item.img" @click="add(index)" />
            <span class="text">{{item.text}}</span>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="muban">
        <van-cell-group class="item">
          <van-cell class="van-cell" title="已购相册" is-link value="更多" />
        </van-cell-group>
        <van-grid class="van-grid" :border="false" :column-num="3">
          <van-grid-item class="van-grid-item" v-for="(item, index) in yigouImg" :key="index">
            <img class="mubanImg" :src="item.img" />
            <span class="text">{{item.text}}</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>

    <div class="xiangqing" @click="xiangqing">
      活动
      <br />
      详情
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import { Swipe, SwipeItem } from 'vant';
  import { Cell, CellGroup } from 'vant';
  import { Grid, GridItem } from 'vant';

  export default {
    name: 'Photo',
    components: {
      NavBar,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Grid.name]: Grid,
      [GridItem.name]: GridItem,
    },
    props: {
      
    },
    data () {
      return {
        swiperImg: [
          {img: require('assets/img/photo/swiper1.png')},
          {img: require('assets/img/photo/swiper2.png')},
          {img: require('assets/img/photo/swiper3.png')},
        ],
        mubanImg: [
          {img: require('assets/img/photo/muban1.png'), text: '布艺相册'},
          {img: require('assets/img/photo/muban2.png'), text: '怀旧相册'},
          {img: require('assets/img/photo/muban3.png'), text: '卡通相册'},
        ],
        yixuanImg: [
          {img: require('assets/img/photo/yixuan1.png'), text: ''},
          {img: require('assets/img/photo/yixuan2.png'), text: '宝宝成长'},
          {img: require('assets/img/photo/yixuan3.png'), text: '一家人'},
        ],
        yigouImg: [
          {img: require('assets/img/photo/yigou1.png'), text: '布艺相册'},
          {img: require('assets/img/photo/yigou2.png'), text: '怀旧相册'},
          {img: require('assets/img/photo/yigou3.png'), text: '卡通相册'},
        ],
      };
    },
    computed: {
      
    },
    methods: {
      xiangqing() {
        this.$router.push('/photo/huodongxiangqing')
      },
      xiangcemuban() {
        this.$router.push('/photo/xiangcemuban')
      },
      xiangceliebiao() {
        this.$router.push('/photo/xiangceliebiao')
      },
      add(index) {
        if(index == 0) {
          this.$router.push('/photo/xuanzemuban')
        }
      },
    },
  }
</script>

<style scoped lang="less">
  #photo {
    background-color: #F8F8F8;
    padding-bottom: 1.4rem;
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
    .list {
      .muban {
        margin-bottom: .3rem;
        .item {
          .van-cell {
            height: 1.2rem;
          }
        }
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
    .xiangqing {
      position: fixed;
      bottom: 2.5rem;
      right: 1rem;
      text-align: center;
      vertical-align: middle;
      width: 1.5rem;
      height: 1.5rem;
      background-color: pink;
    }
  }
</style>