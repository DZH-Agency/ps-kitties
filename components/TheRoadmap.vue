<template>
  <div class="rd-wrapper">
    <div class="ps-container rd-container">
      <div class="rd">
        <div class="rd-gen">
          <div class="rd-gen-row">
            <div class="rd-gen__title">General <br> Roadmap</div>
            <div class="rd-gen__text">
              <div class="rd-point-big right center"></div>
              Create & airdrop a completely new 10k PFP collection - <a href="https://crypto.com/nft/collection/69d0601d6d4ecd0ea670835645d47b0d" target="_blank"><strong>PsychoMollies</strong></a>
            </div>
          </div>
          <div class="rd-gen-row">
            <div class="rd-gen__text">
              <div class="rd-point-small left"></div>
              Paint our first wall mural of a giveaway winners NFT PsychoKitty #2522 in Orlando, FL
            </div>
            <div class="rd-gen__video-box">
              <div class="rd-gen__video"><div class="video-blur" v-if="!players.player1.isPlaying"></div>
                <img v-if="!players.player1.isPlaying" src="/general/play-btn.png" alt="play-btn" @click="players.player1.instance.play()">
  
                <iframe ref="player1" src="https://player.vimeo.com/video/692926817?h=5e8473c4b0&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div class="rd-gen-row">
              <div class="rd-gen__img-box">
                <img class="rd-gen__img big ld-1" src="/TheRoadmap/ld-1.png" alt="portrait"/>
              </div>
            <div class="rd-gen__text">
              Monthly parties or social hangout experiences on VrChat or other great metaverse platforms
              <div class="rd-point-small right"></div>
            </div>
          </div>
          <div class="rd-gen-row">
            <div class="rd-gen__text">
              Partner with great NFT projects to get whitelists or free NFT allocation (e.g <a href="https://crypto.com/nft/collection/41a371f626f43473ca087f0f36f06299" target="_blank"><strong>"Mad Hare
              Society"</strong></a> - 2,500 free NFTs, <a href="https://crypto.com/nft/collection/258b45221dda385339d7c90098f24da9" target="_blank"><strong>"The World AI"</strong></a> - 250 free NFTs)
              <div class="rd-point-small left"></div>
            </div>
            <div class="rd-gen__img-box">
              <img class="rd-gen__img rd-2" src="/TheRoadmap/rd-2.png" alt="portrait"/>
            </div>
          </div>
          <div class="rd-gen-row">
              <div class="rd-gen__img-box">
                <img class="rd-gen__img ld-2" src="/TheRoadmap/ld-2.png" alt="portrait"/>
              </div>
            <div class="rd-gen__text">
              Breeding implementation (Q3 2022)
              <div class="rd-point-small right"></div>
            </div>
          </div>
          <div class="rd-gen-row">
            <div class="rd-gen__text">
              Partner with brands to get exposure and great deals for our holders
              <div class="rd-point-small left"></div>
            </div>
            <div class="rd-gen__img-box">
              <img class="rd-gen__img rd-3" src="/TheRoadmap/rd-3.png" alt="portrait"/>
            </div>
          </div>
          <div class="rd-gen-row">
              <div class="rd-gen__img-box">
                <img class="rd-gen__img ld-3" src="/TheRoadmap/ld-3.png" alt="portrait"/>
              </div>
            <div class="rd-gen__text">
              P2E game with our own token (Q1 2023)
              <div class="rd-point-small right"></div>
              
            </div>
          </div>
          <div class="rd-gen-row">
            <div class="rd-gen__text">
              Get our own Netflix series and start building a cultural media franchise
              <div class="rd-point-small left"></div>
            </div>
            <div class="rd-gen__img-box">
              <img class="rd-gen__img rd-4" src="/TheRoadmap/rd-4.png" alt="portrait"/>
            </div>
          </div>
        </div>
        
        <div class="rd-metaverse">
          <div class="rd-metaverse-row title-row">
            <div class="rd-metaverse__step-text">
              Stage 1: Month 1-3 <strong>(COMPLETED)</strong>
              <div class="rd-point-big left center"></div>
            </div>
            <h2 class="rd-metaverse__title">Metaverse Roadmap</h2>
          </div>
          <div class="rd-metaverse-row">
            <div class="rd-metaverse-content">
                <div class="rd-metaverse-content__text">
                  Started on 01/01/2022
                </div>
                <ul class="rd-metaverse-content__list">
                  <li>9Livez 1.0 release with PC & VR compatibility</li>
                  <li>Host World's First NFT Gated Party in the metaverse with Major Lazer headlining</li>
                  <li>Implement a Synced Video Player for PC and most VR</li>
                  <li>9Livez Event Press release</li>
                  <li>Implement Interactable Objects</li>
                  <li>Work with Metaverse Platforms for higher player capacity</li>
                  <li>9Livez 2.0 Release</li>
                </ul>
            </div>
            <div class="rd-metaverse-content img-box">
              <img src="/TheRoadmap/mrd-1.png" alt="img" class="rd-metaverse-content__img mrd-1">
            </div>
          </div>
  
          <div class="rd-metaverse-row title-row">
            <div></div>
            <div class="rd-metaverse__step-text">
              Stage 2: Month 3-6
              <div class="rd-point-small right center"></div>
            </div>
          </div>
  
          <div class="rd-metaverse-row">
            <div class="rd-metaverse-content video-box">
              <div class="video-blur" v-if="!players.player2.isPlaying"></div>
              <img v-if="!players.player2.isPlaying" src="/general/play-btn.png" alt="play-btn" @click="players.player2.instance.play()">
              <div class="video-box__container" style="padding:56.25% 0 0 0;position:relative;"><iframe ref="player2" src="https://player.vimeo.com/video/692926760?h=832b0b3159&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
            </div>
            
            <div class="rd-metaverse-content">
              <ul class="rd-metaverse-content__list">
                <li>Host multiple types of events at 9Livez</li>
                <li>3D Model Airdrops Example (Policia badge, Pillows, Furniture, Clothing Items)</li>
                <li><strong>Release of Metaverse Art Gallery to display PK's and PM's</strong></li>
                <li>Expansion of Metaverse Art Gallery to allow other CRO projects to display their art there</li>
                <li>Customisable personal rooms in the Art Gallery</li>
                <li>Partner with other innovators in our field</li>
                <li><strong>Release of Worlds First Metaverse Podcast</strong></li>
                <li>Host the Worlds First Metaverse Podcast with Guest Speaker</li>
                <li>Set a target of a Podcast Episode a week</li>
                <li>Augmented reality</li>
              </ul>
            </div>
          </div>
  
          <div class="rd-metaverse-row title-row">
            <div class="rd-metaverse__step-text">
              Stage 3: Month 6+
              <div class="rd-point-small left center"></div>
            </div>
            <div></div>
          </div>
  
          <div class="rd-metaverse-row">
            <div class="rd-metaverse-content">
              <div class="rd-metaverse-content__text">
                Even though we are in a fastly growing industry, right now the technology is still in its infancy and new metaverses are built every week. We are taking a cautious approach to first observe the metaverse landscape and understand which will be the winning Metaverses before fully focusing on the specific platforms. Let's say we took your investment and bought land in The Sandbox, in 2 years there may be 100 better metaverses built with superior graphics and The Sandbox could end up worthless.
                <br>
                <br>
                Keeping our operations fluid is a top priority and all our projects can easily be imported onto different metaverse platforms, so that our Psychokitty community will not get stuck in a "dead" or "dying" metaverse. Rest assured we are working non-stop to make the PsychoKitty name a leading brand in the metaverse world.
              </div>
            </div>
            <img src="/TheRoadmap/mrd-2.png" alt="img" class="rd-metaverse__img mrd-2">
          </div>
        </div>
      </div>
    </div>
    <div class="ps-container">
      <div class="rd__hint">
        <span>Note:</span> Roadmap items are subject to change during special circumstances or when better opportunities arise. Roadmap items should not be considered guarantees.
      </div>
    </div>
  </div>
</template>

<script>
import Player from '@vimeo/player'

export default {
  name: 'TheRoadmap',
  data() {
    return {
      players: {
        player1: {
          instance: null,
          isPlaying: false,
        },
        player2: {
          instance: null,
          isPlaying: false,
        }
      }
    }
  },
  mounted() {
    this.players.player1.instance = new Player(this.$refs.player1)
    this.players.player2.instance = new Player(this.$refs.player2)
  
    this.players.player2.instance.on('pause', () => {
      this.players.player2.isPlaying = false
    })
  
    this.players.player2.instance.on('play', () => {
      this.players.player2.isPlaying = true
    })
  
    this.players.player1.instance.on('pause', () => {
      this.players.player1.isPlaying = false
    })
  
    this.players.player1.instance.on('play', () => {
      this.players.player1.isPlaying = true
    })
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/TheRoadmap.scss";
</style>
