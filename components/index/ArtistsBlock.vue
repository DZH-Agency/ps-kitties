<template>
  <div class="artists-wrapper">
    <div class="ps-container">
      <div class="artists">
        <h2 class="artists__title">
          Brought to you by industry-leading NFT artists
        </h2>
        
        <div class="artists-list">
          <div v-for="(proj, idx) in $options.projects" :key="idx" class="artists-list-item">
            <div class="artists-list-item-info">
              <header class="artists-list-item-info-social">
                <a :href="proj.socials.url" target="_blank" class="artists-list-item-info-social-link"><img src="/img/halloween/index/artists/website.svg" alt="" class="artists-list-item-info-social-link__icon" /></a>
                <a :href="proj.socials.discord" target="_blank" class="artists-list-item-info-social-link"><img src="/img/halloween/index/artists/discord.svg" alt="" class="artists-list-item-info-social-link__icon" /></a>
                <a :href="proj.socials.twitter" target="_blank" class="artists-list-item-info-social-link"><img src="/img/halloween/index/artists/twitter.svg" alt="" class="artists-list-item-info-social-link__icon" /></a>
                <a :href="proj.socials.instagram" target="_blank" class="artists-list-item-info-social-link"><img src="/img/halloween/index/artists/instagram.svg" alt="" class="artists-list-item-info-social-link__icon" /></a>
              </header>
              <p class="artists-list-item-info__description">
                <span v-html="proj.descriptionHeading"></span>{{ openedProjectIdx === idx ? '' : '...' }}
                <br>
                <br>
                
                <TheAccordion :is-opened="openedProjectIdx === idx">
                  <span v-html="proj.description" />
                </TheAccordion>
              </p>
              <button class="artists-list-item-info__read-more" @click="openedProjectIdx = openedProjectIdx === idx ? null : idx">
                {{ openedProjectIdx === idx ? 'Show less' : 'Read more' }}
                <img src="/img/halloween/arrow-down-blue.svg" alt="" :style="openedProjectIdx === idx ? 'transform: rotate(-180deg)' : ''">
              </button>
            </div>
            <div class="artists-list-item-card">
              <div class="artists-list-item-card-info">
                <div class="artists-list-item-card-info__logo">
                  <img :src="proj.cardLogo" alt="">
                </div>
                <div class="artists-list-item-card-info__title-tag">
                  {{ proj.cardTag }}
                </div>
              </div>
              <img class="artists-list-item-card__img" :src="proj.cardImg" alt="" />
              
              <img src="/img/halloween/index/artists/pumpkin.svg" alt="" class="artists-list-item-card__pumpkin">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheAccordion from '~/components/TheAccordion.vue';
