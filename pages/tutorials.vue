<template>
  <div class="tut">
    <TheNavbar />
    <portal-target name="app" />
    <div class="wrapper">
      <div class="ps-container">
        <h1 class="tut__title">Tutorials</h1>
        <section class="tut-tutorials">
          <section class="tut-tutorials-item" v-for="(tutorial, tutIndex) in $options.tutorials" :key="tutIndex">
            <h2 class="tut-tutorials-item__title" v-html="tutorial.title"></h2>
            <div class="tut-tutorials-item-video">
                <div class="tut-tutorials-item-video__video">
                  <iframe :src="tutorial.videoUrl" style="width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <button @click="toggleTutorial(tutIndex)" class="tut-tutorials-item__show-btn" :class="{ 'opened': openedTutorialIds.includes(tutIndex) }">
              {{ openedTutorialIds.includes(tutIndex) ? 'Hide text version of tutorial' : 'Show text version of tutorial'  }}
            </button>

            <section class="tut-tutorials-item-cards" v-if="openedTutorialIds.includes(tutIndex)">
              <div class="tut-tutorials-item-cards-item" v-for="(step, index) in tutorial.steps" :key="index">
                <span class="tut-tutorials-item-cards-item__index">{{ index + 1 }}</span>
                <img :src="`/img/tutorials/${tutorial.staticKey}/${index + 1}.jpg`" alt="tutorial item" class="tut-tutorials-item-cards-item__image">
                <p class="tut-tutorials-item-cards-item__text" v-html="step.text">

                </p>
              </div>
            </section>

            <p v-if="tutorial.hint" class="tut-tutorials-item__hint">
              {{ tutorial.hint }}
            </p>
          </section>
        </section>

        <section class="tut-guides">
          <section class="tut-guides-item" v-for="(guide, index) in $options.guides" :key="index">
            <h2 class="tut-guides-item__title" v-html="guide.title">
            </h2>
            <section class="tut-guides-item-content">
              <p class="tut-guides-item-content-text" v-for="(block, index) in guide.blocks" :key="index">
                {{ block }}
                <span class="tut-guides-item-content-text__index">{{ index + 1 }}</span>
              </p>
            </section>

          </section>
        </section>
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
export default {
  name: "tutorials",
  tutorials: [
    {
      staticKey: 'setting-meta-mask',
      title: 'Setting up <strong>MetaMask</strong> on a Computer',
      videoUrl: 'https://youtube.com/embed/W4qQPpI3s7o',
      steps: [
        {
          text: `Go to the MetaMask website at <a href="https://metamask.io/" target="_blank">https://metamask.io/</a> and click on "Download" to download the MetaMask extension for your browser.`,
        },
        {
          text: `Once the download is complete, click on the extension to open it in your browser.`,
        },
        {
          text: `Click on "Create a Wallet" to set up a new MetaMask wallet or import an existing wallet using your seed phrase.`,
        },
        {
          text: `Read and agree to the terms and conditions and click on "Create" to continue.`,
        },
        {
          text: `Follow the prompts to create a strong password and write down your seed phrase.`,
        },
        {
          text: `Click on "I've copied it somewhere safe" after writing down the seed phrase.`,
        },
        {
          text: `You will be asked to confirm your seed phrase by selecting the words in the correct order.`,
        },
        {
          text: `Once you've confirmed your MetaMask wallet is ready to use.`,
        },
      ],
      hint: `
      Remember to keep your seed phrase safe and never share it with anyone. With MetaMask, you can now securely store and manage your cryptocurrencies and interact with decentralized applications on the Polygon blockchain.
      `
    },
    {
      staticKey: 'setting-meta-mask-phone',
      title: 'Setting up <strong>MetaMask</strong> on a Phone',
      videoUrl: 'https://youtube.com/embed/L6Q5wI2bkwE',
      steps: [
        {
          text: `Download the MetaMask app from the App Store or Google Play Store.`,
        },
        {
          text: `Open the MetaMask app and click on "Create a Wallet" to set up a new MetaMask wallet or import an existing wallet using your seed phrase.`,
        },
        {
          text: `Read and agree to the terms and conditions and click on "Create" to continue.`,
        },
        {
          text: `Follow the prompts to create a strong password and write down your seed phrase.`,
        },
        {
          text: `Click on "I've copied it somewhere safe" after writing down the seed phrase.`,
        },
        {
          text: `You will be asked to confirm your seed phrase by selecting the words in the correct order.`,
        },
        {
          text: `Once you have confirmed your seed phrase your MetaMask wallet is ready.`,
        },
        {
          text: `Now you can add the “Polygon Mainnet” as a Network in your wallet. The current network by default will read “Ethereum Main Network”. Select the drop down menu that reads “Ethereum Main Network”. At the bottom of the menu select “Add a Network”. Select “Polygon Mainnet” and “Approve”. You have successfully added the Polygon Mainnet to your MetaMask.`,
        },
      ],
      hint: `
      Remember to keep your seed phrase safe and never share it with anyone. With MetaMask, you can now securely store and manage your cryptocurrencies and interact with decentralized applications on the Polygon blockchain.
      `
    },
    {
      staticKey: 'withdraw',
      title: 'Step-by-step guide on how to <strong>withdraw an NFT</strong> from Crypto.com to a DeFi wallet',
      videoUrl: 'https://youtube.com/embed/83SCPQF7xZ4',
      steps: [
        {
          text: `First, you will need to have both a Crypto.com account and a DeFi wallet set up. Make sure that you have sufficient funds to cover any associated fees. The cost for withdrawal from Crypto.com account is approximately .01 Matic and can be paid from your Account Balance, Credit Card, or by connecting a DeFi wallet that has sufficient funds.`,
        },
        {
          text: `Log in to your Crypto.com account and navigate to the ‘my profile’ tab. Select the NFT that you would like to withdraw and click on the "Withdraw" button.`,
        },
        {
          text: `On the withdrawal page, you will need to enter the address of your DeFi wallet. Make sure that you double-check the address to avoid any mistakes.`,
        },
        {
          text: `Once you have entered the correct address, select the network "Polygon"`,
        },
        {
          text: `Make sure that you have enough funds in your Crypto.com NFT account balance or Pay with Debit/Credit Card or use a Crypto.com Pay wallet that has funds to cover any associated fees.`,
        },
        {
          text: `Review your withdrawal details carefully to ensure that everything is correct. Once you are satisfied, click on the "Withdraw" button to initiate the transaction.`,
        },
        {
          text: `Wait for the transaction to be confirmed on the blockchain. This can take several minutes or longer, depending on the network traffic.`,
        },
        {
          text: `Once the transaction is confirmed, you should see the NFT in your DeFi wallet. You can now use it as you would any other token on the Polygon network. (May need to unhide from Hidden Folder on OpenSea)`,
        },
      ]
    },
    {
      staticKey: 'buy-polygon',
      title: 'Buy a <strong>Polygon (MATIC)</strong> NFT on OpenSea',
      videoUrl: 'https://youtube.com/embed/_8Fo8ZByW3E',
      steps: [
        {
          text: `Create an account on OpenSea: If you haven't already, create an account on OpenSea. You can do this by clicking on the "Sign in" button on the top right corner of the OpenSea homepage and following the steps to create an account.`,
        },
        {
          text: `Connect your Polygon wallet: Once you have created an account, you will need to connect your Polygon wallet to OpenSea. You can do this by clicking on your account icon on the top right corner of the page and selecting "Connect Wallet". Select "Polygon" from the list of available wallet options and follow the instructions to connect your wallet.`,
        },
        {
          text: `Browse for Polygon NFTs: Once you have connected your wallet, you can browse for Polygon NFTs on OpenSea. You can use the search bar to search for specific NFTs or use the filters to browse by category, price, and more.`,
        },
        {
          text: `Select the NFT you want to buy: Once you have found the NFT you want to buy, click on the item to view its details page. Here, you can see the price of the NFT and any other relevant details. If you are happy with the price, click on the "Buy Now" button.`,
        },
        {
          text: `Confirm your purchase: On the next page, you will be asked to confirm your purchase. Check the details of the NFT and the price and click on the "Buy" button to confirm your purchase.`,
        },
        {
          text: `Complete the transaction: Once you have confirmed your purchase, you will need to sign the transaction by following the instructions on the screen. This will involve approving the transaction on your Polygon wallet and paying the required amount of MATIC including gas fees.`,
        },
        {
          text: `Wait for the NFT to be transferred to your wallet: Once the transaction is complete, the NFT will be transferred to your Polygon wallet. This may take a few minutes, depending on the network traffic.`,
        },
      ]
    },
  ],
  guides: [
    {
      title: '“Don’t Get <strong>Scammed</strong>” Guide',
      blocks: [
        'Phishing scams: Be careful of phishing scams that mimic Metamask, OpenSea, or a NFT projects website. Phishing scams are designed to trick you into giving away your seed phrase, or to get you to sign and approve a transaction which can be used to steal your NFTs or cryptocurrencies. Always triple-check the website address, always use official links and ensure that you are on the right page. You will NEVER be asked to input your seed phrase for anything legitimate other than restoring your wallet.',
        'Fake or fraudulent NFTs: Be cautious when buying NFTs on OpenSea or other marketplaces. Some scammers create fake NFTs that look like the real thing but are worthless. Always do your research and verify the authenticity of the NFT before making a purchase.',
        'Gas fees: These fees can be extremely high during times of network congestion, which can make it expensive to use Metamask and OpenSea. Always check the current gas fees before making a transaction.',
        'Losing your seed phrase: Your seed phrase is critical to accessing and controlling your wallet. If you lose it, you may lose access to your wallet forever. Always store your seed phrases in a safe and secure location.',
        'Airdrops: Hackers may attempt to steal digital assets by airdropping a NFT or cryptocurrency into your wallet. When you try to sell the NFT or crypto you will be asked to sign a transaction which gives the hacker full access to transfer all your assets out of your wallet. Any unknown NFT that is airdropped or deposited into your account may be a phishing attempt. DO NOT INTERACT with ANY airdropped NFT or Cryptocurrencies if you do not verify it is legitimate. You can move the NFT into your “Hidden Folder” on OpenSea by selecting the NFT and selecting the option “Hide”. Do not sign any transactions related to listing or transferring these NFTs as they may give the hackers full access to your wallet.',
        'Hackers may use social engineering techniques to trick you into giving them access to your wallet. For example, they may impersonate a trusted source, such as a discord mod or community member, and ask users to provide their seed phrase or facilitate a NFT trade. NEVER give your seed phrase to ANYONE. Be incredibly careful when interacting with people and ensure it is the right person/account. Hackers will recreate social media accounts on Twitter and Discord to match the person they are impersonating perfectly. Social engineering is commonly used in NFTs and Crypto in many forms, always be on guard and protect your assets.',
      ]
    },
    {
      title: 'A few ways to <strong>protect</strong> yourself:',
      blocks: [
        'Store your valuable assets in a cold wallet.',
        'Keep your wallet software up to date.',
        'NEVER share your seed phrase with ANYONE. Do not take a picture of it. Do not store it online.',
        'Be wary of unsolicited emails, social media messages, NFTs, or Cryptocurrencies that you receive.',
        'Use two-factor authentication (2FA) to add an extra layer of security.',
        'Do not click links from unofficial sources. Do not sign an unrecognized transaction.',
        'Always use a “burner” wallet for connecting to new mints or interacting with websites with unconfirmed legitimacy. A burner wallet is a brand-new wallet that is only funded with the amount needed to perform the transaction at hand. This protects you from a malicious link or “wallet drainer” mint website by ensuring you only lose what you had in that “burner” wallet.',
      ]
    }
  ],
  data() {
    return {
      openedTutorialIds: [],
      playingTutorialVideos: []
    }
  },
  methods: {
    toggleTutorial(tutorialId) {
      if (this.openedTutorialIds.includes(tutorialId)) {
        this.openedTutorialIds = this.openedTutorialIds.filter(id => id !== tutorialId);
      } else {
        this.openedTutorialIds.push(tutorialId);
      }
    },
    toggleTutorialVideo(videoIndex) {
      if (this.playingTutorialVideos.includes(videoIndex)) {
        this.playingTutorialVideos = this.playingTutorialVideos.filter(id => id !== videoIndex);
      } else {
        this.playingTutorialVideos.push(videoIndex);
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/tutorials.scss";
</style>
