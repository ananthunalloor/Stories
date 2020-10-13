<template>
  <div class="storiespage">
    <Navbar/>
      <div class="storeis"> <h1>this is stories</h1></div>
    <Footer/>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
  }
};
</script>