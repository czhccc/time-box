<template>
  <div id="profileTop">

    <van-row class="van-row">
      <van-col span="4" offset="1">
        <img src="~assets/img/profile/touxiang.png" alt="">
      </van-col>
      <van-col class="second" span="10" offset="1">
        <span>走路带风的狒狒</span>
      </van-col>
      <van-col class="third" span="10" offset="4">
        <span class="phone">187****3610</span>
      </van-col>
      <van-col class="fourth" span="10">
        <img class="back" src="~assets/img/profile/top_right.png" alt="">
        <img class="vip" src="~assets/img/profile/vip.png" alt="">
      </van-col>
    </van-row>

  </div>
</template>


<script>
  import { Col, Row } from 'vant';

  export default {
    name: 'ProfileTop',
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
  }
</script>

<style scoped lang="less">
  #profileTop {
    background-color: #FFE600;
    position: relative;
    padding-top: .2rem;
    img {
      width: 1.6rem;
    }
    .second {
      margin-left: .193333rem;
      margin-top: .2rem;
      font-size: .533333rem;
    }
    .third {
      margin-top: .2rem;
      margin-left: .18rem;
      font-size: .35rem;
    }
    .fourth {
      position: relative;
      .back {
        position: absolute;
        right: -3.75rem;
        bottom: .133333rem;
        width: 1.8rem;
        height: .666667rem;
      }
      span {
        position: absolute;
        font-size: .16rem;
        font-weight: 700;
        right: -3.6rem;
        bottom: .25rem;
      }
      .vip {
        position: absolute;
        right: -3.7rem;
        bottom: .3rem;
      }
    }
  }
</style>