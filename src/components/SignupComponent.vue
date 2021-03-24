<template lang='pug'>
.main
  .top
    img#logo(src="@/assets/TravTogether-logo.png")
    hr#separator
  p#title Sign up with your email address
  .bottom
    .form
      form#form(@submit="submit")
        .email
          .label
            label#label(for="email") What's your email?
          .input
            input#email(name="email" type="email" placeholder="  Enter your email.")
        .confirm-email
          .label
            label#label(for="confirm-email") Confirm your email
          .input
            input#confirm-email(name="confirm-email" type="email" placeholder="  Enter your email again.")
        .password
          .label
            label#label(for="password") Create a password
          .input
            input#password(name="password" type="password" placeholder="  Create a password.")
        .nickname
          .label
            label#label(for="nickname") What should we call you?
          .input
            input#nickname(name="nickname" type="text" placeholder="  Enter a nickname.")
        .gender
          .label
            label#label(for="gender") Gender
          .radios
            form
            #radio
              label#label(for="Male") Male
              input#male(type="radio" value="Male" name="gender")
            #radio
              label#label(for="Female") Female
              input#female(type="radio" value="Female" name="gender")
            #radio
              label#label(for="Non-binary") Non-binary
              input#non-binary(type="radio" value="Non-binary" name="gender")
        .age
          .label
            label#label(for="age") Age
          .select
            select#age
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
            select#ethnicity
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
            select#location
              option(label='', selected disabled) ---
              option(:value="location[0]+', '+location[4]+', '+location[1]" v-for="(location, index) in locations" :key="index")
                .with-state(v-if="['USA', 'CHN', 'RUS'].includes(location[6])")
                  | {{ location[0] }}, {{ location[4] }}, {{ location[1] }}
                .without-state(v-else)
                  | {{ location[0] }}, {{ location[1] }}
        .button
          button#button SIGN UP
        .login
          p Have an account? &nbsp;
          router-link(to="/login") Log in
          //- input(type="file" @change="onFileChange")
          //- p {{ locations }}[0]
          //- p {{ locations[0] }}
        //- <form enctype="multipart/form-data">
        //-   <input type="file" @change="onFileChange">
        //- </form>
        //- a(href="@/assets/files/worldcities_small.csv") Dpw
</template>


<script>
export default {
  setup() {
    const config = require('../assets/files/test.json')
    console.log(config)

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
      // const response = await fetch(WORLDCITIES);
      // const text = await response.text();
      // const locs = text.split('\n')
      // for (let i=1; i<locs.length-1; i++) {
      //   const lala = locs[i].split(',')
      //   this.locations.push(lala);
      // }
      const cities = await fetch('../assets/files/test.json')
      console.log(typeof(cities))
      const citiesJSON = await cities.json();
      console.log(citiesJSON)
      // this.locations = citiesJSON
      // console.log(this.locations)
    },
    // async onFileChange(e: any) {
    //   const reader = new FileReader();
    //   const file = e.target.files[0];
    //   reader.onload = (e: any) => {
    //     this.locations = e.target.result.split('\n')
    //     console.log(this.locations)
    //   }
    //   reader.readAsText(file);
    // },
    // addScript(script: string) {
    //   const parseScript = document.createElement('script')
    //   // parseScript.setAttribute('src', "https://unpkg.com/papaparse@5.3.0/papaparse.min.js")
    //   // https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js
    //   parseScript.setAttribute('src', script)
    //   document.head.appendChild(parseScript)
    //   console.log(script)
    // }
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