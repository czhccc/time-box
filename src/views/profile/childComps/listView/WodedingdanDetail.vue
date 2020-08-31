<template>
  <div id="wodedingdanDetail">

    <NavBar class="navBar" navBarTitle="订单详情" :isArrow="true" />

    <div class="scroll">
      <div class="top">
        <img class="clock" src="~assets/img/profile/wodedingdan/clock.png" alt="">
        <span class="text1">等待付款</span>
        <span class="text2">需付款:￥299</span>
      </div>

      <div class="back">
        <img src="~assets/img/profile/wodedingdan/backImg.png" alt="">
      </div>

      <div class="middle">
        <img class="position" src="~assets/img/profile/wodedingdan/position.png" alt="">
        <div class="person">
          <span class="name">段凌天</span>
          <span class="phone">187****3610</span>
        </div>
        <div class="address">地址：浙江省杭州市西湖区西溪路888号</div>
      </div>

      <div class="muban">
        <div class="title">选择模板</div>
        <div class="content">
          <img class="goods" src="~assets/img/profile/wodedingdan/3.png" alt="">
          <div class="name">布艺相册-童年的回忆</div>
          <div class="describe">当你走进这欢乐场，背上所有的梦~</div>
          <div class="price">￥40/本</div>
          <img class="arrow" src="~assets/img/profile/wodedingdan/arrow.png" alt="">
        </div>
      </div>

      <div class="xiangce">
        <div class="title">选择相册</div>
        <div class="content">
          <img class="goods" src="~assets/img/profile/wodedingdan/4.png" alt="">    
          <div class="name">相册名称</div>
          <div class="describe">照片数量: 32张</div>
          <img class="arrow" src="~assets/img/profile/wodedingdan/arrow.png" alt="">
        </div>
      </div>

      <div class="youhui">
        <div class="title">优惠信息</div>
        <div class="content">
          <div class="one">
            <div class="name">会员优惠</div>
            <div class="describe">黄金会员抵扣20元</div>
            <div class="number">- 20</div>
          </div>
          <div class="two">
            <div class="name">积分抵扣</div>
            <div class="describe">1000积分抵扣1元，最多抵扣20元</div>
            <div class="number">- 20</div>
          </div>
        </div>
      </div>

      <div class="zhifu">
        <div class="title">支付信息</div>
        <div class="sp">
          <span class="name">商品</span>
          <span class="number">￥ 259</span>
        </div>
        <div class="yf">
          <span class="name">运费</span>
          <span class="number">￥ 11</span>
        </div>
        <div class="hj">
          <span class="name">合计</span>
          <span class="number">￥ 270</span>
        </div>
      </div>


    </div>

    <div class="button">
      <button class="btn1" @click="cancelOrder">取消订单</button>
      <button class="btn2" @click="pay">去支付</button>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import { Button } from 'vant';

  export default {
    name: 'WodedingdanDetail',
    components: {
      NavBar,
      [Button.name]: Button
    },
    props: {
      
    },
    data () {
      return {
        
      };
    },
    computed: {
      
    },
    methods: {
      cancelOrder() {
        console.log('取消订单')
      },
      pay() {
        console.log('去支付')
      }
    },
  }
</script>

