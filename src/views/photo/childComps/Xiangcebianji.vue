<template>
  <div id="xiangcebianji">

    <NavBar :navBarTitle="'相册编辑(' + temp + '/3)'" :isArrow="true" />

    <div class="top">
      <img class="img" :src="temp == 1 
                              ? require('assets/img/photo/xiangcebianji/1.png')
                              : require('assets/img/photo/xiangcebianji/2.png') ">
  
      <img class="yuan yuan1" src="~assets/img/photo/xiangcebianji/yuan.png" @click="toOne">
      <img class="arrow arrow1" src="~assets/img/photo/xiangcebianji/arrow_left.png" @click="toOne">

      <img class="yuan yuan2" src="~assets/img/photo/xiangcebianji/yuan.png" @click="toTwo">
      <img class="arrow arrow2" src="~assets/img/photo/xiangcebianji/arrow_right.png" @click="toTwo">
    </div>
    
    <div class="bottom">
      <div class="title">
        <img class="line" src="~assets/img/photo/xiangcebianji/line.png" alt="">
        <span class="text">选择图片</span>
        <div class="desc">您选择的图片将添加到上图标识位置</div>
      </div>
      <div v-if="temp==1" class="choose">
        <van-uploader v-model="fileImg1" multiple :max-count="1" preview-size="190" >
          <img src="~assets/img/photo/xiangcebianji/3.png">
          <template #preview-cover="{ file }">
            <div class="preview-cover van-ellipsis">{{ file.name }}</div>
          </template>
        </van-uploader>
      </div>
      <div v-if="temp==2" class="choose">
        <van-uploader v-model="fileImg2" :max-count="1" preview-size="190" >
          <img src="~assets/img/photo/xiangcebianji/3.png">
          <template #preview-cover="{ file }">
            <div class="preview-cover van-ellipsis">{{ file.name }}</div>
          </template>
        </van-uploader>
      </div>
    </div>

    <button class="button" @click="confirm">制作相册</button>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  import { Uploader } from 'vant';

  export default {
    name: 'Xiangcebianji',
    components: {
      NavBar,
      [Uploader.name]: Uploader,
    },
    props: {
      
    },
    data () {
      return {
        temp: 1,
        fileImg1: [],
        fileImg2: [],
      };
    },
    computed: {
      
    },
    methods: {
      confirm() {
        this.$router.push('/photo/xuanzetupian')
      },
      toOne() {
        this.temp = 1
      },
      toTwo() {
        this.temp = 2
      },
    },
  }
</script>

<style scoped lang="less">
  #xiangcebianji {
    height: 100vh;
    background-color: white;
    .top {
      height: 6.666667rem;
      .img {
        width: 100%;
      }
      .yuan {
        position: relative;
        bottom: 4rem;
        width: 0.933333rem;
        height: 0.933333rem;
      }
      .yuan1 {
        left: .5rem;
      }
      .yuan2 {
        left: 7.5rem;
      }
      .arrow {
        position: relative;
        bottom: 4.25rem;
        width: 0.24rem;
        height: 0.44rem;
      }
      .arrow1 {
        right: .1rem;
      }
      .arrow2 {
        left: 6.925rem;
      }
    }
    .bottom {
      .title {
        .line {
          width: 0.093333rem;
          height: 0.346667rem;
          margin-left: 0.32rem;
          margin-top: 0.7rem;
        }
        .text {
          font-size: 0.4rem;
          color: #2E2D27;
          margin-left: .2rem;
        }
        .desc {
          font-size: 0.32rem;
          color: #999999;
          margin-left: .6rem;
          margin-top: .1rem;
        }
      }
      .choose {
        margin-left: .625rem;
        width: 8.826667rem;
        height: 5.066667rem;
        background: url('~assets/img/photo/xiangcebianji/back.png') no-repeat center;
        text-align: center;
        margin-top: .3rem;
        img {
          width: 8.826667rem;
          height: 5.066667rem;
        }
        .preview-cover {
          position: absolute;
          box-sizing: border-box;
          bottom: 0;
          width: 100%;
          padding: 4px;
          color: #fff;
          font-size: 12px;
          text-align: center;
          background: rgba(0, 0, 0, 0.3);
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