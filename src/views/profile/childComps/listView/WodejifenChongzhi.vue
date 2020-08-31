<template>
  <div id="wodejifenChongzhi">

    <NavBar navBarTitle="积分充值" :isArrow="true" />

    <div class="top">
      <div class="line">
        <img src="~assets/img/profile/wodejifen/line.png" alt="">
        <span>积分充值</span>
      </div>
      <div class="item">
        <div class="grid" v-for="(item, index) in value" :key="index" @click="chooseItem(index)" :class="{activeItem: currentIndex==index}">
          <div>{{item[0] + '元'}}</div>
          <div>{{item[1] + '积分'}}</div>
        </div>
        <div class="grid" @click="zidingyi" :class="{activeItem: currentIndex==valueLength}">
          <div>自定义</div>
          <div>充值金额</div>
        </div>
      </div>
    </div>

    <div class="middle">
      <div class="line">
        <img src="~assets/img/profile/wodejifen/line.png" alt="">
        <span>积分充值</span>
      </div>
      <input ref="input1" class="input" type="text" placeholder="请输入充值金额" :value="currentValue">
      <div class="text">
        <span text="1">兑换比例:1元换1000积分</span>
        <span text="2">充值限额:单笔限1万元</span>
      </div>
      <div class="button-div">
        <button class="button" @click="chongzhi">立即充值</button>
      </div>

    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  export default {
    name: 'WodejifenChongzhi',
    components: {
      NavBar,
    },
    props: {
      
    },
    data () {
      return {
        currentIndex: 0,
        value: [[5, 500], [10, 1000], [30, 3000], [50, 5000], [100, 10000]]
      };
    },
    computed: {
      valueLength() {
        return this.value.length
      },
      currentValue() {
        if(this.currentIndex < this.value.length) {
          return this.value[this.currentIndex][0]
        }
        
      },
    },
    methods: {
      chooseItem(index) {
        console.log(index)
        this.currentIndex = index
      },
      chongzhi() {
        const value = this.$refs.input1.value
        if(value) {
          console.log('充值' + value + '元')
        } else {
          console.log('请输入充值金额')
        } 
      },
      zidingyi() {
        this.currentIndex = this.value.length
        this.$refs.input1.value = ''
      }
    },
  }
</script>

<style scoped lang="less">
  #wodejifenChongzhi {
    .top {
      width: 90%;
      margin: 0 auto;
      margin-top: 1rem;
      .line {
        img {
          width: 0.093333rem;
          height: 0.4rem;
        }
        span {
          margin-left: .2rem;
          vertical-align: middle;
          font-size: 0.4rem;
          color: #2E2D27;
        }
      }
      .item {
        margin-top: .5rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .grid {
          border: .05rem solid #2E2D27;
          border-radius: .2rem;
          width: 2.5rem;
          height: 1.56rem;
          padding: .3rem;
          margin-bottom: .4rem;
          div {
            text-align: center;
            font-size: 0.373333rem;
          }
          
        }
        .activeItem {
            background-color: #2E2D27;
            color: #FFFFFF;
          }
        
      }
    }
    .middle {
      width: 90%;
      margin: 0 auto;
      margin-top: .5rem;
      .line {
        img {
          width: 0.093333rem;
          height: 0.4rem;
        }
        span {
          margin-left: .2rem;
          vertical-align: middle;
          font-size: 0.4rem;
          color: #2E2D27;
        }
      }
      .input {
        width: 100%;
        margin-top: .5rem;
        border: 0.013333rem solid #2E2D27;
        border-radius: .2rem;
        height: 1.333333rem;
        font-size: 0.4rem;
        padding-left: .5rem;
      }
      .text {
        display: flex;
        margin-top: .3rem;
        justify-content: space-between;
        font-size: 0.32rem;
      }
      .button-div {
        text-align: center;
        .button {
          width: 100%;
          margin-top: 1rem;
          height: 1.186667rem;
          font-size: 0.426667rem;
          border: none;
          border-radius: .2rem;
          color: #2E2D27;
          background-color: #FFE600;
        }
      }
      
    }
  }
</style>