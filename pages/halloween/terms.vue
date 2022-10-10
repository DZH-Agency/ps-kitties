<template>
  <div class="page-wrapper">
    <div class="terms-wrapper first-block-wrapper">
      <div class="ps-container">
        <div class="terms">
          <h1 class="creepster-heading terms__title">
            Terms of Service
          </h1>
          <h2 class="terms__subtitle">
            ADDITIONAL TERMS AND CONDITIONS FOR MONSTER CREATION OF HALLOWEEN BASH NFT(S)
          </h2>
          
          <p class="terms__text">
            These Additional Terms and Conditions are effective as of 10 October 2022 and
            governs the creation of Halloween Bash NFTs and related events and transactions
            between you – a holder, and us – Upward Spiral FZCO.
          </p>
          <p class="terms__text">
            These Additional Terms and Conditions are hereby made as part of the Terms &amp;
            Conditions for Halloween Bash NFT(s) located at <a target="_blank" href="https://psychokitties.io/halloween-terms-and-conditions">https://psychokitties.io/halloween-terms-and-conditions</a>, which are hereby incorporated by reference.
          </p>
          <p class="terms__text">
            Halloween Bash NFT(s) will be airdropped through Crypto.com. Therefore, your
            purchase and ownership of Halloween Bash NFT(s) with its Art are governed by the
            foregoing Additional Terms and Conditions, Terms &amp; Conditions for Halloween Bash
            NFT(s) located at <nuxt-link to="/halloween-terms-and-conditions">https://psychokitties.io/halloween-terms-and-conditions</nuxt-link>, and Terms &amp;
            Conditions published on the website of Crypto.com - <a href="https://crypto.com/nft/terms">https://crypto.com/nft/terms</a>,
            which are incorporated herein by reference. If you do not wish to abide by any of
            these terms, you may not participate in Monster Creation, purchase Halloween
            Coffins and/or Halloween Bash NFT(s).
          </p>
          
          <h3 class="terms__subheading">DEFINITIONS</h3>
          <p class="terms__text">
            <b>Partner Projects</b> – NFT projects enrolled as participants and provides for
            Halloween Bash NFT project.
          </p>
          <p class="terms__text">
            Monster Creation – choosing the traits from one of the Partner Projects to co-
            create Halloween Bash NFT. Monster Creation will be available at
            <a href="https://halloween.psychokitties.io">https://halloween.psychokitties.io</a>
          </p>
          <p class="terms__text">
            Halloween Coffins – an asset which upon its purchase grants the holder access to
            the Monster Creation. Each Halloween Coffin allows the holder to create one
            monster, therefore, one Halloween Bash NFT. Halloween Coffins are available for
            purchase at Crypto.com/NFT as a featured drop during 24-31. October.
          </p>
          <p class="terms__text">
            Halloween Bash NFT(s) – an NFT depicting monster co-created and purchased
            through Monster Creation.
          </p>
          
          <h3 class="terms__subheading">MONSTER CREATION</h3>
          <p class="terms__text">Once you have purchased your Halloween Coffins at Crypto.com/NFT, you will be
            granted the access to Monster Creation available at
            <a href="https://https://halloween.psychokitties.io" target="_blank">https://halloween.psychokitties.io</a>. If the website requires password, then our creation section has not been opened up yet. You can see up-to-date information in
            our Discord or Twitter.</p>
          <p class="terms__text">
            Monster Creation will be possible by verifying your wallet according to instructions,
            connecting your Twitter to you Crypto.com’s account, selecting traits from one of the
            Partner Projects and presenting your Halloween Coffin./p>
  
          <h3 class="terms__subheading">AIRDROP</h3>
          <p class="terms__text">Halloween Bash NFT will be airdropped within a month after the Monster Creation
            is over. In case we need to extend our Monster Creation period, the Halloween Bash
            NFTs will be airdropped within a month starting from the date of the end of a new
            Monster Creation period.</p>
  
          <h3 class="terms__subheading">DISCLAIMER</h3>
          <p class="terms__text">Please note that we, Upward Spiral FZCO, are able to control only the process of
            sending NFTs co-created by you to Crypto.com. Therefore, Crypto.com is the only
            party responsible to drop Halloween Bash NFT within 3 (three) weeks after
            Crypto.com has received the NFTs we send to it.</p>
          <p class="terms__text">Crypto.com accepts no responsibility in respect of the Monster Creation which shall
            be the sole responsibility of Upward Spiral FZCO. Crypto.com incurs no liability in
            relation to the foregoing terms and conditions. Participation in the Monster Creation
            is optional.</p>
          <p class="terms__text">Crypto.com and Upward Spiral FZCO make no guarantee, representation, or
            warranty in respect of the distribution or quality of the Halloween Bash NFTs.</p>
          <p class="terms__text"><b>Please note that all terms and conditions, including but not limited to
            ownership and rights granted, restrictions and covenants, waivers and
            disclaimer, set forth in Terms &amp; Conditions for Halloween Bash NFT(s)
            located at <nuxt-link to="/halloween-terms-and-conditions">https://psychokitties.io/halloween-terms-and-conditions</nuxt-link> applies to
            the Monster Creation, selling, purchasing and owning of Halloween
            Coffins and Halloween Bash NFT(s).</b></p>
          <p class="terms__text">If you have any questions, you can join our Discord channels at:
            <a href="https://www.discord.gg/psychokitties" target="_blank">www.discord.gg/psychokitties</a></p>
          <p class="terms__text">You can see up-to-date breeding news at <a href="https://www.twitter.com/PsychoKittiesOG" target="_blank">www.twitter.com/PsychoKittiesOG</a></p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsAndConditions',
  layout: 'halloween'
};
</script>

<style scoped lang="scss">
.terms {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  
  &-wrapper {
    margin-top: 80px;
    padding-bottom: 550px;
    background:
      url("/img/halloween/terms/characters.png") no-repeat bottom / contain,
      url("/img/halloween/terms/spiders.svg") no-repeat top right 30px,
      url("/img/halloween/terms/web-bottom-right.svg") no-repeat bottom right,
      url("/img/halloween/terms/pumpkins.svg") no-repeat left 20px bottom 20px,
      url("/img/halloween/terms/web-top-left.svg") no-repeat left top 80px;
  }
  
  &__text {
    font-weight: 600;
    font-size: 18px;
    line-height: 130%;
    
    b {
      font-weight: 800;
      line-height: 130%;
    }
    
    a {
      color: #FF00FF;
      text-decoration: underline;
    }
  }
  
  &__subheading {
    margin-bottom: 8px;
    font-size: 22px;
    font-weight: 900;
    line-height: 130%;
    text-transform: uppercase;
  }
  
  &__title {
    margin-bottom: 40px;
  }
  
  &__subtitle {
    font-weight: 600;
    font-size: 28px;
    line-height: 130%;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
}
</style>
