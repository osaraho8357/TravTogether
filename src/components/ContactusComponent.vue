<template lang='pug'>
.main
  .box
    .left
      .content
        img#img(src="@/assets/contactus.png")
        p#text If you have questions or just want to get 
          | in touch, use the form below. We look 
          | forward to hearing from you!
    .right
      .content
        p.title Contact Us
        form.form(@submit="submit")
          .name
            input#name(type="text" placeholder="  Name")
          .email
            input#email(type="text" placeholder="  Email")
          .textarea
            textarea#textarea(placeholder="  Message")
          .button
            button#button(type="submit") Submit
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
    margin 30px
    height 900px
    max-width 1750px
    border solid 1px #ccc
    display flex
    box-shadow 5px 5px 5px #ccc
    .left
      width 700px
      background #666699
      .content
        position relative 
        top 50%
        transform translateY(-50%)
        #img
          position relative 
          left 50%
          transform translateX(-50%)
        #text
          position relative 
          left 50%
          transform translateX(-50%)
          color white
          font-size 18px
          font-weight bold
          text-align justify
          margin-top 30px
          width 400px
    .right
      width 1050px
      .content
        position relative 
        top 50%
        transform translateY(-50%)
        .title
          font-size 60px
          text-align center
        .form
          text-align center
          .name
            margin 10px 0
            border-radius 50px
            #name
              background #f0f0f5
              border none
              width 400px
              height 50px
          .email
            margin 10px 0
            border-radius 50px
            #email
              background #f0f0f5
              border none
              width 400px
              height 50px
          .textarea
            margin 10px 0
            border-radius 50px
            #textarea
              background #f0f0f5
              border none
              width 400px
              height 200px
          .button
            margin 10px 0
            border-radius 50px
            #button
              margin 2px
              font-weight bold
              font-size 15px
              padding 7px
              border none
              background #f2f2f2
              cursor pointer
              transition all 0.1s ease
              &:hover
                background #cccccc
</style>