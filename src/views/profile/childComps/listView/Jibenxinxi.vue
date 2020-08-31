<template>
  <div id="jibenxinxi">

    <NavBar navBarTitle="基本信息" :isArrow="true" />

    <div class="item">
      <van-row class="van-row" span="10">
        <van-col class="van-col" span="4" offset="1">
          <span class="title">姓名</span>
        </van-col>
        <van-col class="van-col value" span="8" offset="7">
          <span>王宝宝</span>
        </van-col>
        <van-col class="van-col" span="1" offset="2">
          <img class="arrow" src="~assets/img/profile/arrow.png" alt="">
        </van-col>
      </van-row>
      <van-row class="van-row" span="10">
        <van-col class="van-col" span="4" offset="1">
          <span class="title">性别</span>
        </van-col>
        <van-col class="van-col value" span="8" offset="7">
          <span>男</span>
        </van-col>
        <van-col class="van-col" span="1" offset="2">
          <img class="arrow" src="~assets/img/profile/arrow.png" alt="">
        </van-col>
      </van-row>
      <van-row class="van-row" span="10">
        <van-col class="van-col" span="4" offset="1">
          <span class="title">生日</span>
        </van-col>
        <van-col class="van-col value" span="8" offset="7">
          <span>2018-09-20</span>
        </van-col>
        <van-col class="van-col" span="1" offset="2">
          <img class="arrow" src="~assets/img/profile/arrow.png" alt="">
        </van-col>
      </van-row>
      <van-row class="van-row" span="10" @click="showPopup">
        <van-col class="van-col" span="4" offset="1">
          <span class="title">头像</span>
        </van-col>
        <van-col class="van-col value" span="8" offset="7">
          <img class="avatar" src="~assets/img/profile/jibenxinxi/touxiang2.png" alt="">
        </van-col>
        <van-col class="van-col" span="2" offset="2">
          <img class="arrow" src="~assets/img/profile/jibenxinxi/arrow.png" alt="">
        </van-col>
      </van-row>
    </div>

    <van-popup class="van-popup"
               v-model="show" 
               position="bottom" 
               :style="{ height: '30%' }" 
               closeable 
               close-icon="close">
      <div class="popup-item popup-item1" @click="photo">
        <input type="file" accept="image/*" capture="camera">拍照
      </div>
      <div class="popup-item popup-item2" @click="album">
        <input type="file" name="" id="">从相册中选取
      </div>
    </van-popup>

    <div class="bottom"></div>

  </div>
</template>

<script>
  import NavBar from 'components/content/navBar/NavBar'
  import { Popup } from 'vant';
  import { Col, Row } from 'vant';

  export default {
    name: 'Jibenxinxi',
    components: {
      NavBar,
      [Col.name]: Col,
      [Row.name]: Row,
      [Popup.name]: Popup,
    },
    props: {
      
    },
    data () {
      return {
        show: false,
      };
    },
    computed: {
      
    },
    methods: {
      showPopup() {
        this.show = true;
      },
      photo() {
        console.log('拍照')
      },
      album() {
        console.log('从相册中选取')
      }
    },
  }
</script>

<style scoped lang="less">
  #jibenxinxi {
    font-size: .4rem;
    overflow: hidden;
    .item {
      .van-row {
        padding-top: .35rem;
        height: 1.7rem;
        border-bottom: .013333rem solid #f5f4f4;
        .van-col {
          position: relative;
          .title {
            position: relative;
            top: .3rem;
            font-weight: 700;
          }
          .arrow {
            position: relative;
            top: .3rem;
            width: .3rem;
            height: .386667rem;
          }
          .avatar {
            position: relative;
            bottom: .4rem;
            width: 1.2rem;
            height: 1.2rem;
          }
        }
        .value {
          position: relative;
          top: .3rem;
          text-align: right;
        }
      }
    }
    .van-popup {
      font-size: .5rem;
      color: black;
      text-align: center;
      .popup-item {
        border-bottom: .013333rem solid #f5f4f4;
        padding: .4rem 0;
        color: #000000;
        position: relative;
        input {
          position: absolute;
          height: 1.4rem;
          font-size: 100px;
          right: 0;
          top: 0;
          opacity: 0;
        }
      }
      .popup-item1 {
        border-top: .013333rem solid #f5f4f4;
        border-bottom: .013333rem solid #f5f4f4;
        margin-top: 1.5rem;
        padding: .4rem 0;
      }
    }
    .bottom {
      height: 9rem;
      background-color: #f8f8f8;
    }
  }
</style>