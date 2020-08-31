<template>
  <div id="mubanyulan">

    <NavBar navBarTitle="模板预览" :isArrow="true" />

    <div class="content">
      <div class="img" v-for="(item, index) in img" :key="index">
        <img :src="item.img" alt="">
      </div>
    </div>

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'

  export default {
    name: 'Mubanyulan',
    components: {
      NavBar,
    },
    props: {
      
    },
    data () {
      return {
        img: [
          {img: require('assets/img/photo/mubanyulan/1.png')},
          {img: require('assets/img/photo/mubanyulan/2.png')},
          {img: require('assets/img/photo/mubanyulan/3.png')},
        ]
      };
    },
    computed: {
      
    },
    methods: {
      
    },
  }
</script>

<style scoped lang="less">
  #mubanyulan {
    .content {
      // padding-bottom: 5rem;
      .img {
        img {
          width: 100%;
        }
      }
    }
  }
</style>