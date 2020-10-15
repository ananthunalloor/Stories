<template>
  <div class="gallery">
    <div class="columns is-gapless is-multiline is-mobile images-container">
  <div class="column is-one-quarter image-holder" v-for="n in 12" :key="n">
    {{n}}
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.gallery{
  .images-container{
    .image-holder{
      height: 100px;
    }
  }
}
</style>
