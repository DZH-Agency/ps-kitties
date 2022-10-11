<template>
  <div class="starts-wrapper">
    <div class="ps-container">
      <div class="starts">
        <h2 class="starts__title">
          Halloween Bash starts in
        </h2>
        <div class="starts-time">
          <div class="starts-time-item">
            <div class="starts-time-item__count">{{ timerDate.days }}</div>
            <div class="starts-time-item__title">days</div>
          </div>
          <div class="starts-time__semicolon" />
          <div class="starts-time-item">
            <div class="starts-time-item__count">{{ timerDate.hours }}</div>
            <div class="starts-time-item__title">hours</div>
          </div>
          <div class="starts-time__semicolon" />
          <div class="starts-time-item">
            <div class="starts-time-item__count">{{ timerDate.minutes }}</div>
            <div class="starts-time-item__title">minutes</div>
          </div>
          <div class="starts-time__semicolon" />
          <div class="starts-time-item">
            <div class="starts-time-item__count">{{ timerDate.seconds }}</div>
            <div class="starts-time-item__title">seconds</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HalloweenStartsAt',
  data() {
    return {
      timerDate: {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      }
    }
  },
  beforeMount() {
    const targetDate = new Date(Date.UTC(2022, 9, 23, 7))
    targetDate.setHours(targetDate.getHours() - 4 + new Date().getTimezoneOffset() / 60)
    
    setInterval(() => {
      const today = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + new Date().getTimezoneOffset() / 60 * 1000)
      today.setHours(today.getHours() - 4)
      
      let diffInSeconds = Math.floor((targetDate - today) / 1000);
      if (diffInSeconds <= 0) {
        return
      }
      
      const days = Math.floor(diffInSeconds / 86400);
      diffInSeconds -= days * 86400;
      
      // calculate hours
      const hours = Math.floor(diffInSeconds / 3600) % 24;
      diffInSeconds -= hours * 3600;
      
      // calculate minutes
      const minutes = Math.floor(diffInSeconds / 60) % 60;
      diffInSeconds -= minutes * 60;
      
      this.timerDate = {
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(diffInSeconds).padStart(2, '0')
      }
      
    }, 1000)
  }
};
</script>

<style scoped lang="scss">

.starts {
  background: rgba(57, 9, 104, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 60px 0;
  border: 5px solid #7B9CD3;
  padding: 55px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 10px 24px 22px;
    border-radius: 30px 0;
    max-width: 400px;
  }
  
  &-wrapper {
    padding: 66px 0;
    background: linear-gradient(262.72deg, #1CE7D3 0%, #FF00F8 100%);
  
    @media (max-width: 1200px) {
      padding: 16px 0;
    }
    
    .container {
      display: flex;
      flex-direction: column;
    }
  }
  
  &__title {
    font-weight: 700;
    font-size: 26px;
    line-height: 110%;
    text-align: center;
    letter-spacing: 0.06em;
    color: #FFFFFF;
    margin-right: 20px;
  
    @media (max-width: 1200px) {
      font-size: 22px;
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
  
  &-time {
    display: flex;
    align-items: center;
    column-gap: 15px;
  
    @media (max-width: 1200px) {
      column-gap: 0;
      justify-content: space-between;
      width: 100%;
    }
    
    &-item {
      background: linear-gradient(0deg, #F39200 -0.52%, #F18804 14.99%, #EB5E15 83.88%, #E94E1B 119.27%);
      border-radius: 16px;
      width: 91px;
      height: 63px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  
      @media (max-width: 1200px) {
        width: 60px;
        height: 42px;
        background: rgba(0, 0, 0, 0.36);
        border-radius: 4px;
      }
      
      &__count {
        font-family: 'Creepster', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 27px;
        line-height: 32px;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.36);
  
        @media (max-width: 1200px) {
          font-size: 21px;
          line-height: 25px;
        }
      }
      
      &__title {
        font-weight: 600;
        font-size: 11px;
        line-height: 15px;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.36);
        text-transform: uppercase;
  
        @media (max-width: 1200px) {
          font-size: 11px;
          line-height: 15px;
        }
      }
    }
    
    &__semicolon {
      
      &::after {
        content: ':';
        font-weight: 700;
        font-size: 18px;
        line-height: 110%;
        text-align: center;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.36);
      }
    }
  }
}

</style>
