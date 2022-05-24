<template>
  <div class="verification-process">
    <div class="verification-process__container">
      <div class="verification-process__heading">
        <template v-if="showResult">
          <img v-if="hasError" src="/img/verification/fail.svg" alt="" class="verification-process__img">
          <img v-else-if="isSuccess" src="/img/verification/success.svg" alt="" class="verification-process__img">
        </template>
        {{ verificationText }}
      </div>
      <div class="verification-process-loader">
        <div
          v-for="(_, idx) in Array(currentPartsCount)"
          :key="idx"
          class="line"
          :class="{'sm': idx === 0 || idx === ($options.loaderPartsCount - 1), 'md': idx === 1 || idx === ($options.loaderPartsCount - 2)}"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerificationInProcess',
  props: {
    hasError: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    }
  },
  loaderPartsCount: 43,
  data () {
    return {
      currentPartsCount: 0,
      loaderInterval: null,
      showResult: false
    }
  },
  computed: {
    verificationText () {
      let text = 'Wait until our script has verified your info...'

      if (this.showResult) {
        if (this.isSuccess) {
          text = 'Verification successful'
        } else if (this.hasError) {
          text = 'Confirmation failed'
        }
      }

      return text
    }
  },
  mounted () {
    this.setLoaderInterval()
  },
  methods: {
    setLoaderInterval (timeout = 150) {
      this.loaderInterval = setInterval(() => {
        this.currentPartsCount++

        const loaderPercent = Math.floor(this.currentPartsCount / this.$options.loaderPartsCount * 100)

        let newTimeout = timeout
        if (loaderPercent > 90) {
          newTimeout = null
        } else if (loaderPercent > 80) {
          newTimeout = 1500
        } else if (loaderPercent > 60) {
          newTimeout = 500
        } else if (loaderPercent > 40) {
          newTimeout = 350
        }

        if (loaderPercent > 40 && (this.isSuccess || this.hasError)) {
          setTimeout(() => this.$emit('proceed'), 2000)
          this.showResult = true
          newTimeout = null
          this.currentPartsCount = this.$options.loaderPartsCount
        }

        clearInterval(this.loaderInterval)

        if (newTimeout) {
          this.setLoaderInterval(newTimeout)
        }
      }, timeout)
    }
  }
}
</script>

<style scoped>

.verification-process-loader {
  width: 530px;
  height: 53px;
  border-radius: 50px;
  border: 4px solid #FF00FF;
  display: flex;
  padding: 1px 4px 1px 8px;
}

.line {
  width: 8px;
  height: 100%;
  border-radius: 40px;
  background: #FF00FF;
  transform: rotate(35deg);
}

.line:not(:last-child) {
  position: relative;
  margin-right: 4px;
}

.line.md {
  height: 90%;
}

.line.sm {
  height: 70%;
}

.line:first-child {
  margin-right: 0;
}

.line:nth-child(2) {
  margin-right: 2px;
}

.line:nth-child(41) {
  margin-right: 2px;
}

.line:nth-child(42) {
  align-self: flex-end;
  margin-right: 1px;
}

.line:nth-child(43) {
  align-self: flex-end;
}

.verification-process {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: url("~/static/img/verification/verification-bg.png") no-repeat center / cover;
}

.verification-process__container {
  max-width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
}

.verification-process__heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Hammersmith One, sans-serif;
  font-size: 66px;
  line-height: 130%;
  text-align: center;
  color: #fff;
  margin-bottom: 24px;
}

.verification-process__img {
  width: 100px;
  margin-bottom: 16px;
}

@media (max-width: 1000px) {
  .verification-process__img {
    width: 50px;
  }

  .verification-process__heading {
    font-size: 34px;
    line-height: 130%;
  }

  .verification-process-loader {
    width: 355px;
    height: 33px;
    border-radius: 40px;
    border: 4px solid #FF00FF;
    display: flex;
    padding: 1px 2px 1px 4px;
  }

  .line {
    width: 6px;
    /*height: 100%;*/
    /*border-radius: 40px;*/
    /*background: #FF00FF;*/
    /*transform: rotate(35deg);*/
  }

  /*.line:nth-child(4n) {*/
  /*  display: none;*/
  /*}*/

  .line:first-child {
    /*margin-right: -2px;*/
  }

  .line:not(:last-child) {
    position: relative;
    margin-right: 2px;
  }
  .line:nth-child(2) {
    margin-left: -2px;
    margin-right: 1px;
  }

  .line:nth-child(41) {
    margin-right: 1px;
  }

  .line:nth-child(42) {
    align-self: flex-end;
    margin-right: 1px;
  }
}

</style>
