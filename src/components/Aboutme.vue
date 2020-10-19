<template>
  <div class="aboutme" id="#aboutme">
    <div class="am-left-image is-hidden-touch"></div>
    <div class="columns p-4 am-main-container">
      <div class="column is-two-fifths is-hidden-touch am-container-left"></div>
      <div class="column am-container-right">
        <div class="is-hidden-desktop am-mobile-image">
          <figure class="image is-128x128">
  <img class="is-rounded" src="../assets/images/anand256.jpg">
</figure>
        </div>
        <div><h1 class="is-size-4">ABOUT ME</h1></div>
        <div class="am-right-text">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aboutme"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles/variables.scss";
.aboutme {
  width: 100vw;
  height: 100vh;
  background-color: $primary;
  background-image: url("../assets/images/cameraunsplash.jpg");
  background-repeat: no-repeat;
  background-position: center left;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  .am-main-container {
    background-color: rgba($color: white, $alpha: 0.83);
    width: 100%;
    margin: 5vh 10vw;
    position: relative;
    .am-container-right {
      text-align: center;
      .am-right-text {
        text-align: center;
        padding: 5vh 5vw;
      }
    }
    .am-mobile-image{
      color: black;
      display: flex;
      justify-content: center;
      padding-bottom: 1.5rem;
      img{
        object-position: left top;
        width: 128px;
        height: 128px;
      }
    }
  }
  .am-left-image {
    position: absolute;
    background-color: magenta;
    background-image: url("../assets/images/anand-am.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
    width: 30%;
    height: 60%;
    left: 13%;
    z-index: 2;
  }
}
</style>
