<template>
  <div id="shouhuodizhiBianji">

    <NavBar navBarTitle="编辑收货地址" :isArrow="true" />

    <div class="list">
      <van-row class="one">
        <van-col offset="1" span="5" class="oneItem">收货人:</van-col>
        <van-col class="twoItem">
          <input type="text" value="王宝宝">
        </van-col>
      </van-row>
      <van-row class="two">
        <van-col offset="1" span="5" class="oneItem">手机号:</van-col>
        <van-col class="twoItem">
          <input type="text" value="18757273610">
        </van-col>
      </van-row>
      <van-row class="three">
        <van-col offset="1" span="5" class="oneItem">省市区:</van-col>
        <van-col class="twoItem">
          <input type="text" value="浙江省 杭州市 西湖区">
        </van-col>
      </van-row>
      <van-row class="four">
        <van-col offset="1" span="5" class="oneItem">详细地址:</van-col>
        <van-col class="twoItem" span="17">
          <textarea name="address" id="address" cols="30" rows="10">留下街道留和路288号</textarea>
        </van-col>
      </van-row>
    </div>

    <div class="submit">
      <input type="submit" value="提  交" >
    </div>
    

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import { Col, Row } from 'vant';

  export default {
    name: 'ShouhuodizhiBianji',
    components: {
      NavBar,
      [Col.name]: Col,
      [Row.name]: Row,
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
  #shouhuodizhiBianji {
    height: 100vh;
    background-color: #F8F8F8;
    .list {
      background-color: white;
      margin-top: .2rem;
      font-size: .4rem;
      .one , .two , .three , .four {
        padding-top: .5rem;
        padding-bottom: .5rem;
        border-bottom: .013333rem solid #F0F0F0;
        .oneItem {
          color: #2E2D27;
        }
        .twoItem {
          color: #666666;
        }
        input {
          width: 140%;
          border: none;
        }
      }
      .four {
        .oneItem {
          display: inline-block;
        }
        #address {
          resize: none;
          width: 95%;
          height: 2rem;
          border: none;
          
        }
      }
    }
    .submit {
      text-align: center;
      margin-top: 1.5rem;
      font-size: .4rem;
      input {
        border: none;
        background-color: #FFE600;
        width: 90%;
        height: 1.2rem;
        color: #2E2D27;
      }
    }
  }
</style>