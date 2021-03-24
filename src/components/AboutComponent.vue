<template lang='pug'>
.main
  .box
    .top
      .title
        h3#title ABOUT US
      .whoweare
        p#subtitle We believe travelling is worth both  
          | your time and money, and the quality of your 
          | trip multiplies when you share it with someone. 
          | Our mission is to help every adventurere achieve 
          | it.
    .bottom
      .image
        img#img(src="@/assets/aboutpage.jpg")
      .whatwedo
        #textbox
          h3#title ABOUT ME
          p#subtitle I started travelling since I was only ten. 
            | Throughout my life, I have been to elevent 
            | different countries and twenty twelve different 
            | states in the US. I went to some of those places 
            | myself, and I always wished I could enjoy those 
            | memorable moments with someone else. This website 
            | is for those who love to travel but don't have 
            | someone to share their passion with. I hope that 
            | all the adventurers and travellers do not experience 
            | the loneliness that I had and make the most out of 
            | their trips.
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
    max-width 1500px
    .top
      margin-top 50px
      margin-bottom 100px
      display flex
      justify-content space-between
      .title
        width 50%
        display flex
        justify-content center
        align-content center 
        #title
          font-weight bold
      .whoweare
        width 50%
        #subtitle
          font-size 20px
          text-align justify
          float right
          margin 0 50px
    .bottom
      display flex
      justify-content space-between
      margin 30px
      .image
        width 50%
        #img
          width 600px
          height auto
          position relative 
          top 50%
          transform translateY(-50%)
          box-shadow 10px 10px 5px #ccc
      .whatwedo
        width 50%
        #textbox
          position relative 
          top 50%
          transform translateY(-50%)
          #title
            font-weight bold
            margin-bottom 40px
            text-align center
          #subtitle
            text-align justify
            font-size 20px
            margin 0 50px
</style>