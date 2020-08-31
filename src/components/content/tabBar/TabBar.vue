<template>
  <div class="tabBar">
    
    <van-tabbar route v-model="currentIndex" active-color="#000000" fixed>
      <van-tabbar-item replace to="/find">
        <span>发现</span>
        <template #icon="props">
          <img :src="currentIndex==0 ? require('assets/img/tabBar/11.png') : require('assets/img/tabBar/1.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/upload">
        <span>上传</span>
        <template #icon="props">
          <img :src="currentIndex==1 ? require('assets/img/tabBar/22.png') : require('assets/img/tabBar/2.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/photo">
        <span>相盒</span>
        <template #icon="props">
          <img :src="currentIndex==2 ? require('assets/img/tabBar/33.png') : require('assets/img/tabBar/3.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item  replace to="/profile">
        <span>我的</span>
        <template #icon="props">
          <img :src="currentIndex==3 ? require('assets/img/tabBar/44.png') : require('assets/img/tabBar/4.png')" />
        </template>
      </van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';

  export default {
    name: 'TabBar',
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
    },
    data () {
      return {
        currentIndex: 0
      };
    },
  }
</script>

<style scoped>
  
</style>