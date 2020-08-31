<template>
  <div id="find">

    <NavBar navBarTitle="时光盒子" :isArrow="false" />

    <div class="view1" v-if="temp">
      <div class="top">
        <van-row type="flex" justify="space-between">
          <van-col>
            <div class="address" @click="myQuan">
              <span class="text">杭州东冠幼儿园</span>
              <img class="triangle" src="~assets/img/find/triangle.png" alt="">
            </div>
          </van-col>
          <van-col>
            <div class="img">
              <img class="add" src="~assets/img/find/add.png" alt="" @click="addBao">
              <img class="add2" src="~assets/img/find/add2.png" alt="" @click="addBao">
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="content">
        <img class="bell" src="~assets/img/find/view1_1.png" alt="">
        <div>
          <span class="text">
            该幼儿园还没有添加宝贝<br />
            请点击下方按钮添加
          </span>
        </div>
        <div class="add">
          <div>
            <img class="img1" src="~assets/img/find/view1_2.png" alt="" @click="addBao">
          </div>
          <div>
            <img class="img2" src="~assets/img/find/view1_3.png" alt="" @click="addBao">
          </div>
        </div>
      </div>
    </div>

    <div class="view2" v-else>
      <div class="top">
        <van-row type="flex" justify="space-between">
          <van-col>
            <div class="address" @click="myQuan">
              <span class="text">杭州东冠幼儿园</span>
              <img class="triangle" src="~assets/img/find/triangle.png" alt="">
            </div>
          </van-col>
          <van-col>
            <div class="img">
              <img class="choose" src="~assets/img/find/choose.png" alt="">
              <img class="choose2" src="~assets/img/find/choose2.png" alt="">
              <img class="img1" src="~assets/img/find/1.png" alt="">
              <img class="img2" src="~assets/img/find/2.png" alt="">
              <img class="add" src="~assets/img/find/add.png" alt="" @click="addBao">
              <img class="add2" src="~assets/img/find/add2.png" alt="" @click="addBao">
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="content">
        <Commend :itemInfo="theData" />
      </div>
    </div>

    <div class="show" @click="show">
      淦
    </div>

    <div class="wodebaobao" @click="wodebaobao">
      我的<br>
      宝宝
    </div>


  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  import Commend from './childComps/Commend'

  import { Col, Row } from 'vant';

  export default {
    name: 'Find',
    components: {
      NavBar,
      Commend,
      [Col.name]: Col,
      [Row.name]: Row,
    },
    props: {
      
    },
    data () {
      return {
        temp: true,
        theData: [
          {
            name: '骆驼祥子',
            avatar: require('assets/img/find/avatar1.png'),
            time: '2小时前',
            text: '昨天已成过去不必计较，今天正在度过加倍珍惜，明天即将来临提早规划',
            imgs: [
              require('assets/img/find/11.png'),
              require('assets/img/find/12.png'),
            ] 
          },
          {
            name: '云淡风轻',
            avatar: require('assets/img/find/avatar2.png'),
            time: '2小时前',
            text: '昨天已成过去不必计较，今天正在度过加倍珍惜，明天即将来临提早规划',
            imgs: [
              require('assets/img/find/21.png'),
              require('assets/img/find/22.png'),
              require('assets/img/find/23.png'),
            ] 
          },
          {
            name: '当我要走的时候',
            avatar: require('assets/img/find/avatar3.png'),
            time: '2小时前',
            text: '昨天已成过去不必计较，今天正在度过加倍珍惜，明天即将来临提早规划',
            imgs: [
              require('assets/img/find/31.png'),
            ] 
          },
          {
            name: '云淡风轻',
            avatar: require('assets/img/find/avatar2.png'),
            time: '2小时前',
            text: '昨天已成过去不必计较，今天正在度过加倍珍惜，明天即将来临提早规划',
            imgs: [
              require('assets/img/find/21.png'),
              require('assets/img/find/22.png'),
              require('assets/img/find/23.png'),
            ] 
          },
        ],
      };
    },
    computed: {
      
    },
    methods: {
      show() {
        this.temp = !this.temp
      },
      myQuan() {
        this.$router.push('/find/wodequanzi')
      },
      addQuan() {
        this.$router.push('/find/tianjiaquanzi')
      },
      addBao() {
        this.$router.push('/find/tianxiejibenxinxi')
      },
      wodebaobao() {
        this.$router.push('/find/wodebaobao')
      },
    },
    
  }
