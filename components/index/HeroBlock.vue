<template>
  <div class="hero-wrapper first-block-wrapper">
    <div class="ps-container">
      <div class="hero">
        <h1 class="creepster-heading hero__heading">
          Welcome To <strong class="orange">Halloween</strong> <b class="pink">Bash</b>
        </h1>
        <div class="hero-logos">
          <img v-for="(src, idx) in $options.logos" :key="idx" :src="src" alt="" class="hero-logos__img">
        </div>
        <div class="hero-exclusive">
          <div class="hero-exclusive__title">
            An Exclusive <strong>"Create Your Perfect Monster"</strong> Event
          </div>
          <div class="hero-exclusive__date">
            24-31 October
          </div>
          <div class="hero-exclusive__only-on">
            Only on <div class="crypto-com-nft-logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBlock',
  logos: [
    require('@/static/img/halloween/index/hero/logos/logo 2.svg'),
    require('@/static/img/halloween/index/hero/logos/madhare.svg'),
    require('@/static/img/halloween/index/hero/logos/tmk.svg'),
    require('@/static/img/halloween/index/hero/logos/alphabot.svg'),
    require('@/static/img/halloween/index/hero/logos/boomer.svg'),
    require('@/static/img/halloween/index/hero/logos/carcayous.svg'),
    require('@/static/img/halloween/index/hero/logos/ape.svg'),
  ]
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/components/halloween/index/HeroBlock";
</style>
