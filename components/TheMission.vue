<template>
  <div class="ms-wrapper">
    <div class="ps-container">
      <div class="ms">
        <div class="ms-item">
          <div class="ms-item-info">
            <div class="ms-item-info__title">
              Vision
            </div>
            <div class="ms-item-info__text">
              We believe the world is moving toward a reality where our digital life is worth more to us than our physical life. We want to bring our holders on the forefront of this transition and experience the exciting metaverse together - at the same time developing a real-world community that can count on each other.
            </div>
          </div>
          <div class="ms-item-img">
            <picture>
              <source srcset="/TheMission/vision-mobile.jpg" media="(max-width: 1200px)">
              <img src="/TheMission/vision.jpg" alt="portrait">
            </picture>
          </div>
        </div>
        <div class="ms-item reversed">
          <div class="ms-item-info">
            <div class="ms-item-info__title">
              Ethos
            </div>
            <div class="ms-item-info__text">
              Being psycho means overcoming your limiting beliefs, fears and doubts people have about you. It's about creating an empowered state of mind that lets you tackle life goals head on without guilt or shame about your true expression of self. Be psycho - it's a movement.
            </div>
          </div>
          <div class="ms-item-img reversed">
            <picture>
              <source srcset="/TheMission/ethos-mobile.png" media="(max-width: 1200px)">
              <img src="/TheMission/ethos.png" alt="portrait">
            </picture>
          </div>
        </div>
        <div class="ms-footer">
          <h2 class="ms-footer__heading">Mission</h2>
          <div class="ms-footer__text">To bring the most value to our holders as possible through real and virtual world utilities.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheMission'
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/TheMission.scss";
</style>