</script>

<style scoped lang="less">
  #find {
    padding-bottom: 1.7rem;
    position: relative;
    .view1 {
      height: 14.5rem;
      .top {
        position: fixed;
        top: 1.4rem;
        left: 0;
        right: 0;
        z-index: 99;
        height: 1.65rem;
        background-color: #FFE600;
        padding-top: .2rem;
        padding-left: .4rem;
        .address {
          position: relative;
          top: .15rem;
          text-align: left;
          .text {
            font-size: 0.45rem;
            color: #333333;
          }
          .triangle {
            width: 0.226667rem;
            height: 0.12rem;
            vertical-align: middle;
            margin-left: .2rem;
          }
        }
        .img {
          text-align: right;
          .add {
            margin-left: .4rem;
            width: 1.066667rem;
            height: 1.066667rem;
          }
          .add2 {
            position: relative;
            bottom: .3rem;
            right: .7rem;
            width: 0.4rem;
            height: 0.4rem;
          }
        }
      }
      .content {
        position: relative;
        text-align: center;
        .bell {
          margin-top: 5rem;
          width: 2.266667rem;
          height: 2.533333rem;
        }
        .text {
          font-size: 0.373333rem;
          color: #999999;
          height: 1.333333rem;
          line-height: 0.666667rem;
        }
        .add {
          margin-top: 3.5rem;
          .img1 {
            width: 1.333333rem;
            height: 1.333333rem;
          }
          .img2 {
            position: relative;
            bottom: 1.15rem;
            width: 0.506667rem;
            height: 0.506667rem;
          }
        }
      }
    }
    .view2 {
      .top {
        position: fixed;
        top: 1.4rem;
        left: 0;
        right: 0;
        z-index: 99;
        height: 1.65rem;
        background-color: #FFE600;
        padding-top: .2rem;
        padding-left: .4rem;
        .address {
          position: relative;
          top: .15rem;
          text-align: left;
          .text {
            font-size: 0.45rem;
            color: #333333;
          }
          .triangle {
            width: 0.226667rem;
            height: 0.12rem;
            vertical-align: middle;
            margin-left: .2rem;
          }
        }
        .img {
          text-align: right;
          .choose {
            position: relative;
            left: 1.7rem;
            width: 0.373333rem;
            height: 0.373333rem;
          }
          .choose2 {
            position: relative;
            left: 1.4rem;
            bottom: .12rem;
            width: 0.186667rem;
            height: 0.133333rem;
          }
          .img1 {
            margin-left: .4rem;
            width: 1.066667rem;
            height: 1.066667rem;
          }
          .img2 {
            margin-left: .4rem;
            width: 1.066667rem;
            height: 1.066667rem;
          }
          .add {
            margin-left: .4rem;
            width: 1.066667rem;
            height: 1.066667rem;
          }
          .add2 {
            position: relative;
            bottom: .3rem;
            right: .7rem;
            width: 0.4rem;
            height: 0.4rem;
          }
        }
      }
      .content {
        margin-top: 1.8rem;
      }
    }
    .show {
      width: 1rem;
      height: 1rem;
      background-color: yellowgreen;
      font-size: 0.666667rem;
      line-height: 0.666667rem;
      text-align: center;
      padding-top: .125rem;
      position: fixed;
      bottom: 2rem;
      right: .7rem;
      border-radius: 50%;
    }
    .wodebaobao {
      width: 2rem;
      height: 2rem;
      background-color: pink;
      font-size: 0.666667rem;
      line-height: 0.666667rem;
      text-align: center;
      padding-top: .3rem;
      position: fixed;
      bottom: 3.5rem;
      right: .3rem;
      border-radius: 50%;
    }
  }
</style>