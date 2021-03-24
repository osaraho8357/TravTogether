<template lang='pug'>
.main
  .box
    .top
      p#title help
    .bottom
      p#subtitle FAQs
      p#subtitle What is your question?
      form#form(@submit="submit")
        #textarea
          textarea(placeholder="Write here...")
        #button
          button(type="submit") Submit
</template>


<script>
export default {

}
</script>


<style lang='stylus' scoped>
.main
  display flex 
  justify-content center
  .box
    width 1500px
    .top
      background white
      height 150px
      box-shadow 10px 10px 5px #ccc
      border solid 1px #ccc
      margin 30px
      #title
        text-align center
        color black
        font-size 50px
        font-weight bold
        font-family Bookman, URW Bookman L, serif
        position relative 
        top 50%
        transform translateY(-50%)
    .bottom
      #subtitle
        font-weight bold 
        font-size 20px
        text-align center
      #form
        #textarea
          display flex
          justify-content center
          textarea
            background white
            width 500px
            height 100px
        #button
          display flex
          justify-content center
          button
            margin 10px
            font-weight bold
            font-size 15px
            padding 10px
            border none
            background #f2f2f2
            cursor pointer
            transition all 0.1s ease
            &:hover
              background #cccccc
</style>