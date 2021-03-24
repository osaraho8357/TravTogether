<template lang='pug'>
.main
  .logo
    a(href="/")
      img#logo(src="@/assets/TravTogether-logo.png")
  .navigations
    ul#nav_ul
      router-link#nav_li(to="/about") About
      |  |
      a#nav_li(href="/findbuddies") Find Buddies
      |  | 
      router-link#nav_li(to='/help') Help
      |  | 
      router-link#nav_li(to='/contactus') Contact Us
  .login
    .loggedin(v-if="isAuthenticated")
      .welcome
        h4#welcome Welcome,
        p#userNickname {{user.nickname}}
      .notifications
          #notification
            p#message.fas.fa-envelope
            p#num : 0
            p &ensp;
          #notification
            p#chat.fas.fa-comments 
            p#num : 0
      .buttons
        a#button(:href="`/user/${user.slug}`") ACCOUNT
        button#button(@click="logout") LOGOUT
    .loggedout(v-else)
      a(href="/login")
        button#button Login
</template>


<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import router from '@/router'
export default {
  setup() {
    const store = useStore();
    return {
      store,
      isAuthenticated: computed(() => store.getters['user/isAuthenticated']),
      user: computed(() => store.getters['user/getUser']),
    }
  },

  watch: {
    user(newValue, oldValue) {
      console.log("New Value: " + newValue, "Old Value: " + oldValue)
      document.location.href="/"
    }
  },
  
  methods: {
    async logout() {
      this.store.dispatch('user/Logout');
    },
    goto(slug) {
      router.push(slug)
    }
  }
}
</script>


<style lang='stylus' scoped>
.main
  display flex 
  justify-content space-between
  align-items center
  margin 0 40px
  width 100%
  height 150px
  .logo
    width 200px
    #logo
      width 100%
      height auto
      cursor pointer
  .navigations
    min-width 700px
    #nav_ul
      #nav_li
        border none
        cursor pointer
        color: #2c3e50
        font-weight bold
        padding 0 30px
        font-size 16px
        text-decoration none
        transition: 0.2s ease
        &:hover
          color rgb(123,165,221)
        &.router-link-exact-active
          color rgb(123, 165,221)
  .login
    .loggedin
      .welcome
        line-height 0px
        #welcome
          text-align center
        #userNickname
          text-align center
      .notifications
        display flex
        justify-content center
        #notification
          display flex
          justify-content center
          align-items center
          #message, #chat
            cursor pointer
            transition 0.1s ease 
            &:hover 
              transform scale(1.2)
          #num
            font-weight bold
      .buttons
        #button
          color black
          text-decoration none
          margin 2px
          font-weight bold
          font-size 12px
          padding 5px
          border none
          background #f2f2f2
          cursor pointer
          transition all 0.1s ease
          &:hover
            background #cccccc
    .loggedout
      #button 
        margin 2px
        font-weight bold
        font-size 15px
        padding 10px
        border none
        background #f2f2f2
        cursor pointer
        transition all 0.1s ease
        &:hover
          background #cccccc
</style>