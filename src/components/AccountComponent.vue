<template lang='pug'>
.main
  .page
    .left
      img#img(:src="user.userPhotoURL" alt="")
    .right
      .top
        p#nickname {{ user.nickname }}
        p.fas.fa-map-marker-alt {{ user.location }}
        button#button Send Message
        button#button Chat
      .bottom
        p#about.fas.fa-user About
        p#location Location: {{ user.location }}
        p#email Email: {{ user.email }}
        p#gender Gender: {{ user.gender }}
        p#bio {{ user.bio }}

</template>


<script lang='ts'>
import {computed} from 'vue'
import {useStore} from 'vuex'
export default {
  setup() {
    const store = useStore();
    return {
      isAuthenticated: computed(() => store.getters['user/isAuthenticated']),
      user: computed(() => store.getters['user/getUser']),
    }
  },
  mounted() {
    console.log(this.user.userPhotoURL);
  }
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
    height 1300px
    border 2px dotted gray
    .left
      width 30%
      border-right 2px dotted gray
      #img
        width 200px
        height auto
        position relative 
        top 10%
        left 50%
        transform translate(-50%, -50%)
    .right
      width 70%
      text-align center

//     .right
//       .top
//         p#nickname {{ user.nickname }}
//         p.fas.fa-map-marker-alt
//         button#button Send Message
//         button#button Chat
//       .bottom
//         p#about.fas.fa-user About
//         p#location Location: {{ user.location }}
//         p#email Email: {{ user.email }}
//         p#gender Gender: {{ user.gender }}
//         p#bio {{ user.bio }}
</style>