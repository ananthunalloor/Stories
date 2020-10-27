<template>
    <div class="columns m-0 p-0 main-container">
  <div class="column is-half p-0 left-banner is-hidden-touch">
    <div class="left-banner-icons">
      <div class="p-2"> <span class="icon is-large social-icons"><i class="fab fa-2x fa-instagram"></i></span></div>
      <div class="p-2"> <span class="icon is-large social-icons"><i class="fab fa-2x fa-facebook"></i></span></div>
      <div class="p-2"> <span class="icon is-large social-icons"><i class="fab fa-2x fa-youtube"></i></span></div>
      <div class="p-2"> <span class="icon is-large social-icons"><i class="fab fa-2x fa-whatsapp"></i></span></div>
      <div class="p-2"> <span class="icon is-large social-icons"><i class="fab fa-2x fa-twitter"></i></span></div>
    </div>
  </div>
  <div class="column p-0 right-banner">
    <div class="right-banner-text has-text-centered">
      <h1 class="right-large-text">ANAND</h1>
      <h1 class="is-size-2">PANAYARMADAM</h1>
      </div>
          <div class="right-banner-icons is-hidden-desktop">
      <div class="p-2"> <span class="icon is-large social-icons"><i class="fab fa-2x fa-instagram"></i></span></div>
      <div class="p-2"> <span class="icon is-large social-icons"><i class="fab fa-2x fa-facebook"></i></span></div>
      <div class="p-2"> <span class="icon is-large social-icons"><i class="fab fa-2x fa-youtube"></i></span></div>
      <div class="p-2"> <span class="icon is-large social-icons"><i class="fab fa-2x fa-whatsapp"></i></span></div>
      <div class="p-2"> <span class="icon is-large social-icons"><i class="fab fa-2x fa-twitter"></i></span></div>
    </div>
    <div class="right-banner-background"></div>
  </div>
  <div class="intro-banner">
    <div class="intro-banner-text">
      <h1 class="hide"><span class="text">Welcome</span></h1>
      <h1 class="hide"><span class="text">To</span></h1>
      <h1 class="hide"><span class="text">Stories</span></h1>
      <h1 class="hide"><span class="text">By</span></h1>
      <h1 class="hide"><span class="text">Anand</span></h1>
    </div>
  </div>
    </div>
</template>
<script>
import { TimelineLite } from 'gsap'
export default {
  name: "Landing",
    mounted() {
    const tl = new TimelineLite({defaults:{ease:"power1.out"}});
    tl.to(".text", {y:"0%", duration: 1, stagger:0.25, delay:0.5});
    tl.to(".intro-banner", {y:"-100%", duration: 1, delay:0.5});
    tl.fromTo(".right-banner-text",{opacity:0},{opacity:1, duration:1, delay:0.5},'-=1');
    tl.fromTo(".social-icons",{opacity:0},{opacity:1, duration:0.5, stagger:-0.15},'-=1');
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles/variables.scss";
.main-container{
  height: 100vh;
  background-color: $primary;
  .right-banner{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .right-banner-text{
      z-index: 2;
      color: white;
      .right-large-text{
        font-size: 6rem;
      }
    }
    .right-banner-icons
    {
      position: absolute;
      padding: 1rem;
      display: flex;
      flex-direction: row;
      bottom: 2.5rem;
      color: white;
      z-index: 2;
    }
    .right-banner-background{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      background-color: $primary;
      background-image: url("../assets/images/photsi.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-blend-mode: multiply;
      opacity: .28;
    }
  }
  .left-banner{
    background-image: url("../assets/images/anand.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    .left-banner-icons{
      position: absolute;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      bottom: 2rem;
      left: 1.5rem;
      color: white;
    }
  }
  .intro-banner{
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    .intro-banner-text{
      color: white;
      font-size: 3rem;
      font-weight: 900;
      .hide{
        background-color: black;
        overflow: hidden;
        span{
          transform: translateY(100%);
          display: inline-block;
        }
      }
    }
  }
}
</style>
