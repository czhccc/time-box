<template>
  <div id="tongji">

    <NavBar class="navBar" navBarTitle="统计" :isArrow="true" />

    <div class="imgList">
      <div v-for="(item, index) in imgList" :key="index" @click="showMask(item, index)">
        <img :src="item.img" alt="">
        <div class="mask" v-if="item.checked">
          <img class="gou" src="~assets/img/upload/tongji/gou.png" alt="">
        </div>
      </div>
      
    </div>

    <div class="tab-control">
      <div class="tab-control-item" v-for="(item, index) in tabControlList" :key="index"
          :class="{active: index === currentIndex}"
          @click="changeIndex(index)">
        <div class="text">{{item[0]}}</div>
        <div class="number">{{item[1]}}</div>
        <div class="bottom-line"></div>
        <div class="right-line"></div>
      </div>
    </div>

    <div class="list">
      <van-row class="item">
        <van-col span="7" offset="1" >
          <div class="name">用户名称</div>
        </van-col>
        <van-col span="4" offset="2" >
          <div class="value">浏览+1</div>
        </van-col>
        <van-col span="6" offset="3" >
          <div class="time">2017-7-20 15:20</div>
        </van-col>
      </van-row>
      <van-row class="item">
        <van-col span="7" offset="1" >
          <div class="name">须尽漫寂寥</div>
        </van-col>
        <van-col span="4" offset="2" >
          <div class="value">浏览+1</div>
        </van-col>
        <van-col span="6" offset="3" >
          <div class="time">2017-7-20 15:20</div>
        </van-col>
      </van-row>
      <van-row class="item">
        <van-col span="7" offset="1" >
          <div class="name">走路带饭的狒狒</div>
        </van-col>
        <van-col span="4" offset="2" >
          <div class="value">浏览+1</div>
        </van-col>
        <van-col span="6" offset="3" >
          <div class="time">2017-7-20 15:20</div>
        </van-col>
      </van-row>
      <van-row class="item">
        <van-col span="7" offset="1" >
          <div class="name">段凌天舅舅</div>
        </van-col>
        <van-col span="4" offset="2" >
          <div class="value">浏览+1</div>
        </van-col>
        <van-col span="6" offset="3" >
          <div class="time">2017-7-20 15:20</div>
        </van-col>
      </van-row>
      <van-row class="item">
        <van-col span="7" offset="1" >
          <div class="name">龙井幼儿园老师</div>
        </van-col>
        <van-col span="4" offset="2" >
          <div class="value">浏览+1</div>
        </van-col>
        <van-col span="6" offset="3" >
          <div class="time">2017-7-20 15:20</div>
        </van-col>
      </van-row>
      <van-row class="item">
        <van-col span="7" offset="1" >
          <div class="name">萧炎爸爸</div>
        </van-col>
        <van-col span="4" offset="2" >
          <div class="value">浏览+1</div>
        </van-col>
        <van-col span="6" offset="3" >
          <div class="time">2017-7-20 15:20</div>
        </van-col>
      </van-row>

    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import { Col, Row } from 'vant';
  import Vue from 'vue'
  export default {
    name: 'Tongji',
    components: {
      NavBar,
      [Col.name]: Col,
      [Row.name]: Row,
    },
    data () {
      return {
        imgList: [
          {img: require('assets/img/upload/tongji/1.png')},
          {img: require('assets/img/upload/tongji/2.png')},
          {img: require('assets/img/upload/tongji/3.png')},
          {img: require('assets/img/upload/tongji/4.png')},
          {img: require('assets/img/upload/tongji/5.png')},
        ],
        isMaskShow: [],
        tabControlList: [['浏览', 1920], ['下载', 1080], ['打赏', 1334], ['入册', 2001]],
        currentIndex: 0,
      };
    },
    computed: {
      
    },
    methods: {
      showMask(item, index) {
        item.checked = !item.checked
        this.$forceUpdate()
      },
      changeIndex(index) {
        this.currentIndex = index
      }
    },
    created() {
      for(let i=0; i < this.imgList.length; i++) {
        this.imgList[i].checked = false
      }
    },
  }
</script>

<style scoped lang="less">
  #tongji {
    position: relative;
    background-color: #F8F8F8;
    height: 100vh;
    .imgList {
      position: relative;
      background-color: #FFE600;
      padding-top: .3rem;
      padding-left: .3rem;
      padding-right: .2rem;
      height: 2.8rem;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      .mask {
        z-index: 999;
        border-radius: 50%;
        width: 0.8rem;
        height: 0.8rem;
        background-color: white;
        position: absolute;
        right: .5rem;
        top: .655rem;
        .gou {
          z-index: 999;
          position: absolute;
          z-index: 9999;
          width: 0.38rem;
          height: 0.2728rem;
          left: .2rem;
          top: .26rem;
        }
      }
      div {
        position: relative;
        display: inline-block;
        margin-right: 0.12rem;
      }
      img:last-child {
        margin-right: 0;
      }
      img {
        position: relative;
        width: 2.133333rem;
      }
      // .activeImg {
      //   // border: 0.5rem solid greenyellow;
      // }
      // .activeImg:before, .activeImg::after {
      //   background: url('~assets/img/upload/tongji/yuan.png') no-repeat 300px 300px;
      //   top: 1rem;
      //   content: "";
      //   height: 0.666667rem;
      //   width: 0.08rem;
      //   border-radius: 0.133333rem;
      //   display: block;
      //   background: #ff003f;
      //   position: absolute;
      //   top: -0.24rem;
      //   left: 0.426667rem;
      //   transform: rotate(45deg);
      //   -ms-transform: rotate(45deg);
      // }
      // .activeImg::before {
      //   z-index: 999;
      //   height: 0.32rem;
      //   transform: rotate(-45deg);
      //   -ms-transform: rotate(-45deg);
      //   position: absolute;
      //   top: 0.08rem;
      //   left: 0.106667rem;
      // }
    }
    .imgList::-webkit-scrollbar {
      width: 0;
    }
    .tab-control {
      position: relative;
      padding-top: .2rem;
      display: flex;
      text-align: center;
      height: 1.6rem;
      line-height: 1rem;
      background-color: #FFE600;
      font-size: 0.32rem;
      line-height: 0.426667rem;
      .tab-control-item {
        position: relative;
        flex: 1;
        height: 0.5rem;
        .text {
          opacity: 0.5;
        }
        .number {
          opacity: 0.5;
          margin-top: .1rem;
          font-size: 0.4rem;
        }
      }
      .active {
        color: #2E2D27;
        opacity: 1;
        .text {
          opacity: 1;
        }
        .number {
          opacity: 1;
        }
        .bottom-line {
          margin: 0 auto;
          margin-top: .15rem;
          width: 0.5rem;
          border-bottom: 0.06rem solid #333333;
        }
      }
      .right-line {
        position: absolute;
        left: 2.5rem;
        top: .2rem;
        height: 0.5rem;
        border-right: 0.013333rem solid rgba(62, 93, 138, 1);
        border-width: 0.03rem;
      }
    }
    .list {
      .item {
        background-color: white;
        height: 1.28rem;
        line-height: 1.28rem;
        border-bottom: 0.013333rem solid #F0F0F0;
        .name {
          font-size: 0.4rem;
          color: #2E2D27;
          text-align: left;
        }
        .value {
          font-size: 0.4rem;
          color: #2E2D27;
          text-align: center;
        }
        .time {
          font-size: 0.32rem;
          color: #999999;
          text-align: right;
        }
      }
    }
  }
</style>