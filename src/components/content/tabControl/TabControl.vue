<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in tabControl" :key="index"
         :class="{active: index === currentIndex}"
         @click="changeIndex(index)">
      <div class="text">{{item}}</div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      tabControl: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data () {
      return {
        currentIndex: 0
      }
    },
    methods: {
      changeIndex(index) {
        this.currentIndex = index
        this.$emit('tabClick', this.currentIndex)
      }
    }
  }
</script>

<style scoped lang="less">
  .tab-control {
    display: flex;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    background-color: #FFE600;
    .tab-control-item {
      flex: 1;
      .text {
        font-size: 0.426667rem;
      }
    }
    .active {
      color: #333333;
      .line {
        margin: 0 auto;
        margin-top: -.1rem;
        width: 0.5rem;
        border-bottom: 0.08rem solid #333333;
      }
    }
  }

  

  
</style>