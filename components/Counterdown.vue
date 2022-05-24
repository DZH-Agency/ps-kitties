<template>
  <div :class="`countdown position-${position}`">
    <div v-if="position == 'top'">
      <h2 class="mb-3">
        Celebrity-Endorsed Psychedelic Artist<br />
        Ugonzo Is Back With Long-Awaited NFT Collection
      </h2>
      <h1>"PsychoKitties: The New Era"</h1>
    </div>
    <div v-else>
      <h2>
        Don't miss out on the most-anticipated drop of
        <span style="color: #ff00ff">December!</span>
      </h2>
    </div>
    <div class="row" v-if="position == 'top'">
      <div class="col-12 col-lg-6 date">16th of December</div>
      <div class="col-12 col-lg-6">
        <div class="d-flex justify-content-center jusity-content-lg-start">
          <div class="block">
            <div class="digit">{{ days | two_digits }}</div>
            <div class="text">Days</div>
          </div>
          <div class="comma">:</div>
          <div class="block">
            <div class="digit">{{ hours | two_digits }}</div>
            <div class="text">Hours</div>
          </div>
          <div class="comma">:</div>
          <div class="block">
            <div class="digit">{{ minutes | two_digits }}</div>
            <div class="text">Minutes</div>
          </div>
          <div class="comma">:</div>
          <div class="block">
            <div class="digit">{{ seconds | two_digits }}</div>
            <div class="text">Seconds</div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center" v-else>
      <div class="block">
        <div class="digit">{{ days | two_digits }}</div>
        <div class="text">Days</div>
      </div>
      <div class="comma">:</div>
      <div class="block">
        <div class="digit">{{ hours | two_digits }}</div>
        <div class="text">Hours</div>
      </div>
      <div class="comma">:</div>
      <div class="block">
        <div class="digit">{{ minutes | two_digits }}</div>
        <div class="text">Minutes</div>
      </div>
      <div class="comma">:</div>
      <div class="block">
        <div class="digit">{{ seconds | two_digits }}</div>
        <div class="text">Seconds</div>
      </div>
    </div>
    <div class="bottom">
      <span class="mr-2">Exclusively on</span>
      <!-- **site** -->
      <img src="/img/crypto-com.png" />
    </div>
    <div class="d-flex justify-content-center">
      <b-button
        variant="warning view-drop"
        href="https://crypto.com/nft/drops-event/6e464a09e2adce8fb9c1e22332dcfceb"
        target="_blank"
      >
        View Drop
      </b-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  props: {
    date: {
      type: String,
    },
    position: {
      type: String,
    },
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
    };
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    },
  },
});

Vue.filter("two_digits", (value) => {
  if (value < 0) {
    return "00";
  }
  if (value.toString().length <= 1) {
    return `0${value}`;
  }
  return value;
});
</script>

<style scoped>
.countdown {
  background: rgba(13, 14, 16, 0.7);
  backdrop-filter: blur(5px);
  border-radius: 0px 100px;
  color: white;
  padding: 50px 60px;
  border: 4px solid #eb15f5;
}

h2 {
  font-size: 38px;
  line-height: 1.3;
  text-align: center;
  font-family: "Hammersmith One";
  display: block;
  margin-bottom: 50px;
}

h1 {
  font-size: 56px;
  line-height: 1.3;
  text-align: center;
  font-family: "Hammersmith One";
  display: block;
  margin-bottom: 50px;
}

.digit,
.comma {
  font-size: 48px;
  line-height: 1.3;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.15em;
}

.text {
  font-size: 18px;
  line-height: 1.3;
  color: white;
  text-align: center;
}

.position-bottom .digit,
.position-bottom .comma {
  font-size: 90px;
}

.bottom {
  font-weight: 800;
  font-size: 24px;
  text-align: center;
  color: #ebeef6;
  margin-top: 50px;
  margin-bottom: 25px;
}

.view-drop {
  background: linear-gradient(270deg, #dd3741 0%, #ff00cc 50.52%, #6003a9 100%);
  border-radius: 0px 16px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  padding: 16px 56px;
  color: #fdf7ea;
}

.date {
  font-weight: bold;
  font-size: 32px;
  line-height: 1.3;
  color: #ff00ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 992px) {
  .countdown {
    padding: 30px 20px;
    border-radius: 0 25px;
    border-width: 3px;
  }

  .digit,
  .comma {
    font-size: 40px !important;
    width: 70px !important;
  }

  .comma {
    width: 30px !important;
  }

  .text {
    font-size: 10px;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 25px;
  }

  .date {
    font-size: 22px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 25px;
  }
}
</style>
