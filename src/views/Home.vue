<template lang="pug">
.component 
  .navbar
    NavbarComponent
  .mainpage
    HomeComponent
  .footer
    FooterComponent
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'Home',
  components: {
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  width 1500px
  margin 0 auto
</style>