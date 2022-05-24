<template>
  <div class="background">
    <b-container>
      <div class="row align-items-center flex-column-reverse flex-lg-row">
        <div class="col-12 col-lg-6 pr-lg-4 pt-5 pt-lg-0" data-aos="fade-right">
          <h1>Artist</h1>
          <div class="description">
            Ugonzo is the Creative Director of the PsychoKitties series and a
            psychedelic artist, who's creations are owned by the likes of Joe
            Rogan, Lex Fridman, Pauly Shore, Cody Gardbrandt from UFC, and Deron
            Williams from NBA.
            <br /><br />
            Ugonzo's passion for art started at an early age, when he copied
            famous paintings from Vincent Van Gogh and Salvador Dali. They
            inspired him to take it to the next level. Ugonzo started exhibiting
            his artwork in different galleries across different states of
            America as well as using different mediums of art.
          </div>
        </div>
        <div class="col-12 col-lg-6 pl-lg-4" data-aos="fade-left">
          <div class="position-relative">
            <img src="img/5.png" />
            <a
              class="name-container"
              href="https://www.instagram.com/ugonzo_art/"
              >@ugonzo</a
            >
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.background {
  background-image: url("~@/static/img/bg2.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.container {
  padding-top: 100px;
  padding-bottom: 245px;
}

img {
  width: 100%;
}

h1 {
  font-size: 58px;
  line-height: 72px;
  color: #00d2fe;
  font-family: "Hammersmith One";
}

.description {
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  color: white;
  margin-top: 50px;
}

.name-container {
  position: absolute;
  bottom: 50px;
  left: 0;
  color: #ebeef6;
  width: 100%;
  text-align: center;
  font-weight: 800;
  font-size: 24px;
  line-height: 1.3;
  padding: 15px;
}

@media screen and (max-width: 992px) {
  .background {
    background-size: 200% auto;
  }

  .container {
    text-align: center;
    padding-top: 50px;
    padding-bottom: 125px;
  }

  h1 {
    font-size: 22px;
    line-height: 27px;
  }

  .description {
    margin-top: 25px;
    font-size: 16px;
  }
}
</style>
