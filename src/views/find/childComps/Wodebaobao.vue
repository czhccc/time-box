<template>
  <div id="wodebaobao">

    <NavBar navBarTitle="我的宝宝" :isArrow="true" />

    <div class="top">
      <van-row type="flex" justify="center" :gutter="10">
        <van-col>
          <img class="choose" src="~assets/img/find/wodebaobao/choose.png" alt="">
          <img class="choose2" src="~assets/img/find/wodebaobao/choose2.png" alt="">
        </van-col>
        <van-col v-for="(item, index) in topImg" :key="index">
          <img class="img" :src="item.img">
        </van-col>
        <van-col>
            <img class="add" src="~assets/img/find/wodebaobao/add.png" alt="">
            <img class="add2" src="~assets/img/find/wodebaobao/add2.png" alt="">
        </van-col>
      </van-row>
    </div>

    <div class="info">
      <van-cell class="title" center>
        <template #title>
          <img class="line" src="~assets/img/find/wodebaobao/line.png" alt="">
          <span class="text">基本信息</span>
        </template>
      </van-cell>
      <van-cell class="item" is-link center @click="nameClick" >
        <template #title>
          <span class="title">姓名</span>
        </template>
        <template #default>
          <span class="value">{{theData.name}}</span>
        </template>
      </van-cell>
      <van-cell class="item" is-link center @click="sexClick" >
        <template #title>
          <span class="title">性别</span>
        </template>
        <template #default>
          <span class="value">{{theData.sex}}</span>
        </template>
      </van-cell>
      <van-cell class="item" is-link center @click="birthdayClick" >
        <template #title>
          <span class="title">生日</span>
        </template>
        <template #default>
          <span class="value">{{theData.birthday}}</span>
        </template>
      </van-cell>
      <van-cell class="item face" is-link center @click="faceClick" >
        <template #title>
          <span class="title">脸集</span>
        </template>
        <template #default>
          <div class="imgs">
            <img class="img" :src="item.img" v-for="(item, index) in theData.face" :key="index" alt="">
          </div>
        </template>
      </van-cell>

      <!-- 性别弹出框 -->
      <van-popup v-model="sexShow" position="bottom" :style="{ height: '40%' }" >
        <van-picker
          class="van-picker"
          title=""
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="onCancel"
          :default-index="0"
        />
      </van-popup>

      <!-- 生日弹出框 -->
      <van-popup v-model="birthdayShow" position="bottom" :style="{ height: '40%' }" >
        <van-datetime-picker
          class="van-datetime-picker"
          v-model="currentDate"
          type="date"
          title=""
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          :visible-item-count="5"
          @confirm="birthdayConfirm"
          @cancel="birthdayCancel"
        />
      </van-popup>
    
    </div>

    <div class="shouquan">
      <van-cell class="title" center>
        <template #title>
          <img class="line" src="~assets/img/find/wodebaobao/line.png" alt="">
          <span class="text">授权信息</span>
        </template>
      </van-cell>
      <van-cell class="item" center >
        <template #title>
          <span class="title">段爸爸</span>
        </template>
        <template #default>
          <span class="value">监护人</span>
        </template>
      </van-cell>
      <van-cell class="item" center >
        <template #title>
          <span class="title">凤妈妈</span>
        </template>
        <template #default>
          <span class="value">已授权</span>
        </template>
      </van-cell>
      <van-cell class="item" center >
        <template #title>
          <span class="title">王奶奶</span>
        </template>
        <template #default>
          <span class="value">已授权</span>
        </template>
      </van-cell>
      <van-cell class="item" center >
        <template #title>
          <span class="title">张阿姨</span>
          <span v-if="temp" class="lab">(申请获得授权)</span>
        </template>
        <template #default>
          <van-button v-if="temp" class="van-button" color="#2BCF88" @click="tongyi">同意</van-button>
          <van-button v-if="temp" class="van-button" color="#F06962">拒绝</van-button>
          <span v-if="!temp" class="value">已授权</span>
        </template>
      </van-cell>
    </div>

    <div class="btns">
      <button class="btn1">移除</button>
      <button class="btn2">设为默认宝宝</button>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  import { Col, Row } from 'vant';
  import { Cell, CellGroup } from 'vant';
  import { Button } from 'vant';
  import { Popup } from 'vant';
  import { Picker } from 'vant';
  import { DatetimePicker } from 'vant';

  export default {
    name: 'Wodebaobao',
    components: {
      NavBar,
      [Col.name]: Col,
      [Row.name]: Row,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      [Popup.name]: Popup,
      [Picker.name]: Picker,
      [DatetimePicker.name]: DatetimePicker,
    },
    props: {
      
    },
    data () {
      return {
        topImg: [
          {img: require('assets/img/find/wodebaobao/1.png')},
          {img: require('assets/img/find/wodebaobao/2.png')},
        ],
        theData: {
          name: '王宝宝',
          sex: '男',
          birthday: '2018-09-20',
          face: [
            {img: require('assets/img/find/wodebaobao/3.png')},
            {img: require('assets/img/find/wodebaobao/4.png')},
            {img: require('assets/img/find/wodebaobao/5.png')},
            {img: require('assets/img/find/wodebaobao/6.png')},
            {img: require('assets/img/find/wodebaobao/7.png')},
          ]
        },
        temp: true,
        sexShow: false,
        columns: ['男', '女'],
        birthdayShow: false,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: new Date(),
      };
    },
    computed: {
      
    },
    methods: {
      nameClick() {
        this.$router.push('/find/xiugaibaobaoxingming')
      },
      sexClick() {
        console.log('sex')
        this.sexShow = true
      },
      onConfirm(value, index) {
        this.theData.sex = value
        this.sexShow = false
      },
      onCancel() {
        this.sexShow = false
      },
      formatter(type, val) {
        if (type === 'month') {
          return `${val}月`;
        } else if (type === 'day') {
          return `${val}日`;
        }
        return val;
      },
      birthdayClick() {
        this.birthdayShow = true
      },
      birthdayConfirm(value) {
        this.theData.birthday = this.timeFormat(this.currentDate);
        this.birthdayShow = false
      },
      timeFormat(time) { // 时间格式化 2019-09-08
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        if(month < 10) {
          month = '0' + month
        }
        if(day < 10) {
          day = '0' + day
        }
        return year + '-' + month + '-' + day
      },
      birthdayCancel() {
        this.birthdayShow = false
      },
      faceClick() {
        this.$router.push('/find/shangchuantouxiang')
      },
      tongyi() {
        console.log('同意')
        this.temp = !this.temp
      }
    },
  }
