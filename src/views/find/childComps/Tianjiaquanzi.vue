<template>
  <div id="tianjiaquanzi">

    <NavBar navBarTitle="添加圈子" :isArrow="true" />

    <div class="top">
      <div class="left"></div>
      <div class="right"></div>
      <div class="search">
        <span class="address">
          西湖区
          <span>
            <img class="arrow" src="~assets/img/bind/peizhiquanzi/arrow.png" alt="">
          </span>
        </span>
        <span class="searchBar">
          <img class="icon" src="~assets/img/bind/peizhiquanzi/icon.png" alt="">
          <input type="text" placeholder="请输入幼儿园名称">
        </span>
      </div>
    </div>
    
    <div class="list">
      <van-cell-group class="van-cell-group">
        <van-cell class="van-cell" center @click="itemClick(item)" v-for="(item, index) in theData" :key="index">
          <template #title>
            <span class="text">{{item.name}}</span>
          </template>
          <template #right-icon>
            <img v-if="!item.checked" class="back" src="~assets/img/find/tianjiaquanzi/back.png" alt="">
            <img v-if="item.checked" class="back_active" src="~assets/img/find/tianjiaquanzi/back_active.png" alt="">
            <img v-if="item.checked" class="gou" src="~assets/img/find/tianjiaquanzi/gou.png" alt="">
          </template>
        </van-cell>
      </van-cell-group>
    </div>

    <button class="btn" @click="addQuan">确定</button>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  import { Cell, CellGroup } from 'vant';

  export default {
    name: 'Tianjiaquanzi',
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
        checkedItem: [],
      };
    },
    computed: {
      
    },
    methods: {
      itemClick(item) {
        item.checked = !item.checked
      },
      addQuan() {
        for (let i of this.theData) {
          if(i.checked) {
            this.checkedItem.push(i)
          }
        }
        
        console.log('添加的是：')
        for (let i of this.checkedItem) {
          console.log(i.name)
        }
      }
    },
  }
</script>

<style scoped lang="less">
  #tianjiaquanzi {
    background-color: #F8F8F8;
    height: 100vh;
    margin-bottom: 1.75rem;
    .top {
      z-index: 999;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      margin-top: 1.4rem;
      height: 1.7rem;
      background-color: #FFE600;
      // background-color: red;
      padding-top: .2rem;
      .left {
        height: 1rem;
        width: 1rem;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        left: .5rem;
      }
      .right {
        height: 1rem;
        width: 1rem;
        background-color: white;
        border-radius: 50%;
        position: relative;
        right: .5rem;
      }
      .search {
        position: relative;
        margin: 0 auto;
        background-color: white;
        width: 80%;
        text-align: left;
        height: 1rem;
        line-height: 1rem;
        .address{
          vertical-align: middle;
          font-size: 0.373333rem;
          color: #2E2E2E;
          height: 1rem;
          width: 1.5rem;
          line-height: 1rem;
          padding-right: .25rem;
          border-right: 0.026667rem solid #979797;
          .arrow {
            width: 0.24rem;
            height: 0.133333rem;
            vertical-align: middle;
          }
        }
        .searchBar {
          height: 1rem;
          line-height: 1rem;
          margin-left: .25rem;
          .icon {
            width: 0.333333rem;
            vertical-align: middle;
          }
          input {
            vertical-align: middle;
            border: none;
            margin-left: .2rem;
            background-color: white;
            width: 8em;
            font-size: 0.373333rem;
            color: black;
          }
          ::-webkit-input-placeholder {
            font-size: 0.373333rem;
            color: #a5a5a5;
            vertical-align: middle;
          }
        }
      }
    }
    .list {
      height: 14.95rem;
      overflow: scroll;
      margin-top: 1.9rem;
      .van-cell-group {
        .van-cell {
          height: 1.6rem;
          position: relative;
          // background-color: pink;
          .text {
            color: #2E2D27;
            font-size: 0.4rem;
          }
          .back {
            width: 0.453333rem;
            height: 0.453333rem;
          }
          .back_active {
            width: 0.453333rem;
            height: 0.453333rem;
          }
          .gou {
            width: 0.266667rem;
            height: 0.186667rem;
            position: absolute;
            right: .51rem;
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