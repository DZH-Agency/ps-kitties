<template>
  <div class="footer-wrapper">
    <div class="ft-wrapper">
      <div class="ps-container">
        <div class="ft">
          <img src="/logo.png" alt="" class="ft__logo">
          <div class="ft-menu desktop-only">
            <a
              :href="item.href"
              :key="item.title"
              class="ft-menu__item"
              v-for="item in $options.menuItems"
            >
              {{ item.title }}
            </a>
<!--            <nuxt-link to="/verification" class="ft-menu__item">-->
<!--              Discord Verification-->
<!--            </nuxt-link>-->
          </div>
          <div class="ft-social__terms-box">
            <nuxt-link to="/terms-and-conditions" class="mobile-only ft-social__terms">PK/PM Terms & Conditions</nuxt-link>
            <nuxt-link to="/halloween-terms-and-conditions" class="mobile-only ft-social__terms">Halloween Bash Terms & Conditions</nuxt-link>
          </div>
          
          <div class="ft-social mobile-only">
            <a class="ft-social__item" :href="social.href" target="_blank" v-for="social in $options.socialItems">
              <img :src="social.img" alt="social icon">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="privacy-wrapper">
      <div class="ps-container">
        <div class="privacy">
          <div class="privacy__text">
            Copyright © 2022 PsychoKitties.
            <br class="mobile-only">
            All Right Reserved
          </div>
          <div class="privacy-social desktop-only">
            <nuxt-link to="/terms-and-conditions" class="privacy-social__terms">PK/PM Terms & Conditions</nuxt-link>
            <nuxt-link to="/halloween-terms-and-conditions" class="privacy-social__terms">Halloween Bash Terms & Conditions</nuxt-link>
            <a class="privacy-social__item" :href="social.href" target="_blank" v-for="social in $options.socialItems">
              <img :src="social.img" alt="social icon">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import constants from '@/constants.js'

export default {
  name: 'TheFooter',
  menuItems: constants.NAVBAR_MENU_ITEMS,
  socialItems: [
    { img: require('static/TheFooter/twitter.png'), href: 'https://twitter.com/PsychoKittiesOG' },
  ]
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/TheFooter.scss";
</style>