export default {
  name: 'ArtistsBlock', components: { TheAccordion }, projects: [
    {
      socials: {
        url: 'https://www.madharesociety.com//',
        discord: 'https://discord.gg/psychokitties',
        twitter: 'https://twitter.com/MadHareSociety?t=5R1AY_d6DFeF-Jrxel1_hg&s=09',
        instagram: 'https://instagram.com/madharesociety?igshid=YmMyMTA2M2Y='
      },
      descriptionHeading: `DaRealGenius aka Nelson J. Madera is a community-driven NFT artist, the Creator of "Mad Hare Society", Co-Creator of "PsychoKitties" and a renowned graphic illustrator from Puerto Rico who has been commissioned by latin music artists such as Don Omar, Farruko, Nicky Jam, Ñengo Flow, Ivy Queen and Rauw Alejandro.`,
      description: `
       Say welcome to Frank & Stein. These two-headed DNA-mutated creatures are an unstoppable force to be reckoned with. Enjoy the magnificent details, artistic perfection and grab a Mad Hare if you want to get a FREE airdrop before the year ends.
<br>
<br>
DaRealGenius and Ugonzo are also working on a first-of-its-kind rogue-like P2E game that will be launched at the end of Q1 next year. You can only expect greatness from a gaming team who's members have worked with companies such as Netflix, Amazon, Ubisoft and Disney to name a few.
<br>
<br>
From the bottom of DaRealGenius's heart, he hopes you have a great time creating your perfect monster by yourself or with your dear family members.
      `,
      cardImg: require('@/static/img/halloween/index/artists/madhare/card-image.png'),
      cardTag: 'Frank & Stein',
      cardLogo: require('@/static/img/halloween/index/artists/madhare/logo.svg')
    },
    {
      socials: {
        url: 'https://www.psychokitties.io/',
        discord: 'https://discord.gg/psychokitties',
        twitter: 'https://twitter.com/PsychoKittiesOG?t=epIatjkMmEBwt9lOeBwcxw&s=09',
        instagram: 'https://instagram.com/psychokittiesog?igshid=YmMyMTA2M2Y='
      },
      descriptionHeading: `
      Ugonzo is the Creator of the "PsychoKitties" series and a psychedelic artist, who's creations are owned by the likes of Joe Rogan, Lex Fridman, Pauly Shore, Cody Gardbrandt from UFC, and Deron Williams from NBA.
      `,
      description: `
      The collections of DaRealGenius and Ugonzo have traded over $21.7M in total volume and they've collectively donated $587,486 through their efforts in the NFT space, created the world's first MetaRave with the infamous DJ trio Major Lazer and the world's first metaverse podcast.
<br>
<br>
Staying true to his nature this Halloween, Ugonzo has breathed life into his spiritual animal - Werewolves - who launch their victim's minds into a psychedelic parallel universe only to get stuck for an eternity -  leaving their body breathing, but unconscious.
<br>
<br>
Ugonzo invites you to take a trip to your subconscious and create a unique creature that speaks to your soul.
      `,
      cardImg: require('@/static/img/halloween/index/artists/kitties/card-image.png'),
      cardTag: 'Werewolf',
      cardLogo: require('@/static/img/halloween/index/artists/kitties/logo.svg')
    },
    {
      socials: {
        url: 'https://www.carkayous.com/',
        discord: 'https://discord.gg/carkayous',
        twitter: 'https://twitter.com/carkayous?t=GI5zNNcaadYivr2fBaHgsw&s=09',
        instagram: 'https://www.instagram.com/carkayous/'
      },
      descriptionHeading: `
      Carkayous is a fictitious continent created by Jesse Smith (TV Celeb | Ink Master | Tattoo Artist) since 2009. The next adventure on the docket is to Durken Forest (Expedition 8.2 - The Blooming of the Psilofish) on Nov 17th, 2022 where we will explore a massive tattoo artist mega collaboration led by him. Jesse Smith introduces the best new-school style tattoo artists to expand the world of Carkayous with utilities revolving around receiving FREE tattoo sessions (hotel and flights included) and awesome IRL high-quality stretched print canvases & acrylic art.
      `,
      description: `
      The Carkayous Crew brings you another amazing project created by none other than the king of Zombie Caricatures himself, Mr. Nick Mitchell!  Nick has been a professional artist for 20+ years now and has won numerous awards for, not only his caricatures, but also his tattoos.  With over 100 unique traits, you can decorate, puncture, chop, slash and harass your zombie potato into something that reflects your inner personality.
      `,
      cardImg: require('@/static/img/halloween/index/artists/carkayous/card-image.png'),
      cardTag: 'Tater Invaders',
      cardLogo: require('@/static/img/halloween/index/artists/carkayous/logo.svg')
    },
    {
      socials: {
        url: 'https://tmknft.com/',
        discord: 'https://discord.gg/aDK9FxWC',
        twitter: 'https://twitter.com/TMKNFT?t=QyEv0oe3CwtdxIaDESWZ8A&s=09',
        instagram: 'https://instagram.com/tmknft'
      },
      descriptionHeading: `From the creator Luca de Massis of TMK that recently had an amazing sold out on Crypto.com|NFT, there is now the Creepy Doll. Specially created for the FIRST EVER Halloween Holiday Bash. Create your custom Creepy Doll NFT. THIS will be one for the books!!!`,
      description: `
        The story goes that the Creepy Dolls came into existence by accident. The scientists were working on modifying the DNA of one TMK in the laboratory, but something went terribly wrong, and no one could figure out what had happened. The altered TMK turned into a mischievous bad modification because they were unaware that the original human that was used to create the TMK was an ancient, bewitched doll in humanoid form. The doll was not just any kind of doll, it was a 1000-year-old haunted doll with magical powers. Once everyone in the laboratory left for the night, at midnight the TMK transformed into a Creepy Doll and it came to life. It then performed a ritual to call upon all dolls that were in humanoid form all over the world. While they are human, they are the kindest sweetest people, but once they change into their ancient, cursed doll figure that is when their mischievous sometimes even just plain bad behavior comes out.  They were all hidden in plain sight blended into society. Some worked in the office, some were teachers, there were a few working in factories, law enforcement, they were part of the communities everywhere just waiting to be summoned. The mission is to create an army of Creepy Dolls to take over the world on All Hallows’ Eve. Every single one of them has some type of level of atrocious acts they are capable of performing. They all look different, some look scarier than others, some blend in and change themselves into known Halloween characters, you also have the ones that look kind of cute. They all have an instructional function and know what rituals they need to perform for their world domination plan. The Creepy dolls only have one downfall, if you put them in front of a mirror their humanoid form will be revealed…
<br>
<br>
The Creepy Dolls all have their own personality which will be amplified by the traits picked out for them. They are all unique and love bright colors, you will decide what they will look like and how they will move in the world with your guidance to complete their world domination plan.
<br>
<br>
Will the Creepy Dolls succeed this Halloween to take over the world? Will some look like Jack O’Lantern, or will you create your own Creepy Doll clown, the sky's the limit with the traits available to you. The traits are handcrafted and created by Luca de Massis from TMK. Just like TMK the Creepy Doll traits will be colorful and fun with so many different accessories to choose from. Try all the traits and pick the ones you love best to create your own unique Creepy Doll.

      `,
      cardImg: require('@/static/img/halloween/index/artists/tmk/card-image.png'),
      cardTag: 'Creepy Doll',
      cardLogo: require('@/static/img/halloween/index/artists/tmk/logo.svg')
    },
    {
      socials: {
        url: 'https://www.boomersquad.io/',
        discord: 'https://discord.gg/boomersquad',
        twitter: 'https://twitter.com/BoomerSquadNFT1?t=t5Vi3RS9dkpbL2tJ5R9Vfw&s=09',
        instagram: 'https://instagram.com/boomersquadnft?igshid=YmMyMTA2M2Y='
      },
      descriptionHeading: `Boomer Squad is a Cronos project run by a fully doxxed team of 11 that is designed to build an ecosystem of games, events, collections, and web3 services that will always reflect the value they are generating back to their Gen 0 holders. Achieved in their trustless ecosystem through their DAO and Mattress Fund working in parallel. The Mattress Fund, which is their Verified Distribution contract, allows them to provide CRO rewards to their Gen 0 holders directly without the need for staking which has given over 1.4M CRO back to their holders to date through giveaways, game tokens, DAO funding, launchpad revenue, and secondary sales reflection (currently top 10 most traded collections on Ebisu's bay with over 3.4M CRO in secondary sales volume).`,
      description: `
      After minting out in May, Boomer Squad launched its first on-chain game 2 weeks later called Chow Time - a marketplace arbitrage game that lasted 30 days that generated 34,643 total transactions. Kickstarting the game, Boomer Squad gave their holders 400,000 CRO worth of game tokens to play with . In total, the game had 635 unique players, turning in a total of 18,772 meals for 869,705 CRO. The biggest surprise was the secondary market activity on the Boomer Squad official website (https://www.boomersquad.io/) which generated 2,855 sale transactions. The success of Chow Time is evidence which supports that there is a demand for a proper on-chain game based on game theory and strategy. Keeping in-line with their values of full transparency, Boomer Squad provided a full financial report of the project upon completion of Chow Time published on their gitbook.
<br>
<br>
After ending Chow Time, Boomer Squad’s roadmap was updated to lay out the plans to keep building their ecosystem. The next major milestone on their roadmap is the Boom Room drop which will be the main mechanism in which $SCRATCH, their ecosystem utility token, will be distributed. Users will be able to take Boom Rooms (NFTs) and place/remove Room Components (NFTs) to alter the rooms as they see fit. The manner in which users alter their rooms determines how much $SCRATCH  they will generate per day. While working on development of the Boom Room ecosystem, they will also be continuing their launchpad services, shipping their first run of Merch - free to all holders, releasing the Boomer Squad Art Collection, developing Boomer Radio, and getting the community ready for their Zoomer Squad collection.
      `,
      cardImg: require('@/static/img/halloween/index/artists/vampirette/card-image.png'),
      cardTag: 'Pin-up Vampirette',
      cardLogo: require('@/static/img/halloween/index/artists/vampirette/logo.svg')
    },
    {
      socials: {
        url: 'https://www.alphabotsociety.com/',
        discord: 'https://discord.gg/7PH5nxU5',
        twitter: 'https://twitter.com/AlphabotSociety?t=S2LfbSq7Jdm_o26OIDTUWQ&s=09',
        instagram: 'https://www.instagram.com/alphabotsociety/'
      },
      descriptionHeading: `From the creators of AlphaBot Society, comes The Groblins. A one of a kind “create-your own” NFT collection of Goblin PFPs created for Crypto.com’s FIRST EVER Halloween Bash! A first of its kind Halloween holiday event that will go down in history!`,
      description: `
      As the legend goes, The Groblins are ancient, grotesque, monstrous creatures that were birthed from the murky swamps and backwaters of The Croverse.They started out as simple mischievous household spirits that preyed on the weak  and stole from the innocent. At the time of their creation, they were wicked and sinful souls that gained joy from the downfall of others, their magical powers being used for nefarious activities. However, since those distant days of old  The Groblins have evolved into much more complicated and intricate beings. They have a long complex history of changing and growing into strange yet civilized semi-humanoids who now carry out a variety of roles such as blacksmiths, news anchors, athletes, warriors, clowns, priests, and so much more. Some prefer a life of leisure, smoking cigars on the beach, while others still perpetuate their sinister roles, and will often be seen with the blood of their last victim still dripping off their sharp teeth. Some of these goblins have imprinted and adorned their bodies with trappings of gold, silver and diamonds, while others have remained in their more natural state wearing only things given to them by the earth. Although their stories are all vastly different, at the end of the day, these little goblins started out as shunned mischievous creatures of darkness but have since worked hard to integrate themselves into our world and have brought a little bit of magic along with them.
<br>
<br>
Now word has spread across the vast lands of The Croverse that there’s a halloween bash to be thrown. This bash will bring together beings from all across the lands in celebration of the spookiest time of year. And believe it or not, in spite of their outlandish, twisted behavior, The Groblins have been invited to join in the party.
<br>
<br>
Much like us humans, The Groblins are all unique individuals and choose their own path in life, and now it is up to you to choose how your Groblins will be represented at the Crypto.com Halloween Bash! Will it be a rough-around-the-edges tattooed biker? A mad scientist who got a taste for their own gooey concoction? Or perhaps a woodlan king with a love of diamond jewelry? With 170 different attributes across 7 different traits, the wacky, stylish, and outrageous combinations are nearly endless.
<br>
<br>
The 170 total traits were handcrafted and created by Travis & Cody from Alphabot Society. During the creation process they drew inspiration from a variety of things such as pop culture and entertainment, classic fashion stylings, and iconic halloween imagery that will be sure to make the spooky season last all year long. Make sure you explore the possible combinations and pick your favorites to represent The Groblins at the CDC Halloween Bash!
      `,
      cardImg: require('@/static/img/halloween/index/artists/groblin/card-image.png'),
      cardTag: 'Groblin',
      cardLogo: require('@/static/img/halloween/index/artists/groblin/logo.svg')
    },
    {
      socials: {
        url: 'https://www.psychonautapedivision.com/',
        discord: 'https://discord.gg/psychonautapedivision',
        twitter: 'https://twitter.com/PsychonautApeD?t=7bJqm4avQKg8D7sTyML2dw&s=09',
        instagram: 'https://www.instagram.com/psychonautaped'
      },
      descriptionHeading: `
      “We are each our own devil, and we make this world our hell.”
      <br>
― Oscar Wilde
<br>
<br>
WoahJonny, the legendary artist behind the art of the Psychonaut Ape Division (PAD) and self-professed psychonaut himself, is proud to introduce the ‘Lil De Mans; a one of a kind “create-your-own” NFT collection for Crypto.com’s FIRST EVER Halloween Bash!
      `,
      description: `
      Whilst PAD was a 190 trait collection comprising of 7,777 unique NFT’s reflecting WoahJonny’s bold, crazy and chaotic psychedelic styled artwork, he wanted to take a step-back and create something entirely different for this event, whilst still drawing inspiration from one of his favorite genres of character artwork.
<br>
<br>
As a result, ‘Lil De Mans were born out of WoahJonny’s affinity and love for the retro rubber-hose styled cartoons of the 1920’s and 30’s (albeit a little more warped…). The ‘Lil De Mans not only have a clean and polished approach to their design akin to this era, but will also instill a sense of nostalgia within users as there are plenty of spooky references from horror films and other tropes lurking within the traits…
<br>
<br>
WoahJonny also drew inspiration from his idea that there’s a Lil De Man lurking in all of us. He believes no-one can be all Saint or all Sinner, and that this dualism of man is what makes us truly human, it is about balancing both sides of the spectrum.
<br>
<br>
What does your Lil De Man look like? Is he a cute and playful trouble-maker that only surfaces when you get too drunk at the work Christmas party, or is your Lil De Man something a little more sinister…?
<br>
<br>
Whatever your Lil De Man is, with xxx custom traits to choose from, we are sure you will be able to find one who speaks to your inner dark-side, whatever level it may be…
      `,
      cardImg: require('@/static/img/halloween/index/artists/ape/card-image.png'),
      cardTag: 'Demon',
      cardLogo: require('@/static/img/halloween/index/artists/ape/logo.svg')
    }
  ],
  data() {
    return {
      openedProjectIdx: null
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/halloween/index/ArtistsBlock";
</style>
