<template lang='pug'>
.main
  .page
    .left
      img(:src="user.userPhotoURL" alt="")
    .right
      .top
        p {{ user.nickname }}
        p.fas.fa-map-marker-alt
        button#button Send Message
        button#button Chat
      .bottom
        p.fas.fa-user About
        p Location: {{ user.location }}
        p Email: {{ user.email }}
        p Gender: {{ user.gender }}
        p {{ user.bio }}

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

</style>