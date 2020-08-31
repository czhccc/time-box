<template>
  <div id="querendingdan">

  <NavBar navBarTitle="确认订单" :isArrow="true" />

    <div class="detail">
      <div class="info">
        <div class="title">收货人</div>
        <div v-if="temp" class="content2">
          <div class="name">段凌天</div>
          <div class="phone">187****3610</div>
          <div class="address">地址：浙江省杭州市西湖区西溪路888号</div>
          <img class="arrow" src="~assets/img/photo/querendingdan/arrow.png" alt="">
        </div>
        <div v-else class="content" @click="click">添加收货人 ></div>
      </div>
      <div class="muban">
        <div class="title">选择模板</div>
        <div class="content">
          <img class="goods" src="~assets/img/photo/querendingdan/1.png" alt="">
          <div class="name">布艺相册-童年的回忆</div>
          <div class="describe">当你走进这欢乐场，背上所有的梦~</div>
          <div class="price">￥40/本</div>
          <img class="arrow" src="~assets/img/photo/querendingdan/arrow.png" alt="">
        </div>
      </div>
      <div class="xiangce">
        <div class="title">选择相册</div>
        <div class="content">
          <img class="goods" src="~assets/img/photo/querendingdan/2.png" alt="">    
          <div class="name">相册名称</div>
          <div class="describe">照片数量: 32张</div>
          <img class="arrow" src="~assets/img/photo/querendingdan/arrow.png" alt="">
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
      <button class="btn1" @click="cancel">取消订单</button>
      <button class="btn2" @click="pay">去支付</button>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  export default {
    name: 'Querendingdan',
    components: {
      NavBar,
    },
    props: {
      
    },
    data () {
      return {
        temp: false,
      };
    },
    computed: {
      
    },
    methods: {
      click() {
        this.temp = !this.temp
      },
      cancel() {
        console.log('取消订单')
      },
      pay() {
        console.log('去支付')
        this.$router.push('/photo/xiangcexiangqing')
      }
    },
  }
</script>

<style scoped lang="less">
  #querendingdan {
    background-color: #F8F8F8;
    .detail {
      padding-bottom: 1.6rem;
      .info {
        height: 3.2rem;
        background-color: white;
        .title {
          height: 1.2rem;
          color: #2E2D27;
          font-size: 0.373333rem;
          margin-left: 0.5rem;
          margin-top: .2rem;
          padding-top: .4rem;
          padding-bottom: .4rem;
          border-bottom: 0.013333rem solid #F0F0F0;
        }
        .content2 {
          .name {
            position: relative;
            left: 0.5rem;
            top: .3rem;
            font-size: 0.373333rem;
            color: #2E2D27;
          }
          .phone {
            position: relative;
            left: 2rem;
            bottom: .125rem;
            color: #666666;
            font-size: 0.373333rem;
          }
          .address {
            position: relative;
            left: 0.5rem;
            top: .2rem;
            font-size: 0.346667rem;
            color: #999999;
          }
          .arrow {
            position: relative;
            left: 9.4rem;
            bottom: .6rem;
            width: 0.2rem;
            height: 0.333333rem;
          }
        }
        .content {
          text-align: center;
          margin-top: .8rem;
          height: 2rem;
          color: #2E2D27;
          font-size: 0.426667rem;
        }
      }
      .muban {
        background-color: white;
        margin-top: .2rem;
        padding-top: .3rem;
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
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      button {
        height: 1.333333rem;
        line-height: 1.333333rem;
        font-size: 0.426667rem;
        color: #2E2D27;
        width: 50%;
        border: none;
      }
      .btn1 {
        background-color: white;
      }
      .btn2 {
        background-color: #FFE600;
      }
    }
  }
</style>