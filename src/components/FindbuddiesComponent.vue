<template lang='pug'>
.main
  .box
    .title
      h1#title Search Buddies
    .filters
      #filter(v-for="(filter, index) in filters" :key="index")
        button(@click="selectFilter(filter)"
        :class="{'selected': filter === selectedFilter, 'notSelected': filter !== selectedFilter}") {{ filter }}
    .input
      .content
        input#input(type="text" placeholder="Search for people"
        v-model="search"
        @keyup.enter="getFilter(selectedFilter)")
        p#searchbutton.fas.fa-search(@click="getFilter(selectedFilter)")
    hr#separator
    .people
      .haveusers(v-if="filteredUsers")
        .user(v-for="(user,index) in filteredUsers" :key="index"
        @click="setRetrievedUser(user.slug)")
          img#userPhoto(:src="user.userPhotoURL")
          .userInfo
            p#userName {{ user.nickname }}
          .location(v-if="user.location")
            p#location {{ user.location }}
          .nolocation(v-else)
            p.fas.fa-map-pin#location
      .nousers(v-else)
        p#message Empty
</template>


<script>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'
export default {
  setup() {
    const store = useStore()
    const filteredUsers = ref(store.dispatch('user/GetAllUsers'))
    const search = ref("")
    const selectedFilter = ref("")
    store.dispatch('user/GetAllUsers')
    return {
      store,
      allUsers: computed(() => store.getters['user/getAllUsers']),
      filteredUsers,
      selectedFilter,
      search,
      retrievedUser: computed(() => store.getters['user/getRetrievedUser']),
      user: computed(() => store.getters['user/getUser']),
      isAuthenticated: computed(() => store.getters['user/isAuthenticated'])
    }
  },

  data() {
    return {
      filters: ['All', 'Location', 'Nickname'],
    }
  },

  methods: {
    async setRetrievedUser(userSlug) {
      if (!this.user) {
        alert("Please login first.")
      } else {
        await this.store.dispatch("user/RetrieveUser", userSlug)
        document.location.href=`/user/${userSlug}`
      }
    },
    async getFilter(filter) {
      this.selectedFilter = filter;
      if (this.selectedFilter === "Nickname") {
        this.filteredUsers = this.allUsers.filter(user => user.nickname.toLowerCase().includes(this.search.toLowerCase()));
      } else if (this.selectedFilter === "Location") {
        this.filteredUsers = this.allUsers.filter(user => user.location.toLowerCase().includes(this.search.toLowerCase()));
      }
    },
    async selectFilter(filter) {
      if (this.selectedFilter !== filter) {
        this.selectedFilter = filter;
        this.search = ""
        if (filter === 'All') {
          this.filteredUsers = this.allUsers;
        } else {
          this.filteredUsers = null;
        }
      }
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
        button
          outline none
          text-align center
          cursor pointer
          font-weight bold
          font-size 12px
          padding 8px
          width 80px
          border none
          background #f2f2f2
          transition all 0.1s ease
          &:hover
            background #cccccc
        .selected
          color white
          transition 0.2s
          background-color rgb(123,165,221)
          outline none
    .input
      margin 40px 0
      .content
        text-align center
        #input
          font-size 20px
          border none 
          width 50em
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
          font-family Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif
          text-decoration none 
          color black
          text-align center
          width 200px
          height 250px
          margin 10px
          cursor pointer
          transition 0.1s ease
          &:hover 
            transform scale(1.08)
            // box-shadow 0 5px 5px -3px rgba(0,0,0,0.2),
            // 0 8px 10px 1px rgba(0,0,0,0.14),
            // 0 3px 14px 2px rgba(0,0,0,0.12)
          #userPhoto
            width 150px
            height 150px
            border-radius 50%
          .userInfo
            margin-top 10px
            #userName
              font-weight bold
              margin-bottom 5px
      .nousers
        #message
          margin 100px 
          font-size 40px
          color #cccfcd
</style>