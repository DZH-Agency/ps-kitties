<template>
  <div class="background">
    <b-container>
      <h1 data-aos="fade-up">Lab Experiment Gone Wrong</h1>
      <div
        class="mt-5 justify-content-center position-relative description"
        style="z-index: 1"
        data-aos="zoom-in"
      >
        It's the year 2045 - global gene editing market has grown to a massive
        124.6 billion dollar industry that's preventing most genetic diseases
        from being passed on to the next generations.
        <br /><br />
        When the average human being in developed countries spends 87% of their
        waking life in virtual reality, a group of scientists from a
        biotechnology company called GEMX9 has made it their mission to unlock
        the true power of our brains in the physical reality.
        <br /><br />
        Antonius Gladwell, the founder of GEMX9 believes we are living in a
        simulation created by a higher dimensional "computer". "Only way to
        break free from the simulation is to have the ability to influence the
        world on quantum level", says Antonius in his latest interview.
        <br /><br />
        According to Gladwell, we could theoretically influence the energy state
        of subatomic particles with the will of our mind and change physical
        matter with our thoughts.
        <br /><br />
        The company had recently made a breakthrough targeting the "Intelligence
        Gene" called HMGA2 and was permissioned by the US government authorities
        to perform a large scale experiment on 10,000 kitten embryos.
        <br /><br />
        By the time the kittens were 6 months old, their brain scans showed that
        different regions of their brains lit up in ways the scientists had
        never seen before. Among many tests, they were put in complex mazes to
        evaluate their spatial ability. Surprisingly, they were able to move
        through it with zero effort.
        <br /><br />
        It's as if they had developed an intuition on the quantum level to
        understand the makeup of their surroundings farther than their eyes
        could see.
        <div class="extra-content" :class="{ show: open }">
          <br />
          Unbeknownst to scientists, the kitties had developed an extreme sense
          of self-awareness. Naturally, the experimental subjects knew what they
          were used for and purposefully hid their newly acquired abilities.
          <br /><br />
          Although some kittens showed better results than others. No employee
          of GEMX9 actually knew what the brain scans revealed.
          <br /><br />
          June, 2046, just before the kittens turned 13 months old or 13 years
          old in human years, they miraculously disappeared. Government
          immediately shut down the lab and classified the experimental
          information as Top Secret. GEMX9 company was silenced and the media
          had portrayed Antonius Gladwell as a deceiving nuthead who was moved
          to a mental hospital followed by a mysterious disappearance.
          <br /><br />
          The true nature of these test subjects started to reveal years later
          when specific images in The United World Encyclopedia changed
          unexpectedly...
          <br /><br />
          First thought of as a bug in the system or some hacker modifying the
          images, turned out to be actual world history changing. The
          experimental kittens had reached their adulthood and maximum brain
          control within different centuries of Earth's history.
          <br /><br />
          Because of their exceptional mind control skills, immoral
          anything-goes mentality and unpredictable nature the kittens were
          quick to achieve positions of power. Most of them ended up on the
          "evil side" of the history and the GEMX9 subjects were labeled
          "PsychoKitties".
          <br /><br />
          Many suspected that they could also time travel to the future -
          hypothesis that was later confirmed by 2 students of the Aerian
          University who noticed futuristic weapons laying in the images of
          specific battlefields of the Mongol conquest of China in the early
          13th century.
          <br /><br />
          It didn't take long until the Encyclopedia showed different
          PsychoKitties waging war against each other. Conflicts between the
          members of this advanced society happened across centuries.
          <br /><br />
          The United World Encyclopedia states that at some point in time a
          jealousy-driven opposition group emerged with a single mission of
          bringing down their power-hungry counterparts.
          <br /><br />
          The history and the future of mankind is being rewritten daily. Now is
          your chance to step into the metaverse and overtake the mind of a
          mighty PsychoKitty.
          <br /><br />
          <b style="font-size: larger">
            However the question remains, which side of the PsychoKitties race will
            destiny take you?
          </b>
        </div>
        <div class="fade-container" v-if="!open"></div>
        <div class="footer d-flex justify-content-center" v-if="!open">
          <b-button variant="warning read-full" @click="open = !open">
            Read full
          </b-button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      open: false,
    };
  },
});
</script>

<style scoped>
.background {
  padding: 100px 0;
  background-image: url("~@/static/img/left.png"),
    url("~@/static/img/right.png");
  background-repeat: no-repeat;
  background-position: left top, right -50px;
  background-size: auto 2600px;
}

h1 {
  font-size: 58px;
  line-height: 72px;
  text-align: center;
  color: #00d2fe;
  margin-bottom: 50px;
  font-family: "Hammersmith One";
}

.description {
  background: #390968;
  backdrop-filter: blur(5px);
  border-radius: 0px 100px;
  border: 4px solid #eb15f5;
  padding: 50px 80px;
  color: white;
  font-size: 20px;
}

.read-full {
  background: linear-gradient(270deg, #dd3741 0%, #ff00cc 50.52%, #6003a9 100%);
  border-radius: 0px 16px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  padding: 16px 56px;
  color: #fdf7ea;
}

.extra-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s ease;
}

.extra-content.show {
  max-height: 1500px;
}

.footer {
  padding-top: 50px;
}

.fade-container {
  position: absolute;
  width: 100%;
  height: calc(50% - 150px);
  background: linear-gradient(#39096800, #390968);
  bottom: 100px;
  left: 0;
}

@media screen and (max-width: 992px) {
  .background {
    padding: 50px 0;
    background-image: none;
  }

  h1 {
    font-size: 28px;
    line-height: 35px;
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
