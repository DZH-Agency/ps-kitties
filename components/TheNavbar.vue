<template>
  <div class="nbr-wrapper" :class="{opened: isOpened}">
    <div class="ps-container">
      <div class="nbr">
        <img src="/logo.png" alt="logo" class="nbr__logo">
        <div class="nbr-menu-desktop desktop-only">
          <nuxt-link
            v-for="link in $options.menuItems"
            :key="link.title"
            class="nbr-menu-desktop__item"
            :to="link.href"
          >
            {{ link.title }}
          </nuxt-link>
          <nuxt-link to="/verification" class="nbr-menu-desktop__item">
            Discord Verification
          </nuxt-link>
          <div
            class="nbr-menu-desktop__item socials"
          >
            Socials
            <div class="circle" />
            <div class="popup">
              <a href="https://twitter.com/PsychoKittiesOG" target="_blank" class="popup-item">
                <div class="popup-item__icon twitter" />
                <span>Twitter</span>
              </a>
              <a href="https://discord.gg/psychokitties" target="_blank" class="popup-item">
                <div class="popup-item__icon discord" />
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>
        <div class="nbr__burger mobile-only" :class="{opened: isOpened}" @click="isOpened = !isOpened">
          <div />
          <div />
          <div />
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
              @click="isOpened = false"
            >
              {{ link.title }}
            </nuxt-link>
            <a href="https://twitter.com/PsychoKittiesOG" target="_blank" class="nbr-mobile-menu__item">
              Twitter
            </a>
            <a href="https://discord.gg/psychokitties" target="_blank" class="nbr-mobile-menu__item">
              Discord
            </a>
            <nuxt-link to="/verification" class="nbr-mobile-menu__item" @click="isOpened = false">
              Discord Verification
            </nuxt-link>
          </div>
        </div>
      </div>
    </portal>
  </div>
</template>

<script>
import constants from '@/constants.js'

export default {
  name: 'TheNavbar',
  menuItems: constants.NAVBAR_MENU_ITEMS,
  data () {
    return {
      isOpened: false
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
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/scss/components/TheNavbar.scss";
</style>
