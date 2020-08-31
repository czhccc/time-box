<template>
  <div id="shouhuodizhi">

    <NavBar navBarTitle="收货地址" :isArrow="true" />

    <div class="list">
      <van-row class="one">
        <van-col span="11" offset="1" class="name">段凌天</van-col>
        <van-col span="11" class="phone">187****3610</van-col>
      </van-row>
      <van-row class="two">
        <van-col offset="1" class="address">浙江省杭州市西湖区西溪路888号</van-col>
      </van-row>
      <van-row class="three">
        <van-col class="item" offset="1" @click="changeCurrentAddress(0)">
          <img :src="currentAddress == 0 ? require('assets/img/profile/shouhuodizhi/quan_2.png') : require('assets/img/profile/shouhuodizhi/quan.png')" alt="">
          <span class="dizhi">默认地址</span>
        </van-col>
        <van-col class="item" offset="10" @click="edit">
          <img src="~assets/img/profile/shouhuodizhi/bianji.png" alt="">
          <span>编辑</span>
        </van-col>
        <van-col class="item" offset="1">
          <img src="~assets/img/profile/shouhuodizhi/shanchu.png" alt="">
          <span>删除</span>
        </van-col>
      </van-row>
    </div>
    <div class="list">
      <van-row class="one">
        <van-col span="11" offset="1" class="name">段凌天</van-col>
        <van-col span="11" class="phone">187****3610</van-col>
      </van-row>
      <van-row class="two">
        <van-col offset="1" class="address">浙江省杭州市西湖区西溪路888号</van-col>
      </van-row>
      <van-row class="three">
        <van-col class="item" offset="1" @click="changeCurrentAddress(1)">
          <img :src="currentAddress == 1 ? require('assets/img/profile/shouhuodizhi/quan_2.png') : require('assets/img/profile/shouhuodizhi/quan.png')" alt="">
          <span class="dizhi">默认地址</span>
        </van-col>
        <van-col class="item" offset="10" @click="edit">
          <img src="~assets/img/profile/shouhuodizhi/bianji.png" alt="">
          <span>编辑</span>
        </van-col>
        <van-col class="item" offset="1">
          <img src="~assets/img/profile/shouhuodizhi/shanchu.png" alt="">
          <span>删除</span>
        </van-col>
      </van-row>
    </div>
    <div class="list">
      <van-row class="one">
        <van-col span="11" offset="1" class="name">段凌天</van-col>
        <van-col span="11" class="phone">187****3610</van-col>
      </van-row>
      <van-row class="two">
        <van-col offset="1" class="address">浙江省杭州市西湖区西溪路888号</van-col>
      </van-row>
      <van-row class="three">
        <van-col class="item" offset="1" @click="changeCurrentAddress(2)">
          <img :src="currentAddress == 2 ? require('assets/img/profile/shouhuodizhi/quan_2.png') : require('assets/img/profile/shouhuodizhi/quan.png')" alt="">
          <span class="dizhi">默认地址</span>
        </van-col>
        <van-col class="item" offset="10" @click="edit">
          <img src="~assets/img/profile/shouhuodizhi/bianji.png" alt="">
          <span>编辑</span>
        </van-col>
        <van-col class="item" offset="1">
          <img src="~assets/img/profile/shouhuodizhi/shanchu.png" alt="">
          <span>删除</span>
        </van-col>
      </van-row>
    </div>

    <button class="button" @click="createNewAddress">新建收获地址</button>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import { Col, Row } from 'vant';

  export default {
    name: 'Shouhuodizhi',
    components: {
      NavBar,
      [Col.name]: Col,
      [Row.name]: Row,
    },
    props: {
      
    },
    data () {
      return {
        currentAddress: 0,
      };
    },
    computed: {
      
    },
    methods: {
      changeCurrentAddress(index) {
        console.log(index)
        this.currentAddress = index
      },
      edit() {
        this.$router.push('/profile/shouhuodizhi/bianji')
      },
      createNewAddress() {
        // this.$router.push('/profile/shouhuodizhi/xinjian')
        console.log('新建收货地址')
      }
    },
  }
</script>

<style scoped lang="less">
  #shouhuodizhi {
    height: 100vh;
    background-color: #F8F8F8;
    position: relative;
    .list {
      margin-top: .2rem;
      padding-top: .4rem;
      padding-bottom: .3rem;
      background-color: white;
      .one {
        font-size: .4rem;
        margin-bottom: .3rem;
        .name {
          color: #2E2D27;
          text-align: left;
        }
        .phone {
          color: #666666;
          text-align: right;
        }
      }
      .two {
        font-size: .4rem;
        color: #999999;
        padding-bottom: .3rem;
        border-bottom: .013333rem solid #F0F0F0;
      }
      .three {
        margin-top: .3rem;
        font-size: .4rem;
        img {
          width: .4rem;
          vertical-align: middle;
          margin-right: .2rem;
        }
        span {
          vertical-align: middle;
        }
        span {
          font-size: .35rem;
        }
        .dizhi {
          font-size: .4rem;
        }
        
      }
      
    }
    .button {
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 8%;
      background-color: #FFE600;
      font-size: .4rem;
      border: none;
      color: black;
    }
  }
</style>