<template>
  <div class="holder-wrapper">
    <TheNavbar />
    <portal-target name="app" />

    <div class="rewards-wrapper">
      <div class="ps-container">
        <section class="rewards">
          <h1 class="rewards__title">Holder Rewards</h1>

          <section class="rewards-content">
            <section class="rewards-content-frame">
              <img src="/img/holder-rewards/rewards-kitties.png" alt="kitties" class="rewards-content-frame__kitties">
              <img src="/img/holder-rewards/purple-rank.svg" alt="rank" class="rewards-content-frame__rank">
              <i class="rewards-content-frame__point left"></i>
              <i class="rewards-content-frame__point right"></i>
            </section>
            <section class="rewards-content-text">
              <p class="rewards-content-text__paragraph">
                Our first Loyalty Rewards Program for <span class="purple">PsychoKitties</span>, <span class="purple">Mad Hares</span> and <span class="purple">GenQ babies</span> started with the launch of PsychoKitties collection at the end of 2021 and ended on 28th of May, 2023. Every holder who held those NFTs during the period accumulated daily points for each NFT. These points will be converted to <span class="purple">$QTM</span> tokens at a meaningful & balanced ratio determined by an algorithm.
              </p>
              <p class="rewards-content-text__paragraph">
                Further information about points-to-token conversion & other related updates will come via email in due time. Should our legal department need any additional information from you to faciliate the token claim, we’ll notify you at least 2 weeks a head of time. Members who fail to provide required information in time, will not qualify for token rewards.
              </p>
            </section>
          </section>
        </section>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script lang="ts">
export default {
  name: "holder-rewards",
}
</script>

<style scoped lang="scss">
.holder {

  &-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background:
      url("static/img/holder-rewards/waves-left.png") no-repeat left top,
      url("static/img/holder-rewards/waves-right.png") no-repeat right top;

    @media (max-width: 1200px) {
      background: none;
    }
  }
}

.rewards {

  &-wrapper {
    padding-top: 150px;
    padding-bottom: 75px;
    flex: 1 1 auto;
    position: relative;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      padding-bottom: 100%;
      translate: -50% -50%;
      background: radial-gradient(50% 51.79% at 50% 50%, rgba(252, 5, 192, 0.16) 17.71%, rgba(96, 3, 169, 0) 78.12%);
      z-index: -1;

      @media (max-width: 1200px) {
        padding-bottom: 200%;
      }
    }

    @media (max-width: 1200px) {
      padding-top: 100px;
      padding-bottom: 0;
    }
  }

  &__title {
    font-family: 'Hammersmith One', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    line-height: 72px;
    text-align: center;
    color: #00D2FE;
    margin-bottom: 110px;

    @media (max-width: 1200px) {
      font-size: 36px;
      line-height: 120%;
      margin-bottom: 50px;
    }
  }

  &-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 80px;
    align-items: center;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      grid-row-gap: 50px;
    }

    &-frame {
      background: linear-gradient(270deg, #DD3741 0%, #FF00CC 50.52%, #6003A9 100%);
      border-radius: 100px 0;
      height: 467px;
      position: relative;
      border: 5px solid #1DE8CF;

      @media (max-width: 1200px) {
        height: 300px;
      }

      &__kitties {
        position: absolute;
        width: 120%;
        height: 80%;
        bottom: 0;
        left: 45%;
        translate: -50%;
        object-fit: cover;

        @media (max-width: 1200px) {
          width: 100%;
          height: auto;
          max-height: 80%;
          object-fit: contain;
        }
      }

      &__rank {
        position: absolute;
        top: 70px;
        right: 36px;
        width: 124px;

        @media (max-width: 1200px) {
          top: 30px;
          right: 20px;
          width: 80px;
        }
      }

      &__point {
        background: radial-gradient(50% 51.79% at 50% 50%, #FF00CC 17.71%, #6003A9 100%);
        position: absolute;
        border-radius: 50%;
        z-index: 1;

        &.left {
          width: 90px;
          height: 90px;
          left: -27px;
          bottom: -49px;

          @media (max-width: 1200px) {
            width: 60px;
            height: 60px;
            left: -15px;
            bottom: -25px;
          }
        }

        &.right {
          width: 124px;
          height: 124px;
          top: -66px;
          right: -24px;

          @media (max-width: 1200px) {
            width: 80px;
            height: 80px;
            top: -40px;
            right: -15px;
          }
        }
      }
    }

    &-text {
      display: grid;
      row-gap: 1em;
      font-weight: 600;
      font-size: 18px;
      color: #FFFFFF;

      &__paragraph {
        line-height: 130%;

        .purple {
          color: #FF01F9;
        }
      }
    }
  }
}
</style>
