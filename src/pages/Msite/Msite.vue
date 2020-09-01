<template>
<!--  <div>Msite</div>-->
  <div class="msite">
    <!-- 头部 -->
    <HeardTop :title = "userInfo.userName">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeardTop>
    <!--首页导航-->
    <div class="msite_nav">
      <div class="swiper-container" v-if="userList.length > 0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(userArray,index) in userListMethod" :key="index">
            <a href="javascript:" class="link_to_food"  v-for="(user,index) in userArray" :key="index">
              <div class="food_container">
                <img src="./images/nav/2.jpg" >
              </div>
              <span v-show="user !== null">{{user.userName}}甜品饮品{{index}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
<!--        <div class="swiper-scrollbar">滚动条</div>-->
      </div>
    </div>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6" >
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

import HeardTop from '../../components/HeardTop/HeardTop'
import ShopList from '../../components/ShopList/ShopList'
import {mapState} from 'vuex'

export default {
  name: 'Msite',
  components: {
    Swiper,
    HeardTop,
    ShopList
  },

  data() {
    return {
      base_image_url: "./images/nav/",
      base_image_type: ".jpg"
    }
  },
  mounted () {
    this.$store.dispatch('getUserList')
  },

  watch: {
    //1. 监听userList内的数据存在之后,2.在dom更新完成之后进行刷新
    userList(value) {
      this.$nextTick(() => {
        // npm install swiper swiper@3.4.2 --save-dev
        // 轮播插件
        var mySwiper = new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          // 等同于以下设置
          autoplay: 2000,
          // 触摸后依旧滚动
          autoplayDisableOnInteraction: false,
          // 如果需要分页器
          pagination: '.swiper-pagination',
          // 触摸时跳转链接
          preventClicks: false
        })
      })
    }
  },

  computed: {
    ...mapState(['userInfo','address','token','userList']),

    userListMethod() {
      const {userList} = this
      // alert('userList :' + JSON.stringify(userList))
      if (userList.length === 0) {
        return []
      }

      const array = []
      if (userList.length < 16) {
        for (let i = 0; i < 16 ;i ++) {
          // alert(i)
          array.push(userList[0])
        }
      }
      // alert(JSON.stringify(array))

      const newArray = []
      let min = []
      array.forEach(a => {
        min.push(a)
        if (min.length === 4) {
          newArray.push(min)
          min = []
        }
      })
      if (min.length !== 0) {
        newArray.push(min)
      }

      // alert('json : ' + JSON.stringify(newArray))
      return newArray
    }

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.msite  //首页
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
</style>
