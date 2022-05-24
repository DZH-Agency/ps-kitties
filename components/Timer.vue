<template>
  <div class="background">
    <b-container>
      <div class="row justify-content-center" data-aos="zoom-in">
        <div class="col-12 col-lg-11">
          <Counterdown date="17 Dec 2021 00:00:00 GMT" position="top" />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
.background {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("~@/static/img/hero.png");
  background-size: contain, cover;
  background-position: center;
  padding-top: 157px;
  padding-bottom: 157px;
  background-repeat: no-repeat;
}

@media screen and (max-width: 992px) {
  .background {
    padding: 140px 0 50px;
  }
  h1 {
    font-size: 30px;
    text-shadow: 2px 1px 0px #f4ffe4;
    margin-bottom: 50px;
  }
}
</style>
