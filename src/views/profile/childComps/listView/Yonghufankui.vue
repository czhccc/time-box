<template>
  <div id="yonghufanhui">

    <NavBar navBarTitle="用户反馈" :isArrow="true" />

    <form action='https://www.baidu.com' method='post'>
      <textarea class="content" name="content" id="textarea" cols="30" rows="10" placeholder="请输入用户反馈内容"></textarea>
      <input class="click" type="submit" name="submit" value="提  交">
    </form>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  export default {
    name: 'Yonghufankui',
    components: {
      NavBar,
    },
    props: {
      
    },
    data () {
      return {
        
      };
    },
    methods: {
      
    },
  }
</script>

<style scoped lang="less">
  #yonghufanhui {
    height: 100vh;
    background-color: #F8F8F8;
    text-align: center;
    .content {
      resize: none;
      width: 100%;
      height: 6rem;
      border: none;
      margin-bottom: .666667rem;
      font-size: 0.4rem;
      padding: .5rem;
    }
    .click {
      background-color: #FFE600;
      color: black;
      width: 80%;
      height: 1.2rem;
      border: none;
      font-size: 0.426667rem;
    }
  }
  
</style>