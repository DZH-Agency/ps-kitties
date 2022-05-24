<template>
  <div class="wrapper">
    <Header is-stream-page :username="user.cryptoUsername" @edit-profile="isEditShown = true" />
    <b-container class="content">
      <template v-if="isEditShown">
        <div class="profile">
          <div class="profile__heading">
            Edit your profile
          </div>
          <div class="profile__form">
            <div class="form__block">
              <div class="form__group">
                <label class="form__text" for="discord-name">Insert your Discord handle::</label>
                <input id="discord-name" v-model="user.discord" type="text" placeholder="Your Discord name...">
              </div>
              <button class="form__btn" @click="saveProfile">
                Submit
              </button>
              <button class="form__btn" @click="isEditShown = false">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <h1>Private Stream</h1>
        <div class="actions">
          <div class="actions_btn" :class="{'actions_btn__active': activePlayer === 1}" @click="activePlayer = 1">
            Main Screen
          </div>
          <div class="actions_btn" :class="{'actions_btn__active': activePlayer === 2}" @click="activePlayer = 2">
            Nightclub
          </div>
        </div>
        <div :class="{'playing': isPlayerShown}" class="tv" @click="isPlayerShown = true">
          <img v-if="!isPlayerShown" class="tv_btn" src="/img/verification/play-btn.svg" alt="">
          <iframe
            v-if="isPlayerShown"
            :src="playerSrc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          </iframe>
        </div>
      </template>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'StreamComponent',
  data () {
    return {
      isPlayerShown: false,
      activePlayer: 1,
      isEditShown: false,
      user: {
        discord: '',
        username: ''
      }
    }
  },
  async fetch () {
    try {
      const { data: user } = await this.$axios.get('/status')
      this.user.discord = user.discordUsername
      this.user.username = user.username
    } catch (e) {
      console.log(e)
    }
  },
  computed: {
    playerSrc () {
      let src
      switch (this.activePlayer) {
        case 1:
          src = 'https://www.youtube.com/embed/TjMq8vXdyhs?controls=1&autoplay=1'
          break
        case 2:
          src = 'https://www.youtube.com/embed/KloimQqafN4?controls=1&autoplay=1'
          break
      }

      return src
    }
  },
  methods: {
    saveProfile () {
      this.isEditShown = false
      this.$emit('verify-crypto', this.user)
    }
  }
}
</script>

<style scoped>
@import "~/static/css/form.css";

.profile {
  width: 100%;
  max-width: 800px;
  display: grid;
  align-items: center;
}

.profile__heading {
  text-align: center;
  font-size: 56px;
  line-height: 130%;
  color: #FF00FF;
  font-family: Hammersmith One, sans-serif;
  margin-bottom: 70px;
}

.profile__form {
  padding: 50px 100px;
  background: rgba(13, 14, 16, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 0 50px;
  border: 2px solid #FF00F8;
}

.profile__form .form__block {
  margin-bottom: 0;
}

.tv {
  position: relative;
  cursor: pointer;
  margin-top: 20px;
  background: url("/img/verification/tv.png") no-repeat center / 100% 100%;
  width: 886px;
  height: 463px;
}

.tv.playing {
  cursor: default;
}

.tv.playing::after {
  display: none;
}

.tv::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 0;
  width: calc(100%);
  height: 370px;
  background: url("/img/verification/tv-desktop-bg.png") no-repeat top / 100% 100%;
  mix-blend-mode: hard-light;
}

.tv iframe {
  height: 360px;
  width: 100%;
}

.tv_btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.wrapper {
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  background: url("/img/verification/stream-bg.png") no-repeat top center, url("/img/verification/stars-bg.png") no-repeat center / cover;
}

h1 {
  font-family: Hammersmith One, sans-serif;
  font-weight: normal;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: #00D2FE;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
}

.actions {
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(20px);
  border-radius: 0 17px;
  border: 1px solid #FF00F8;
}

.actions_btn {
  border-radius: 0 16px;
  color: rgba(253, 247, 234, .5);
  font-size: 16px;
  line-height: 21px;
  padding: 8px 24px;
  cursor: pointer;
}

.actions_btn:last-child {
  border-radius: 0 16px 0 16px;
}

.actions_btn__active {
  font-weight: bold;
  color: #FDF7EA;
  background: linear-gradient(270deg, #DD3741 0%, #FF00CC 50.52%, #6003A9 100%);
}

@media (max-width: 1000px) {
  .profile__heading {
    margin-bottom: 50px;
    font-size: 34px;
  }

  .profile__form {
    padding: 20px 35px;
    border-radius: 0 26px;
    border: 1px solid #FF00F8;
  }

  .tv {
    position: absolute;
    top: 230px;
    cursor: pointer;
    margin-top: 20px;
    background: url("/img/verification/tv.png") no-repeat center / 100% 100%;
    width: 327px;
    height: 242px;
  }

  .tv::after {
    height: 196px;
    background: url("/img/verification/tv-desktop-bg.png") no-repeat top / 100% 100%;
  }

  .tv iframe {
    height: 196px;
    width: 100%;
  }

  .tv_btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .wrapper {
    padding-top: 140px;
    background: url("/img/verification/stream-bg.png") no-repeat right top;
  }

  h1 {
    font-size: 32px;
    line-height: 40px;
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .actions {
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-self: stretch;
    position: relative;
  }

  .actions_btn {
    border-radius: 0 16px;
    color: rgba(253, 247, 234, .5);
    font-size: 14px;
    line-height: 19px;
    padding: 8px;
    text-align: center;
    cursor: pointer;
  }

  .actions_btn:last-child {
    border-radius: 0 16px;
  }

  .actions_btn__active {
    font-weight: bold;
    color: #FDF7EA;
    background: linear-gradient(270deg, #DD3741 0%, #FF00CC 50.52%, #6003A9 100%);
  }
}

</style>
