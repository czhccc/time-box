<template>
  <div id="shangchuan">

    <NavBar class="navBar" navBarTitle="上传" :isArrow="true" />
    
    <div class="top">
      <textarea class="text" placeholder="请输入文字内容..." name="text" cols="30" rows="10"></textarea>
      <div class="img">
        <div>
          <img src="~assets/img/upload/shangchuan/1.png" alt="">
        </div>
        <div>
          <img src="~assets/img/upload/shangchuan/2.png" alt="">
        </div>
        <div>
          <img src="~assets/img/upload/shangchuan/2.png" alt="">
        </div>
        <div>
          <img src="~assets/img/upload/shangchuan/2.png" alt="">
        </div>
        <div>
          <img src="~assets/img/upload/shangchuan/2.png" alt="">
        </div>
        <div>
          <img src="~assets/img/upload/shangchuan/2.png" alt="">
        </div>
        <div>
          <img src="~assets/img/upload/shangchuan/2.png" alt="">
        </div>
        <div>
          <img src="~assets/img/upload/shangchuan/2.png" alt="">
        </div>
        <div>
          <img src="~assets/img/upload/shangchuan/2.png" alt="">
        </div>
        <div>
          <img src="~assets/img/upload/shangchuan/2.png" alt="">
        </div>
        <div @click="addImg">
          <img src="~assets/img/upload/shangchuan/3.png" alt="">
        </div>
      </div>
    </div>

    <div class="middle">
      <div class="quanzi">
        <span class="name">选择圈子</span>
        <div class="value">杭州东冠幼儿园</div>
        <span class="arrow">
          <img src="~assets/img/upload/shangchuan/arrow.png" alt="">
        </span>
      </div>
      <div class="qunzu">
        <span class="name">选择群组</span>
        <div class="value">中班12班 (19届)</div>
        <span class="arrow">
          <img src="~assets/img/upload/shangchuan/arrow.png" alt="">
        </span>
      </div>
      <div class="qunzu">
        <span class="name">选择群组</span>
        <div class="value">中班12班 (19届)</div>
        <span class="arrow">
          <img src="~assets/img/upload/shangchuan/arrow.png" alt="">
        </span>
      </div>
      <div class="qunzu">
        <span class="name">选择群组</span>
        <div class="value">中班12班 (19届)</div>
        <span class="arrow">
          <img src="~assets/img/upload/shangchuan/arrow.png" alt="">
        </span>
      </div>
    </div>

    <div class="bottom">
      <div class="button">
        <button @click="shangchuan">上 传</button>
      </div>
      <div class="text" @click="vip">
        <span class="vip">开通会员，增加上传人脸数量</span>
        <span>
          <img class="arrow" src="~assets/img/upload/shangchuan/arrow.png" alt="">
        </span>
      </div>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  export default {
    name: 'Shangchuan',
    components: {
      NavBar,
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
      shangchuan() {
        console.log('上传')
      },
      vip() {
        console.log('去开通会员')
      },
      addImg() {
        console.log('添加图片')
      }
    },
  }
</script>

<style scoped lang="less">
  #shangchuan {
    background-color: #F8F8F8;
    .top {
      background-color: white;
      padding: 0.88rem .5rem 0.706667rem .5rem;
      .text {
        font-size: 0.4rem;
        width: 100%;
        height: 2.5rem;
        color: #999999;
        border: none;
        resize: none;
      }
      .img {
        width: 8.8rem;
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        img {
          width: 2.666667rem;
          margin-right: .2rem;
        }
      }
    }
    .middle {
      margin-top: .3rem;
      background-color: white;
      position: relative;
      div {
        height: 1.333333rem;
        line-height: 1.333333rem;
      }
      div:first-child {
        border-bottom: 0.013333rem solid #F0F0F0;
      }
      font-size: 0.373333rem;
      .name {
        display: inline;
        color: #2E2D27;
        margin-left: .5rem;
      }
      .value {
        display: inline-block;
        position: relative;
        bottom: 1.3rem;
        width: 5rem;
        color: #666666;
        margin-left: 4rem;
        text-align: right;
      }
      .arrow {
        position: relative;
        bottom: 1.3rem;
        margin-left: .5rem;
        img {
          width: 0.173333rem;
          height: 0.32rem;
          vertical-align: middle;
        }
      }
    }
    .bottom {
      background-color: #F8F8F8;
      margin-top: 2rem;
      margin-bottom: .3rem;
      width: 100%;
      text-align: center;
      .button {
        button {
          background-color: #FFE600;
          font-size: 0.426667rem;
          color: #2E2D27;
          width: 9.2rem;
          height: 1.186667rem;
          border: none;
        }
      }
      .text {
        .vip {
          color: #2E2D27;
          font-size: 0.32rem;
        }
        .arrow {
          margin-left: .1rem;
          width: 0.133333rem;
          height: 0.253333rem;
        }
      }
    }
  }
</style>