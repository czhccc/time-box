<template>
  <div id="profile">

    <NavBar navBarTitle="我的" :isArrow="false" />
    <ProfileTop />
    <ProfileMiddle />
    <ProfileList />

  </div>
</template>


<script>
  import NavBar from 'components/content/navBar/NavBar'
  import ProfileTop from './childComps/profile/ProfileTop'
  import ProfileMiddle from './childComps/profile/ProfileMiddle'
  import ProfileList from './childComps/profile/ProfileList'

  export default {
    name: 'Profile',
    components: {
      NavBar,
      ProfileTop,
      ProfileMiddle,
      ProfileList
    },
    props: {
      
    },
    data () {
      return {
        navBarTitle: "我的"
      };
    },
    computed: {
      
    },
    beforeCreate() {		},
    created() {		},
    beforeMount() {		},
    mounted() {		},
    beforeUpdate() {		},
    updated() {		},
    activated() {		},
    deactivated() {		},
    beforeDestroy() {		},
    destroyed() {		},
    methods: {
      
    },
  }
</script>

<style scoped>
  
</style>