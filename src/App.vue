<template>
  <div id='app'>
    <keep-alive>
      <router-view />
    </keep-alive>
    <TabBar v-if="$route.meta.notTabBar" />
  </div>
</template>

<script>
  import TabBar from "components/content/tabBar/TabBar.vue"

  import {flexible} from "../static/js/flexible.js"

  export default {
    name: 'name',
    components: {
      TabBar
    },
    beforeCreate() {
      flexible(window, document);
    }
  }
</script>

<style scoped lang="less">
  @import "assets/css/base.css";

  body {
    min-width: 320px;
    max-width: 750px;
  }

  // 约束当屏幕大于750px 的时候，htmL字体大小就不不变化了
  @media screen and ( min-width: 750px) {
    html {
      font-size: 37.5px !important;
    }
  }

</style>