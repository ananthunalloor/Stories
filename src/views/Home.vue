<template>
  <div class="home">
    <Navbar/>
    <Landing/>
    <Aboutme/>
    <Gallery/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";
import Navbar from "@/components/Navbar.vue";
import Aboutme from "@/components/Aboutme.vue";
import Gallery from "@/components/Gallery.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Home",
  components: {
    Navbar,
    Landing,
    Aboutme,
    Gallery,
    Contact,
    Footer,
  }
};
</script>
