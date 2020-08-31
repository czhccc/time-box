<template>
  <div id="xiugaibaobaoxingming">

    <NavBar navBarTitle="姓名" :isArrow="true" />

    <div class="content">
      <input type="text" class="value" v-model="value" placeholder="请输入姓名">
      <div class="img">
        <img class="back" @click="clear" src="~assets/img/find/xiugaibaobaoxingming/back.png" alt="">
        <img class="cha" @click="clear" src="~assets/img/find/xiugaibaobaoxingming/cha.png" alt="">
      </div>
    </div>

    <button class="btn" @click="confirm">确 定</button>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  export default {
    name: 'Xiugaibaobaoxingming',
    components: {
      NavBar,
    },
    props: {
      
    },
    data () {
      return {
        value: ''
      };
    },
    computed: {
      
    },
    methods: {
      clear() {
        this.value = ''
      },
      confirm() {
        if(!this.value) {
          console.log('请输入姓名')
        } else {
          console.log('修改姓名为：' + this.value)
        }
      }
    },
  }
</script>

<style scoped lang="less">
  #xiugaibaobaoxingming {
    background-color: #F8F8F8;
    height: 100vh;
    text-align: center;
    .content {
      .value {
        background-color: white;
        width: 100%;
        height: 1.333333rem;
        border: none;
        margin-top: .5rem;
        color: #2E2D27;
        font-size: 0.373333rem;
        padding-left: .7rem;
        padding-right: 1.5rem;
      }
      .img {
        position: relative;
        .back {
          position: absolute;
          left: 9rem;
          bottom: .4rem;
          width: 0.48rem;
          height: 0.48rem;
        }
        .cha {
          position: absolute;
          left: 9.14rem;
          bottom: .54rem;
          width: 0.2rem;
          height: 0.2rem;
        }
      }
    }
    .btn {
      margin-top: 6rem;
      color: #2E2D27;
      font-size: 0.426667rem;
      width: 90%;
      background-color: #FFE600;
      height: 1.333333rem;
      border: none;
    }
  }
</style>