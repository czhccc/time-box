<template>
  <div id="navBar">

    <div class="zhanwei"></div>
    <van-nav-bar class="van-nav-bar" :left-arrow="isArrow? true : false"  :title="navBarTitle" @click-left="onClickLeft" />

  </div>
</template>


<script>
  import { NavBar } from 'vant';

  export default {
    name: 'NavBar',
    components: {
      [NavBar.name]: NavBar
    },
    props: {
      navBarTitle: {
        type: String,
        default: '我的'
      },
      isArrow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  #navBar {
    font-size: 0.48rem;
    .zhanwei {
      height: 1.4rem;
    }
    .van-nav-bar {
      height: 1.4rem;
      background-color: #FFE600;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
  }
</style>