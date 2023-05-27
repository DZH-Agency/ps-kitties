<template>
  <div class="rd-wrapper">
    <div class="ps-container rd-container">
      <div class="rd">
        <div class="rd-gen">
          <div class="rd-gen-row">
            <div class="rd-gen__title">General <br> Roadmap</div>
            <div class="rd-gen__text">
              <div class="rd-point-big right center"></div>
              We airdropped a completely new 10k PFP collection to our holders called PsychoMollies & together with Mad Hare Society developed the world’s first cross-project breeding event where the babies either inherited the traits of their chosen parents or were able to choose their desired baby traits in real-time!
            </div>
          </div>
          <div class="rd-gen-row">
            <div class="rd-gen__text">
              <div class="rd-point-small left"></div>
              We’re bringing PsychoKitties and Mad Hares to life by merging the digital with the physical world. Our massive wall murals across the world are a piece of history to be witnessed by the future generations.
            </div>
          </div>
          <div class="rd-gen-row full-width">
            <div class="rd-gen__video-box">
              <div class="rd-gen__video"><div class="video-blur" v-if="!players.player1.isPlaying"></div>
                <img v-if="!players.player1.isPlaying" src="/general/play-btn.png" alt="play-btn" @click="players.player1.instance.play()">

                <iframe ref="player1" src="https://player.vimeo.com/video/692926817?h=5e8473c4b0&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          <div class="rd-gen-row">
              <div></div>
            <div class="rd-gen__text">
              Exciting events where our beloved community can get to know each other, have fun & build lifetime relationships.
              <div class="rd-point-small right"></div>
            </div>
          </div>
          <div class="rd-gen-row full-width">
            <div class="rd-gen__video-box">
              <div class="rd-gen__video"><div class="video-blur" v-if="!players.player2.isPlaying"></div>
                <img v-if="!players.player2.isPlaying" src="/general/play-btn.png" alt="play-btn" @click="players.player2.instance.play()">

                <iframe ref="player2" src="https://player.vimeo.com/video/692926817?h=5e8473c4b0&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              </div>
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
              Get excited about our upcoming Interactive Comic Application that allows you to win rewards & puts the fate of the PsychoKitties & Mad Hare Society storyline in the community’s hands.
              <div class="rd-point-small right"></div>
            </div>
          </div>
          <div class="rd-gen-row">
            <div class="rd-gen__text">
              Blockchain game <strong>Quantum Frenzy</strong>  has been in development since June 2022 & we’re excited to move into the testing phase soon. Get rewarded for your help & let’s build a game that Web2 and Web3 users worldwide will love!
              <div class="rd-point-small left"></div>
            </div>
            <div class="rd-gen__img-box">
              <img class="rd-gen__img rd-3" src="/TheRoadmap/rd-3.svg" alt="portrait"/>
            </div>
          </div>
          <div class="rd-gen-row">
              <div class="rd-gen__img-box">
                <img class="rd-gen__img ld-3" src="/TheRoadmap/ld-3.png" alt="portrait"/>
              </div>
            <div class="rd-gen__text">
              Get excited about our upcoming Interactive Comic Application that allows you to win rewards & puts the fate of the PsychoKitties & Mad Hare Society storyline in the community’s hands.
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
