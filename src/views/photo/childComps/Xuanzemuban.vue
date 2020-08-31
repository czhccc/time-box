<template>
  <div id="xuanzemuban">

    <NavBar navBarTitle="选择模板" :isArrow="true" />

    <div class="list">
      <div class="item" v-for="(item, index) in theData" :key="index" @click="itemClick(index)">
        <img class="gou" src="~assets/img/photo/xuanzemuban/gou.png" alt="">
        <img class="icon" :src="item.checked
                                ? require('assets/img/photo/xuanzemuban/icon_active.png')
                                : require('assets/img/photo/xuanzemuban/icon.png')">
        <img class="img" :src="item.img" alt="">
        <div class="name">{{item.name}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="price">{{"￥ " + item.price + "/本"}}</div>
        <img class="arrow" src="~assets/img/photo/xiangcemuban/arrow.png" alt="">
      </div>
    </div>

    <button class="button" @click="confirm">确 定</button>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  export default {
    name: 'Xuanzemuban',
    components: {
      NavBar,
    },
    props: {
      
    },
    data () {
      return {
        theData: [
          {checked: false, img: require('assets/img/photo/xiangcemuban/1.png'), name: '布艺相册-童年的回忆1', desc: '当你走进这欢乐场，背上所有的梦~', price: 40},
          {checked: false, img: require('assets/img/photo/xiangcemuban/2.png'), name: '布艺相册-童年的回忆2', desc: '当你走进这欢乐场，背上所有的梦~', price: 40},
          {checked: false, img: require('assets/img/photo/xiangcemuban/3.png'), name: '布艺相册-童年的回忆3', desc: '当你走进这欢乐场，背上所有的梦~', price: 40},
          {checked: false, img: require('assets/img/photo/xiangcemuban/4.png'), name: '布艺相册-童年的回忆4', desc: '当你走进这欢乐场，背上所有的梦~', price: 40},
        ],
        checkedItem: [],
      };
    },
    computed: {
      
    },
    methods: {
      itemClick(index) {
        this.theData[index].checked = !this.theData[index].checked
      },
      confirm() {
        for (let i = this.theData.length-1; i >= 0; i--) {
          if(this.theData[i].checked) {
            this.checkedItem.push(this.theData[i])
            console.log(this.theData[i].name)
          }
        }
        if(this.checkedItem.length == 0) {
          console.log('请选择模板')
        } else {
          this.$router.push('/photo/shezhixiangcemingcheng')
        }
      }
    },
  }
</script>

<style scoped lang="less">
  #xuanzemuban {
    .list {
      background-color: white;
      padding-left: 1rem;
      .item {
        position: relative;
        height: 3.2rem;
        border-bottom: 0.013333rem solid #F0F0F0;
        .gou {
          z-index: 999;
          position: absolute;
          left: -.4rem;
          top: 1.525rem;
          width: 0.266667rem;
          height: 0.186667rem;
        }
        .icon {
          position: absolute;
          left: -.5rem;
          top: 1.4rem;
          width: 0.453333rem;
          height: 0.453333rem;
        }
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