<template>
  <div class="page-wrapper">
    <div class="faq-wrapper first-block-wrapper">
      <div class="ps-container">
        <div class="faq">
          <h1 class="creepster-heading faq__title">FAQ</h1>
    
          <div class="faq-list">
            <div class="faq-list-item" v-for="(item, idx) in $options.questions" :key="idx">
              <div class="faq-list-item-question">
                {{ item.question }}
  
                <img v-if="openedQuestionIdx === idx" src="/img/halloween/terms/minus.svg" alt="" class="faq-list-item-question__toggler" @click="openedQuestionIdx = null">
                <img v-else src="/img/halloween/terms/plus.svg" alt="" class="faq-list-item-question__toggler" @click="openedQuestionIdx = idx">
              </div>
              <TheAccordion :is-opened="openedQuestionIdx === idx">
                <p class="faq-list-item-answer" v-html="item.answer" />
              </TheAccordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  layout: 'halloween',
  questions: [
    {
      question: 'When will I be able to create my Halloween Monsters?',
      answer: `Halloween Bash is scheduled to happen from 24th of October until 31st of October.`
    },
    {
      question: 'What NFTs do I need to create a monster?',
      answer: `Purchased Halloween Coffin (1 Coffin allows you to create 1 monster)`
    },
    {
      question: 'How do I know if my Halloween Coffin has been used?',
      answer: `
      At <a href="https://halloween.psychokitties.io" target="_blank">https://halloween.psychokitties.io</a> you'll be able to see if your Coffin has been used by the ability to click on it and by seeing a lock on your NFT after you've used it.
<br>
<br>
To be safe, we suggest buying Halloween Coffins directly from the CDC drop and not from the secondary market, because people will try to sell their Coffins right after they've used them.
`
    },
    {
      question: 'Where do I purchase the Halloween Coffin?',
      answer: `Halloween Coffins will be available for purchase on <a href="https://Crypto.com/nft" target="_blank">Crypto.com/nft</a> on from 24th to 31st of October.`
    },
    {
      question: 'How can I prepare for the Halloween Bash?',
      answer: `You will need to connect a Twitter account to your CDC profile, even if you create the Twitter account just for this event. No need to add any photos or personally identifiable information on that Twitter account.`
    },
    {
      question: 'How will the process work?',
      answer: `
      Once you've purchased your Halloween Coffins, head over to: <a href="https://halloween.psychokitties.io" target="_blank">https://halloween.psychokitties.io</a> - simple animations will guide you through the process to login and create your monster. If you face any difficulties, chat with us on Discord at <a href="https://www.discord.gg/psychokitties" target="_blank">www.discord.gg/psychokitties</a>.`
    },
    {
      question: 'When and where will I receive my baby?',
      answer: `We'll send the Halloween Monsters to CDC within a week after the Halloween Bash event has ended to have time to fix any trait error that may have occurred. You can expect the NFTs to be airdropped into your <a href="https://Crypto.com/nft" target="_blank">Crypto.com/nft</a> account within 3 weeks after CDC has received the assets.`
    },
    {
      question: 'How do you know what NFTs are in my wallet?',
      answer: `Since you've linked your Twitter (doesn't need to be your official Twitter account) with your CDC profile, our program can verify that CDC account belongs to you and read public information on your CDC page, store them into our database and showcase it to you in a pleasant manner in our Halloween Bash UI.`
    }
  ],
  data() {
    return {
      openedQuestionIdx: null
    }
  }
};
</script>

<style scoped lang="scss">
.faq {
  
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
  
  &__title {
    margin-bottom: 24px;
  }
  
  &-list {
    display: grid;
    row-gap: 40px;
    
    &-item {
      
      &-question {
        background: rgba(57, 9, 104, 0.6);
        backdrop-filter: blur(10px);
        border-radius: 36px 0;
        font-family: 'Hammersmith One', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        color: #FF00FF;
        padding: 20px 54px;
        border: 3px solid #7B9CD3;
        position: relative;
        
        &__toggler {
          position: absolute;
          top: -32px;
          right: -28px;
          cursor: pointer;
        }
      }
      
      &-answer::v-deep {
        padding: 20px 54px 0;
        font-weight: 600;
        font-size: 18px;
        line-height: 130%;
        
        a {
          color: #00D2FE;
        }
      }
    }
  }
}
</style>
