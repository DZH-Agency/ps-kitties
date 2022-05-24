<template>
  <div class="lb-wrapper">
    <div class="ps-container">
      <div class="lb">
        <h2 class="lb__heading">Whale Leaderboard</h2>
        <div class="lb-table">
          <div class="lb-table-head">
            <div class="lb-table-head__col">Rank</div>
            <div class="lb-table-head__col">Wallet Address</div>
            <div class="lb-table-head__col">Quantity</div>
          </div>
          <div class="lb-table-body">
            <div
              class="lb-table-body__row"
              v-for="(col, index) in data"
              :key="col.address"
            >
              <div class="lb-table-body__col" :class="{'top-three': index < 3}">
                #{{ index + 1 }}
              </div>
              <div class="lb-table-body__col">
                {{ humanizeWallet(col.wallet) }}
              </div>
              <div class="lb-table-body__col">
                {{ col.total }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheLeaderboard',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    humanizeWallet(wallet) {
      return [wallet.slice(0, 8), wallet.slice(-8)].join('...')
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/TheLeaderboard.scss";
</style>
