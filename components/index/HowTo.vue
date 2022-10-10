<template>
  <div class="how-wrapper">
    <div class="ps-container">
      <div class="how">
        <h2 class="how__title"></h2>
        <div class="how-guide">
          <embed src="/img/halloween/index/how/how-to-video.svg" type="image/svg+xml" class="how-guide__video">
          
          <div class="how-guide__text">
            Prepare for Halloween Bash by connecting your Twitter account with your CDC profile.
            <img src="/img/halloween/index/how/arrow-guide.svg" alt="" class="how-guide__text-hint">
          </div>
        </div>
        
        <div class="how-info">
          <div class="how-info-left">
            <p class="how-info-description">
              Once you've purchased your Halloween Coffins on <a href="https://crypto.com/NFT" target="_blank">crypto.com/NFT</a> drop page:
              <br>
              <br>
              - head over to <a href="https://halloween.psychokitties.io" target="_blank">https://halloween.psychokitties.io</a> (if the site requires password, then our breeding section has not been opened up yet, get up-to-date information in our Discord or Twitter)
              <br>
              <br>
              - log in via Twitter (<b class="how-info-description-twitter-hint">
              why Twitter?
              <span class="how-info-description-twitter-hint__popup">
              Since crypto.com/NFT doesn't have a wallet authentication API, we've developed a work-around that requires you to link your Twitter account with your CDC profile. This helps us verify that the CDC username you enter actually belongs to you and read public NFT contents on your CDC page, so we can show the purchased Coffins to you and keep track of Coffins used.
            </span>
            </b>)
              <br>
              <br>
              - choose your favorite character
              <br>
              <br>
              - choose your desired traits
              <br>
              <br>
              - create your monster
              - rinse and repeat
            </p>
  
            <div class="how-info__hint">
              <span class="pink">NOTE:</span> NEVER buy a Halloween Coffin on secondary marketplace because they are mostly used. Halloween Bash is open for 7 days, so everybody will have time to create their monsters!
            </div>
          </div>
          
          <div class="how-info-preview">
            <img src="/img/halloween/index/how/preview-img.png" alt="" class="how-info-preview__img">
            <img class="how-info-preview__pumpkin" src="/img/halloween/index/how/pumpkin.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowTo',
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/halloween/index/HowTo";
</style>
