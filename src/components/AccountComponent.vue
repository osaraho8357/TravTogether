<template lang='pug'>
.main
  .page
    .left
      img(:src="user.userPhotoURL" alt="")
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