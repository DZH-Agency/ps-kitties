<template>
  <div :class="currentTab.wrapperClass">
    <div class="header-wrapper">
      <div class="ps-navbar-wrapper">
        <div class="ps-container">
          <div class="ps-navbar">
            <nuxt-link to="/" class="ps-navbar-brand">
              <img src="/img/breeding/logo.svg" alt="" class="ps-navbar-brand__img">
            </nuxt-link>
            <a href="https://breeding.psychokitties.io" target="_blank" class="ps-navbar__enter-link">
              Enter breeding site <br class="mobile-only"> (not live)
            </a>
          </div>
        </div>
      </div>
      
      <div class="ps-container">
        <div class="header">
          <div class="header-tabs">
            <div @click="activeTabKey = tab.key" class="header-tabs__tab" :class="{active: tab.key === currentTab.key}" v-for="tab in $options.tabs" :key="tab.key">
              {{tab.title}}
            </div>
          </div>
          
          <template v-if="activeTabKey === 'redeem'">
            <h1 class="header__heading">
              This drop features two redeemable scenarios
            </h1>
  
            <div class="header-about">
              <img src="/img/breeding/number-one.svg" alt="" class="header-about__number-img">
    
              <div class="header-about-text">
                <p class="header-about-text__text">
                  Every person who breeded at least 1 baby will be eligible for at least 1 of 6 first-of-its-kind comic
                  strips depending on a few factors:
                </p>
                <p class="header-about-text__text">
                  - people who purchased a PsychoKitty in the first 24 hours during last years PsychoKitty drop (from mint
                  or secondary) will receive the very first edition (Edition 1) of the comic series
                </p>
                <p class="header-about-text__text">
                  - the other 5 comics are distributed to holders depending on the amount of <span
                  class="hint what-is-popup-parent">hidden staking <img
                  src="/img/breeding/question-mark.svg" alt="">
                <span class="what-is-popup">
                  <strong>What is hidden staking?</strong>
                  <br>
                  <br>
