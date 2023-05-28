<template>
 <div class="ch-wrapper">
   <div class="ps-container">
     <div class="ch">
       <div class="ch-navbar">
         <div class="ch-navbar__heading">Characters</div>
         <div class="ch-navbar-menu">
           <button
             @click="selectedTab = item.id"
             class="ch-navbar-menu__item"
             :class="{active: selectedTab === item.id}"
             v-for="item in $options.tabs"
             :key="item.id"
           >
            {{ item.title }}
           </button>
         </div>
       </div>
       <div class="ch-content">
         <div class="ch-left">
           <img class="ch-left__portrait" :src="character.portraitImg" alt="portrait">
         </div>
         <div class="ch-right">
           <div class="ch-right__heading">{{ character.title }}</div>
           <div class="ch-right__text" :class="{opened: isReadFull[selectedTab]}">
             {{ character.text }}
             <div class="ch-right__read-full" v-if="!isReadFull[selectedTab]">
               <div class="line"></div>
               <span @click="isReadFull[selectedTab] = true">Read full</span>
               <div class="line"></div>
             </div>
           </div>
           <div class="ch-right-hint" v-for="(hint, idx) in character.hints" :key="idx">
             <strong class="ch-right-hint__title">{{ hint.title }}</strong> <span v-html="hint.text"></span>
           </div>
           <div class="ch-right-actions">
             <section class="ch-right-actions-links">
               <a :href="character.button.href" class="ch-right-actions-links__link">
                 {{ character.button.text }} <span class="crypto-com-nft-logo"></span>
               </a>
