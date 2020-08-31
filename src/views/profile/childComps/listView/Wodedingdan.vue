<template>
  <div id="wodedingdan">

    <NavBar navBarTitle="我的订单" :isArrow="true" />

    <div class="zhanwei"></div>

    <div class="menu">
      <tabControl :tabControl="['待支付', '待发货', '已发货', '已收货']" />
    </div>

    <div class="item">
      <div class="top">
        <span class="number">订单编号:199705968873</span>
        <span class="time">2019-12-24 12:25</span>
        <span class="status">等待付款</span>
      </div>
      <div class="middle" @click="viewDetail">
        <div class="card">
          <img class="goods-img" src="~assets/img/profile/wodedingdan/1.png" alt="">
          <div class="goods-name">宝宝的时光相册</div>
          <div class="goods-price">¥294.0</div>
          <img class="arrow" src="~assets/img/profile/wodedingdan/arrow.png" alt="">
        </div>
      </div>
      <div class="bottom">
        <span class="text1">运费:￥5.0</span>
        <span class="text2">合计:￥299.0</span>
        <van-button class="btn1" color="#F06962">撤销</van-button>
        <van-button class="btn2" color="#2BCF88">支付</van-button>
      </div>
    </div>

    <div class="item">
      <div class="top">
        <span class="number">订单编号:199705968873</span>
        <span class="time">2019-12-24 12:25</span>
        <span class="status">等待付款</span>
      </div>
      <div class="middle" @click="viewDetail">
        <div class="card">
          <img class="goods-img" src="~assets/img/profile/wodedingdan/2.png" alt="">
          <div class="goods-name">宝宝的时光相册</div>
          <div class="goods-price">¥294.0</div>
          <img class="arrow" src="~assets/img/profile/wodedingdan/arrow.png" alt="">
        </div>
      </div>
      <div class="bottom">
        <span class="text1">运费:￥5.0</span>
        <span class="text2">合计:￥299.0</span>
        <van-button class="btn1" color="#F06962">撤销</van-button>
        <van-button class="btn2" color="#2BCF88">支付</van-button>
      </div>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import tabControl from 'components/content/tabControl/TabControl'
  import { Button, Card } from 'vant';

  export default {
    name: 'Wodedingdan',
    components: {
      NavBar,
      tabControl,
      [Button.name]: Button,
      [Card.name]: Card,
    },
    props: {
      
    },
    data () {
      return {
        currentIndex: 0,
      };
    },
    computed: {
      
    },
    methods: {
      viewDetail() {
        this.$router.push('/profile/wodedingdan/detail')
      }
    },
  }
</script>

<style scoped lang="less">
  #wodedingdan {
    background-color: #F8F8F8;
    height: 100vh;
    .zhanwei {
      height: .5rem;
      background-color: #FFE600;
    }
    .menu {
      padding-bottom: .2rem;
      background-color: #FFE600;
    }
    .item {
      background-color: white;
      position: relative;
      margin-top: .2rem;
      .top {
        height: 1.6rem;

        .number {
          font-size: 0.373333rem;
          position: relative;
          color: #2E2D27;
          left: .5rem;
          top: .1rem;
        }
        .time {
          font-size: 0.346667rem;
          position: relative;
          color: #999999;
          right: 3.6rem;
          top: .7rem;
        }
        .status {
          font-size: 0.4rem;
          position: relative;
          color: #F06962;
          left: 1.2rem;
          top: .4rem;
        }
      }
      .middle {
        .card {
          position: relative;
          padding-top: .4rem;
          padding-bottom: .4rem;
          background-color: white;
          border-top: 0.013333rem solid #F0F0F0;
          border-bottom: 0.013333rem solid #F0F0F0;
          height: 2.7rem;
          .goods-img {
            position: relative;
            left: .5rem;
            width: 1.866667rem;
            height: 1.866667rem;
          }
          .goods-name {
            position: relative;
            left: 2.6rem;
            bottom: 1.9rem;
            font-size: 0.426667rem;
            color: #000000;
          }
          .goods-price {
            position: relative;
            left: 2.6rem;
            bottom: 1.4rem;
            font-size: 0.426667rem;
            color: #000000;
          }
          .arrow {
            position: relative;
            left: 9.3rem;
            bottom: 2.5rem;
            width: 0.2rem;
            height: 0.333333rem;
          }
        }
      }
      .bottom {
        position: relative;
        font-size: 0.346667rem;
        color: #3C3C3C;
        height: 1.2rem;
        padding-top: .2rem;
        vertical-align: middle;
        .text1 {
          position: absolute;
          left: .5rem;
          top: .4rem;
        }
        .text2 {
          position: absolute;
          left: 2.7rem;
          top: .4rem;
        }
        .btn1 {
          font-size: 0.346667rem;
          position: absolute;
          width: 1.6rem;
          height: 0.8rem;
          left: 6.1rem;
        }
        .btn2 {
          font-size: 0.346667rem;
          position: absolute;
          width: 1.6rem;
          height: 0.8rem;
          left: 8rem;
        }
      }
    }
  }
</style>