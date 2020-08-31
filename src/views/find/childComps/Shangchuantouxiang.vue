<template>
  <div id="shangchuantouxiang">

    <NavBar navBarTitle="" :isArrow="true" />

    <div class="top">
      <div class="title">上传头像</div>
      <div class="lab">
        上传你认为最能代表宝宝的头像<br />
        我们才能最快最准确找到宝宝的相片
      </div>
    </div>

    <div class="content">
      <div class="baobaotouxiang">
        <div class="title">
          <img class="line" src="~assets/img/find/shangchuantouxiang/line.png" alt="">
          <span class="text">{{'宝宝头像 ( ' + bbImg.length + '/3 )'}}</span>
        </div>
        <div class="imgs">
          <img class="img" v-for="(item, index) in bbImg" :key="index" :src="item.content" alt="">

          <!-- <img src="~assets/img/find/shangchuantouxiang/1.png" alt=""> -->
          <!-- <img src="~assets/img/find/shangchuantouxiang/1.png" alt=""> -->

          <van-uploader v-model="bbImg" :preview-image="false" v-if="bbImg.length != 3" :class="{'temp': bbImg.length==0}">
            <span class="upload">
              <img src="~assets/img/find/shangchuantouxiang/upload.png" alt="">
              <img class="upload2" src="~assets/img/find/shangchuantouxiang/upload2.png" alt="">
            </span>
          </van-uploader>
        </div>
      </div>
      <div class="qinshutouxiang">
        <div class="title">
          <img class="line" src="~assets/img/find/shangchuantouxiang/line.png" alt="">
          <span class="text">{{'亲属头像 ( ' + qsImg.length + '/3 )'}}</span>
        </div>
        <div class="imgs">
          <img class="img" v-for="(item, index) in qsImg" :key="index" :src="item.img" alt="">
        </div>
      </div>
    </div>

    <button class="btn" @click="xiayibu">下一步</button>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  import { Uploader } from 'vant';

  export default {
    name: 'Shangchuantouxiang',
    components: {
      NavBar,
      [Uploader.name]: Uploader
    },
    props: {
      
    },
    data () {
      return {
        bbImg: [],
        qsImg: [
          {img: require('assets/img/find/shangchuantouxiang/3.png')},
          {img: require('assets/img/find/shangchuantouxiang/4.png')},
        ]
      };
    },
    computed: {
      
    },
    methods: {
      xiayibu() {
        this.$router.push('/find/shengmingjinggao')
      }
    },
  }
</script>

<style scoped lang="less">
  #shangchuantouxiang {
    .top {
      padding-top: .6rem;
      text-align: center;
      height: 3.5rem;
      background-color: #FFE600;
      .title {
        color: #2E2D27;
        font-size: 0.666667rem;
      }
      .lab {
        margin-top: .2rem;
        color: #2E2D27;
        font-size: 0.346667rem;
        line-height: 0.466667rem;
      }
    }
    .content {
      img {
        width: 2.666667rem;
        height: 2.666667rem;
        margin-left: .6rem;
        border-radius: 50%;
      }
      img:first-child {
        margin-left: 0rem;
      }
      .title {
        .line {
          width: 0.093333rem;
          height: 0.346667rem;
          margin-left: 0.4rem;
        }
        .text {
          color: #2E2D27;
          font-size: 0.4rem;
          margin-left: .2rem;
        }
      }
      .upload {
        margin-left: .6rem;
        position: relative;
        /deep/ .van-uploader__input {
          width: 0;
        }
      }
      .imgs {
        margin-top: .5rem;
        padding: 0 0.4rem;
      }
      .baobaotouxiang {
        margin-top: .7rem;
        .temp {
          margin-left: -.6rem;
        }
      }
      .qinshutouxiang {
        margin-top: 1rem;
      }
      .upload2 {
        position: absolute;
        right: .9rem;
        bottom: 1rem;
        width: 0.853333rem;
        height: 0.853333rem;
      }
    }
    .btn {
      font-size: 0.426667rem;
      color: #2E2D27;
      height: 1.333333rem;
      border: none;
      background-color: #FFE600;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
    }
  }
</style>