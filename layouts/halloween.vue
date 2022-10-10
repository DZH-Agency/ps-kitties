<template>
  <div class="layout-wrapper">
    <portal-target name="app" />
    <TopNavbar />
    <Nuxt />
    <nuxt-link to="/halloween/terms" class="terms">
      Halloween Bash Terms & Conditions
    </nuxt-link>
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

.terms {
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.06em;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 0;
  background: #1C1C1E;
}
</style>
