<template lang='pug'>
.component
  .navbar
    NavbarComponent
  .mainpage
    ContactusComponent
  .footer
    FooterComponent
</template>


<script>
import {defineComponent} from 'vue'
import ContactusComponent from '@/components/ContactusComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default defineComponent({
  components: {
    ContactusComponent,
    NavbarComponent,
    FooterComponent,
  }
})
</script>


<style lang='stylus' scoped>
</style>