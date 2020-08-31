<template>
  <div id="uploadItem">

    <div class="person">
      <img class="avatar" src="~assets/img/upload/touxiang1.png" alt="">
      <div class="name">骆驼祥子</div>
      <div class="time">2小时前</div>
    </div>
    <div class="content">
      <div class="text">昨天已成过去不必计较，今天正在度过加倍珍惜，明天即将来临提早规划</div>
      <div class="img">
        <img src="~assets/img/upload/1.png" alt="">
        <img src="~assets/img/upload/2.png" alt="">
        <img src="~assets/img/upload/2.png" alt="">
        <img src="~assets/img/upload/2.png" alt="">
      </div>
      <div class="bottom">
        <div class="jifen">积分:+2480</div>
        <div class="dashang">
          打赏:200
          <img class="hua" src="~assets/img/upload/hua.png" alt="">
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  

  export default {
    name: 'UploadItem',
    components: {
      
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
      
    },
  }
</script>

<style scoped lang="less">
  #uploadItem {
    .person {
      position: relative;
      height: 2rem;
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
    }
    .bottom {
      font-size: 0.32rem;
      color: #666666;
      margin-top: .4rem;
      position: relative;
      left: 1.7rem;
      div {
        width: 2.133333rem;
        height: 0.533333rem;
        line-height: 0.533333rem;
        background-color: rgba(213, 194, 161, 0.15);
        border-radius: 4px;
        color: #666666;
        text-align: center;
        display: inline-block;
        margin-right: .2rem;
      }
      .dashang {
        .hua {
          width: 0.250133rem;
          height: 0.2932rem;
          vertical-align: middle;
        }
      }
    }
  }
</style>