<template>
  <div class="background">
    <b-container>
      <div class="row justify-content-center" data-aos="zoom-in">
        <div class="col-12 col-lg-11">
          <Counterdown
            date="17 Dec 2021 00:00:00 GMT"
            position="bottom"
          />
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
    url("~@/static/img/bg1.png");
  background-size: contain, cover;
  background-position: center;
  padding: 174px 0;
}

@media screen and (max-width: 992px) {
  .background {
    padding: 70px 0;
  }
}
</style>
