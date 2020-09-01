<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
    <FooterGuide  v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {mapActions} from 'vuex'
import {login} from './api'


export default {
  name: 'App',
  components: {
    FooterGuide
  },
  async mounted () {

    const result = this.login('admin','1')
    // const result = await login()
    console.log(result)
    // this.$store.dispatch('getUserList')
  },
  methods: {
    // 函数映射
    ...mapActions(['login','getAddress'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app
  color: red
</style>
