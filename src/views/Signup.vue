<template lang='pug'>
.component
  .mainpage
    SignupComponent
</template>


<script>
import {defineComponent} from 'vue'
import SignupComponent from '@/components/SignupComponent.vue'
export default defineComponent({
  components: {
    SignupComponent,
  }
})
</script>


<style lang='stylus' scoped>

</style>