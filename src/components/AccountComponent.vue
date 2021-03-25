<template lang='pug'>
.main
  .page
    .left
      .box
        img#img(:src="retrievedUser.userPhotoURL" alt="")
        p#nickname {{ retrievedUser.nickname }}
        p.fas.fa-map-marker-alt#location &ensp; {{ retrievedUser.location }}
        button#button(v-if="user.email !== retrievedUser.email") SEND MESSAGE
        button#button(v-if="user.email !== retrievedUser.email") CHAT
    .right
      .box
        p#about.fas.fa-user &nbsp; About
        p#email.fas.fa-envelope-square &nbsp;{{ retrievedUser.email }}
        .male(v-if="retrievedUser.gender === 'Male'") {{ retrievedUser.ethnicity }} &nbsp;
          p.fas.fa-mars
        .female(v-else-if="retrievedUser.gender === 'Female'") {{ retrievedUser.ethnicity }} &nbsp;
          p.fas.fa-venus
        .non-binary(v-else-if="retrievedUser.gender === 'Non-binary'") {{ retrievedUser.ethnicity }} &nbsp;
          p.fas.fa-transgender-alt
        p#age Age: {{ retrievedUser.age }}
        p#bio {{ retrievedUser.bio }}
        button#button(@click="goto(-1)") GO BACK
        button#button(v-if="user.email === retrievedUser.email") UPDATE

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
      retrievedUser: computed(() => store.getters['user/getRetrievedUser']),
    }
  },
  methods: {
    goto(place) {
      router.go(place);
    }
  },
}
</script>


<style lang='stylus' scoped>
.main
  height 100vh
  .page
    display flex
    position relative
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 1300px
    height 800px
    .left
      width 30%
      border-right 1px solid gray
      text-align center
      .box
        position relative
        top 50%
        left 50%
        transform translate(-50%, -50%)
        #img
          width 250px
          height 250px
          border-radius 50%
        #nickname
          font-weight bold
          font-size 40px
        #location
          width 300px
          line-height 25px
        #button
          margin 10px
          color black
          text-decoration none
          font-weight bold
          font-size 13px
          padding 8px
          border none
          background #f2f2f2
          cursor pointer
          transition all 0.1s ease
          &:hover
            background #cccccc
    .right
      width 70%
      float left
      .box
        width 80%
        font-family Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif
        font-size 18px
        position relative
        top 50%
        left 50%
        transform translate(-50%, -50%)
        #about
          font-size 20px
        #email
          display flex
        #bio
          text-align justify
          margin 20px 0
          padding 20px
          height 300px
          box-shadow 0 5px 5px -3px rgba(0,0,0,0.2),
            0 8px 10px 1px rgba(0,0,0,0.14),
            0 3px 14px 2px rgba(0,0,0,0.12)
        #button
          float right
          margin-left 30px
          margin-top 30px
          color black
          text-decoration none
          font-weight bold
          font-size 13px
          padding 8px
          border none
          background #f2f2f2
          cursor pointer
          transition all 0.1s ease
          &:hover
            background #cccccc
      



      // .right
      // p#about.fas.fa-user About
      // p#email Email: {{ user.email }}
      // p#gender Gender: {{ user.gender }}
      // p#bio {{ user.bio }}

</style>