<template>
  <b-navbar toggleable="lg" type="dark">
    <b-container class="header">
      <div class="d-flex justify-content-between w-100">
        <b-navbar-brand href="#">
          <img class="logo" src="/img/logo.png" alt="logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />
      </div>

      <b-collapse id="nav-collapse" class="mt-5 mt-lg-0" is-nav>
        <!-- Right aligned nav items -->
        <template v-if="isStreamPage">
          <div
            v-if="isStreamPage"
            class="mobile-user"
            :class="{'active': isUserPopupShown}"
            @click="isUserPopupShown = !isUserPopupShown"
          >
            Username <i class="mobile-user__arrow" />
          </div>
          <div
            class="mobile-user-popover"
            :class="{active: isUserPopupShown}"
            @click.stop="isUserPopupShown = false"
          >
            <div v-b-toggle.nav-collapse class="mobile-user-popover__item" @click="editProfile">
              <i class="edit" /> Edit profile
            </div>
            <a :href="logoutHref" class="mobile-user-popover__item">
              <i class="logout" /> Logout
            </a>
          </div>
        </template>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            href="#"
            class="mr-4"
            @click.prevent="goTo('body')"
          >
            Home
          </b-nav-item>
          <b-nav-item
            href="#"
            class="mr-4"
            @click.prevent="goTo('#story')"
          >
            Story
          </b-nav-item>
          <b-nav-item
            href="#"
            class="mr-4"
            @click.prevent="goTo('#about')"
          >
            About
          </b-nav-item>
          <b-nav-item
            href="#"
            class="mr-4"
            @click.prevent="goTo('#artist')"
          >
            Artist
          </b-nav-item>
          <b-nav-item
            href="#"
            target="_blank"
            class="mr-4"
            @click.stop="$router.push('/verification')"
          >
            Holder Verification
          </b-nav-item>
          <b-nav-item
            href="https://discord.gg/quantumfrenzy"
            target="_blank"
            class="mr-4"
          >
            Discord
          </b-nav-item>
          <b-nav-item
            href="https://twitter.com/PsychoKittiesOG"
            target="_blank"
            class="mr-4"
          >
            Twitter
          </b-nav-item>
          <b-nav-item
            href="https://docs.google.com/spreadsheets/d/14uz5spYRPdciX3ZZ8BH-wtSRCXD6celZvQiqW60GWqI/edit?usp=sharing"
            target="_blank"
            :class="{'mr-4': isStreamPage}"
          >
            Ranking Table
          </b-nav-item>
          <div
            v-if="isStreamPage"
            class="user"
            :class="{'active': isUserPopupShown}"
            @click="isUserPopupShown = !isUserPopupShown"
          >
            {{ username || 'Error' }} <i class="user__arrow" />
            <div class="user-popover" @click.stop="isUserPopupShown = false">
              <div class="user-popover__item" @click="$emit('edit-profile')">
                <i class="edit" /> Edit profile
              </div>
              <a :href="logoutHref" class="user-popover__item">
                <i class="logout" /> Logout
              </a>
            </div>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import config from '@/config.js'

