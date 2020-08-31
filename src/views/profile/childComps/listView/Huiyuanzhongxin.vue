<template>
  <div id="huiyuanzhongxin">

    <NavBar navBarTitle="会员中心" :isArrow="true" />
    
    <div class="top">
      <div class="content">
        <img class="avatar" src="~assets/img/profile/huiyuanzhongxin/touxiang.png" alt="">
        <span class="name">走路带风的狒狒</span>
        <img class="vip-img" src="~assets/img/profile/huiyuanzhongxin/vip.png" alt="">
        <span class="vip-text">青铜会员</span>
        <span class="time">到期时间：2019-09-20</span>
      </div>
    </div>

    <div class="middle">
      <div class="line">
        <img class="img" src="~assets/img/profile/huiyuanzhongxin/line.png" alt="">
        <span class="text">选择会员</span>
      </div>
      
      <div class="item">
          <div class="option" @click="optionClick(0)" :class="{'activeClass': currentIndex==0}" >
            <div class="vip-name">青铜会员</div>
            <div class="vip-price">
              <span class="symbol">￥</span>
              <span class="price">{{qtVipPrice}}</span>
            </div>
            <div class="vip-old-price">￥24.00</div>
          </div>
          <div class="option" @click="optionClick(1)" :class="{'activeClass': currentIndex==1}" >
            <div class="vip-name">白银会员</div>
            <div class="vip-price">
              <span class="symbol">￥</span>
              <span class="price">58.00</span>
            </div>
            <div class="vip-old-price">￥24.00</div>
          </div>
          <div class="option" @click="optionClick(2)" :class="{'activeClass': currentIndex==2}" >
            <div class="vip-name">黄金会员</div>
            <div class="vip-price">
              <span class="symbol">￥</span>
              <span class="price">288.00</span>
            </div>
            <div class="vip-old-price">￥24.00</div>
          </div>
      </div>
    </div>

    <div v-if="currentIndex == 0" class="bottom">
      <div class="line">
        <img class="img" src="~assets/img/profile/huiyuanzhongxin/line.png" alt="">
        <span class="text">青铜会员权益</span>
      </div>

      <div class="privilege">
        <van-grid class="van-grid" :border="false" :column-num="2">
          <van-grid-item class="van-grid-item">
            <img class="back" src="~assets/img/profile/huiyuanzhongxin/back.png" alt="">
            <img class="icon" src="~assets/img/profile/huiyuanzhongxin/1.png" alt="">
            <div class="text1">初始积分</div>
            <div class="text2">初始积分1000</div>
          </van-grid-item>
          <van-grid-item>
            <img class="back" src="~assets/img/profile/huiyuanzhongxin/back.png" alt="">
            <img class="icon" src="~assets/img/profile/huiyuanzhongxin/2.png" alt="">
            <div class="text1">分拣人脸</div>
            <div class="text2">300脸/天</div>
          </van-grid-item>
          <van-grid-item>
            <img class="back" src="~assets/img/profile/huiyuanzhongxin/back.png" alt="">
            <img class="icon" src="~assets/img/profile/huiyuanzhongxin/3.png" alt="">
            <div class="text1">亲属脸集</div>
            <div class="text2">亲属脸集数量</div>
          </van-grid-item>
          <van-grid-item>
            <img class="back" src="~assets/img/profile/huiyuanzhongxin/back.png" alt="">
            <img class="icon" src="~assets/img/profile/huiyuanzhongxin/4.png" alt="">
            <div class="text1">额外折扣</div>
            <div class="text2">额外折扣100%</div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div v-if="currentIndex == 1" class="bottom">
      白银会员权益
    </div>
    <div v-if="currentIndex == 2" class="bottom">
      黄金会员权益
    </div>

    <button class="button" @click="newVip">开通青铜会员（￥{{qtVipPrice}}）</button>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  import { Grid, GridItem } from 'vant';
  
  export default {
    name: 'Huiyuanzhongxin',
    components: {
      NavBar,
      [Grid.name]: Grid,
      [GridItem.name]: GridItem,
    },
    props: {
      
    },
    data () {
      return {
        currentIndex: 0,
        qtVipPrice: 19.01,
      };
    },
    computed: {
      
    },
    methods: {
      newVip() {
        console.log('开通会员')
      },
      optionClick(index) {
        console.log(index)
        this.currentIndex = index
      }
    },
  }
