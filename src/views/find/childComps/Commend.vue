<template>
  <div id="commend">

    <div class="theCommend" v-for="(item, index) in itemInfo" :key="index" >
      <div class="person">
        <img class="avatar" :src="item.avatar" alt="">
        <div class="name">{{item.name}}</div>
        <div class="time">{{item.time}}</div>
      </div>
      <div class="content">
        <div class="text" @click="tujixiangqing">{{item.text}}</div>
        <div class="img" v-if="item.imgs.length != 1" @click="tujixiangqing">
          <img v-for="(img, index) in item.imgs" :key="'img'+index" :src="img" alt="">
        </div>
        <div class="img2" v-else>
          <img :src="item.imgs" alt="">
        </div>
      </div>
    </div>
    

  </div>
</template>


<script>
  

  export default {
    name: 'Commend',
    components: {
      
    },
    props: {
      itemInfo: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        
      };
    },
    computed: {
      
    },
    methods: {
      tujixiangqing() {
        this.$router.push('/find/tujixiangqing')
      }
    },
  }
</script>

<style scoped lang="less">
  #commend {
    width: 100%;
    .theCommend {
      border-bottom: 0.013333rem solid #F0F0F0;
      padding-bottom: .5rem;
      .person {
        position: relative;
        height: 2rem;
        margin-top: -.3rem;
        .avatar {
          position: absolute;
          left: 0.4rem;
          top: 0.7rem;
          width: 1.066667rem;
        }
        .name {
          position: absolute;
          left: 1.7rem;
          top: .8rem;
          font-size: 0.373333rem;
          color: #2E2D27;
        }
        .time {
          position: absolute;
          left: 1.7rem;
          top: 1.35rem;
          font-size: 0.32rem;
          color: #999999;
        }
      }
      .content {
        position: relative;
        .text {
          position: relative;
          display: inline-block;
          left: 1.7rem;
          width: 7.706667rem;
          font-size: 0.373333rem;
          color: #2E2D27;
          line-height: 0.613333rem;
        }
        .img {
          position: relative;
          left: 1.7rem;
          width: 7rem;
          display: flex;
          justify-content: start;
          flex-wrap: wrap;
          img {
            margin-right: .2rem;
            margin-top: .2rem;
            width: 2.133333rem;
          }
        }
        .img2 {
          position: relative;
          left: 1.7rem;
          top: .2rem;
          width: 5.5rem;
          img {
            width: 5.5rem;
          }
        }
      }
    }
    
  }
</style>