<template lang='pug'>
.main
  .box
    .title
      h1#title Search Buddies
    .filters
      #filter(v-for="(filter, index) in filters" :key="index")
        | {{ filter }}
    .input
      .content
        input#input(type="text" placeholder="Search for people")
        p#searchbutton.fas.fa-search
    hr#separator
    .people
      .haveusers(v-if="allUsers")
        .user(v-for="(user,index) in allUsers" :key="index")
          img#userPhoto(:src="user.userPhotoURL")
          .userInfo
            p#space &ensp;
            p#userName {{ user.nickname }}
            .male(v-if="user.gender === 'Male'")
              p.fas.fa-mars#gender
            .female(v-else-if="user.gender === 'Female'")
              p.fas.fa-venus#gender
            .non-binary(v-else-if="user.gender === 'Non-binary'")
              p.fas.fa-transgender-alt#gender
            .nothing(v-else)
              p#space &ensp;
          .location(v-if="user.location")
            p#location {{ user.location }}
          .nolocation(v-else)
            p.fas.fa-map-pin#location
      .nousers(v-else)
        p#message Empty
</template>


<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
export default {
  setup() {
    const store = useStore()
    store.dispatch('user/GetAllUsers');
    return {
      store,
      allUsers: computed(() => store.getters['user/getAllUsers']),
    }
  },

  data() {
    return {
      filters: ['All', 'Country', 'City', 'Nickname'],
    }
  },
}
</script>


<style lang='stylus' scoped>
.main
  display flex
  justify-content center
  height 1000px
  .box
    border solid 1px #ccc
    width 90vw
    box-shadow 5px 5px 5px #ccc
    margin 40px 0
    .title
      margin 40px 0
      text-align center
      #title
        font-weight bold
    .filters
      display flex 
      justify-content space-between
      width 700px
      position relative 
      left 50%
      transform translateX(-50%)
      #filter
        text-align center
        cursor pointer
        font-weight bold
        font-size 12px
        padding 8px
        width 80px
        border none
        background #f2f2f2
        cursor pointer
        transition all 0.1s ease
        &:hover
          background #cccccc
    .input
      margin 40px 0
      .content
        text-align center
        #input
          font-size 20px
          border none 
          width 1200px
          border-bottom solid 1px black
          outline none
        #searchbutton
          font-size 20px
          cursor pointer
          transition 0.1s ease 
          &:hover 
            transform scale(1.2)
    .people
      .haveusers
        margin 0 50px
        display flex
        .user
          text-align center
          width 200px
          height 250px
          // border 2px dotted gray
          margin 10px
          cursor pointer
          transition 0.1s ease
          &:hover 
            transform scale(1.05)
            // box-shadow 0 5px 5px -3px rgba(0,0,0,0.2),
            // 0 8px 10px 1px rgba(0,0,0,0.14),
            // 0 3px 14px 2px rgba(0,0,0,0.12)
          #userPhoto
            width 150px
            height 150px
            border-radius 50%
          .userInfo
            display flex
            justify-content space-between
            margin 0 30px
            margin-top 10px
            #userName
              font-weight bold
            #gender
              font-size 20px
      .nousers
        #message
          margin 100px 
          font-size 40px
          color #cccfcd
</style>