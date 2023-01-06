<template>
  <div class="st-wrapper">
    <div class="ps-container">
      <div class="st">
        <div
          class="st-item"
          v-for="(stat, index) in theStats"
          :key="index"
        >
          <div class="st-item__title">
            {{ stat.title }}
          </div>
          <div class="st-item__text">
            {{ stat.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheStats',
  props: {
    stats: {
      type: Object,
      default: () => ({
        max_trade: "",
        max_trade_today: "",
        total_volume: "",
        total_volume_today: ""
      })
    }
  },
  computed: {
    theStats() {
      // before was 404,486
      let donated = (587486).toLocaleString('en-US')
      return [
        { title: `$${donated}`, text: 'Donated to charities'},
        { title: `$${(537500).toLocaleString('en-US')}`, text: 'Worth of free partner project NFTs airdropped'},
        { title: '3', text: 'Wall mural painted'},
        { title: `$${this.stats.total_volume}`, text: 'Volume traded'},
        // { title: `$${this.stats.max_trade_today}`, text: 'Highest sale of the day'},
        { title: `$${this.stats.max_trade}`, text: 'Highest sale ever'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/TheStats.scss";
</style>
