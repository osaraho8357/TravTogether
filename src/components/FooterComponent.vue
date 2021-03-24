<template lang='pug'>
.main
  .top
    .logo
      p.fas.fa-map-marker-alt
      p TravTogether
    .info
      ul
        p#little-title COMPANY
        li About
        li Jobs
        li For the Record
      ul
        p#little-title COMMUNITIES
        li Developers
        li Advertising
        li Investors
        li Vendors
      ul
        p#little-title USEFUL LINKS
        li Supports
        li Web Player
        li Free Mobile App
    .social-media
      p#social.fab.fa-facebook
      p#social.fab.fa-instagram
      p#social.fab.fa-twitter
  .bottom
    .left
      ul
        li Legal
        li Privacy Center
        li Privacy Policy
        li Cookies
        li About Ads
    .right
      span#right-top
        p USA
        p.fas.fa-flag-usa
</template>


<script>
export default {

}
</script>


<style lang='stylus' scoped>
.main
  background black 
  color white
  font-family Arial, Helvetica, sans-serif
  .top
    display flex 
    justify-content space-between
    .logo
      width 20%
      font-size 30px
      font-weight bold
      display flex
      align-items center
      justify-content center 
      p
        cursor pointer
        padding 0 3px 
        position relative 
    .info
      width 70%
      display flex
      ul
        display inline
        margin 0 50px
        margin-top 80px
        min-width 170px
        text-align center
        li
          text-align center
          transition 0.1s ease 
          padding 15px 0
          cursor pointer
          list-style none 
          &:hover 
            color #eaaeea
        #little-title
          color grey 
          font-weight bold 
          font-size 15px
          cursor text
    .social-media
      width 20%
      font-size 17px
      display flex
      #social
        display flex 
        position relative 
        top 15%
        height 35px
        width 35px
        justify-content center 
        align-items center 
        border-radius 80%
        box-shadow 0px 0px 15px #eaaeea
        margin 20px
        cursor pointer
        transition 0.2s ease 
        &:hover 
          transform scale(1.1)
          color #eaaeea
  .bottom
    color grey 
    display flex 
    justify-content space-between
    font-size 12px
    .left
      width 600px
      ul 
        position relative 
        top 30%
        margin-left 50px
        li
          display inline
          padding 0 20px
          cursor pointer
          &:hover 
            color #eaaeea
    .right
      width 300px
      #right-top
        display flex 
        align-items center 
        p,li
          margin 0 3px
        li
          font-size 25px
        p
          cursor pointer
          &:hover
            color #eaaeea
</style>