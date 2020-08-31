<template>
  <div id="xuanzetupian">

    <NavBar navBarTitle="选择图片" :isArrow="true" />

    <div class="tabControl">
      <TabControl :tabControl="['已下载', '全部']" />
    </div>

    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="photos">
          <van-grid class="van-grid" :column-num="4" square center :gutter="5" :border="false">
            <van-grid-item class="van-grid-item">
              <van-uploader v-model="imgList" :preview-image="false">
                <van-image :src="require('assets/img/photo/xuanzetupian/1.png')" />
              </van-uploader>
            </van-grid-item>
            <van-grid-item class="van-grid-item" v-for="(item, index) in getReversedImgList" :key="'imgList'+index" @click="click(item)" >
              <van-image class="addImg" :src="item.content" />
              <div class="mask" v-if="item.checked" >
                <img class="quan" src="~assets/img/photo/xuanzetupian/quan.png" alt="">
                <img class="gou" src="~assets/img/photo/xuanzetupian/gou.png" alt="">
              </div>
            </van-grid-item>
            <van-grid-item class="van-grid-item" v-for="(item, index) in img" :key="'img'+index" @click="click(item)" >
              <van-image :src="item.img" />
              <div class="mask" v-if="item.checked" >
                <img class="quan" src="~assets/img/photo/xuanzetupian/quan.png" alt="">
                <img class="gou" src="~assets/img/photo/xuanzetupian/gou.png" alt="">
              </div>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>

    <div class="button">
      <button class="btn1" @click="cancel">取消</button>
      <button class="btn2" @click="confirm">确认</button>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import BScroll from 'better-scroll'

  import { Uploader } from 'vant';
  import { Grid, GridItem } from 'vant';
  import { Image } from 'vant';

  export default {
    name: 'Xuanzetupian',
    components: {
      NavBar,
      TabControl,
      BScroll,
      [Uploader.name]: Uploader,
      [Grid.name]: Grid,
      [GridItem.name]: GridItem,
      [Image.name]: Image,
    },
    props: {
      
    },
    data () {
      return {
        img: [
          {img: require('assets/img/photo/xuanzetupian/2.png')},
          {img: require('assets/img/photo/xuanzetupian/3.png')},
          {img: require('assets/img/photo/xuanzetupian/4.png')},
          {img: require('assets/img/photo/xuanzetupian/5.png')},
          {img: require('assets/img/photo/xuanzetupian/6.png')},
          {img: require('assets/img/photo/xuanzetupian/7.png')},
          {img: require('assets/img/photo/xuanzetupian/8.png')},
          {img: require('assets/img/photo/xuanzetupian/9.png')},
          {img: require('assets/img/photo/xuanzetupian/10.png')},
          {img: require('assets/img/photo/xuanzetupian/11.png')},
          {img: require('assets/img/photo/xuanzetupian/12.png')},
          {img: require('assets/img/photo/xuanzetupian/13.png')},
          {img: require('assets/img/photo/xuanzetupian/14.png')},
          {img: require('assets/img/photo/xuanzetupian/15.png')},
          {img: require('assets/img/photo/xuanzetupian/16.png')},
          {img: require('assets/img/photo/xuanzetupian/17.png')},
          {img: require('assets/img/photo/xuanzetupian/18.png')},
          {img: require('assets/img/photo/xuanzetupian/19.png')},
          {img: require('assets/img/photo/xuanzetupian/20.png')},
          {img: require('assets/img/photo/xuanzetupian/7.png')},
          {img: require('assets/img/photo/xuanzetupian/8.png')},
          {img: require('assets/img/photo/xuanzetupian/9.png')},
          {img: require('assets/img/photo/xuanzetupian/10.png')},
          {img: require('assets/img/photo/xuanzetupian/11.png')},
          {img: require('assets/img/photo/xuanzetupian/12.png')},
          {img: require('assets/img/photo/xuanzetupian/19.png')},
          {img: require('assets/img/photo/xuanzetupian/20.png')},
          {img: require('assets/img/photo/xuanzetupian/7.png')},
          {img: require('assets/img/photo/xuanzetupian/8.png')},
          {img: require('assets/img/photo/xuanzetupian/9.png')},
          {img: require('assets/img/photo/xuanzetupian/10.png')},
          {img: require('assets/img/photo/xuanzetupian/11.png')},
          {img: require('assets/img/photo/xuanzetupian/12.png')},
        ],
        imgList: [],
        allImgList: [],
      };
    },
    computed: {
      getReversedImgList() {
        let reversedImgList = this.imgList
        reversedImgList.reverse()
        return reversedImgList
      },
      getAllImgList() {
        for (let i of this.imgList) {
          this.$set(i, 'checked', false)
        }
        for (let i of this.img) {
          this.$set(i, 'checked', false)
        }
      }
    },
    methods: {
      click(item) {
        item.checked = !item.checked
        this.$forceUpdate()
      },
      cancel() {
        this.$router.go(-1)
      },
      confirm() {
        console.log('确认')
        this.allImgList = []
        for (let i of this.imgList) {
          if(i.checked) {
            this.allImgList.push(i)
          }
        }
        for (let i of this.img) {
          if(i.checked) {
            this.allImgList.push(i)
          }
        }

        if(!this.allImgList.length) {
          console.log('请选择图片')
        } else {
          console.log('选择的图片为：')
          for (let i of this.allImgList) {
            console.log(i)
          }
          this.$router.push('/photo/querendingdan')
        }
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        bounce: false,
        click: true,
      })
    }
  }
</script>

<style scoped lang="less">
  #xuanzetupian {
    background-color: #F8F8F8;
    height: 100vh;
    .tabControl {
      z-index: 999;
      background-color: #FFE600;
      padding-bottom: .2rem;
    }
    .wrapper {
      margin-top: 5px;
      height: 13.5rem;
      overflow: hidden;
      .content {
        .photos {
          .van-grid {
            .van-grid-item {
              /deep/ .van-grid-item__content {
                padding: 0 !important;
              }
              position: relative;
              .mask {
                .quan {
                  z-index: 99;
                  position: absolute;
                  bottom: 1.7rem;
                  left: 1.7rem;
                  width: 0.533333rem;
                  height: 0.533333rem;
                }
                .gou {
                  z-index: 100;
                  position: absolute;
                  bottom: 1.85rem;
                  left: 1.85rem;
                  width: 0.24rem;
                  height: 0.186667rem;
                }
              }
            }
          }
        }
      }
    }
    .button {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      button {
        height: 1.333333rem;
        line-height: 1.333333rem;
        font-size: 0.426667rem;
        color: #2E2D27;
        width: 50%;
        border: none;
      }
      .btn1 {
        background-color: white;
      }
      .btn2 {
        background-color: #FFE600;
      }
    }
  }
</style>