<template>
  <div class="wrapper" @click="close">
    <div class="pk-modal" @click.stop>
      <img class="pk-modal__img" src="/img/verification/credit-card.svg" alt="">
      <div class="pk-modal__heading">
        Ooooooops...
      </div>
      <div class="pk-modal__text">
        Your Twitter handle doesn't match <span class="crypto-img" />  profile. Please note that crypto.org username is case-sensitive, make sure you have entered it correctly
      </div>

      <img alt="close" src="/img/verification/close.svg" class="pk-modal__close" @click="close">
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerificationErrorModal',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.wrapper {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(23, 22, 37, 0.64);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
}

.pk-modal {
  position: relative;
  background: #322B45;
  box-shadow: 0 48px 48px rgba(0, 0, 0, 0.24);
  border-radius: 12px;
  width: 100%;
  max-width: 408px;
  padding: 70px 50px 50px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pk-modal::after {
  content: "";
  z-index: 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding-bottom: 100%;
  background: #FF624D;
  opacity: 0.2;
  filter: blur(160px);
}

.pk-modal__img {
  width: 148px;
  margin-bottom: 24px;
}

.pk-modal__heading {
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  color: #EBEEF6;
  margin-bottom: 16px;
}

.pk-modal__text {
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #FFFFFF;
}

.crypto-img {
  margin: 0 4px;
  transform: translateY(5px);
  display: inline-block;
  width: 143px;
  height: 19px;
  background: url("~static/img/verification/crypto-com.png") no-repeat bottom / contain;
}

.pk-modal__close {
  position: absolute;
  cursor: pointer;
  right: 16px;
  top: 16px;
}
</style>
