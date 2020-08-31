<template>
  <div id="upload">

    <div class="fixed">
      <NavBar class="navBar" navBarTitle="上传" :isArrow="false" />

      <div class="zhanwei"></div>

      <div class="menu">
        <tabControl :tabControl="['最新', '最热', '打赏最多', '赚的最多']" />
      </div>
    </div>

    <div class="scroll">
      <UploadItem />
      <UploadItem />
      <UploadItem />
    </div>

    <div class="tongji" @click="tongji">
      <div class="back">统计</div>
    </div>

    <div class="uploadIcon" @click="upload">
      <div class="back">上传</div>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import tabControl from 'components/content/tabControl/TabControl'

  import UploadItem from './childComps/UploadItem'

  export default {
    name: 'Upload',
    components: {
      NavBar,
      tabControl,
      UploadItem,
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
      upload() {
        console.log('上传')
        this.$router.push('/upload/shangchuan')
      },
      tongji() {
        console.log('统计')
        this.$router.push('/upload/tongji')
      }
    },
  }
</script>

<style scoped lang="less">
  #upload {
    background-color: white;
    height: 100vh;
    .fixed {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
      .zhanwei {
        height: .3rem;
        background-color: #FFE600;
      }
      .menu {
        padding-bottom: .2rem;
        background-color: #FFE600;
      }
    }
    .scroll {
      overflow: scroll;
      padding-top: 2.9rem;
      padding-bottom: 1.7rem;
    }
    .uploadIcon {
      position: relative;
      .back {
        z-index: 999;
        position: fixed;
        bottom: 1.7rem;
        right: .5rem;
        width: 1.333333rem;
        height: 1.333333rem;
        background: #ffe600;
        box-shadow: 0px 2px 4px rgba(255,230,0,0.5);
        border-radius: 50%;
        font-size: 0.373333rem;
        color: #2E2D27;
        text-align: center;
        line-height: 1.333333rem;
      }
    }
    .tongji {
      position: relative;
      .back {
        z-index: 999;
        position: fixed;
        bottom: 3.4rem;
        right: .5rem;
        width: 1.333333rem;
        height: 1.333333rem;
        background: #ffe600;
        box-shadow: 0px 2px 4px rgba(255,230,0,0.5);
        border-radius: 50%;
        font-size: 0.373333rem;
        color: #2E2D27;
        text-align: center;
        line-height: 1.333333rem;
      }
    }
  }
</style>