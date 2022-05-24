<template>
  <div class="background">
    <b-container>
      <div class="row pb-4">
        <div class="col-12 col-lg-8 pr-lg-3" data-aos="fade-right">
          <h1>What are PsychoKitties?</h1>
          <div class="description">
            "PsychoKitties: The New Era" collection features 10,000 unique,
            algorithmically generated metaverse characters from 96 hand-drawn
            traits with different levels of rarity.
            <br /><br />
            The rarest traits have the lowest % chance of being found among the
            PsychoKitties and each trait has a corresponding rarity score.
          </div>
        </div>
        <div class="col-12 col-lg-4 pl-lg-5 mt-5 mt-lg-0" data-aos="fade-left">
          <img src="img/1.png" class="img" />
        </div>
      </div>
      <div class="row pb-4 flex-column-reverse flex-lg-row">
        <div class="col-12 col-lg-4 pr-lg-5 mt-5 mt-lg-0" data-aos="fade-right">
          <img src="img/2.png" class="img" />
        </div>
        <div class="col-12 col-lg-8 pl-lg-3" data-aos="fade-left">
          <div class="description">
            The sum of all the trait scores of one PsychoKitty marks the total
            score for the character in our overall
            <a
              href="https://docs.google.com/spreadsheets/d/14uz5spYRPdciX3ZZ8BH-wtSRCXD6celZvQiqW60GWqI/edit?usp=sharing"
              target="_blank"
              >Ranking Table.</a
            >
            <br /><br />
            Note: no two PsychoKitties are exactly alike, and each one of them
            can be officially owned by a single person on the blockchain.
          </div>
        </div>
      </div>
      <div class="row py-4">
        <div class="col-12 col-lg-8 pr-lg-3" data-aos="fade-right">
          <h1>How to get a PsychoKitty?</h1>
          <div class="description">
            PsychoKitties can be purchased exclusively on the Crypto.com/NFT
            platform. The featured drop will take place on December 16th.
            <br /><br />
            To navigate to the Featured Drop simply click on "View Drop" in the
            first section of this page.
          </div>
        </div>
        <div class="col-12 col-lg-4 pl-lg-5 mt-5 mt-lg-0" data-aos="fade-left">
          <img src="img/3.png" class="img" />
        </div>
      </div>
      <div class="row pb-4 align-items-center flex-column-reverse flex-lg-row">
        <div class="col-12 col-lg-4 pr-lg-5 mt-5 mt-lg-0" data-aos="fade-right">
          <img src="img/4.png" class="img" />
        </div>
        <div class="col-12 col-lg-8 pl-lg-3" data-aos="fade-left">
          <div class="description">
            The timer on this page will indicate the date and time of the
            Featured Drop. Since we are using Crypto.com NFT's queue system (<a
              href="https://help.crypto.com/en/articles/5074395-buying-and-selling"
              target="_blank"
              >What is the queue system?</a
            >), we advise to queue up early so you won't miss your chance to get
            a queue number. <br /><br />
            The Featured drop will offer 10,000 PsychoKitties. Each PsychoKitty
            will have a fixed price and will get you 1 random collectible from
            the “PsychoKitties: The New Era” collection. There's a purchasing
            limit of 5 PsychoKitties per person.
          </div>
        </div>
      </div>
      <div
        class="text-center description2 py-4 d-none d-lg-block"
        data-aos="fade-up"
      >
        Note:
        <b
          >the last "PsychoKitty" collection sold out under 2 minutes, so act
          fast when the drop goes live!
        </b>
        <!-- **site** -->
        <!-- <img src="/img/crypto-com.png" /> -->
      </div>
      <div class="text-center description2 pt-4 d-lg-none" data-aos="fade-up">
        <div class="mb-3">
          Note:
          <b
            >the last "PsychoKitty" collection sold out under 2 minutes, so act
            fast when the drop goes live!
          </b>
          <!-- **site** -->
        </div>
        <!-- <img src="/img/crypto-com.png" /> -->
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.background {
  color: white;
  background: linear-gradient(
      0deg,
      rgba(57, 9, 104, 0.2),
      rgba(57, 9, 104, 0.2)
    ),
    url("~@/static/img/bg.png");
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  padding: 100px 0;
}

h1 {
  font-size: 58px;
  line-height: 72px;
  margin-bottom: 50px;
}

.description {
  margin-top: 25px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;
}

.description2 {
  font-style: italic;
  font-size: 28px;
  line-height: 1.3;
}

.img {
  width: 100%;
}

@media screen and (max-width: 992px) {
  .background {
    padding: 50px 0;
  }

  .container {
    text-align: center;
  }

  h1 {
    font-size: 22px;
    margin-bottom: 15px;
  }

  .description {
    font-size: 14px;
  }

  .description2 {
    font-size: 16px;
  }
}
</style>
