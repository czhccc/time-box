<template>
  <div id="tianxiejibenxinxi">

    <NavBar navBarTitle="" :isArrow="true" />

    <div class="top">
      <div class="title">填写基本信息</div>
      <div class="lab">放心，该保密的都保密</div>
    </div>
    <div class="middle">
      <div class="item">
        <img src="~assets/img/find/tianxiejibenxinxi/1.png" alt="">
        <div class="text">男孩</div>
      </div>
      <div class="item">
        <img src="~assets/img/find/tianxiejibenxinxi/2.png" alt="">
        <div class="text">男孩</div>
      </div>
    </div>
    <div class="bottom">
      <div class="name">段天凌</div>
      <div class="date">
        <van-datetime-picker
          class="van-datetime-picker"
          v-model="currentDate"
          type="date"
          title="请选择宝宝生日"
          confirm-button-text=" "
          cancel-button-text=" "
          :min-date="minDate"
          :max-date="maxDate"
          :visible-item-count="1"
        />
      </div>
    </div>

    <button class="btn" @click="xiayibu">下一步</button>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  import { DatetimePicker } from 'vant';

  export default {
    name: 'Tianxiejibenxinxi',
    components: {
      NavBar,
      [DatetimePicker.name]: DatetimePicker
    },
    props: {
      
    },
    data () {
      return {
        minDate: new Date(2010, 0, 1),
        maxDate: new Date(2021, 0, 1),
        currentDate: new Date(),
      };
    },
    computed: {
      
    },
    methods: {
      xiayibu() {
        console.log(this.currentDate)
        this.$router.push('/find/shangchuantouxiang')
      }
    },
  }
</script>

<style scoped lang="less">
  #tianxiejibenxinxi {
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
    .middle {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      img {
        width: 2.666667rem;
        margin: 0 .75rem;
      }
      .item {
        text-align: center;
        .text {
          font-size: 0.373333rem;
          color: #2E2D27;
        }
      }
    }
    .bottom {
      text-align: center;
      .name {
        margin-top: 2rem;
        font-size: 0.4rem;
        color: #666666;
      }
      .date {
        padding: .3rem;
      }
    }
    .btn {
      font-size: 0.426667rem;
      color: #2E2D27;
      height: 1.333333rem;
      border: none;
      background-color: #FFE600;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
    }
  }
</style>