<template>
  <div id="tupianliulan">

    <NavBar class="navBar" navBarTitle="" :isArrow="true" />

    <div class="back">
      <img class="img" src="~assets/img/find/tupianliulan/1.png" alt="">
    </div>

    <div class="mask">
      <img class="img" src="~assets/img/find/tupianliulan/mask.png" alt="">
      <div class="text">昨天已成过去不必计较，今天正在度过加倍珍惜，明天即将来临提早规划</div>
    </div>

    <div class="btn">
      <button class="btn1">
        <span>打赏：15 </span>
        <img class="hua" src="~assets/img/find/tupianliulan/hua.png" alt="">
      </button>
      <button class="btn2">购买：￥2.9</button>
    </div>

    <div class="jfbuzubtn" @click="jfbuzu">
      积分<br>
      不足
    </div>
    <div class="content" v-if="isjfbuzu">
      <div class="text">
        <div class="one">积分不足</div>
        <div class="two">打赏需消耗300积分</div>
        <div class="three">当前积分不足，是否前往充值</div>
      </div>
      <div class="btn">
        <button class="btn1" @click="jfbuzu">下次再说</button>
        <button class="btn2">前往充值</button>
      </div>
    </div>

    <div class="jfzubtn" @click="jfzu">
      积分<br>
      充足
    </div>
    <div class="content" v-if="isjfzu">
      <div class="text">
        <div class="one">确认打赏</div>
        <div class="two">打赏需消耗300积分</div>
        <div class="three">确认打赏？</div>
      </div>
      <div class="btn">
        <button class="btn1" @click="jfzu">下次再说</button>
        <button class="btn2">确认打赏</button>
      </div>
    </div>

    <div class="yebuzubtn" @click="yebuzu">
      余额<br>
      不足
    </div>
    <div class="content" v-if="isyebuzu">
      <div class="text">
        <div class="one">确认购买</div>
        <div class="two">购买照片需支付 ￥3.0</div>
        <div class="three">当前余额:￥11.0 ，确认支付？</div>
      </div>
      <div class="btn">
        <button class="btn1" @click="yebuzu">下次再说</button>
        <button class="btn2">确认支付</button>
      </div>
    </div>

    <div class="yezubtn" @click="yezu">
      余额<br>
      充足
    </div>
    <div class="content" v-if="isyezu">
      <div class="text">
        <div class="one">确认打赏</div>
        <div class="two">购买照片需支付 ￥3.0</div>
        <div class="three">当前余额:￥1.0 ，仍需支付:￥1.5</div>
      </div>
      <div class="btn">
        <button class="btn1" @click="yezu">下次再说</button>
        <button class="btn2">确认支付</button>
      </div>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  export default {
    name: 'Tupianliulan',
    components: {
      NavBar,
    },
    props: {
      
    },
    data () {
      return {
        isjfbuzu: false,
        isjfzu: false,
        isyebuzu: false,
        isyezu: false,
      };
    },
    computed: {
      
    },
    methods: {
      jfbuzu() {
        this.isjfbuzu = !this.isjfbuzu
      },
      jfzu() {
        this.isjfzu = !this.isjfzu
      },
      yebuzu() {
        this.isyebuzu = !this.isyebuzu
      },
      yezu() {
        this.isyezu = !this.isyezu
      }
    },
  }
</script>

<style scoped lang="less">
  #tupianliulan {
    position: relative;
    background-color: #252525;
    height: 100vh;
    /deep/ .van-nav-bar {
      background-color: black;
    }
    .back {
      .img {
        width: 10rem;
      }
    }
    .mask {
      position: relative;
      .img {
        position: absolute;
        bottom: .16rem;
        width: 100%;
        height: 1.466667rem;
      }
      .text {
        position: absolute;
        bottom: .425rem;
        left: .325rem;
        font-size: 0.373333rem;
        width: 9.333333rem;
        color: white;
        line-height: 0.493333rem;
      }
    }
    .btn {
      display: flex;
      justify-content: space-between;
      background-color: #1D1D1D;
      button {
        background-color: #252525;
        font-size: 0.373333rem;
        border: none;
        height: 1.6rem;
        width: 49.75%;
      }
      .btn1 {
        color: white;
        .hua {
          width: 0.28rem;
          height: 0.32rem;
        }
      }
      .btn2 {
        color: #FFE600;
      }
    }
    .jfbuzubtn {
      width: 1rem;
      height: 1rem;
      background-color: pink;
      font-size: .35rem;
      line-height: .35rem;
      text-align: center;
      padding-top: .15rem;
      position: fixed;
      bottom: 4.75rem;
      right: .3rem;
      border-radius: 50%;
    }
    .jfzubtn {
      width: 1rem;
      height: 1rem;
      background-color: greenyellow;
      font-size: .35rem;
      line-height: .35rem;
      text-align: center;
      padding-top: .15rem;
      position: fixed;
      bottom: 3.5rem;
      right: .3rem;
      border-radius: 50%;
    }
    .yebuzubtn {
      width: 1rem;
      height: 1rem;
      background-color: rgb(47, 255, 255);
      font-size: .35rem;
      line-height: .35rem;
      text-align: center;
      padding-top: .15rem;
      position: fixed;
      bottom: 4.75rem;
      right: 1.5rem;
      border-radius: 50%;
    }
    .yezubtn {
      width: 1rem;
      height: 1rem;
      background-color: rgb(252, 255, 58);
      font-size: .35rem;
      line-height: .35rem;
      text-align: center;
      padding-top: .15rem;
      position: fixed;
      bottom: 3.5rem;
      right: 1.5rem;
      border-radius: 50%;
    }
    .content {
      position: absolute;
      bottom: 7rem;
      left: 1.3rem;
      width: 7.466667rem;
      background-color: white;
      text-align: center;
      border-radius: .2rem;
      .one {
        margin-top: .5rem;
        font-size: 0.48rem;
        color: black;
      }
      .two {
        margin-top: .4rem;
        font-size: 0.4rem;
        color: #888888;
      }
      .three {
        margin-top: .1rem;
        font-size: 0.4rem;
        color: #888888;
      }
      .btn {
        margin-top: .5rem;
        background-color: white;
        button {
          height: 1.3rem;
          background-color: white;
          border-top: 0.013333rem solid #E5E5E5;
          font-size: 0.426667rem;
        }
        .btn1 {
          border-right: 0.013333rem solid #E5E5E5;
          color: #666666;
        }
        .btn2 {
          color: #329737;
        }
      }
    }
  }
</style>