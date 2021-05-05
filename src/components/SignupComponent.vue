<template lang='pug'>
.main
  .top
    a(href="/")
      img#logo(src="@/assets/TravTogether-logo.png")
    hr#separator
  p#title Sign up with your email address
  .bottom
    .form
      form#form(@submit.prevent="submit")
        .email
          .label
            label#label(for="email") What's your email?
          .input
            input#email(name="email" type="email" placeholder="  Enter your email."
            v-model="registrationForm.email")
        .confirm-email
          .label
            label#label(for="confirm-email") Confirm your email
          .input
            input#confirm-email(name="confirm-email" type="email" placeholder="  Enter your email again."
            v-model="registrationForm.confirmEmail")
        .password
          .label
            label#label(for="password") Create a password
          .input
            input#password(name="password" type="password" placeholder="  Create a password."
            v-model="registrationForm.password")
        .nickname
          .label
            label#label(for="nickname") What should we call you?
          .input
            input#nickname(name="nickname" type="text" placeholder="  Enter a nickname."
            v-model="registrationForm.nickname")
        .gender
          .label
            label#label(for="gender") Gender
          .radios
            form
            #radio
              label#label(for="Male") Male
              input#male(type="radio" value="Male" name="gender" v-model="registrationForm.gender")
            #radio
              label#label(for="Female") Female
              input#female(type="radio" value="Female" name="gender" v-model="registrationForm.gender")
            #radio
              label#label(for="Non-binary") Non-binary
              input#non-binary(type="radio" value="Non-binary" name="gender" v-model="registrationForm.gender")
        .age
          .label
            label#label(for="age") Age
          .select
            select#age(v-model="registrationForm.age")
              option(label='', selected disabled) ---
              option(value='10-') 10-
              option(value="10-20") 10 - 20
              option(value="21-30") 21 - 30
              option(value="31-40") 31 - 40
              option(value="41-50") 41 - 50
              option(value="51-60") 51 - 60
              option(value="60+") 60+
        .ethnicity
          .label
            label#label(for="ethnicity") Ethnicity
          .select
            select#ethnicity(v-model="registrationForm.ethnicity")
              option(label='', selected disabled) ---
              option(value="American Indian / Alaska Native") American Indian / Alaska Native
              option(value="Asian") Asian
              option(value="Black / African American") Black / African American
              option(value="Hispanic / Latino") Hispanic / Latino
              option(value="Native Hawaiian / Other Pacific Islander") Native Hawaiian / Other Pacific Islander
              option(value="White") White
        .location
          .label
            label#label(for="location") Location
          .select
            select#location(v-model="registrationForm.location")
              option(label='', selected disabled) ---
              option(:value="location.city+', '+location.state+', '+location.country" v-for="(location, index) in locations" :key="index")
                .with-state(v-if="['USA', 'CHN', 'RUS'].includes(location.iso3)")
                  | {{ location.city }}, {{ location.state }}, {{ location.country }}
                .without-state(v-else)
                  | {{ location.city }}, {{ location.country }}
        .button
          button#button(type="submit") SIGN UP
        .login
          p Have an account? &nbsp;
          router-link(to="/login") Log in
</template>


<script>
import {useStore} from 'vuex'
import router from '@/router'
import {DEFAULT_PHOTO_URL} from '../store/urls'
export default {
  setup() {
    const store = useStore()
    const registrationForm = {
      email: "",
      nickname: "",
      gender: "",
      age: "",
      ethnicity: "",
      location: "",
      fromFirebase: false,
      userPhotoURL: DEFAULT_PHOTO_URL,
      password: "",
    }
    return {
      store, registrationForm,
    }
  },
  data() {
    return {
      locations: [],
    }
  },
  mounted() {
    this.getLocations()
  },
  methods: {
    async getLocations() {
      this.locations = require('../assets/files/worldcities.json')
    },
    async submit() {
      if (this.registrationForm.email === "" ||
      this.registrationForm.password === "") {
        alert("Please enter your email and password");
      } else {
        try {
          await this.store.dispatch('user/RegisterNewUser', this.registrationForm)
          router.push('/login');
        } catch (error) {
          console.log(error + " Registration Error");
        }
      }
    }
  },
}
</script>


<style lang='stylus' scoped>
.main
  .top
    #logo
      position relative
      left 50%
      transform translateX(-50%)
      width 300px
      height auto
      margin 10px
      cursor pointer
        
  #title
    font-size 15px
    font-weight bold
    text-align center
  .bottom
    display flex
    justify-content center
    .form
      width 400px
      #form
        .email
          display grid
          justify-content center
          margin-bottom 30px
          .label
            font-weight bold
            #label
              float left
          .input
            #email
              height 40px
              width 400px
        .confirm-email
          display grid
          justify-content center
          margin-bottom 30px
          .label
            font-weight bold
            #label
              float left
          .input
            #confirm-email
              height 40px
              width 400px
        .password
          display grid
          justify-content center
          margin-bottom 30px
          .label
            font-weight bold
            #label
              float left
          .input
            #password
              height 40px
              width 400px
        .nickname
          display grid
          justify-content center
          margin-bottom 20px
          .label
            font-weight bold
            #label
              float left
          .input
            #nickname
              height 40px
              width 400px
        .gender
          display grid
          justify-content center
          .label
            width 400px
            #label
              font-weight bold
              float left
          .radios
            display flex
            justify-content space-between
            margin 0 30px
            #radio
              #male, #female, #non-binary
                margin 0 10px
        .age
          display grid
          justify-content center
          margin-bottom 20px
          .label
            #label
              float left
              font-weight bold
          .select
            #age 
              width 400px
              background white
              border solid 1px #ded5d5
              height 30px
              appearance none
        .ethnicity
          display grid
          justify-content center
          margin-bottom 20px
          .label
            #label
              float left
              font-weight bold
          .select
            #ethnicity 
              width 400px
              background white
              border solid 1px #ded5d5
              height 30px
              appearance none
        .location
          display grid
          justify-content center
          margin-bottom 20px
          .label
            #label
              float left
              font-weight bold 
          .select
            #location 
              width 400px
              background white
              border solid 1px #ded5d5
              height 30px
              appearance none
        .button
          #button
            margin 2px
            font-weight bold
            font-size 15px
            border-radius 20px
            width 400px
            padding 12px 20px
            border none
            background black
            color white
            cursor pointer
            transition all 0.3s ease
            text-decoration none
            &:hover 
              background grey
        .login
          display flex
          justify-content center
          margin-top 20px
</style>