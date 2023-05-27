<template>
  <div class="tut">
    <TheNavbar />
    <portal-target name="app" />
    <div class="wrapper">
      <div class="ps-container">
        <h1 class="tut__title">Tutorials</h1>
        <section class="tut-tutorials">
          <section class="tut-tutorials-item" v-for="tutorial in $options.tutorials" :key="tutorial">
            <h2 class="tut-tutorials-item__title">Test &nbsp;<strong>testing</strong>&nbsp; and test</h2>
            <div class="tut-tutorials-item-video">
                <div class="tut-tutorials-item-video__video"><div class="video-blur" v-if="!playingTutorialVideos.includes(tutorial)"></div>
                  <img @click="playTutorialVideo(tutorial)" v-if="!playingTutorialVideos.includes(tutorial)" src="/general/play-btn.png" alt="play-btn">

                  <iframe ref="tutorialVideos" src="https://player.vimeo.com/video/692926817?h=5e8473c4b0&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <button @click="toggleTutorial(tutorial)" class="tut-tutorials-item__show-btn" :class="{ 'opened': openedTutorialIds.includes(tutorial) }">
              {{ openedTutorialIds.includes(tutorial) ? 'Hide text version of tutorial' : 'Show text version of tutorial'  }}
            </button>

            <section class="tut-tutorials-item-cards" v-if="openedTutorialIds.includes(tutorial)">
              <div class="tut-tutorials-item-cards-item" v-for="(_, index) in Array.from(Array(4).keys())" :key="index">
                <span class="tut-tutorials-item-cards-item__index">{{ index + 1 }}</span>
                <img src="/img/tutorials/card-img-placeholder.png" alt="tutorial item" class="tut-tutorials-item-cards-item__image">
                <p class="tut-tutorials-item-cards-item__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eius eos et fuga labore laborum, optio quidem quos ut veniam.
                </p>
              </div>
            </section>
          </section>
        </section>

        <section class="tut-guides">
          <section class="tut-guides-item" v-for="guide in $options.guides" :key="guide">
            <h2 class="tut-guides-item__title">
              “Don’t Get <strong>Scammed</strong>” Guide
            </h2>
            <section class="tut-guides-item-content">
              <p class="tut-guides-item-content-text" v-for="(_, index) in Array.from(Array(5).keys())" :key="index">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nemo possimus tenetur unde. Debitis eos illo iure, ratione ullam veritatis!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nemo possimus tenetur unde. Debitis eos illo iure, ratione ullam veritatis!
                <span class="tut-guides-item-content-text__index">{{ index + 1 }}</span>
              </p>
            </section>

          </section>
        </section>
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import Player from "@vimeo/player";

export default {
  name: "tutorials",
  tutorials: [1, 2, 3],
  guides: [1, 2],
  vimeoPlayers: [],
  data() {
    return {
      openedTutorialIds: [],
      playingTutorialVideos: []
    }
  },
  mounted() {
    this.$options.vimeoPlayers = this.$refs.tutorialVideos.map((video, index) => {

      const player = new Player(video)

      player.on('pause', () => {
        this.playingTutorialVideos = this.playingTutorialVideos.filter(id => id !== index);
      })

      return player
    })
  },
  methods: {
    toggleTutorial(tutorialId) {
      if (this.openedTutorialIds.includes(tutorialId)) {
        this.openedTutorialIds = this.openedTutorialIds.filter(id => id !== tutorialId);
      } else {
        this.openedTutorialIds.push(tutorialId);
      }
    },
    playTutorialVideo(tutorialIndex) {
      this.$options.vimeoPlayers[tutorialIndex].play();
      this.playingTutorialVideos.push(tutorialIndex);
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/tutorials.scss";
</style>