Each day your NFT is in your wallet, you will gain one point. If you sell your NFT, the points associated with that NFT will be erased. Total hidden staking points are calculated via sum-total of all the points of your PK, MHS and Baby NFTs.
                </span>
              </span> points they have accumulated by HODLing their
                  PsychoKitties and Mad Hares (5 different point brackets)
                </p>
              </div>
            </div>
  
            <div class="header-stats">
              <div class="header-stats-items">
                <div class="header-stats-items-item">
              <span class="header-stats-items-item__text">
                <strong class="tilda">250</strong> <br> points
              </span>
                  <span class="header-stats-items-item__edition">
                Edition 2
              </span>
                </div>
                <div class="header-stats-items-item">
              <span class="header-stats-items-item__text">
                <strong>251-500</strong> <br> points
              </span>
                  <span class="header-stats-items-item__edition">
                Edition 2 and 3
              </span>
                </div>
                <div class="header-stats-items-item">
              <span class="header-stats-items-item__text">
                <strong>501-750</strong> <br> points
              </span>
                  <span class="header-stats-items-item__edition">
                Edition 2,3 and 4
              </span>
                </div>
                <div class="header-stats-items-item">
              <span class="header-stats-items-item__text">
                <strong>751-1000</strong> <br> points
              </span>
                  <span class="header-stats-items-item__edition">
                Edition 2,3,4 and 5
              </span>
                </div>
                <div class="header-stats-items-item">
              <span class="header-stats-items-item__text">
                More than <br> <strong>1000</strong> <br> points
              </span>
                  <span class="header-stats-items-item__edition">
                Edition 2,3,4,5 and 6
              </span>
                </div>
              </div>
              <div class="header-stats__hint">
                (Points table will be shared in Discord when breeding season ends)
              </div>
            </div>
          </template>
          
          <template v-else-if="activeTabKey === 't&c'">
            <h1 class="header__heading">
              Terms of Service
              <br>
              For breeding of generation Q baby NFT
            </h1>
            
            <div class="header-terms">
              <div class="header-terms-item">
                  <p>
                    These Terms of Service governs the Breeding of Generation Q Baby NFTs and related events and transactions between you – a holder, and us - Genius Arts LLC and Ugonzo Arts LLC.
                  </p>
              </div>
              <div class="header-terms-item">
                <p>
                  Breeding of Generation Q Baby NFTs are available for holders of PsychoKitties NFT, PsychoMollies NFT and/or Mad Hare Society NFTs. Therefore, these Terms of Service are hereby made as part of the Terms & Conditions for PsychoKitties NFT located at
                  <a target="_blank" href="https://www.psychokitties.io/terms-and-conditions">https://www.psychokitties.io/terms-and-conditions</a>, and Terms & Conditions for Mad Hare Society NFT located at
                  <a target="_blank" href="https://madharesociety.com/terms-and-conditions#">https://madharesociety.com/terms-and-conditions#</a>, which are hereby incorporated by reference.
                </p>
              </div>
              <div class="header-terms-item">
                <p>Whereas PsychoKitties NFTs, PsychoMollies NFTs, and Mad Hare Society NFTs are sold through Crypto.com, and Generation Q Baby NFTs will also be airdropped through Crypto.com, your purchase and ownership of Generation Q Baby NFT with its Art are governed by these Terms of Service for Breeding of Generation Q Baby NFTs, Terms & Conditions for PsychoKitties NFT, Terms & Conditions for Mad Hare Society NFT, and Terms & Conditions published on the website of Crypto.com -
                  <a target="_blank" href="https://crypto.com/nft/terms">https://crypto.com/nft/terms</a>, which are incorporated herein by reference. If you do not wish to abide by any of these terms, you may not purchase or breed Generation Q Baby NFT. </p>
              </div>
              <div class="header-terms-item">
                <h4>DEFINITIONS</h4>
              </div>
              <div class="header-terms-item">
                <p>
                  <strong>Breeding</strong> – choosing a couple of Mad Hare Society NFT, PsychoMolly NFT and/or PsychoKitty NFT to pair them and breed Generation Q Baby NFT. Each NFT can be used only once in Breeding.
                </p>
                <p>
                  <strong>Love Potion</strong> – an asset which upon its purchase grants the holder of Mad Hare Society NFT, PsychoMolly NFT and/or PsychoKitty NFT access to the Breeding.
                </p>
                <p>
                  <strong>Generation Q Baby NFT(s)</strong> - NFTs that can be produced and purchased through Breeding.
                </p>
                <p>
                  <strong>Comic Strip(s)</strong> – comic series based on the characters of Mad Hare Society NFT, PsychoMolly NFT, PsychoKitty NFT, and/or Generation Q Baby NFT.
                </p>
              </div>
              <div class="header-terms-item">
                <h4>
                  DROP AND REDEEMABLE
                </h4>
                <p>
                  This drop features the following redeemable scenarios:
                </p>
                <ol>
                  <li>
                    Every person who bred at least 1 (one) Generation Q Baby NFT will be eligible for at least 1 (one) out of 6 (six) first-of-its-kind Comic Strips depending on a few factors.
                    <br>
                    <br>
                    People who purchased PsychoKitty NFT in the first 24 hours during PsychoKitty NFT drop in 2021 will receive Edition 1 of the Comic Strips. Both primary and secondary purchases are eligible.
                    <br>
                    <br>
                    The other 5 (five) comics are distributed to the holders depending on the amount of hidden staking points they have accumulated by holding their PsychoKitty NFTs, and Mad Hare Society NFTs as follows:
                    <br>
                    <br>
                    -	upto 250 points - Edition 2;
                    <br>
                    - from 251 to 500 points - Edition 2 and Edition 3;
                    <br>
                    -	from 501 to 750 points - Edition 2, Edition 3 and Edition 4;
                    <br>
                    -	from 751 to 1000 points - Edition 2, Edition 3, Edition 4 and Edition 5;
                    <br>
                    -	from the points more than 1000 - Edition 2, Edition 3, Edition 4, Edition 5 and Edition 6.
                  </li>
                  <li>
                    Generation Q Baby NFT may start generating additional hidden staking points that will be converted into an upcoming game tokens and in-game rewards next year.
                  </li>
                </ol>
              </div>
              <div class="header-terms-item">
                <h4>BREEDING</h4>
                <p>Once you have purchased your Love Potions, Breeding of Generation Q Baby NFT will be available at <a
                  href="https://breeding.psychokitties.io" target="_blank">https://breeding.psychokitties.io</a>. If this website requires password, then our breeding section has not been opened up yet. You can see up-to-date information in our Discord or Twitter.</p>
                <p>Breeding will be possible by verifying your wallet according to instructions, selecting your parent PsychoKitty NFTs and Love Potion, choosing your breeding style, revealing your Generation Q Baby, rinsing and repeating.</p>
                <p>If you screen-record your Breeding process and tag @PsychoKittiesOG & @MadHareSociety on Twitter, you will be grated with a chance to win a custom Generation Q Baby NFT where you decide the traits of its character.</p>
              </div>
              <div class="header-terms-item">
                <h4>AIRDROP</h4>
                <p>Generation Q Baby NFT and Comic Strips will be airdropped within a month after the breeding season is over. In case we need to extend our 7-day breeding season, the Generation Q Baby NFT and Comic Strips, if any, will be airdropped within a month starting from the date of the end of a new breeding.</p>
              </div>
              <div class="header-terms-item">
                <h4>DISCLAIMER</h4>
                <p>Please note that we, Genius Arts LLC and Ugonzo Arts LLC, are able to control only the process of sending NFTs to Crypto.com which may be done approximately within a week after breeding season ends. Therefore, Crypto.com is solely responsibility to drop Generation Q Baby NFTs and/or Comic Strips within 3 (three) weeks after Crypto.com has received the NFTs we send to Crypto.com.</p>
                <p>Crypto.com accepts no responsibility in respect of the operation of Breeding of Generation Q Baby NFTs, which shall be the sole responsibility of Genius Arts LLC and Ugonzo Arts LLC. Crypto.com incurs no liability in relation to the foregoing terms and condition. Participation in the Breeding of Generation Q Baby NFTs is optional.</p>
                <p>Crypto.com, Genius Arts LLC and Ugonzo Arts LLC make no guarantee, representation, or warranty in respect of the distribution or quality of the Generation Q Baby NFTs and Comic Strips.</p>
              </div>
              <div class="header-terms-item">
                <h4>OWNERSHIP OF COMIC STRIP</h4>
                <p>You are entitled to sell your copy of Comic Strip without claiming royalties thereof or commission from any consecutive sale of the Comic Strip. Notwithstanding anything contrary, you are not entitled to monetize or otherwise commercialize any of your Comic Strip. We retain all intellectual property rights and any other rights necessary to exploit any Comic Strip in any commercial and non-commercial way and build new partnerships and collaborations with regard to any Comic Strip. Unless we permit otherwise in writing, you are not entitled to any royalties or any other proceedings coming from such commercialization, partnerships, and collaborations. You hereby irrevocably waive the right to make any claim against us or any third party authorized by us to exploit Comic Strip based on activities, partnerships and collaborations permitted or directly executed by us.</p>
                <p>If you have any questions, you can join our Discord channels at: <a href="https://www.discord.gg/psychokitties">www.discord.gg/psychokitties</a>.</p>
                <p>You can see up-to-date breeding news at <a href="https://www.twitter.com/psychokittiesog">www.twitter.com/psychokittiesog</a>.</p>
              </div>
            </div>
          </template>
          
          <template v-else-if="activeTabKey === 'faq'">
            <h1 class="header__heading">
              FAQ
            </h1>
            <div class="header-faq">
              <div class="header-faq-item" v-for="(item, idx) in $options.faq" :key="idx">
                <div @click.stop="openedQuestionIdx = openedQuestionIdx === idx ? null : idx" class="header-faq-item-question">
                  {{item.question}}
                  
                  <button @click.stop="openedQuestionIdx = openedQuestionIdx === idx ? null : idx" class="header-faq-item-question__toggle" :class="{minus: idx === openedQuestionIdx}"></button>
                </div>
                <the-accordion :is-opened="idx === openedQuestionIdx">
                  <div class="header-faq-item-content" v-html="item.answer"></div>
                </the-accordion>
              </div>
            </div>
          </template>
          
          
        </div>
      </div>
    </div>
    
    <div v-if="activeTabKey === 'redeem'" class="staking-wrapper">
      <div class="ps-container">
        <div class="staking">
          <div class="staking-about">
            <img src="/img/breeding/number-two.svg" alt="" class="staking-about__number-img">
            
            <div class="staking-about-text">
              <p class="staking-about-text__text">
                Generation Q babies will start generating additional <span class="hint what-is-popup-parent">hidden staking <img
                src="/img/breeding/question-mark.svg" alt="">
                <span class="what-is-popup">
                  <strong>What is hidden staking?</strong>
                  <br>
                  <br>
