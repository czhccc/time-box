<template>
  <div id="profileMiddle">

    <img class="back" src="~assets/img/profile/middle.png" alt="">
    <img class="line" src="~assets/img/profile/line.png" alt="">
    
    <div class="text">
      <van-row class="one" type="flex" justify="space-around">
        <van-col span="8"  @click="qianbaozonge">钱包总额</van-col>
        <van-col span="8" @click="wodejifen">我的积分</van-col>
      </van-row>
      <van-row class="two" type="flex" justify="space-around">
        <van-col span="8"  @click="qianbaozonge">888.00</van-col>
        <van-col span="8" @click="wodejifen">12800</van-col>
      </van-row>
    </div>
    

  </div>
</template>


<script>
  import { Col, Row } from 'vant';

  export default {
    name: 'ProfileMiddle',
    components: {
      [Col.name]: Col,
      [Row.name]: Row,
    },
    props: {
      
    },
    data () {
      return {
        
      };
    },
    methods: {
      qianbaozonge() {
        console.log('钱包总额')
        this.$router.push('/profile/qianbaozonge')
      },
      wodejifen() {
        console.log('我的积分')
        this.$router.push('/profile/wodejifen')
      }
    },
  }
</script>

<style scoped lang="less">
  #profileMiddle {
    background-color: #FFE600;
    position: relative;
    margin: 0 auto;
    text-align: center;
    height: 1rem;
    .back {
      margin: 0 auto;
      width: 9.2rem;
      height: 2.386667rem;
    }
    .line {
      position: relative;
      right: 4.6rem;
      bottom: .7rem;
      width: .026667rem;
      height: .92rem;
    }
    .text {
      position: relative;
      bottom: 1.8rem;
      .one {
        font-size: .35rem;
      }
      .two {
        margin-top: .08rem;
        font-size: .4rem;
        font-weight: 700;
      }
    }
  }
</style>