<template>
      <section class="email">
        <img src="/img/email-icon.png" alt="email" class="email__email-icon">
        <div class="email__gradient-big-circle"></div>
        <div class="email__gradient-small-circle"></div>
        <h2 class="email__title">Don't miss out on exclusive updates & surprises:</h2>

        <section class="email-form" v-if="!successfullySubscribed">
          <div class="email-form-input">
            <input v-model="email" type="email" placeholder="mail@example.com">
          </div>
          <div class="email-form-actions">
            <button :disabled="!isEmailValid || !this.email" class="email-form-actions__subscribe-btn" @click="subscribe">
              Sign Up
            </button>
          </div>
          <div class="email-form-errors">
            <span class="email-form-errors__error" v-if="!isEmailValid">Email is invalid &nbsp;</span>
            <span class="email-form-errors__error" v-if="error">{{ error }}</span>
          </div>
        </section>

        <section class="email-success" v-else>
          <section class="email-success-hint">
            <button class="email-success-hint-back" @click="userVerified">
              <img src="/img/arrow-back.svg" alt="back arrow" class="email-success-hint-back__icon">
            </button>
            Check verifying link at your email and press to verify
          </section>
          <footer class="email-success-actions">
            <button class="email-success-actions__resend" @click="resendEmail">Resend email</button>
            <button class="email-success-actions__verified" @click="userVerified">I have verified email</button>
          </footer>
        </section>
      </section>
</template>

<script>
export default {
  name: "EmailSubscribe",
  data() {
    return {
      email: "",
      error: "",
      successfullySubscribed: false
    }
  },
  computed: {
    isEmailValid() {
      if (!this.email) {
        return true
      }

      return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(this.email)
    }
  },
  methods: {
    resendEmail() {
      this.successfullySubscribed = false
      this.subscribe()
      this.email = ''
    },
    userVerified() {
      this.successfullySubscribed = false
      this.email = ''
    },
    async subscribe() {
      try {
        this.error = ""
        await this.$axios.post("https://quantumfrenzybackend-4awaor5vwa-ew.a.run.app/subscribe", {
          email: this.email
        })
        this.successfullySubscribed = true
      } catch (e) {
        this.error = e.response?.data?.message || e.message || 'Something went wrong while subscribing'
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/theme.scss";

.email {
  background: #390968;
  backdrop-filter: blur(10px);
  border-radius: 0 60px;
  position: relative;
  border: 2px solid #FF00F8;
  padding: 40px 75px 60px;
  display: flex;
  flex-direction: column;
  max-width: 970px;
  margin: 50px auto 0;

  @media (max-width: 1200px) {
    padding: 20px 20px 40px;
    border-width: 4px;
  }

  &__email-icon {
    position: absolute;
    right: -47px;
    top: -57px;

    @media (max-width: 1200px) {
      width: 95px;
      right: -19px;
      top: -59px;
    }
  }

  &__gradient-big-circle {
    position: absolute;
    background: radial-gradient(138.67% 89.5% at 50% 89.5%, #FF008C 0%, #00FFFF 100%);
    border-radius: 50%;
    width: 76px;
    height: 76px;
    left: 23px;
    bottom: -59px;
    transform: rotate(-111deg);

    @media (max-width: 1200px) {
      width: 64px;
      height: 64px;
      left: 0;
      bottom: -48px;
    }
  }

  &__gradient-small-circle {
    position: absolute;
    background: radial-gradient(138.67% 89.5% at 50% 89.5%, #FF008C 0%, #00FFFF 100%);
    border-radius: 50%;
    width: 48px;
    height: 48px;
    right: 224px;
    bottom: -27px;
    transform: rotate(-138deg);
    z-index: -1;

    @media (max-width: 1200px) {
      width: 38px;
      height: 38px;
      right: 54px;
      bottom: -31px;
    }
  }

  &__title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 45px;
    color: #00D2FE;

    @media (max-width: 1200px) {
      font-size: 22px;
      line-height: 28px;
    }
  }

  &-success {

    &-hint {
      display: flex;
      align-items: center;
      text-align: center;
      column-gap: 20px;
      font-size: 18px;
      line-height: 22px;
      color: #FF00FF;
      margin-bottom: 32px;

      &-back {

        &__icon {

        }
      }
    }

    &-actions {
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 12px;

      &__resend {
        padding: 12px 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.16);
        border: 2px solid #DD3741;
        border-radius: 0 16px;
      }

      &__verified {
        padding: 12px 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(270deg, #DD3741 0%, #FF00CC 50.52%, #6003A9 100%);
        border-radius: 0 16px;
      }
    }
  }

  &-form {
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: $black;
    border-radius: 0 25px;
    border: 2px solid transparent;
    background-clip: padding-box;
    z-index: 1;

    @media (max-width: 1200px) {
      order: 2;
      align-self: stretch;
      flex-direction: column;
      background: none;
    }

    &-errors {
      display: flex;
      position: absolute;
      left: 0;
      top: calc(100% + 12px);
      column-gap: 8px;

      @media (max-width: 1200px) {
        top: calc(100% + 4px);
      }

      &__error {
        font-size: 14px;
        color: #FF008C;

        &:not(:last-child) {
          &:after {
            content: "|";
          }
        }
      }
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      border-radius: 0 25px;
      inset: -2px;
      background: linear-gradient(262.72deg, #1CE7D3 0%, #FF00F8 100%);

      @media (max-width: 1200px) {
        background: none;
      }
    }

    &-input {
      width: 100%;
      position: relative;
      background-color: $black;
      border-radius: 0 0 0 25px;

      @media (max-width: 1200px) {
        margin-bottom: 24px;
        border-radius: 0 25px 0 25px;
      }

      &::after {
        content: "";
        position: absolute;

        @media (max-width: 1200px) {
          content: "";
          position: absolute;
          z-index: -1;
          border-radius: 0 25px;
          inset: -2px;
          background: linear-gradient(262.72deg, #1CE7D3 0%, #FF00F8 100%);
        }
      }

      input {
        width: 100%;
        padding: 16px 24px;
        font-weight: 500;
        font-size: 16px;
        line-height: 130%;
        color: rgba(235, 238, 246, 1);

        @media (max-width: 1200px) {

        }

        &::placeholder {
          color: rgba(235, 238, 246, 0.3);
        }
      }
    }

    &-actions {
      display: flex;
      border-radius: 0 25px 0 0;
      background-color: $black;
      position: relative;

      @media (max-width: 1200px) {
        max-width: 188px;
        margin: 0 auto;
        border-radius: 0 25px;
      }

      &::after {
        content: "";
        background: rgba(255, 255, 255, 0.16);
        position: absolute;
        inset: 0;
        border-radius: 0 25px 0 25px;

        @media (max-width: 1200px) {

        }
      }

      &__subscribe-btn {
        z-index: 1;
        white-space: nowrap;
        padding: 12px 16px;
        min-width: 200px;
        font-size: 16px;
        line-height: 21px;
        border-radius: 0 25px;
        background: linear-gradient(270deg, #DD3741 0%, #FF00CC 50.52%, #6003A9 100%);
        color: $secondary-white;
        font-weight: 700;

        &:disabled {
          filter: grayscale(0.4);
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