</script>

<style scoped lang="less">
  #huiyuanzhongxin {
    height: 100vh;
    background-color: #f8f8f8;
    .top {
      background-color: #FFE600;
      height: 3.7rem;
      padding-top: .6rem;
      .content{
        margin: 0 auto;
        background-color: white;
        border-radius: .3rem;
        width: 90%;
        height: 2.5rem;
        position: relative;
        .avatar {
          position: relative;
          top: .4rem;
          left: .4rem;
          width: 1.7rem;
        }
        .name {
          font-size: .4rem;
          position: relative;
          color: #2E2D27;
          top: -.6rem;
          left: .6rem;
        }
        .vip-img {
          width: .5rem;
          position: relative;
          left: -2.2rem;
          top: .2rem;
        }
        .vip-text {
          position: relative;
          font-size: .4rem;
          left: -2.1rem;
          top: .1rem;
          color: #EDB46F;
        }
        .time {
          font-size: .3rem;
          color: #CDCDCD;
          position: absolute;
          right: .5rem;
          top: 1.5rem;
        }
      }
    }
    .middle {
      background-color: white;
      position: relative;
      height: 4.6rem;
      .line {
        position: relative;
        width: 50%;
        padding-top: .5rem;
        left: .5rem;
        .img {
          position: relative;
          width: .05rem;
          height: .5rem;
        }
        .text {
          position: relative;
          left: .2rem;
          bottom: .1rem;
          font-size: .4rem;
          color: #2E2D27;
        }
      }
      .item {
        display: flex;
        justify-content: space-evenly;
        padding-top: .3rem;
        .activeClass {
          background-color: #FFE600;
        }
        .option {
          width: 2.8rem;
          border: .013333rem solid #D8D8D8;
          border-radius: .2rem;
          text-align: center;
          padding: .3rem;
          color: #2E2D27;
          .vip-name {
            font-size: .4rem;
          }
          .vip-price {
            margin-top: .3rem;
            .symbol {
              font-size: .4rem;
            }
            .price {
              font-size: .6rem;
            }
          }
          .vip-old-price {
            margin-top: .2rem;
            font-size: .2rem;
            text-decoration: line-through;
          }
        }
        
      } 
    }
    .bottom {
      margin-top: .3rem;
      // width: 100%;
      background-color: white;
      height: 7rem;
      div {
        width: 100%;
      }
      .line {
        position: relative;
        width: 50%;
        padding-top: .5rem;
        left: .5rem;
        .img {
          position: relative;
          width: .05rem;
          height: .5rem;
        }
        .text {
          position: relative;
          left: .2rem;
          bottom: .1rem;
          font-size: .4rem;
          color: #2E2D27;
        }
      }
      .privilege {
        font-size: .4rem;
        .van-grid {
          .van-grid-item {
            height: 2rem;
            position: relative;
            top: .8rem;
            .back {
              position: relative;
              right: 1.2rem;
              width: 1.5rem;
            }
            .icon {
              position: relative;
              right: 1.2rem;
              bottom: 1.15rem;
              width: .8rem;
            }
            .text1 {
              position: relative;
              font-size: .35rem;
              left: 2rem;
              bottom: 2rem;
            }
            .text2 {
              position: relative;
              font-size: .35rem;
              left: 2rem;
              bottom: 1.8rem;
              color: #999999;
            }
          }
        }
      }
    }
    .button {
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 7%;
      background-color: #FFE600;
      font-size: .4rem;
      border: none;
      color: black;
    }

  }
</style>