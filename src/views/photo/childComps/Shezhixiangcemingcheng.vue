<template>
  <div id="shezhixiangcemingcheng">

    <NavBar navBarTitle="设置相册名称" :isArrow="true" />

    <div class="name">
      <input v-model="name" type="text" placeholder="请输入相册名称">
    </div>

    <button class="button" @click="confirm">确 定</button>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  export default {
    name: 'Shezhixiangcemingcheng',
    components: {
      NavBar,
    },
    props: {
      
    },
    data () {
      return {
        name: ''
      };
    },
    computed: {
      
    },
    methods: {
      confirm() {
        if(!this.name) {
          console.log('请输入相册名称')
        } else {
          console.log('相册名称为：' + this.name)
          this.$router.push('/photo/xiangcebianji')
        }
      }
    },
  }
</script>

<style scoped lang="less">
  #shezhixiangcemingcheng {
    height: 100vh;
    background-color: #F8F8F8;
    .name {
      margin-top: .2rem;
      background-color: white;
      height: 1.333333rem;
      line-height: 1.333333rem;
      width: 100%;
      text-align: center;
      input {
        font-size: 0.4rem;
        color: black;
        width: 90%;
        border: none;
      }
      input::-webkit-input-placeholder {
        font-size: 0.4rem;
        color: #999999;
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