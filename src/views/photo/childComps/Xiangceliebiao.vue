<template>
  <div id="xiangceliebiao">

    <NavBar navBarTitle="相册列表" :isArrow="true" />


    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="list">
          <div class="item" v-for="(item, index) in theData" :key="index">
            <img class="img" :src="item.img" alt="">
            <div class="name">{{item.name}}</div>
            <div class="number">{{'照片数量：' + item.number + '张'}}</div>
            <img class="arrow" src="~assets/img/photo/xiangceliebiao/arrow.png" alt="">
          </div>
        </div>
      </div>
    </div>


    





    <button class="button" @click="add">添加相册</button>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  import BScroll from 'better-scroll'

  export default {
    name: 'Xiangceliebiao',
    components: {
      NavBar,
    },
    props: {
      
    },
    data () {
      return {
        theData: [
          {img: require('assets/img/photo/xiangceliebiao/1.png'), name: '相册名称1', number: 32},
          {img: require('assets/img/photo/xiangceliebiao/2.png'), name: '相册名称2', number: 32},
          {img: require('assets/img/photo/xiangceliebiao/3.png'), name: '相册名称3', number: 32},
          {img: require('assets/img/photo/xiangceliebiao/4.png'), name: '相册名称4', number: 32},
          {img: require('assets/img/photo/xiangceliebiao/1.png'), name: '相册名称4', number: 32},
          {img: require('assets/img/photo/xiangceliebiao/2.png'), name: '相册名称4', number: 32},
          {img: require('assets/img/photo/xiangceliebiao/3.png'), name: '相册名称4', number: 32},
          {img: require('assets/img/photo/xiangceliebiao/4.png'), name: '相册名称4', number: 32},
        ],
      };
    },
    computed: {
      
    },
    methods: {
      add() {
        this.$router.push('/photo/xuanzemuban')
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        bounce: false
      })
    }
  }
</script>

<style scoped lang="less">
  #xiangceliebiao {
    background-color: #F8F8F8;
    .wrapper {
      height: 15rem;
      .list {
        overflow: scroll;
        .item {
          height: 2.4rem;
          width: 100%;
          background-color: white;
          border-bottom: 0.013333rem solid #F0F0F0;
          .img {
            position: relative;
            top: .4rem;
            left: 0.4rem;
            width: 1.6rem;
          }
          .name {
            position: relative;
            bottom: 1.2rem;
            left: 2.3rem;
            width: 3rem;
            color: #2E2D27;
            font-size: 0.426667rem;
          }
          .number {
            position: relative;
            bottom: .9rem;
            left: 2.3rem;
            width: 3rem;
            color: #2E2D27;
            font-size: 0.373333rem;
          }
          .arrow {
            position: relative;
            bottom: 1.85rem;
            left: 9.4rem;
            width: 0.2rem;
            height: 0.333333rem;
          }
        }
      }
    }
    .list::-webkit-scrollbar {
      width: 0px;
    } 
    .button {
      background-color: #FFE600;
      height: 1.333333rem;
      line-height: 1.333333rem;
      width: 100%;
      color: #2e2d27;
      font-size: 0.426667rem;
      border: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>