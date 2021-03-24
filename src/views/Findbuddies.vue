<template lang='pug'>
.component
  .navbar
    NavbarComponent
  .mainpage
    FindbuddiesComponent
  .footer
    FooterComponent
</template>


<script>
import FindbuddiesComponent from '@/components/FindbuddiesComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components: {
    NavbarComponent,
    FindbuddiesComponent,
    FooterComponent
  }
}
</script>


<style lang='stylus' scoped>
</style>