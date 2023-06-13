<template>
  <div class="rt-wrapper">
    <div class="ps-container">
      <div class="rt">
        <h2 class="rt__title">
          Ranking Table
        </h2>
        <p class="rt__text">
          Use the below table to find the ranking of your PsychoKitty or PsychoMolly.
        </p>
        <div class="rt-actions">
          <div class="rt-actions-search">
            <div class="rt-actions-search-input">
              <input v-model="search" type="text" placeholder="Search">
            </div>
            <div class="rt-actions-search-sort">
              <button class="rt-actions-search-sort__btn" :class="{active: sort === 'rarity'}" @click="sort = 'rarity'">
                Sort By Rarity
              </button>
              <button class="rt-actions-search-sort__btn" :class="{active: sort === 'id'}" @click="sort = 'id'">
                Sort By ID
              </button>
            </div>
          </div>
          <div class="rt-actions-tabs">
            <button class="rt-actions-tabs__tab" :class="{active: collection === 'kitty'}" @click="collection = 'kitty'">PsychoKitties</button>
            <button class="rt-actions-tabs__tab" :class="{active: collection === 'molly'}" @click="collection = 'molly'">PsychoMollies</button>
            <button class="rt-actions-tabs__tab" :class="{active: collection === 'genqbabies'}" @click="collection = 'genqbabies'">Gen-Q Elite Babies</button>
          </div>
        </div>
        <div class="rt-table">
          <div class="rt-table-item" v-for="item in items" :key="item.assetId">
            <div class="rt-table-item__img-box">
              <img :src="item.cover_url || item.img" alt="nft">
            </div>
            <div class="rt-table-item-info">
              <a :href="getNftLink(item)" target="_blank" class="rt-table-item-info__name">{{ item.name }}</a>
              <div class="rt-table-item-info__score">Score: {{ Number(item.Score) }}</div>
              <div class="rt-table-item-info__rank">Rank: <span>{{ item.rank || item.ranking }}</span> / 10000</div>
            </div>
          </div>
        </div>
        <div class="rt-pagination">
          <button :disabled="currentPageNumber === 1" @click="currentPageNumber--" class="rt-pagination__arrow prev">
            <img alt="arrow" src="/RankingTable/arrow-left.png"/>
          </button>
          <button
            class="rt-pagination__page"
            v-for="page in availablePages"
            :key="page.number"
            :class="{active: currentPageNumber === page.number}"
            @click="currentPageNumber = page.number || 1"
          >
            {{ page.number || '...' }}
          </button>
          <button :disabled="currentPageNumber === pages.length" @click="currentPageNumber++" class="rt-pagination__arrow next">
            <img alt="arrow" src="/RankingTable/arrow-left.png"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce, fill } from 'lodash'

export default {
  name: 'RankingTable',
  data() {
    return {
      totalPagesCount: 1,
      currentPageNumber: 1,
      middlePagesOffset: 1,
      startPagesCount: 2,
      endPagesCount: 1,
      items: [],
      search: '',
      sort: 'rarity',
      collection: 'kitty'
    }
  },
  watch: {
    async search() {
      await this.debouncedSearch()
    },
    currentPageNumber() {
      this.loadItems()
    },
    collection() {
      this.loadItems()
    },
    sort() {
      this.loadItems()
    },
  },
  computed: {
    pages() {
      return Array.from(Array(this.totalPagesCount)).map((_, index) => index + 1)
    },
    availablePages() {
      const startPages = this.pages.slice(0, this.startPagesCount)
      const endPages = this.pages.slice(-this.endPagesCount).filter(pageNumber => !startPages.includes(pageNumber))

      const middlePages = this._getMiddlePages(startPages, endPages)

      const rawPages = [...startPages, ...middlePages, ...endPages]

      return this._processPages(rawPages)
    }
  },
  async mounted() {
    await this.loadItems()
  },
  methods: {
    debouncedSearch: debounce(async function() {
      await this.loadItems()
    }, 300),
    getNftLink(item) {
      const collectionIdByCollection = {
        kitty: 'faa3d8da88f9ee2f25267e895db71471',
        molly: '69d0601d6d4ecd0ea670835645d47b0d',
        genqbabies: 'b8a462abcadfa08f1e678df15bbacc41'
      }
      const collectionId = collectionIdByCollection[this.collection]
      return `https://crypto.com/nft/collection/${collectionId}?asset=${item.assetId || item.id}&edition=${item.defaultEditionId}&detail-page=MARKETPLACE`
    },
    async loadItems() {
      const { data } = await this.$axios.get(this.collection === 'genqbabies' ? 'https://x-api.madharesociety.com/search' : '/search', {
        params: {
          page: this.currentPageNumber,
          sort_by: this.sort,
          sort: this.sort === 'rarity' ? 'DESC' : 'ASC',
          collection: this.collection,
          query: this.search,
          per_page: 12,
        }
      })

      this.totalPagesCount = data.pagination.pages
      this.items = data.results
    },
    _getMiddlePages(startPages, endPages) {
      const middlePagesRawTemplate = fill(Array(this.middlePagesOffset * 2 + 1), null)
      const middlePagesTemplate = middlePagesRawTemplate.map((pageNumber, index) => {
        return this.currentPageNumber - this.middlePagesOffset + index
      })

      const middlePages = middlePagesTemplate.filter(pageNumber => pageNumber > 0 && pageNumber < this.totalPagesCount)

      const uniqueMiddlePages = middlePages.filter(pageNumber => !startPages.includes(pageNumber) && !endPages.includes(pageNumber))

      if (uniqueMiddlePages.length === 0) {
        return endPages.length ? ['...'] : []
      }

      if (uniqueMiddlePages[0] !== startPages[startPages.length - 1] + 1) {
        uniqueMiddlePages.splice(0, 0, '...')
      }

      if (uniqueMiddlePages[uniqueMiddlePages.length - 1] !== endPages[0] - 1) {
        uniqueMiddlePages.push('...')
      }

      return uniqueMiddlePages
    },
    _processPages(pages) {
      return pages.map(pageItem => {
        const pageData = {
          number: null,
          isDummy: true
        }

        if (typeof pageItem === 'number') {
          pageData.number = pageItem
          pageData.isDummy = false
        }

        return pageData
      })
    }
  },
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/RankingTable.scss";
</style>
