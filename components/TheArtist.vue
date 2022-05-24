<template>
  <div class="art-wrapper">
    <div class="ps-container">
      <div class="art">
        <div class="art-info">
          <h2 class="art-info__title">Artist</h2>
          <div class="art-info__text">
            Ugonzo is the Co-Founder and Creative Director of the PsychoKitties series and a psychedelic artist, who's creations are owned by the likes of Joe Rogan, Lex Fridman, Pauly Shore, Cody Gardbrandt from UFC, and Deron Williams from NBA.
            <br>
            <br>
            Ugonzo's passion for art started at an early age, when he copied famous paintings from Vincent Van Gogh and Salvador Dali. They inspired him to take it to the next level. Ugonzo started exhibiting his artwork in different galleries across different states of America as well as using different mediums of art.
            <br>
            <br>
            Ugonzo is considered to be one of the greatest psychedelic artists of our era.
          </div>
        </div>
        <div class="art-photo">
          <img class="art-photo__img" src="/TheArtist/artist.png" alt="artist"/>
          <a href="https://www.instagram.com/ugonzo_art/" target="_blank" class="art-photo__link">@ugonzo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheArtist'
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/TheArtist.scss";
</style>
