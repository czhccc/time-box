<template>
  <div id="shengmingjinggao">

    <NavBar navBarTitle="" :isArrow="true" />

    <div class="top">
      <div class="title">监护权声明警告</div>
      <div class="lab">
        请家长仔细阅读该声明的内容
      </div>
    </div>

    <div class="detail">
      <div class="item">
        <div class="title">
          <img class="line" src="~assets/img/find/shengmingjinggao/line.png" alt="">
          <span class="text">隐私政策</span>
        </div>
        <div class="content">
          世界因伟人而改变历史，个人因命运而改变人生，但命运把握在自己手中。春天再美丽，也只是短暂的一季，平凡的的人即或风光，也将湮灭于尘世，淡定人生吧!过好每一天安然的自己。拍拍胸脯问一问自己，你的一生还有多少天要欺骗自己，愚昧的思想，永远是你心中的阴霾。语文其实是情感的浓缩，而我要做的，就是解剖这些情感。
        </div>
      </div>

      <div class="item">
        <div class="title">
          <img class="line" src="~assets/img/find/shengmingjinggao/line.png" alt="">
          <span class="text">适用范围</span>
        </div>
        <div class="content">
          世界因伟人而改变历史，个人因命运而改变人生，但命运把握在自己手中。春天再美丽，也只是短暂的一季，平凡的的人即或风光，也将湮灭于尘世，淡定人生吧!过好每一天安然的自己。拍拍胸脯问一问自己，你的一生还有多少天要欺骗自己，愚昧的思想，永远是你心中的阴霾。语文其实是情感的浓缩，而我要做的，就是解剖这些情感。
        </div>
      </div>
    </div>

    <button class="btn" @click="show = true">同意并确认</button>

    <van-action-sheet description="宝宝已被其他监护人绑定"
                      v-model="show" 
                      :actions="actions" 
                      @select="onSelect"
                      cancel-text="取消"
                      close-on-click-action
                      :round="false"
                      />

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  import { ActionSheet } from 'vant';

  export default {
    name: 'Shengmingjinggao',
    components: {
      NavBar,
      [ActionSheet.name]: ActionSheet,
    },
    props: {
      
    },
    data () {
      return {
        show: false,
        actions: [
          { name: '申请共享' },
          { name: '联系客服' }
        ],
      };
    },
    computed: {
      
    },
    methods: {
      // confirm() {
      //   this.show = false;
      //   Toast(item.name);
      // },
      onSelect(item) {
        this.show = false;
      },
    },
  }
</script>

<style scoped lang="less">
  #shengmingjinggao {
    .top {
      padding-top: .6rem;
      text-align: center;
      height: 3.5rem;
      background-color: #FFE600;
      .title {
        color: #2E2D27;
        font-size: 0.666667rem;
      }
      .lab {
        margin-top: .2rem;
        color: #2E2D27;
        font-size: 0.346667rem;
        line-height: 0.466667rem;
      }
    }
    .detail {
      overflow: scroll;
      height: 11.6rem;
      // background-color: pink;
      padding-bottom: 1rem;
      .item {
        .title {
          margin-top: .8rem;
          .line {
            width: 0.093333rem;
            height: 0.346667rem;
            margin-left: 0.4rem;
          }
          .text {
            color: #2E2D27;
            font-size: 0.4rem;
            margin-left: .2rem;
          }
        }
        .content {
          // background-color: pink;
          margin: 0 .4rem;
          margin-top: .3rem;
          line-height: 0.64rem;
          font-size: 0.4rem;
          color: #2e2d27;
        }
      }
    }
    .btn {
      height: 1.333333rem;
      background-color: #FFE600;
      color: #2E2D27;
      font-size: 0.426667rem;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      border: none;
      width: 100%;
    }
  }
</style>