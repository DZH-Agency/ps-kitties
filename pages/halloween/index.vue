<template>
  <div class="page-wrapper">
    <HeroBlock />
    <HalloweenStartsAt />
    <ArtistsBlock />
    <HowTo />
    <FooterBlock />
  </div>
</template>

<script>
import HeroBlock from '~/components/index/HeroBlock.vue';
import HalloweenStartsAt from '~/components/index/HalloweenStartsAt.vue';
import ArtistsBlock from '~/components/index/ArtistsBlock.vue';
import HowTo from '~/components/index/HowTo.vue';
import FooterBlock from '~/components/index/FooterBlock.vue';

export default {
  name: 'IndexPage', components: { FooterBlock, HowTo, ArtistsBlock, HalloweenStartsAt, HeroBlock },
  layout: 'halloween'
  
}
</script>

<style scoped lang="scss">

</style>