Each day your NFT is in your wallet, you will gain one point. If you sell your NFT, the points associated with that NFT will be erased. Total hidden staking points are calculated via sum-total of all the points of your PK, MHS and Baby NFTs.
                </span>
              </span> points that will be converted into our upcoming
                game tokens and in-game rewards next year.
              </p>
            </div>
          </div>
          
          <div class="staking-how">
            <div class="staking-how-guide">
              <h2 class="staking-how-guide__title">HOW TO BREED</h2>
              <div class="staking-how-guide-text">
                <p class="staking-how-guide-text__text">
                  Once you've purchased your love potions:
                </p>
                <p class="staking-how-guide-text__text">
                  - head over to <a href="https://breeding.psychokitties.io" target="_blank">https://breeding.psychokitties.io</a>
                  (if the site requires password, then our breeding
                  section has not been opened up yet, get up-to-date information in our Discord or Twitter)
                </p>
                <p class="staking-how-guide-text__text">
                  - verify your wallet according to instructions
                </p>
                <p class="staking-how-guide-text__text">
                  - select your parents and a love potion
                </p>
                <p class="staking-how-guide-text__text">
                  - choose your breeding style
                </p>
                <p class="staking-how-guide-text__text">
                  - reveal your baby
                </p>
                <p class="staking-how-guide-text__text">
                  - rinse and repeat
                </p>
              </div>
              <div class="staking-how-guide-tip">
                <strong>TIP:</strong> Screen-record your breeding process and tag <strong>@PsychoKittiesOG</strong> &
                <strong>@MadHareSociety</strong> on Twitter to have a chance at winning a custom baby by your favorite
                artist where you decide the traits! (3 winners after breeding season ends)
              </div>
            </div>
            <img src="/img/breeding/how-to-breed.png" alt="" class="staking-how__img">
          </div>
        </div>
      </div>
      
      <div class="examples-mobile-top"></div>
  
      <div class="staking-when-wrapper">
        <div class="container">
          <div class="staking-when">
            <h2 class="staking-when__title">
              WHEN WILL I RECEIVE MY BABY NFT'S AND COMICS?
            </h2>
            <p class="staking-when__text">
              Generation Q babies and comics will be airdropped within a month after the breeding season is over. In
              case we need to extend our 7-day breeding season, the redeemables will be airdropped within a month
              starting from the new breeding end date.
            </p>
          </div>
        </div>
      </div>
      
      <div class="examples-wrapper">
        <div class="examples"></div>
      </div>
  
      <div class="examples-mobile-bottom"></div>
      
      <div class="questions-wrapper">
        <div class="ps-container">
          <div class="questions">
            <p class="questions__text">
              Have questions? Join <a href="https://www.discord.gg/psychokitties" target="_blank">www.discord.gg/psychokitties</a>
            </p>
            <p class="questions__text">
              Be up to date with the latest breeding news at <a target="_blank"
                                                                href="https://www.twitter.com/psychokittiesog">www.twitter.com/psychokittiesog</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  
  
  </div>
