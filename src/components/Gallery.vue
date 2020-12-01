<template>
  <div class="gallery">
    <div class="columns is-vcentered m-0 gallery-header">
      <div class="column has-text-centered gallery-text"><h1>STORIES BY ANAND</h1></div>
    </div>
    <div class="columns is-gapless is-multiline m-0 images-container">
  <div class="column is-one-quarter image-holder" v-for="n in 16" :key="n">
          <figure class="image is-square">
  <img src="https://bulma.io/images/placeholders/480x480.png">
</figure>
  </div>
</div>
    <div class="columns m-0 gallery-footer">
      <div class="column gallery-btn">
        <button class="button is-danger is-inverted is-outlined">Give me MORE</button>
        </div>
    </div>
  </div>
</template>

<script>
import { database } from '../firebase'
export default {
  name: "Gallery",
};
var ref = database.ref('Photos');
ref.once('value',gotData,errData);
function gotData(data) {
  var snapdata = data.val();
  var rawdata = JSON.parse(JSON.stringify(snapdata));
  for(var x in rawdata){
    console.log(rawdata[x].url);
    
  }
  return(rawdata)
}
function errData(err) {
  console.log(err);
  //var barnav;
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.gallery{
  margin: auto;
  background: rgb(100,87,166);
background: linear-gradient(22deg, rgba(100,87,166,1) 0%, rgba(7,2,13,1) 100%);
  .gallery-header{
    width: 100%;
    min-height: 50vh;
    height: auto;
    background-image: url("../assets/images/anandstoreis.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    .gallery-text{
      h1{
        font-size: 5rem;
       color: white;
      }
    }
  }
  .images-container{
    .image-holder{
      background-color: white;
    }
  }
  .gallery-footer{
    width: 100%;
    height: 20vh;
    .gallery-btn{
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
    }
  }
}
</style>
