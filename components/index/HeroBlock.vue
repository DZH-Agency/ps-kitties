<template>
  <div class="hero-wrapper first-block-wrapper">
    <div class="ps-container">
      <div class="hero">
        <h1 class="creepster-heading hero__heading">
          Welcome To <strong class="orange">Halloween</strong> <b class="pink">Bash</b>
        </h1>
        <div class="hero-logos">
          <picture
            v-for="(img, idx) in $options.logos"
            :key="idx"
          >
            <source :srcset="img.mobile" media="(max-width: 1200px)" />
            <img  :src="img.desktop" alt="" class="hero-logos__img">
          </picture>
          
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
    {
      desktop: require('@/static/img/halloween/index/hero/logos/logo 2.svg'),
      mobile: require('@/static/img/halloween/index/hero/logos/mobile/logo 1.svg'),
    },
    {
      desktop:   require('@/static/img/halloween/index/hero/logos/madhare.svg'),
      mobile:   require('@/static/img/halloween/index/hero/logos/mobile/boomer.svg'),
    },
    {
      desktop:   require('@/static/img/halloween/index/hero/logos/tmk.svg'),
      mobile:   require('@/static/img/halloween/index/hero/logos/mobile/alphabot.svg'),
    },
    {
      desktop:   require('@/static/img/halloween/index/hero/logos/alphabot.svg'),
      mobile:   require('@/static/img/halloween/index/hero/logos/mobile/ape.svg'),
    },
    {
      desktop:   require('@/static/img/halloween/index/hero/logos/boomer.svg'),
      mobile:   require('@/static/img/halloween/index/hero/logos/mobile/pk.svg'),
    },
    {
      desktop:   require('@/static/img/halloween/index/hero/logos/carcayous.svg'),
      mobile:   require('@/static/img/halloween/index/hero/logos/mobile/tmk.svg'),
    },
    {
      desktop:   require('@/static/img/halloween/index/hero/logos/ape.svg'),
      mobile:   require('@/static/img/halloween/index/hero/logos/mobile/carcayous.svg'),
    },
  ]
};



</script>

<style scoped lang="scss">
@import "../../assets/scss/components/halloween/index/HeroBlock";
</style>
