<template>
  <div class="gs-wrapper">
    <div class="ps-container">
      <div class="gs">
        <h2 class="gs__title">Gaming Team</h2>
        <p class="gs__text">We've been building and growing so fast recently, it's time we update you on the incredible people we've onboarded!</p>
        
        <div class="gs-list">
          <div
            class="gs-list-item"
            v-for="(member, idx) in $options.members"
            :key="idx"
          >
            <img :src="member.img" alt="" class="gs-list-item__img">
            <div class="gs-list-item-info">
              <div class="gs-list-item-info__name">{{member.name}}</div>
              <div class="gs-list-item-info__position">{{member.position}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamingSection',
  members: [
    { name: 'Xoakin R.', position: 'Game Director', img: require('static/img/GamingSection/members/xoakin.png') },
    { name: 'Mer Peacock', position: 'Game Producer', img: require('static/img/GamingSection/members/mer.png') },
    { name: 'Melany Goldkorn', position: 'Economy Designer', img: require('static/img/GamingSection/members/melany.png') },
    { name: 'Lucas Rossi', position: 'Brand and Graphic Designer', img: require('static/img/GamingSection/members/lucas-rossi.png') },
    { name: 'Luis Grimaldi', position: 'Blockchain Developer', img: require('static/img/GamingSection/members/luis.png') },
    { name: 'Johanna Knopoff', position: 'Designer', img: require('static/img/GamingSection/members/johanna.png') },
    { name: 'Lucas Mallo', position: 'Game Programmer', img: require('static/img/GamingSection/members/lucas.png') },
    { name: 'Gaston N.P.', position: 'Level and Game Designer', img: require('static/img/GamingSection/members/gaston.png') },
    { name: 'Egnacio “Eru” Zambrano', position: 'Lead Programmer', img: require('static/img/GamingSection/members/egnacio.png') },
    { name: 'Mateo Tedin', position: 'Lead Concept Artist', img: require('static/img/GamingSection/members/mateo.png') },
    { name: 'Manic Pixel', position: 'Level and Game Designer', img: require('static/img/GamingSection/members/manic.png') },
    { name: 'Matias Pelegri', position: 'UI and Game Designer', img: require('static/img/GamingSection/members/matias.png') },
    { name: 'William Idrissi', position: 'Blockchain Developer', img: require('static/img/GamingSection/members/william.png') },
    { name: 'Alex Steff', position: 'Sound and Audio Designer', img: require('static/img/GamingSection/members/alex.png') },
    { name: 'Emilio Padulo', position: 'Advisor, Tokenomics Expert', img: require('static/img/GamingSection/members/emilio.png') },
  ]
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/components/GamingSection.scss";
</style>
