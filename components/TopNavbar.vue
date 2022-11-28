<template>
  <div class="nbr-wrapper" :class="{opened: isOpened}">
<!--        <div class="notification">-->
<!--          BREEDING STARTS ON 19TH OF AUGUST. FOR MORE INFO <nuxt-link to="/breeding">CLICK HERE</nuxt-link>-->
<!--          <button class="notification__close" @click="displayNotification = false">&times;</button>-->
<!--        </div>-->
    <div class="ps-container">
      <div class="nbr">
        <img src="/img/halloween/logo.png" alt="logo" class="nbr__logo">
        <div class="nbr-menu-desktop desktop-only">
          <nuxt-link
            v-for="link in $options.menuItems"
            :key="link.title"
            class="nbr-menu-desktop__item"
            :to="link.href"
          >
            {{ link.title }}
          </nuxt-link>
          <!--          <nuxt-link to="/verification" class="nbr-menu-desktop__item">-->
          <!--            Discord Verification-->
          <!--          </nuxt-link>-->
          <a href="https://halloween.psychokitties.io" target="_blank" class="nbr-menu-desktop__enter-link">
            ENTER HALLOWEEN BASH (LIVE)
          </a>
        </div>
        <div class="nbr__burger-wrapper mobile-only">
          <a class="not-live" href="https://halloween.psychokitties.io" target="_blank">
            Enter halloween bash <br> (live)
          </a>
          <div class="nbr__burger" :class="{opened: isOpened}" @click="isOpened = !isOpened">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
    
    <portal to="app">
      <div class="ps-container nbr-mobile-container mobile-only" :class="{opened: isOpened}">
        <div class="nbr-mobile">
          <div class="nbr-mobile-menu">
            <nuxt-link
              v-for="link in $options.menuItems"
              :key="link.title"
              class="nbr-mobile-menu__item"
              :to="link.href"
              @click.native="isOpened = false"
            >
              {{ link.title }}
            </nuxt-link>
            <!--            <nuxt-link to="/verification" class="nbr-mobile-menu__item" @click="isOpened = false">-->
            <!--              Discord Verification-->
            <!--            </nuxt-link>-->
          </div>
        </div>
      </div>
    </portal>
  </div>
</template>

<script>
import constants from '@/constants.js'

export default {
  name: 'TopNavbar',
  menuItems: constants.HALLOWEEN_NAVBAR_MENU_ITEMS,
  data () {
    return {
      isOpened: false,
      displayNotification: true
    }
  },
  watch: {
    isOpened: {
      handler(newVal) {
        if (newVal) {
          document.querySelector('html').classList.add('no-scroll')
        } else {
          document.querySelector('html').classList.remove('no-scroll')
        }
      },
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/scss/components/halloween/TopNavbar.scss";
</style>
