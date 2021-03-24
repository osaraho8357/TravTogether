<template lang='pug'>
.main
  .background
</template>


<script>
export default {
  data() {
    return {
      images: [
        require("../assets/homepage1.jpg"),
        require("../assets/homepage2.jpg"),
        require("../assets/homepage3.jpg"),
        require("../assets/homepage4.jpg"),
        require("../assets/homepage5.jpg"),
        require("../assets/homepage6.jpg"),
      ]
    }
  },
  methods: {
    changeBackgroundImage() {
      const background = document.getElementsByClassName("background")[0];
      let i = 0;
      background.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(" + this.images[5] + ")";
      setTimeout(() => {
        background.style.opacity = 0;
      }, 3500)
      setInterval(() => {
        setTimeout(() => {
          background.style.opacity = 0;
        }, 3500)
        setTimeout(() => {
          background.style.opacity = 1;
          background.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(" + this.images[i] + ")";
          if (i < this.images.length - 1) {
            i++;
          } else {
            i = 0;
          }
        }, 10)
      }, 4000);
    },
  },
  mounted() {
    this.changeBackgroundImage();
  }
}
</script>


<style lang='stylus' scoped>
.main
  .background
    background-size 100% 100%
    min-height 70vh
    transition 1s ease-in
    // transition background 300ms ease-in 200ms;
</style>