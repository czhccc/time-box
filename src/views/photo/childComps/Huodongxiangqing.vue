<template>
  <div id="huodongxiangqing">

    <NavBar navBarTitle="活动详情" :isArrow="true" />

    <img class="img" src="~assets/img/photo/huodongxiangqing/img.png" alt="">

    <div class="text">
      登录App、每日签到、分享内容及邀请好友等操作都
      可以获取积分。获得的积分可以在积分商城中兑换优<br />
      惠券、礼品卡以及调调精选好物等礼品。具体的积分<br />
      规则及获得方式如下：<br />
      <br />
      连续签到第1天 - 第5天：每日签到积分+3<br />
      连续签到5天：额外获得15积分；<br />
      连续签到第6天 - 第30天：每日签到积分+5，<br />
      连续签到10天：额外获得20积分奖励；<br />
      连续签到20天：额外获得50积分奖励；<br />
      连续签到30天：额外获得100积分奖励；<br />
      连续签到第31天及以上：每日签到积分+10；<br />
      连续签到31天后每连续签到15天：额外100积分奖励；

    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  export default {
    name: 'Huodongxiangqing',
    components: {
      NavBar,
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
  #huodongxiangqing {
    text-align: center;
    .img {
      margin-top: .5rem;
      width: 9.2rem;
      height: 4.386667rem;
    }
    .text {
      text-align: left;
      margin: 0 auto;
      margin-top: .3rem;
      width: 9.2rem;
      font-size: 0.4rem;
      color: #2E2D27;
      line-height: 0.64rem;
    }
  }
</style>