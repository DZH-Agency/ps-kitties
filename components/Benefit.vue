<template>
  <div class="background">
    <b-container>
      <h1 data-aos="fade-up">Holder Benefits</h1>
      <div
        class="mt-5 justify-content-center position-relative description"
        style="z-index: 1"
        data-aos="zoom-in"
      >
        <h2>Utility</h2>
        <div class="mb-5">
          Holders will get early access to future drops and will be eligible for
          special perks, redeemables, experiences such as private events (e.g
          see how Ugonzo paints LIVE), exclusive community channels, surprise
          raffles (e.g win a Psycho Portrait of yourself) and more... TOP10
          collectors and HODLERS from Day 1 will be rewarded with even more
          special prizes!
        </div>
        <h2>Tight-Knit Community</h2>
        <div>
          Stay close to the action by joining our Discord channel, where we’ll
          be sharing updates that PsychoKitties need to know. We're all a little
          crazy, though!
        </div>
        <div class="footer d-flex justify-content-center">
          <b-button
            variant="warning join-discrd"
            href="https://discord.gg/quantumfrenzy"
            target="_blank"
            >Join Discord</b-button
          >
        </div>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.background {
  padding-top: 100px;
  background-image: url("~@/static/img/left1.png"),
    url("~@/static/img/right1.png");
  background-repeat: no-repeat;
  background-position: left top, right center;
  text-align: center;
}

h1 {
  font-size: 58px;
  line-height: 72px;
  text-align: center;
  color: #00d2fe;
  margin-bottom: 50px;
  font-family: "Hammersmith One";
}

h2 {
  font-family: "Hammersmith One";
  color: #ff00ff;
  font-size: 42px;
  line-height: 1.3;
  margin-bottom: 25px;
}

.description {
  background: #390968;
  backdrop-filter: blur(5px);
  border-radius: 100px 0px;
  border: 4px solid #eb15f5;
  padding: 50px 80px;
  color: white;
  font-size: 20px;
}

.join-discrd {
  background: linear-gradient(270deg, #dd3741 0%, #ff00cc 50.52%, #6003a9 100%);
  border-radius: 0px 16px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  padding: 16px 56px;
  color: #fdf7ea;
}

.footer {
  padding-top: 50px;
}

@media screen and (max-width: 992px) {
  .background {
    padding-top: 50px;
    background-image: none;
  }

  h1 {
    font-size: 28px;
    line-height: 35px;
  }

  h2 {
    font-size: 22px;
  }

  .description {
    padding: 25px 20px;
    font-size: 14px;
    border-radius: 0px 25px;
  }

  .footer {
    padding-top: 25px;
  }
}
</style>
