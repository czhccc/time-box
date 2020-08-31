<template>
  <div id="xiangcexiangqing">

    <NavBar navBarTitle="相册详情" :isArrow="true" />

    <img class="top" src="~assets/img/photo/xiangcexiangqing/2.png" alt="">

    <div class="content">
      <div class="title">
        <img class="line" src="~assets/img/photo/xiangcexiangqing/line.png" alt="">
        <span class="text">图片</span>
      </div>
      <div class="image">
        <img class="back" src="~assets/img/photo/xiangcexiangqing/back.png" alt="">
        <img class="img" src="~assets/img/photo/xiangcexiangqing/1.png" alt="">
      </div>
    </div>

    <div class="bottom">
      <img class="avatar" src=~assets/img/photo/xiangcexiangqing/touxiang.png alt="">
      <div class="name">段凌天</div>
      <div class="phone">187****3610</div>
      <div class="address">地址：浙江省杭州市西湖区西溪路888号</div>
      <div class="desc">已送达</div>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  export default {
    name: 'Xiangcexiangqing',
    components: {
      NavBar,
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
  #xiangcexiangqing {
    background-color: #F8F8F8;
    height: 100vh;
    .top {
      width: 100%;
    }
    .content {
      background-color: white;
      height: 7.5rem;
      .title {
        padding-left: 0.32rem;
        padding-top: 0.35rem;
        .line {
          width: 0.093333rem;
          height: 0.346667rem;
        }
        .text {
          margin-left: .2rem;
          color: #2E2D27;
          font-size: 0.4rem;
        }
      }
      .image {
        text-align: center;
        position: relative;
        .back {
          margin-top: .3rem;
          height: 5.066667rem;
          width: 88%;
        }
        .img {
          position: absolute;
          height: 5.066667rem;
          top: .3rem;
          right: 2.8rem;
        }
      }
    }
    .bottom {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1.866667rem;
      background-color: white;
      .avatar {
        width: 1.2rem;
        position: relative;
        left: 0.32rem;
        top: 0.32rem;
      }
      .name {
        color: #2E2D27;
        font-size: 0.373333rem;
        position: relative;
        left: 2rem;
        bottom: .9rem;
      }
      .phone {
        color: #666666;
        font-size: 0.373333rem;
        position: relative;
        left: 3.5rem;
        bottom: 1.325rem;
      }
      .address {
        font-size: 0.346667rem;
        color: #999999;
        position: relative;
        left: 2rem;
        bottom: 1.1rem;
      }
      .desc {
        font-size: 0.373333rem;
        color: #2BCF88;
        position: relative;
        left: 8.5rem;
        bottom: 2.1rem;
      }
    }
  }
</style>