</template>

<script>
export default {
  name: 'breeding',
  tabs: [
    {
      title: 'Redeemables',
      key: 'redeem',
      wrapperClass: 'redeem',
    },
    {
      title: 'Terms of Service',
      key: 't&c',
      wrapperClass: 'base terms'
    },
    {
      title: 'FAQ',
      key: 'faq',
      wrapperClass: 'base'
    }
  ],
  faq: [
    {
      question: 'When will I be able to breed my nfts?',
      answer: `
        <p>Breeding season is scheduled to happen for exactly 1 week starting from August 19th.</p>
      `
    },
    {
      question: 'What NFTs do I need to breed?',
      answer: `
        <p>- Purchased love potion (1 potion allows you to breed one pair of parents)</p>
        <p>- Any pair (male + female)</p>
        <p>Males = Psychokitties, Mad Hares</p>
        <p>Females = Psychomollies</p>
      `
    },
    {
      question: 'Can I breed my Psychomolly with my Psychokitty and Mad Hare?',
      answer: `
        <p>No. Each NFT can only be used one time in the breeding process. You would need to have 2 Psychomollies in order to breed with both your Psychokitty and Mad Hare.</p>
      `
    },
    {
      question: 'Have people breeded with my NFTs?',
      answer: `
        <p>You will have access to a global search website within the breeding site to make sure that the NFTs you plan to buy haven't been used by another person. To be safe, we suggest buying love potions directly from the CDC drop and not from the secondary market.</p>
      `
    },
    {
      question: 'Where do I purchase the love potion?',
      answer: `
        <p>Potions will be available for purchase on <a target="_blank" href="https://crypto.com/nft/">Crypto.com/nft</a> on August 19th, price will be $40 USD per potion.</p>
      `
    },
    {
      question: 'How can I prepare for the breeding?',
      answer: `
        <p>You will need a Twitter account, even if you create it just for this event. No need to add any photos or personally identifiable information on that Twitter account. Simple instruction animation will be shown on the breeding page how to link it to your CDC profile.</p>
      `
    },
    {
      question: 'How will the process work?',
      answer: `
        <p>You will need to visit our breeding website at <a target="_blank" href="https://breeding.psychokitties.io/">breeding.psychokitties.io</a> where you can choose your parent-pairs and pick one of two types of breeding options:</p>
        <p>1) Random Breeding - your Gen-Q baby will inherit different traits of the parents based on luck</p>
        <p>2) Use CRISPR Technology to Edit Genes - make a custom Gen-Q baby by choosing between traits of the parents and various new traits that the artists have created for this special event</p>
      `
    },
    {
      question: 'When and where will I receive my baby? ',
      answer: `
        <p>
        We'll send the baby and comic assets to CDC within a week after the breeding season has ended and you can expect the NFTs to be airdropped into your <a href="https://crypto.com/nft/" target="_blank">Crypto.com/NFT</a> account within 3 weeks after CDC has received the items.
</p>
      `
    },
  ],
  data() {
    return {
      activeTabKey: this.$options.tabs[0].key,
      openedQuestionIdx: null
    }
  },
  watch: {
    activeTabKey() {
      this.openedQuestionIdx = null
    }
  },
  computed: {
    currentTab() {
      return this.$options.tabs.find(({key}) => key === this.activeTabKey)
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/breeding.scss";
</style>
