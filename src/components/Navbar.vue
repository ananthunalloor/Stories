<template>
  <header>
    <nav
      class="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand px-4 py-3">
        <a class="" href="#">
          <img
            src="../assets/images/anandlogolong.svg"
            width="150"
            height="50"
          />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="showNav = !showNav" :class="{ 'is-active': showNav }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end pr-5">
          <div class="navbar-item">
            <router-link to="/" tag="a" class="navbar-item">HOME</router-link>
            <router-link to="/#aboutme" tag="a" class="navbar-item"
              >ABOUTME</router-link
            >
            <router-link to="/stories" tag="a" class="navbar-item"
              >STORIES</router-link
            >
            <router-link to="/#contact" tag="a" class="navbar-item"
              >CONTACT</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { gsap } from 'gsap'
export default {
  name: "Navbar",
      mounted() {
    const tl = new gsap.timeline({defaults:{ease:"power1.out"}});
    tl.fromTo(".navbar-menu",{opacity:0},{opacity:1, duration:3, stagger:0.5});
  },
    data() {
      return {
        showNav: false
      }
    }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