export default {
  name: 'Header',
  props: {
    isStreamPage: {
      type: Boolean,
      default: false
    },
    username: {
      type: String,
      default: 'Error'
    }
  },
  data () {
    return {
      isUserPopupShown: false
    }
  },
  computed: {
    logoutHref () {
      return `${config.API_ROOT}/logout`
    }
  },
  methods: {
    editProfile () {
      this.$emit('edit-profile')
    },
    async goTo (elScrollTo = null) {
      if (this.isStreamPage) {
        await this.$router.push({ path: '/', query: { anchor: elScrollTo } })
      } else {
        document.querySelector(elScrollTo).scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.header {
  padding-top: 10px;
  padding-bottom: 10px;
}

.logo {
  width: 70px;
  height: 70px;
}

.navbar {
  padding-top: 0;
  padding-bottom: 0;
  z-index: 10;
}

.navbar-brand {
  padding: 0;
}

.nav-link {
  color: white !important;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  white-space: nowrap;
}

.nav-link:hover {
  color: #00d2fe !important;
}

.mobile-user {
  display: none;
}

.mobile-user-popover {
  display: none;
}

.user {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 115px;
  backdrop-filter: blur(20px);
  border: 1px solid #FF00FF;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  color: #EBEEF7;
}

i.user__arrow {
  margin-left: 10px;
  width: 20px;
  height: 20px;
  mask: url("~/static/img/verification/arrow.svg") no-repeat center / contain;
  background-color: #FF00FF;
  transform: rotate(180deg);
  transition: transform .3s;
}

.user.active i.user__arrow {
  background-color: #fff;
  transform: rotate(0);
}

.user.active .user-popover {
  opacity: 1;
  visibility: visible;
}

.user-popover {
  user-select: none;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s, visibility .3s;
  background: #322B45;
  box-shadow: 0 48px 48px rgba(0, 0, 0, 0.24);
  border-radius: 12px;
  padding: 20px 16px;
  min-width: 100%;
  right: 0;
  top: 100%;
  z-index: 10;
  margin-top: 12px;
  display: grid;
  grid-row-gap: 20px;
}

.user-popover__item {
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
  color: #EBEEF7;
}

.user-popover__item:hover {
  color: #FF4B3B;
}

.user-popover__item > i {
  width: 12px;
  height: 12px;
  background-color: #EBEEF6;
  margin-right: 10px;
}

.user-popover__item:hover > i {
  background-color: #FF4B3B;
}

i.edit {
  mask: url("~/static/img/verification/edit.svg") no-repeat center / contain;
}

i.logout {
  mask: url("~/static/img/verification/logout.svg") no-repeat center / contain;
}

@media screen and (max-width: 992px) {
  .navbar {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(9, 11, 33, 0.7);
    backdrop-filter: blur(15px);
    z-index: 10;
  }

  .navbar-collapse {
    height: 100vh;
  }

  .nav-item {
    display: flex;
    justify-content: center;
    margin: 0 !important;
    border-bottom: 1px solid #00d2fe;
  }

  .nav-item:first-child {
    border-top: 1px solid #00d2fe;
  }

  .nav-link {
    padding: 15px 0;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
  }

  .navbar-toggler {
    border: none;
  }

  .user {
    display: none;
  }

  .mobile-user {
    display: flex;
  }

  .mobile-user {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 115px;
    backdrop-filter: blur(20px);
    border: 1px solid #FF00FF;
    cursor: pointer;
    font-size: 18px;
    line-height: 23px;
    color: #EBEEF7;
  }

  i.mobile-user__arrow {
    margin-left: 10px;
    width: 20px;
    height: 20px;
    mask: url("~/static/img/verification/arrow.svg") no-repeat center / contain;
    background-color: #FF00FF;
    transform: rotate(180deg);
    transition: transform .3s;
  }

  .mobile-user.active i.mobile-user__arrow {
    background-color: #fff;
    transform: rotate(0);
  }

  .mobile-user-popover.active {
    max-height: 200px;
    padding: 20px 16px;
  }

  .mobile-user-popover {
    margin-bottom: 50px;
    max-height: 0;
    overflow: hidden;
    transition: max-height .3s, padding .3s;
    user-select: none;
    background: #322B45;
    box-shadow: 0 48px 48px rgba(0, 0, 0, 0.24);
    border-radius: 12px;
    padding: 0 16px;
    min-width: 100%;
    right: 0;
    top: 100%;
    z-index: 10;
    margin-top: 16px;
    display: grid;
    grid-row-gap: 20px;
  }

  .mobile-user-popover__item {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 18px;
    color: #EBEEF7;
  }

  .mobile-user-popover__item:hover {
    color: #FF4B3B;
  }

  .mobile-user-popover__item > i {
    width: 12px;
    height: 12px;
    background-color: #EBEEF6;
    margin-right: 10px;
  }

  .mobile-user-popover__item:hover > i {
    background-color: #FF4B3B;
  }

  i.edit {
    mask: url("~/static/img/verification/edit.svg") no-repeat center / contain;
  }

  i.logout {
    mask: url("~/static/img/verification/logout.svg") no-repeat center / contain;
  }
}
</style>
