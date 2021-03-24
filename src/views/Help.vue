<template lang='pug'>
.component
  .navbar
    NavbarComponent
  .mainpage
    HelpComponent
  .footer
    FooterComponent
</template>


<script>
import HelpComponent from '@/components/HelpComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components: {
    HelpComponent,
    NavbarComponent,
    FooterComponent,
  }
}
</script>


<style lang='stylus' scoped>
</style>