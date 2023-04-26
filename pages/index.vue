<template>
  <div>
    <TheNavbar />
    <portal-target name="app" />

    <div class="header-section">
      <div class="ps-container">
        <h1>
          Welcome To
          <br>
          <span>The PsychoKitties Metaverse</span>
        </h1>

        <email-subscribe />
      </div>
    </div>

    <div :class="{'on-pause': !isBigVideoPlaying}" class="video-section" style="padding:56.25% 0 0 0;position:relative;">
      <img v-if="!isBigVideoPlaying" src="/general/play-btn.png" alt="play-btn" @click="playBigVideo">
      <iframe ref="player" src="https://player.vimeo.com/video/692925869?h=9eec22c0d9&autoplay=0&loop=1&title=0&byline=0&portrait=0&muted=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="characters-section">
      <the-characters id="characters"/>
      <the-mission id="about"/>
    </div>
    <the-stats :stats="stats"/>
    <div class="roadmap-section">
      <the-leaderboard :data="leaderboard"/>
      <the-roadmap id="roadmap"/>
    </div>
    <the-artist id="artist"/>
    <the-team id="team"/>
    <gaming-section id="gaming" />
    <join-community/>
    <ranking-table id="ranking"/>
    <the-footer/>
  </div>
</template>

<script>
import Player from '@vimeo/player';

export default {
  name: 'Test',
  data() {
    return {
      leaderboard: [],
      stats: {
        max_trade: "",
        max_trade_today: "",
        total_volume: "",
      },
      isBigVideoPlaying: false
    }
  },
  vimeoPlayer: null,
  beforeMount() {
    window.addEventListener('click', this.loadVideo)
  },
  async mounted() {
    this.$options.vimeoPlayer = new Player(this.$refs.player)

    this.$options.vimeoPlayer.on('pause', () => {
      this.isBigVideoPlaying = false
    })

    const { data } = await this.$axios.get('/stats')

    this.leaderboard = data.leaderboard
    this.stats.max_trade = Number(Number(data.max_trade).toFixed(0)).toLocaleString('en-US')
    this.stats.max_trade_today = Number(Number(data.max_trade_today).toFixed(0)).toLocaleString('en-US')
    const total = Number(data.total_volume).toFixed(0)
    const totalMillionStr = Number(`${total.slice(0, 2)}.${total.slice(2)}`)
    const totalMillionNum = Math.round((totalMillionStr + Number.EPSILON) * 10) / 10
    this.stats.total_volume = `${totalMillionNum.toString().replace('.', ',')}M`
  },
  methods: {
    playBigVideo() {
      this.isBigVideoPlaying = true
      this.$options.vimeoPlayer.play()
    },
    loadVideo() {
      this.$options.vimeoPlayer.setVolume(.15)
      window.removeEventListener('click', this.loadVideo)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/pages/test.scss";
</style>
