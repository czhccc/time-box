<template>
  <div id="peizhiquanzi">

    <NavBar class="navBar" navBarTitle="配置圈子" :isArrow="true" />

    <div class="top">
      <div class="left"></div>
      <div class="right"></div>
      <div class="search">
        <span class="address" @click="chooseCity">
          {{choosedArea ? choosedArea : '请选择'}}
          <span>
            <img class="arrow" src="~assets/img/bind/peizhiquanzi/arrow.png" alt="">
          </span>
        </span>
        <span class="searchBar">
          <img class="icon" src="~assets/img/bind/peizhiquanzi/icon.png" alt="">
          <input type="text" placeholder="请输入幼儿园名称" @click="clickSearchBar">
        </span>
      </div>
    </div>

    <van-area v-if="isShowArea"
              class="area" 
              :area-list="areaList" 
              :columns-placeholder="['请选择', '请选择', '请选择']" 
              @cancel="cancel"
              @confirm="confirm"
              />

    <div class="list" v-if="!isShowArea">
      <van-cell-group v-for="(item, index) in theData" :key="index">
        <van-cell class="item" center :title="item.name" @click="itemClick(index)">
          <template #right-icon>
            <img class="icon" 
                 :src="item.checked ? 
                        require('assets/img/bind/peizhiquanzi/item-icon_checked1.png')
                      : require('assets/img/bind/peizhiquanzi/item-icon.png')" >
            <img class="gou" src="~assets/img/bind/peizhiquanzi/item-icon_checked2.png">
          </template>
        </van-cell>
      </van-cell-group>
    </div>

    <button class="button" @click="submit">确 定</button>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  import { Area } from 'vant';
  import { Cell, CellGroup } from 'vant';

  export default {
    name: 'Peizhiquanzi',
    components: {
      NavBar,
      [Area.name]: Area,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
    },
    props: {
      
    },
    data () {
      return {
        isShowArea: false,
        choosedArea: '',
        areaList: {
          province_list: {
            '110000': '北京市',
            '120000': '天津市'
          },
          city_list: {
            '110100': '北京市',
            '110200': '县',
            '120100': '天津市',
            '120200': '县'
          },
          county_list: {
            '110101': '东城区',
            '110102': '西城区',
            '110105': '朝阳区',
            '110106': '丰台区',
            '120101': '和平区',
            '120102': '河东区',
            '120103': '河西区',
            '120104': '南开区',
            '120105': '河北区',
          }
        },
        theData: [
          {name: '杭州市东冠幼儿园', checked: false},
          {name: '杭州市和苑幼儿园', checked: false},
          {name: '杭州市大风车幼儿园', checked: false},
          {name: '杭州市飞虹路幼儿园', checked: false},
          {name: '杭州市万家星城幼儿园', checked: false},
        ],
        checkedItem: [],
      };
    },
    methods: {
      chooseCity() {
        console.log('选择城市')
        this.isShowArea = !this.isShowArea
      },
      cancel() {
        this.isShowArea = !this.isShowArea
      },
      confirm(value) {
        if(value[2]) {
          this.choosedArea = value[2].name
          this.isShowArea = !this.isShowArea
        } else {
          console.log('请选择区域')
        }
      },
      clickSearchBar() {
        this.isShowArea = false
      },
      itemClick(index) {
        this.theData[index].checked = !this.theData[index].checked
      },
      submit() {
        this.checkedItem = []

        for (let i=0; i<this.theData.length; i++) {
          if(this.theData[i].checked) {
            this.checkedItem.push(this.theData[i])
          }
        }

        console.log('点击提交，选中的是：')
        for (let i=0; i<this.checkedItem.length; i++) {
          console.log(this.checkedItem[i].name)
        }

        this.$router.push('/find')
      }
    },
  }
</script>

<style scoped lang="less">
  #peizhiquanzi {
    position: relative;
    height: 100vh;
    background-color: #F8F8F8;
    .top {
      height: 2rem;
      background-color: white;
      padding-top: .5rem;
      .left {
        height: 1rem;
        width: 1rem;
        background-color: #f0f0f0;
        border-radius: 50%;
        position: absolute;
        left: .5rem;
      }
      .right {
        height: 1rem;
        width: 1rem;
        background-color: #f0f0f0;
        border-radius: 50%;
        position: relative;
        right: .5rem;
      }
      .search {
        position: relative;
        margin: 0 auto;
        background-color: #f0f0f0;
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
            background-color: #f0f0f0;
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
    .area {
      z-index: 99;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }  
    .list {
      background-color: white;
      margin-top: .35rem;
      .item {
        height: 1.6rem;
        font-size: 0.4rem;
        color: #2E2D27;
        .icon {
          width: 0.453333rem;
          height: 0.453333rem;
        }
        .gou {
          width: 0.266667rem;
          height: 0.186667rem;
          position: relative;
          right: .35rem;
        }
      }
    }
    .button {
      height: 1.333333rem;
      line-height: 1.333333rem;
      width: 100%;
      color: #2E2D27;
      font-size: 0.426667rem;
      background-color: #FFE600;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border: none;
    }
  }
</style>