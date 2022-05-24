<template>
  <div class="verification">
    <verification-error-modal v-if="isErrorDisplayed" @close="isErrorDisplayed = false" />
    <!--    <stream-component v-if="isVerified" @verify-crypto="verifyCrypto" />-->
    <verification-in-process
      v-else-if="isVerificationInProcess"
      :has-error="isVerificationUnsuccessful"
      :is-success="isVerificationSuccessful"
      @proceed="proceedAfterVerification"
    />
    <div v-else class="verification-row">
      <div class="date">
        <div class="date__block">
          <img src="/img/verification/logo.png" alt="logo" class="date__logo">
          <div class="date__text">
            Please verify yourself to get access to our exclusive Discord channels:
          </div>
          <div class="date__date">
            Verified Holders <br>
            5+ PsychoKitty Holders <br>
            10+ PsychoKitty Holders
          </div>
          <div class="date-note">
            <div class="date-note__important">
              Important!
            </div>
            <div class="date__text">
              Before verification your Twitter handle has to be added to your <span class="date-note__logo" /> profile or the verification will fail.
            </div>
          </div>
        </div>
      </div>

      <div class="form">
        <div class="form__heading">
          Verification
        </div>
        <div class="form-authenticate">
          <template v-if="isUserAuthenticated">
            <a class="form-authenticate__btn" :href="twitterLogoutLink">
              <img src="/img/verification/twitter.svg" alt="twitter">
              Logout
            </a>
          </template>
          <template v-else>
            <span class="form__text form-authenticate__text">Authenticate via</span>
            <a class="form-authenticate__btn" :href="twitterAuthLink">
              <img src="/img/verification/twitter.svg" alt="twitter">
              Twitter
            </a>
          </template>
        </div>
        <div class="form__block">
          <div class="form__group">
            <label class="form__text" for="discord-name">Insert your Discord handle:</label>
            <input id="discord-name" v-model="discord" :disabled="!isUserAuthenticated" type="text" placeholder="e.g.PsychoMolly#4334">
            <div v-if="discord && !isDiscordHandleValid" class="error">
              Discord handle must contain <strong>#</strong> character
            </div>
          </div>
          <div class="form__group">
            <label class="form__text" for="username">
              Insert your <span class="form__crypto-img" /> username (case-sensitive)
            </label>
            <input id="username" v-model="username" :disabled="!isUserAuthenticated" type="text" placeholder="Your username">
          </div>
        </div>
        <div class="verification__hint">
          Having troubles with verification? Check out the process <a href="https://drive.google.com/file/d/1HtPmWpE8ra4IhcVm_vZA40xu4Jv2jJ8h/view" target="_blank">here</a>
        </div>
        <button :disabled="isVerifyDisabled" class="form__btn" @click="startVerifying">
          Verify
        </button>
        <button class="form__btn" @click="$router.push('/')">
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config.js'

export default {
  name: 'VerificationPage',
  async asyncData ({ $axios }) {
    let isUserAuthenticated = false
    let username = ''
    let discord = ''

    try {
      const { data: user } = await $axios.get('/status')
      username = user.cryptoUsername
      discord = user.discordUsername

      isUserAuthenticated = true

      if (user.isHolder && user.isTwitterMatching) {
        try {
          await $axios.get('/verify-holder')
        } catch (e) {
          console.log(e)
        }
      }
    } catch (e) {
      isUserAuthenticated = false
    }

    return {
      isUserAuthenticated,
      username,
      discord
    }
  },
  data () {
    return {
      isVerificationInProcess: false,
      isVerificationSuccessful: false,
      isVerificationUnsuccessful: false,
      username: null,
      discord: '',
      isUserAuthenticated: false,
      isErrorDisplayed: false
    }
  },
  computed: {
    twitterAuthLink () {
      return config.API_ROOT
    },
    twitterLogoutLink () {
      return `${config.API_ROOT}/logout`
    },
    isVerifyDisabled () {
      return !(this.isUserAuthenticated && this.username && this.isDiscordHandleValid)
    },
    isDiscordHandleValid () {
      return this.discord.includes('#')
    }
  },
  methods: {
    proceedAfterVerification () {
      if (this.isVerificationUnsuccessful) {
        this.isErrorDisplayed = true
      }
      this.isVerificationInProcess = false
      this.isVerificationSuccessful = false
      this.isVerificationUnsuccessful = false
    },
    async startVerifying () {
      if (this.isVerifyDisabled) {
        return
      }

      this.isVerificationInProcess = true
      const isVerifiedCrypto = await this.verifyCrypto()
      const isVerifiedHolder = await this.verifyHolder()

      if (isVerifiedHolder && isVerifiedCrypto) {
        this.isVerificationSuccessful = true
      } else {
        this.isVerificationUnsuccessful = true
      }
    },
    async verifyCrypto (newParams = null) {
      const params = newParams ?? {
        username: this.username,
        discord: this.discord
      }
      try {
        await this.$axios.get('/verify-crypto', { params })
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    },
    async verifyHolder () {
      try {
        await this.$axios.get('/verify-holder')
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    }
  }
}
</script>

<style scoped>
@import "~/static/css/stream.css";
</style>
