<template>
  <div id="qianbaozongeChongzhi">

    <NavBar navBarTitle="充值" :isArrow="true" />
    <img class="backImg" src="~assets/img/profile/qianbaozonge/backbox2.png" alt="">
    <div class="fangshi">
      <van-row>
        <van-col class="left" span="12">充值方式</van-col>
        <van-col class="right" span="12">微信支付</van-col>
      </van-row>
    </div>
    <div class="detail">
      <van-row>
        <van-col class="jine" span="12">充值金额</van-col>
      </van-row>
      <van-row class="shuru">
        <van-col class="jine" span="2">
          <span class="fuhao">￥</span>
        </van-col>
        <van-col class="money" offset="1" span="18">
          <input type="text" autofocus placeholder="请输入充值金额(元)">
        </van-col>
      </van-row>
      <van-row>
        <van-col class="tishi2" span="12">
          <span class="tishi">本次充值最多可充值10000元</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="24">
          <button class="button">确认充值</button>
        </van-col>
      </van-row>

    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import { Col, Row } from 'vant';

  export default {
    name: 'QianbaozongeChongzhi',
    components: {
      NavBar,
      [Col.name]: Col,
      [Row.name]: Row,
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
      
    },
  }
</script>

<style scoped lang="less">
  #qianbaozongeChongzhi {
    height: 100vh;
    background-color: #F8F8F8;
    text-align: center;
    position: relative;
    .backImg {
      position: relative;
      margin-top: .3rem;
      width: 95%;
      height: 38%;
    }
    .fangshi {
      position: absolute;
      font-size: .4rem;
      top: 12.5%;
      left: 9%;
      width: 82%;
      .left {
        color: #2E2D27;
        text-align: left;
      }
      .right {
        color: #999999;
        text-align: right;
      }
    }
    .detail {
      position: absolute;
      left: 9%;
      top: 18%;
      width: 82%;
      height: 27%;
      .jine {
        font-size: .4rem;
        text-align: left;
        color: #2E2D27;
      }
      .shuru {
        font-size: .7rem;
        margin-top: .5rem;
        border-bottom: .013333rem solid #F0F0F0;
        padding-bottom: .7rem;
        span {
          font-size: .8rem;
        }
        .money {
          margin-top: .05rem;
          input {
            color: #aaaaaa;
            width: 110%;
            border: none;
          }
        }
      }
      .tishi2 {
        text-align: left;
        .tishi {
          font-size: .3rem;
          color: #999999;
        }
      }
      .button {
        font-size: .4rem;
        background-color: #FFE600;
        color: #2E2D27;
        margin-top: .4rem;
        width: 90%;
        height: 1rem;
        border: .013333rem solid black ;
        border-radius: .2rem;
      }
    }
  }
</style>