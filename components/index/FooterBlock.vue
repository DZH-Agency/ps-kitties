<template>
  <div class="footer-wrapper">
    <div class="ps-container">
      <div class="when">
        <h2 class="when__title">WHEN WILL I RECEIVE MY MONSTERS?</h2>
        <p class="when__text">
          Halloween Monsters will be airdropped within a month after the Halloween Bash season is over - but you will be able to download your monster image right after it's been created.
        </p>
      </div>
    </div>
    <picture>
      <source srcset="/img/halloween/index/footer/images-mobile.png" media="(max-width: 400px)" />
      <img class="images" src="/img/halloween/index/footer/images.png" alt="" />
    </picture>
    
    <div class="ps-container">
      <div class="footer">
        <p class="footer__text">
          Have questions? We have a dedicated channel for Halloween Bash: <a href="https://www.discord.gg/psychokitties" target="_blank">www.discord.gg/psychokitties</a>
        </p>
        <p class="footer__text">
          Be up to date with the latest Halloween Bash news at
          <br>
          <a href="https://www.twitter.com/psychokittiesog">www.twitter.com/psychokittiesog</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBlock',
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/halloween/index/FooterBlock.scss";
</style>
