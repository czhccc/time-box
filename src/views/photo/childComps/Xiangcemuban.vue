<template>
  <div id="xiangcemuban">

    <NavBar navBarTitle="相册模板" :isArrow="true" />

    <div class="list">
      <div class="item" v-for="(item, index) in theData" :key="index" @click="mubanxiangqing">
        <img class="img" :src="item.img" alt="">
        <div class="name">{{item.name}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="price">{{"￥ " + item.price + "/本"}}</div>
        <img class="arrow" src="~assets/img/photo/xiangcemuban/arrow.png" alt="">
      </div>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  

  export default {
    name: 'Xiangcemuban',
    components: {
      NavBar,
      
    },
    props: {
      
    },
    data () {
      return {
        theData: [
          {img: require('assets/img/photo/xiangcemuban/1.png'), name: '布艺相册-童年的回忆', desc: '当你走进这欢乐场，背上所有的梦~', price: 40},
          {img: require('assets/img/photo/xiangcemuban/2.png'), name: '布艺相册-童年的回忆', desc: '当你走进这欢乐场，背上所有的梦~', price: 40},
          {img: require('assets/img/photo/xiangcemuban/3.png'), name: '布艺相册-童年的回忆', desc: '当你走进这欢乐场，背上所有的梦~', price: 40},
          {img: require('assets/img/photo/xiangcemuban/4.png'), name: '布艺相册-童年的回忆', desc: '当你走进这欢乐场，背上所有的梦~', price: 40},
        ],
      };
    },
    computed: {
      
    },
    methods: {
      mubanxiangqing() {
        this.$router.push('/photo/mubanxiangqing')
      }
    },
  }
</script>

<style scoped lang="less">
  #xiangcemuban {
    background-color: #F8F8F8;
    height: 100vh;
    .list {
      background-color: white;
      .item {
        position: relative;
        height: 3.2rem;
        border-bottom: 0.013333rem solid #F0F0F0;
        .img {
          width: 2.4rem;
          position: relative;
          top: .4rem;
          left: 0.4rem;
        }
        .name {
          position: relative;
          left: 3.2rem;
          font-size: 0.426667rem;
          color: #2E2D27;
          bottom: 2rem;
        }
        .desc {
          position: relative;
          left: 3.2rem;
          bottom: 1.8rem;
          color: #999999;
          font-size: 0.373333rem;
        }
        .price {
          position: relative;
          left: 3.2rem;
          bottom: 1.2rem;
          height: 0.573333rem;
          color: #f06962;
          font-size: 0.426667rem;
          line-height: 0.493333rem;
        }
        .arrow {
          position: relative;
          left: 9.5rem;
          bottom: 2.8rem;
          width: 0.2rem;
          height: 0.333333rem;
        }
      }
    }
  }
</style>