<template>
  <div id="qianbaozongeDetail">

    <NavBar navBarTitle="充值详情" :isArrow="true" />
    <img class="backImg" src="~assets/img/profile/qianbaozonge/backbox.png" alt="">
    <div class="list">
      <div class="one">
        <van-row>
          <van-col class="left" span="12">充值金额</van-col>
          <van-col class="right number" span="12">+5.0</van-col>
        </van-row>
      </div>
      <div class="two">
        <van-row>
          <van-col class="left" span="12">交易类型</van-col>
          <van-col class="right" span="12">充值</van-col>
        </van-row>
      </div>
      <div class="three">
        <van-row>
          <van-col class="left" span="12">交易时间</van-col>
          <van-col class="right" span="12">2019-03-20 19:22</van-col>
        </van-row>
      </div>
      <div class="four">
        <van-row>
          <van-col class="left" span="12">流水单号</van-col>
          <van-col class="right" span="12">927481972771</van-col>
        </van-row>
      </div>
      <div class="five">
        <van-row>
          <van-col class="left" span="12">备注</van-col>
          <van-col class="right" span="12">微信充值</van-col>
        </van-row>
      </div>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import { Col, Row } from 'vant';

  export default {
    name: 'QianbaozongeDetail',
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
  #qianbaozongeDetail {
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
    .list {
      font-size: .4rem;
      position: absolute;
      top: 1.93rem;
      left: .9rem;
      width: 82%;
      text-align: center;
      height: 35%;
      .left {
        text-align: left;
        color: #2E2D27;
      }
      .right{
        text-align: right;
        color: #999999;
      }
      .number {
        font-size: .6rem;
        color: #00D481;
      }
    }
    .list > div {
      padding-top: .4rem;
      padding-bottom: .4rem;
      border-bottom: .013333rem solid #F0F0F0;
    }
    .list > div:first-child {
      padding-top: .4rem;
      padding-bottom: .2rem;
    }
    .list > div:last-child {
      padding-top: .4rem;
      padding-bottom: .4rem;
      border-bottom: none;
    }
  }
</style>