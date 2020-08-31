<template>
  <div id="tujixiangqing">

    <NavBar navBarTitle="详情" :isArrow="true" />

    <div class="top">
      <div class="item">
        <div class="avatar">
          <img :src="theData.avatar" alt="">
        </div>
        <div class="name">{{theData.name}}</div>
        <div class="time">{{theData.time}}</div>
        <div class="text">{{theData.text}}</div>
        <div class="imgs">
          <img v-for="(item, index) in theData.imgs" :key="index" :src="item" alt="">
        </div>
      </div>
    </div>

    <div class="middle">
      <div class="title">
        <img class="img" src="~assets/img/find/tujixiangqing/line.png" alt="">
        <span class="text">智能识别</span>
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
        <van-swipe-item>
          <img class="img" src="~assets/img/find/tujixiangqing/6.png" alt="">
        </van-swipe-item>
        <van-swipe-item v-for="(item, index) in theData.imgs" :key="index" >
          <img class="img" :src="item" alt="">
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            <span class="one">{{ current + 1 }}</span>
            <span class="two">/</span>
            <span class="three">{{theData.imgs.length+1}}</span>
          </div>
        </template>
      </van-swipe>

      <div class="desc">
        <span>浏览:2400 丨 下载:198 丨 打赏:20 丨 入册:20</span>
      </div>
    </div>

    <div class="btn">
      <button class="btn1">打赏：5 <img class="hua" src="~assets/img/find/tujixiangqing/hua.png" alt=""></button>
      <button class="btn2" v-if="temp" @click="buy">购买：￥20.0</button>
      <button class="btn3" v-else @click="buy">下载</button>
    </div>

    <div class="liulan" @click="liulan">
      图片<br>
      浏览
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  import { Swipe, SwipeItem } from 'vant';

  export default {
    name: 'Tujixiangqing',
    components: {
      NavBar,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    props: {
      
    },
    data () {
      return {
        theData: {
          avatar: require('assets/img/find/tujixiangqing/avatar.png'),
          name: '云淡风轻',
          time: '2小时前',
          text: '重要的不是要得到什么，是珍重已经拥有的。',
          imgs: [
            require('assets/img/find/tujixiangqing/1.png'),
            require('assets/img/find/tujixiangqing/2.png'),
            require('assets/img/find/tujixiangqing/3.png'),
            require('assets/img/find/tujixiangqing/4.png'),
            require('assets/img/find/tujixiangqing/5.png'),
          ]
        },
        current: 0,
        temp: true,
      };
    },
    computed: {
      
    },
    methods: {
      onChange(index) {
        this.current = index;
      },
      buy() {
        this.temp = !this.temp
      },
      liulan() {
        this.$router.push('/find/tupianliulan')
      }
    },
  }
</script>

<style scoped lang="less">
  #tujixiangqing {
    .top {
      .item {
        position: relative;
        border-bottom: .2rem solid #F8F8F8;
        height: 5.2rem;
        .avatar {
          img {
            width: 1.066667rem;
            height: 1.066667rem;
          }
          position: absolute;
          left: 0.4rem;
          top: .4rem;
        }
        .name {
          font-size: 0.373333rem;
          color: #2E2D27;
          position: absolute;
          left: 1.7rem;
          top: .4rem;
        }
        .time {
          font-size: 0.32rem;
          color: #999999;
          position: absolute;
          left: 1.7rem;
          top: 1rem;
        }
        .text {
          color: #2E2D27;
          font-size: 0.32rem;
          position: absolute;
          left: .45rem;
          top: 1.9rem;
        }
        .imgs {
          width: 95%;
          position: absolute;
          left: .45rem;
          top: 2.5rem;
          overflow-x: scroll;
          overflow-y: hidden;
          white-space: nowrap;
          padding-right: .3rem;
          img {
            width: 2.133333rem;
            height: 2.133333rem;
            margin-right: .1rem;
          }
        }
      }
    }
    .middle {
      .title {
        margin-left: 0.32rem;
        margin-top: 0.2rem;
        .img {
          width: 0.093333rem;
          height: 0.346667rem;
        }
        .text {
          font-size: 0.4rem;
          color: #2E2D27;
          margin-left: .2rem;
        }
      }
      .my-swipe {
        position: relative;
        text-align: center;
        margin-top: .4rem;
        img {
          width: 8.8rem;
          height: 5.066667rem;
        }
        .custom-indicator {
          position: absolute;
          right: 0.8rem;
          bottom: 0.3rem;
          padding: 0.026667rem 0.066667rem;
          font-size: 0.6rem;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          .two , .three {
            font-size: .35rem;
          }
        }
      }
      .desc {
        color: #999999;
        font-size: 0.32rem;
        position: relative;
        left: .55rem;
        top: .2rem;
      }
    }
    .btn {
      margin-top: 2rem;
      display: flex;
      justify-content: space-around;
      button {
        width: 4rem;
        height: 1.2rem;
        background-color: #FFE600;
        border: none;
        color: #2E2D27;
        font-size: 0.426667rem;
      }
      .btn1 {
        .hua {
          width: 0.4rem;
          height: .4rem;
          vertical-align: text-top;
        }
      }
      .btn2 {

      }
    }
    .liulan {
      width: 2rem;
      height: 2rem;
      background-color: greenyellow;
      font-size: 0.666667rem;
      line-height: 0.666667rem;
      text-align: center;
      padding-top: .3rem;
      position: fixed;
      bottom: 2.5rem;
      right: .3rem;
      border-radius: 50%;
    }
  }
</style>