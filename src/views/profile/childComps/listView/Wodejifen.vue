<template>
  <div id="wodejifen">
    
    <NavBar navBarTitle="" :isArrow="true" />

    <div class="top">
      <div class="text">我的积分</div>
      <span class="number">18000</span>
      <div class="button">
        <van-row type="flex" justify="space-around">
          <van-col span="8">
            <van-button class="van-button" plain hairline round type="info" @click="jifenguize">积分规则</van-button>
          </van-col>
          <van-col span="8">
            <van-button class="van-button" plain hairline round type="info" @click="chongzhijifen">充值积分</van-button>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="list">
      <div class="text">
        <van-row type="flex">
          <van-col offset="1">操作</van-col>
          <van-col offset="4">时间</van-col>
          <van-col offset="8">积分</van-col>
        </van-row>
      </div>





      <!-- <Scroll> -->

        <div class="value">

          <van-row class="van-row" type="flex" @click="viewDetail">
            <van-col offset="1" span="4">下单抵扣</van-col>
            <van-col offset="2" span="7" class="time">2018-09-30 12:02</van-col>
            <van-col offset="3" span="4" class="money1">-5.00</van-col>
            <van-col offset="1"><img class="arrow" src="~assets/img/profile/wodejifen/arrow1.png" alt=""></van-col>
          </van-row>
          <van-row class="van-row" type="flex">
            <van-col offset="1" span="4">购买相片</van-col>
            <van-col offset="2" span="7" class="time">2018-09-30 12:02</van-col>
            <van-col offset="3" span="4" class="money2">+5.00</van-col>
            <van-col offset="1"><img class="arrow" src="~assets/img/profile/wodejifen/arrow1.png" alt=""></van-col>
          </van-row>

        </div>

      <!-- </Scroll> -->
      
      
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import { Col, Row } from 'vant';
  import { Button } from 'vant';
  import { List } from 'vant';

  export default {
    name: 'Wodejifen',
    components: {
      NavBar,
      Scroll,
      [Col.name]: Col,
      [Row.name]: Row,
      [Button.name]: Button,
      [List.name]: List,
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
      jifenguize() {
        this.$router.push('/profile/wodejifen/guize')
      },
      chongzhijifen() {
        this.$router.push('/profile/wodejifen/chongzhi')
      },
      viewDetail() {
        console.log('查看详情')
        // this.$router.push('/profile/wodejifen/detail')
      }
    },
  }
</script>

<style scoped lang="less">
  #wodejifen {
    height: 100vh;
    background-color: #F8F8F8;
    color: black;
    .top {
      background: url('~assets/img/profile/wodejifen/backImg.png') no-repeat;
      background-size: 100% 100%;
      padding-top: .4rem;
      padding-bottom: .4rem;
      text-align: center;
      .text {
        font-size: .4rem;
        margin-bottom: .4rem;
      }
      .number {
        font-size: 1rem;
      }
      .button {
        margin-top: .3rem;
        .van-button {
          height: 25px;
          color: black;
          background-color: transparent;
          border-color: black;
        }
      }
    }
    .list {
      background-color: white;
      .text {
        font-size: .4rem;
        padding-top: .4rem;
        padding-bottom: .4rem;
        border-bottom: .013333rem solid #E5E5E5;
      }
      .value {
        font-size: .38rem;
        overflow: scroll;
        height: 10rem;
        .van-row {
          padding-top: .4rem;
          padding-bottom: .4rem;
          color: #353535;
          border-bottom: .013333rem solid #F0F0F0;
          .time {
            font-size: .32rem;
          }
          .money1 {
            color: #F06962;
          }
          .money2 {
            color: #2BCF88;
          }
          .arrow {
            width: .25rem;
          }
        }

        
      }
    }
  }
</style>