<template>
  <div id="profileList">

    <div class="item" @click="jibenxinxi">
      <span>基本信息</span>
      <img src="~assets/img/profile/arrow.png" alt="">
    </div>
    <div class="item" @click="shouhuodizhi">
      <span>收货地址</span>
      <img src="~assets/img/profile/arrow.png" alt="">
    </div>
    <div class="item" @click="huiyuanzhongxin">
      <span>会员中心</span>
      <img src="~assets/img/profile/arrow.png" alt="">
    </div>
    <div class="item" @click="wodedingdan">
      <span>我的订单</span>
      <img src="~assets/img/profile/arrow.png" alt="">
    </div>
    <div class="item" @click="yonghufankui">
      <span>用户反馈</span>
      <img src="~assets/img/profile/arrow.png" alt="">
    </div>
    <div class="item">
      <span>关于我们</span>
      <img src="~assets/img/profile/arrow.png" alt="">
    </div>

  </div>
</template>


<script>


  export default {
    name: 'ProfileList',
    components: {

    },
    data() {
      return {

      };
    },
    methods: {
      jibenxinxi() {
        console.log('基本信息')
        this.$router.push('/profile/jibenxinxi')
      },
      shouhuodizhi() {
        console.log('收获地址')
        this.$router.push('/profile/shouhuodizhi')
      },
      huiyuanzhongxin() {
        console.log('会员中心')
        this.$router.push('/profile/huiyuanzhongxin')
      },
      wodedingdan() {
        console.log('我的订单')
        this.$router.push('/profile/wodedingdan')
      },
      yonghufankui() {
        console.log('用户反馈')
        this.$router.push('/profile/yonghufankui')
      }
    },
  }
</script>

<style scoped lang="less">
  #profileList{
    position: relative;
    top: 1.3rem;
    .item {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      border-bottom: .013333rem solid #f5f4f4;
      span {
        margin-left: .7rem;
        font-size: .413333rem;
        vertical-align: middle;
      }
      img {
        width: .27rem;
        vertical-align: middle;
        margin-left: 6.7rem;
      }
    }
    .item:last-child {
      border: none;
    }
  }
</style>