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
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
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
export default {
  name: "Navbar",
};
document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
