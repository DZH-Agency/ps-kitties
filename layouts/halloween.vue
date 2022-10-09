<template>
  <div class="layout-wrapper">
    <portal-target name="app" />
    <TopNavbar />
    <Nuxt />
  </div>
</template>

<script>
import TopNavbar from '~/components/TopNavbar.vue';

export default {
  name: 'HalloweenLayout',
  components: { TopNavbar }
}

</script>

<style scoped lang="scss">
.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
