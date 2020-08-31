<template>
  <div id="bind">

    <NavBar class="navBar" navBarTitle="时光盒子" :isArrow="false" />

    <div class="text">绑定用户</div>

    <div class="content">
      <div class="phone">
        <input v-model="phoneValue" type="text" placeholder="请输入您的手机号码">
      </div>
      <div class="code">
        <input v-model="codeValue" type="text" :placeholder="codePlaceholder" :disabled="codeDisabled">
        <span @click="getCode" v-if="!isShowTime">获取验证码</span>
        <span class="time" v-if="isShowTime">{{time + ' s'}}</span>
      </div>
    </div>

    <div class="button">
      <button @click="bind" :class="{'buttonColor': codeValue}">绑 定</button>
    </div>

    <div class="xieyi">
      <span class="text1">注册时光盒子代表你已同意</span>
      <span class="text2" @click="xieyi">《时光盒子用户协议》</span>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  export default {
    name: 'Bind',
    components: {
      NavBar,
    },
    data () {
      return {
        phoneValue: '',
        codeValue: '',
        codeDisabled: true,
        codePlaceholder: "请先获取验证码",
        isShowTime: false,
        time: 10,
      };
    },
    computed: {

    },
    methods: {
      getCode() {
        if(this.phoneValue) {
          console.log('获取验证码，手机号：' + this.phoneValue)
          this.codePlaceholder = "请输入收到的验证码"
          this.codeDisabled = false
          this.isShowTime = true
          let preTime = this.time
          let t = setInterval(() => {
            if(this.time > 0) {
              this.time--
              if(!this.isShowTime) {
                this.isShowTime = true
              }
            } else {
              this.isShowTime = false
              clearInterval(t);
              this.time = preTime
              return 0
            }
          }, 1000)
        } else {
          console.log('请先输入手机号')
        }
      },
      bind() {
        if(this.phoneValue && this.codeValue) {
          console.log('绑定成功，手机号'+ this.phoneValue +'，验证码：'+ this.codeValue)
          this.$router.push('/bind/peizhiquanzi')
        } else if (!this.codeValue) {
          console.log('请输入验证码')
        }
      },
      xieyi() {
        console.log('协议')
      }
    },
  }
</script>

<style scoped lang="less">
  #bind {
    .text {
      color: #2E2E2E;
      font-size: 0.506667rem;
      margin-left: 0.8rem;
      margin-top: 2.5rem;
    }
    .content {
      margin-top: 1rem;
      margin-left: 0.8rem;
      div {
        border-bottom: 0.013333rem solid #F0F0F0;
        width: 8.4rem;
      }
      input {
        font-size: 0.426667rem;
        border: none;
        padding: .5rem 0;
      }
      input::-webkit-input-placeholder {
        color: #C8C8C8;
      }
      input[disabled] {
        background-color: white;
      }
      .code {
        span {
          color: #2E2D27;
          font-size: 0.426667rem;
          margin-left: 1rem;
        }
        .time {
          margin-left: 2rem;
        }
      }
    }
    .button {
      margin-top: 1rem;
      text-align: center;
      button {
        width: 8.4rem;
        height: 1.186667rem;
        line-height: 1.186667rem;
        font-size: 0.426667rem;
        color: #2e2d27;
        opacity: 0.5;
        background-color: #FFE600;
        border: none;
      }
      .buttonColor {
        opacity: 1;
      }
    }
    .xieyi {
      font-size: 0.346667rem;
      margin-left: 0.8rem;
      margin-top: .5rem;
      .text1 {
        color: #999999;
      }
      .text2 {
        color: #2E2E2E;
      }
    }
  }
</style>