<style scoped lang="less">
  #wodedingdanDetail {
    height: 100vh;
    background-color: #F8F8F8;
    .scroll {
      padding-bottom: 1.333333rem;
      overflow: scroll;
      background-color: #F8F8F8;
      .top {
        height: 2.5rem;
        background-color: #FFE600;
        position: relative;
        padding-top: .3rem;
        .clock {
          width: 0.468267rem;
          position: absolute;
          left: .6rem;
          top: .35rem;
        }
        .text1 {
          font-size: 0.48rem;
          position: absolute;
          left: 1.2rem;
          color: #000000;
        }
        .text2 {
          font-size: 0.4rem;
          position: absolute;
          left: 7rem;
          top: .375rem;
          color: #000000;
        }
      }
      .back {
        position: relative;
        img {
          position: absolute;
          left: .25rem;
          top: -1.3rem;
          width: 95%;
          height: 2.386667rem;
        }
      }
      .middle {
        position: relative;
        .position {
          position: absolute;
          left: 1rem;
          bottom: .2rem;
          width: 0.32rem;
          height: 0.44rem;
        }
        .person {
          position: absolute;
          left: 1.7rem;
          bottom: .2rem;
          font-size: 0.373333rem;
          .name {
            color: #2E2D27;
          }
          .phone {
            color: #666666;
            position: absolute;
            left: 1.5rem;
          }
        }
        .address {
          position: absolute;
          left: 1.7rem;
          top: .2rem;
          font-size: 0.346667rem;
          color: #999999;
        }
      }
      .muban {
        background-color: white;
        padding-top: 1.7rem;
        .title {
          font-size: 0.373333rem;
          margin-left: .5rem;
        }
        .content {
          height: 3.2rem;
          margin: .3rem;
          margin-bottom: .2rem;
          padding-top: .4rem;
          border-top: 0.013333rem solid #F0F0F0;
          position: relative;
          .goods {
            width: 2.4rem;
            position: absolute;
            left: .2rem;
          }
          .name {
            position: absolute;
            color: #2E2D27;
            left: 3rem;
            top: .5rem;
            font-size: 0.426667rem;
          }
          .describe {
            position: absolute;
            color: #999999;
            font-size: 0.373333rem;
            left: 3rem;
            top: 1.25rem;
          }
          .price {
            position: absolute;
            left: 2.95rem;
            top: 2.3rem;
            font-size: 0.426667rem;
            color: #F06962;
          }
          .arrow {
            position: absolute;
            left: 9.1rem;
            top: 1.45rem;
            width: 0.2rem;
            height: 0.333333rem;
          }
        }
      }
      .xiangce {
        background-color: white;
        padding-top: .35rem;
        .title {
          font-size: 0.373333rem;
          margin-left: .5rem;
          padding-bottom: .3rem;
          border-bottom: 0.013333rem solid #F0F0F0;
        }
        .content {
          margin-top: .3rem;
          height: 2rem;
          position: relative;
          .goods {
            width: 1.6rem;
            position: absolute;
            left: .4rem;
          }
          .name {
            color: #2E2D27;
            font-size: 0.426667rem;
            position: absolute;
            left: 2.3rem;
            top: .1rem;
          }
          .describe {
            position: absolute;
            top: .8rem;
            left: 2.3rem;
            font-size: 0.373333rem;
          }
          .arrow {
            position: absolute;
            top: .7rem;
            left: 9.4rem;
            width: 0.2rem;
            height: 0.333333rem;
          }
        }
      }
      .youhui {
        margin-top: .2rem;
        background-color: white;
        .title {
          height: 1.2rem;
          font-size: 0.373333rem;
          color: #2E2D27;
          line-height: 1.2rem;
          margin-left: .5rem;
        }
        .content {
          height: 3.493333rem;
          position: relative;
          .name {
            font-size: 0.4rem;
            color: #2E2D27;
          }
          .describe {
            font-size: 0.346667rem;
            color: #999999;
          }
          .number {
            font-size: 0.4rem;
            color: #2E2D27;
          }
          .one {
            padding-top: .4rem;
            height: 1.733333rem;
            border-top: 0.013333rem solid #F0F0F0;
            margin-left: .5rem;
            position: relative;
            .describe {
              margin-top: .2rem;
            }
            .number {
              position: absolute;
              left: 8.3rem;
              bottom: .6rem;
            }
          }
          .two {
            padding-top: .4rem;
            height: 1.733333rem;
            border-top: 0.013333rem solid #F0F0F0;
            margin-left: .5rem;
            position: relative;
            .describe {
              margin-top: .2rem;
            }
            .number {
              position: absolute;
              left: 8.3rem;
              bottom: .6rem;
            }
          }
        }
      }
      .zhifu {
        background-color: white;
        margin-top: .2rem;
        color: #2E2D27;
        font-size: 0.4rem;
        .title {
          height: 1.2rem;
          font-size: 0.373333rem;
          color: #2E2D27;
          line-height: 1.2rem;
          margin-left: .5rem;
          border-bottom: 0.013333rem solid #F0F0F0;
        }
        .sp , .yf , .hj {
          height: 1.208889rem;
          line-height: 1.208889rem;
          margin-left: .5rem;
          margin-right: .5rem;
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .button {
      button {
        width: 50%;
        height: 1.333333rem;
        font-size: 0.426667rem;
        color: #2E2D27;
        border: none;
        border-top: 0.013333rem solid #FFFFFF;
      }
      .btn1 {
        background-color: white;
        position: fixed;
        bottom: 0;
        left: 0;
      }
      .btn2 {
        background-color: #FFE600;
        position: fixed;
        bottom: 0;
        right: 0;
      }
    }
  }
</style>