</script>

<style scoped lang="less">
  #wodebaobao {
    background-color: #F8F8F8;
    overflow: scroll;
    padding-bottom: 1.5rem;
    padding-top: 1.3rem;
    .top {
      height: 1.3rem;
      background-color: #FFE600;
      z-index: 99;
      position: fixed;
      top: 1.4rem;
      left: 0;
      right: 0;
      .choose {
        position: relative;
        left: 1.5rem;
        top: .5rem;
        width: 0.373333rem;
        height: 0.373333rem;
      }
      .choose2 {
        position: relative;
        left: 1.2rem;
        top: .45rem;
        width: 0.25rem;
        height: 0.2rem;
      }
      .img {
        width: 1.066667rem;
        height: 1.066667rem;
      }
      .add {
        width: 1.066667rem;
        height: 1.066667rem;
      }
      .add2 {
        position: relative;
        right: .735rem;
        bottom: .3rem;
        width: 0.4rem;
        height: 0.4rem;
      }
    }
    .info {
      margin-top: .2rem;
      .title {
        height: 1.6rem;
        .line {
          width: 0.093333rem;
          height: 0.346667rem;
        }
        .text {
          margin-left: .2rem;
          font-size: 0.4rem;
          color: #2E2D27;
        }
      }
      .item {
        height: 1.333333rem;
        padding-left: .8rem;
        .value {
          padding-right: .3rem;
          color: #666666;
          font-size: 0.373333rem;
        }
      }
      .face {
        height: 1.866667rem;
        /deep/ .van-cell__value {
          right: .2rem;
          overflow: visible;
        }
        .imgs {
          display: flex;
          flex-direction: row-reverse;
          
          text-align: right;
          .img {
            width: 1.066667rem;
            height: 1.066667rem;
            margin: .05rem;
          }
        }
      }
      /deep/ .van-picker {
        .van-picker__cancel {
          font-size: 0.453333rem;
        }
        .van-picker__confirm {
          color: #329737;
          font-size: 0.453333rem;
        }
      }
    }
    .shouquan {
      margin-top: .2rem;
      .title {
        height: 1.6rem;
        .line {
          width: 0.093333rem;
          height: 0.346667rem;
        }
        .text {
          margin-left: .2rem;
          font-size: 0.4rem;
          color: #2E2D27;
        }
      }
      .item {
        height: 1.333333rem;
        .title {
          margin-left: .4rem;
          font-size: 0.373333rem;
          color: #2E2D27;
        }
        .value {
          font-size: 0.373333rem;
          color: #666666;
        }
        .lab {
          margin-left: .2rem;
          color: #999999;
          font-size: 0.32rem;
        }
      }
      .van-button {
        width: 1.6rem;
        height: 0.8rem;
        margin-left: .3rem;
      }
    }
    .btns {
      .btn1 {
        position: fixed;
        bottom: 0;
        left: 0;
        font-size: 0.426667rem;
        color: #2E2D27;
        border: none;
        background-color: white;
        width: 30%;
        height: 1.333333rem;
      }
      .btn2 {
        position: fixed;
        bottom: 0;
        right: 0;
        font-size: 0.426667rem;
        color: #2E2D27;
        border: none;
        background-color: #FFE600;
        width: 70%;
        height: 1.333333rem;
      }
    }
  }
</style>