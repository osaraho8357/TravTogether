<template lang='pug'>
.main
  .top
    a(href="/")
      img#logo(src="@/assets/TravTogether-logo.png")
    hr#separator
  .bottom
    p#title To continue, log in to TravTogether
    .social-login
      .google
        button#social(@click="googleSignin")
          p.fab.fa-google &nbsp;&nbsp;CONTINUE WITH GOOGLE
      .github
        button#social(@click="githubSignin")
          p.fab.fa-github &nbsp;&nbsp;CONTINUE WITH GITHUB
    .or-line
      #sep
        hr
      #or
        p OR
      #sep
        hr
    .login-input
      form.form(@submit.prevent="login")
        .email
          .label
            label#label(for="email") Email address
          .input
            input#email(name="email" type="email" placeholder="  Email address"
            v-model="userForm.email")
        .password
          .label
            label#label(for="password") Password
          .input
            input#password(name="password" type="password" placeholder="  Password"
            v-model="userForm.password")
        .button
            button#button(type="submit") LOG IN
    hr
    .signup
      .content
        p#title Don't have an account?
        router-link#button(to="/signup") SIGN UP FOR TRAVTOGETHER
</template>


<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'
// import router from '@/router'
// import axios from 'axios'
export default {
  setup() {
    const store = useStore();
    const newUserForm = {
      email: "",
      nickname: "",
      fromFirebase: false,
      password: "",
      gender: "",
      age: "",
      ethnicity: "",
      location: "",
      userPhotoURL: "",
    }
    const userForm = {
      email: "",
      password: "",
    }
    return {
      store, newUserForm, userForm,
      user: computed(() => store.getters['user/getUser'])
    }
  },

  watch: {
    user(newValue, oldValue) {
      console.log("New Value: " + newValue, "Old Value: " + oldValue)
      document.location.href="/"
    }
  },

  methods: {
    fillupNewUserForm(user) {
      this.newUserForm.email = user.email
      this.newUserForm.nickname = user.displayName
      this.newUserForm.password = user.l
      this.newUserForm.userPhotoURL = user.photoURL
    },
    fillupUserForm(user) {
      this.userForm.email = user.email
      this.userForm.password = user.l
    },
    async googleSignin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        await firebase.auth().signInWithPopup(provider)
        console.log("Logged in with google account")
        const googleUser = firebase.auth().currentUser
        console.log(googleUser)
        this.newUserForm.fromFirebase = true
        this.fillupNewUserForm(googleUser)
        console.log(this.newUserForm)
        await this.registerNewUser()
        this.fillupUserForm(googleUser)
        await this.login()
      } catch(error) {
        console.log(error.message)
      }
    },
    githubSignin() {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(provider).then(async (result) => {
        console.log("Logged in with github account")
        const user = result.user
        console.log(user);
        this.newUserForm.fromFirebase = true
        this.fillupNewUserForm(user)
        await this.registerNewUser()
        this.fillupUserForm(user)
        await this.login()
      }).catch((error) => {
        console.log(error.message)
      })
    },
    async login() {
      await this.store.dispatch('user/Login', this.userForm)
    },
    async registerNewUser() {
      await this.store.dispatch('user/RegisterNewUser', this.newUserForm)
    },
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
  .bottom
    #title
      font-size 15px
      font-weight bold
      text-align center
    .social-login
      .google, .github
        margin 10px
        #social
          position relative
          left 50%
          transform translateX(-50%)
          width 400px
          border-radius 20px
          background white
          border solid 1px black
          text-align center
          transition 0.3s ease
          background black
          color white
          &:hover 
            background grey
          p
            font-weight bold
            position relative
            top 50%
            transform translateY(50%)
            font-size 15px
    .or-line
      display flex
      justify-content center
      align-content center
      #sep
        width 200px
        margin 0 20px
      #or
        font-weight bold
        font-size 12px
        p
          position relative 
          top 50%
          transform translateY(-50%)
    .login-input
      display flex
      justify-content center
      .form
        width 400px
        .email
          .label
            font-weight bold
            #label
              float left
          .input
            #email
              height 40px
              width 400px
        .password
          margin 20px 0 10px 0
          .label
            font-weight bold
            #label
              float left
          .input
            #password
              height 40px
              width 400px
        .button
          display flex
          justify-content center
          #button
            margin 2px
            font-weight bold
            font-size 15px
            padding 10px
            border none
            background #f2f2f2
            cursor pointer
            transition all 0.1s ease
            &:hover
              background #cccccc
    .signup
      display flex
      justify-content center
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
</style>