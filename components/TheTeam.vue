<template>
  <div class="team-wrapper">
    <div class="ps-container">
      <div class="team">
        <div class="team__title">Team</div>
        <div class="team-members">
          <div class="team-members-member">
            <img src="/TheTeam/da-real.png" alt="member" class="team-members-member__img">
            <div class="team-members-member-info">
              <div class="team-members-member__name">DaRealGenius</div>
              <div class="team-members-member__role">Co-Creator</div>
            </div>
            
          </div>
          <div class="team-members-member">
            <img src="/TheTeam/ken.png" alt="member" class="team-members-member__img">
            <div class="team-members-member-info">
              <div class="team-members-member__name">Ken</div>
              <div class="team-members-member__role">Operations & Direction</div>
            </div>
          </div>
          <div class="team-members-member">
            <img src="/TheTeam/vinny.png" alt="member" class="team-members-member__img">
            <div class="team-members-member-info">
              <div class="team-members-member__name">Vinny</div>
              <div class="team-members-member__role">Metaverse & Entertainment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheTeam'
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/TheTeam.scss";
</style>
