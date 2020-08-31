<template>
  <div id="wodequanzi">

    <NavBar navBarTitle="我的圈子" :isArrow="true" />

    <div class="list">
      <van-cell-group class="van-cell-group">
        <van-cell class="van-cell" center @click="itemClick(index)" v-for="(item, index) in theData" :key="index">
          <template #title>
            <span class="text">{{item.name}}</span>
          </template>
          <template #right-icon>
            <img v-show="item.checked" class="gou" src="~assets/img/find/wodequanzi/gou.png" alt="">
          </template>
        </van-cell>
      </van-cell-group>
    </div>

    <button class="btn" @click="addQuan">添加圈子</button>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  import { Cell, CellGroup } from 'vant';

  export default {
    name: 'Wodequanzi',
    components: {
      NavBar,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
    },
    props: {
      
    },
    data () {
      return {
        theData: [
          {name: '杭州市东冠幼儿园', checked: false},
          {name: '杭州市和苑幼儿园', checked: false},
          {name: '杭州市大风车幼儿园', checked: false},
          {name: '杭州市飞虹路幼儿园', checked: false},
          {name: '杭州市万家星城幼儿园', checked: false},
          {name: '杭州市东冠幼儿园', checked: false},
          {name: '杭州市和苑幼儿园', checked: false},
          {name: '杭州市大风车幼儿园', checked: false},
          {name: '杭州市飞虹路幼儿园', checked: false},
          {name: '杭州市万家星城幼儿园', checked: false},
          {name: '杭州市东冠幼儿园', checked: false},
          {name: '杭州市和苑幼儿园', checked: false},
          {name: '杭州市大风车幼儿园', checked: false},
          {name: '杭州市飞虹路幼儿园', checked: false},
          {name: '杭州市万家星城幼儿园', checked: false},
        ],
        preIndex: -1
      };
    },
    computed: {
      
    },
    methods: {
      itemClick(index) {
        if(index != this.preIndex || this.preIndex == -1) {
          if(this.preIndex != -1) {
            this.theData[this.preIndex].checked = false
          }
          this.preIndex = index
          this.theData[index].checked = true
        }
        console.log(this.preIndex)
      },
      addQuan() {
        this.$router.push('/find/tianjiaquanzi')
      }
    },
  }
</script>

<style scoped lang="less">
  #wodequanzi {
    background-color: #F8F8F8;
    height: 100vh;
    padding-bottom: 2rem;
    .list {
      height: 14.95rem;
      overflow: scroll;
      margin-top: .2rem;
      .van-cell-group {
        .van-cell {
          height: 1.6rem;
          // background-color: pink;
          .text {
            color: #2E2D27;
            font-size: 0.4rem;
          }
          .gou {
            width: 0.346667rem;
            height: 0.24rem;
          }
        }
      }
    }
    .btn {
      height: 1.333333rem;
      width: 100%;
      font-size: 0.426667rem;
      color: #2E2D27;
      background-color: #FFE600;
      border: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>