<!--               <a :href="character.button.hrefOpenSea" class="ch-right-actions-links__link">-->
<!--                 {{ character.button.text }} <span class="opensea-logo"></span>-->
<!--               </a>-->
               <a class="ch-right-actions-links__link">
                 MIGRATION SOON
               </a>
             </section>
             <span v-if="character.tradedStats" class="ch-right-actions__stats">{{ character.tradedStats }}</span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'TheCharacters',
  contentByTab: {
    ps: {
      portraitImg: require('/static/TheCharacters/ps-portrait.jpg'),
      title: 'PsychoKitties: The New Era',
      text: `It's the year 2045 - global gene editing market has grown to a massive 124.6 billion dollar industry that's preventing most genetic diseases from being passed on to the next generations.

When the average human being in developed countries spends 87% of their waking life in virtual reality, a group of scientists from a biotechnology company called GEMX9 has made it their mission to unlock the true power of our brains in the physical reality.

Antonius Gladwell, the founder of GEMX9 believes we are living in a simulation created by a higher dimensional "computer". "Only way to break free from the simulation is to have the ability to influence the world on quantum level", says Antonius in his latest interview.

According to Gladwell, we could theoretically influence the energy state of subatomic particles with the will of our mind and change physical matter with our thoughts.

The company had recently made a breakthrough targeting the "Intelligence Gene" called HMGA2 and was permissioned by the US government authorities to perform a large scale experiment on 10,000 kitten embryos.

By the time the kittens were 6 months old, their brain scans showed that different regions of their brains lit up in ways the scientists had never seen before. Among many tests, they were put in complex mazes to evaluate their spatial ability. Surprisingly, they were able to move through it with zero effort.

It's as if they had developed an intuition on the quantum level to understand the makeup of their surroundings farther than their eyes could see.

Unbeknownst to scientists, the kitties had developed an extreme sense of self-awareness. Naturally, the experimental subjects knew what they were used for and purposefully hid their newly acquired abilities.

Although some kittens showed better results than others. No employee of GEMX9 actually knew what the brain scans revealed.

June, 2046, just before the kittens turned 13 months old or 13 years old in human years, they miraculously disappeared. Government immediately shut down the lab and classified the experimental information as Top Secret. GEMX9 company was silenced and the media had portrayed Antonius Gladwell as a deceiving nuthead who was moved to a mental hospital followed by a mysterious disappearance.

The true nature of these test subjects started to reveal years later when specific images in The United World Encyclopedia changed unexpectedly...

First thought of as a bug in the system or some hacker modifying the images, turned out to be actual world history changing. The experimental kittens had reached their adulthood and maximum brain control within different centuries of Earth's history.

Because of their exceptional mind control skills, immoral anything-goes mentality and unpredictable nature the kittens were quick to achieve positions of power. Most of them ended up on the "evil side" of the history and the GEMX9 subjects were labeled "PsychoKitties".

Many suspected that they could also time travel to the future - hypothesis that was later confirmed by 2 students of the Aerian University who noticed futuristic weapons laying in the images of specific battlefields of the Mongol conquest of China in the early 13th century.

It didn't take long until the Encyclopedia showed different PsychoKitties waging war against each other. Conflicts between the members of this advanced society happened across centuries.

The United World Encyclopedia states that at some point in time a jealousy-driven opposition group emerged with a single mission of bringing down their power-hungry counterparts.

The history and the future of mankind is being rewritten daily. Now is your chance to step into the metaverse and overtake the mind of a mighty PsychoKitty.

However the question remains, which side of the PsychoKitties race will destiny take you?`,
      hints: [
        { title: 'Utility: ', text: `Staking <span>(under construction)</span>, chance to get free NFT airdrops, <a href="/terms-and-conditions">IP rights</a>, playable character in <a href="#" target="_blank">Quantum Frenzy</a> game, exclusive <a href="#" target="_blank">Discord</a> channels. More to come.`},
        { title: 'Statistics: ', text: '10,000 unique collectibles generated from 96 traits'}
      ],
      button: {
        text: 'Buy on',
        href: 'https://crypto.com/nft/collection/faa3d8da88f9ee2f25267e895db71471',
        hrefOpenSea: '#'
      },
      tradedStats: '$13.4M+ traded'
    },
    pm: {
      portraitImg: require('/static/TheCharacters/pm-portrait.jpg'),
      title: 'PsychoKitties: The Rise Of Mollies',
      text: `It's been years since PsychoKitties escaped from the GEMX9 lab to start their world takeover journey through time and space.\n
Whilst the history and the future are still changing everyday and new powerful positions being attained, the PsychoKitties have realized a deficiency... A lack of sorts that is holding them back from reaching their maximum potential.\n
PsychoKitties have figured out that if they surround themselves with any feminine energy on Earth, their inner drive, ambition and mind-bending powers increase.\n
"If only we could match with a compatible female partner, we could potentially create new parallel universes with the will of our minds", told a religious PsychoKitty on April 3, AD 33.\n
Naturally, the PsychoKitties who got a hold of the information traveled back to where it all began - year 2045 in GEMX9 lab.\n
The research papers of HMGA2 gene modification were stolen, a new lab was built and 10,000 female kitten embryos disappeared from the most guarded DNA-storage facility on Earth during 2045.
The PsychoMollies were born, but they were completely out of control...`,
      hints: [
        { title: 'Utility: ', text: `<a href="/terms-and-conditions">IP rights</a>, family advantage in <a href="#" target="_blank">Quantum Frenzy</a> game if staked with the right baby and PsychoKitty. More to come.`},
        { title: 'Statistics: ', text: '10,000 unique collectibles generated from 105 traits'}
      ],
      button: {
        text: 'Buy on',
        href: 'https://crypto.com/nft/collection/69d0601d6d4ecd0ea670835645d47b0d',
        hrefOpenSea: '#'
      },
      tradedStats: '$3.5M+ traded'
    },
    genq: {
      portraitImg: require('/static/TheCharacters/gen-q-portrait.png'),
      title: 'Gen-Q Elite Babies',
      text: `
        In ancient Egypt, around 1279 BC, a PsychoMolly named Nefertari formed a powerful bond with a Mad Hare called Anubis. Their love bloomed amid the construction of the colossal temples and monumental pyramids. The resulting Elite Baby possessed the ability to manipulate the sands of time, altering the course of events throughout history.\n
In the futuristic era of the 4000s, on the thriving Mars colony, a PsychoMolly named Aurora found her soulmate in a resourceful PsychoKitty named Xander. Together, they harnessed the power of dark energy to create a gravitational force strong enough to bend spacetime, ultimately producing an Elite Baby with unparalleled mastery over the fabric of the universe.\n
However, not all love stories had such fortuitous outcomes. A tale unfolds of a PsychoKitty named Nero, who shared a passionate love with a PsychoMolly named Luna. But their happiness was short-lived, as a devious Mad Hare named Vex sought to sow discord between them. Vex manipulated events, making it appear as though Nero had betrayed Luna. Luna, devastated and blinded by grief, succumbed to Vex's charms, leaving Nero behind.\n
Luna and Vex created an Elite Baby, but the child's abilities were tainted by the deception surrounding its conception. The child could weave illusions so intricate that the line between reality and fantasy blurred, adding a new layer of chaos to the war across time and space\n
As love, deception, and power continued to intertwine, the fate of the universe hung in the balance, with each new union of PsychoMollies and their partners bringing the potential for salvation or further turmoil.
      `,
      button: {
        text: 'Buy on',
        href: 'https://crypto.com/nft/collection/69d0601d6d4ecd0ea670835645d47b0d',
        hrefOpenSea: '#'
      }
    }
  },
  tabs: [
    { title: 'PsychoKitties', id: 'ps'},
    { title: 'PsychoMollies', id: 'pm'},
    { title: 'Gen-Q Elite Babies', id: 'genq'}
  ],
  data() {
    return {
      selectedTab: 'ps',
      isReadFull: {
        ps: false,
        pm: false,
        genq: false
      }
    }
  },
  computed: {
    character() {
      return this.$options.contentByTab[this.selectedTab]
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/TheCharacters.scss";
</style>
