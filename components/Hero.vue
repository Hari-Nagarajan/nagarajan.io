<template>
  <div id="heroImg">
    <div id="photoCol">
      <picture>
        <source :srcset="bridgePhoto" type="image/jpeg"/>
        <img :src="bridgePhoto" alt="photo of Hari"/>
      </picture>
    </div>
  </div>
</template>

<script setup>
import bridgePhoto from '~/assets/images/bridgePhoto.jpeg'
</script>

<style scoped>

  #heroImg {
    padding: 0px !important;
    max-width: 30%;
    padding: 0px !important;
    flex-basis: 25%;
    margin-left: auto;
    margin-right: auto;
  }

  #photoCol {
    margin: 0px !important;
    padding: 0px !important;
    max-width: 100%;
    flex-basis: 25%;
    position: relative;
    height: 100%;
    z-index: 0;
  }

  #photoCol:before {
    content: "";
    display: block;
    position: absolute;
    height: 95%;
    width: 95%;
    top: 2%;
    left: 5%;
    z-index: -1;
    background: #b1cfe4;
    -webkit-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
    background-image: url("~/assets/images/bridgePhoto.jpeg");
    background-size: cover;
    border: 4px double #E77470;
    opacity: 0.4;
  }

  #photoCol:after {
    content: "";
    display: block;
    position: absolute;
    height: 95%;
    width: 95%;
    top: 0;
    left: 0%;
    z-index: -1;
    -webkit-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
    background-image: url("~/assets/images/bridgePhoto.jpeg");
    border: 4px double #E77470;
    background-size: cover;
    opacity: 0.4;
  }

  #photoCol img {
    width: 100%;
    -webkit-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    transform: rotate(5deg);
    border: 4px double #E77470;
  }

  @media (max-width: 440px) {
    #heroImg {
      max-width: 50%;
      margin-left: 1em;
      margin-right: 1em;
    }

    #photoCol {
      max-width: 100%;
      margin-left: 1em;
      margin-right: 1em;
    }

    #photoCol img {
    }

  }

</style>
