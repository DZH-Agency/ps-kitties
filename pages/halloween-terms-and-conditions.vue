<template>
  <div>
    <TheNavbar/>
    <portal-target name="app" />
    <div class="tnc-wrapper">
      <div class="ps-container">
        <div class="tnc">
          <div class="tnc__header">
            TERMS & CONDITIONS FOR
            <br>
            <strong>Halloween Bash NFTs</strong>
          </div>
          <div class="tnc-about">
            <div class="tnc-about__title">
              These Terms and Conditions (hereinafter the <b>“Terms”</b>) are effective as of 10 October
              2022.
            </div>
            <ul class="tnc-about-list">
              <li>
                These Terms govern any access or use of the website at <a href="https://halloween.psychokitties.io" target="_blank">https://halloween.psychokitties.io</a> (hereinafter
                the “<b>Site</b>”) as well as your use of Upward Spiral FZCO’s (hereinafter the “<b>Upward
                Spiral</b>”, and/or ”<b>we</b>”) Halloween Bash NFTs project, and products and services
                associated to it including but not limited to the original art, design, and/or drawings
                embodied in the underlying Halloween Bash NFT artwork (hereinafter the “<b>Art</b>”).
              </li>
              <li>
                Whereas currently Halloween Bash NFTs are sold through Crypto.com, your
                purchase and ownership of Halloween Bash NFT with its Art are governed by these
                Terms and Terms & Conditions published on the website of Crypto.com -
                <a href="https://crypto.com/nft/terms" target="_blank">https://crypto.com/nft/terms</a> (hereinafter the “<b>Crypto.com Terms</b>”), which are
                incorporated herein by reference. Please review the Crypto.com Terms carefully. If
                you do not wish to abide by these Terms and/or the Crypto.com Terms you may not
                purchase Halloween Bash NFT. In case of inconsistency between these Terms and
                Crypto.com Terms, these Terms published in this Site shall prevail.
              </li>
              <li>
                You acknowledge and agree that by accessing or using this Site, you are indicating
                that you have read, understand and agree to these Terms with Crypto.com Terms
                and to be bound by them.
              </li>
              <li>
                Halloween Bash NFT is a collection of digital artworks running on the Crypto.com
                platform. Users are entirely responsible for the safety and management of their own
                private Crypto.com wallets and validating all relevant transactions and contracts
                before approval. Furthermore, as the respective smart contracts run on the
                Crypto.com platform, there is a limited ability, and in most cases no ability, to undo,
                reverse, or restore any transactions.
              </li>
              <li>
                All pricing and payment terms are as set forth on Crypto.com website, and any
                payment obligations you incur are binding at the time of purchase. All sales are final.
                Unless otherwise required by applicable law, we will not provide a refund on any
                purchase.
              </li>
              <li>
                This Site and its connected services are provided “as is” and “as available” without
                warranty of any kind. By using this Site you are accepting sole responsibility for any
                and all transactions involving Halloween Bash NFT digital collectibles. Halloween
                Bash NFT and its Art are collectively referred to as “Halloween Bash NFT” in these
                Terms.
              </li>
              <li>
                The foregoing terms include important disclaimers and waivers which is the essence
                of the Terms and shall be carefully reviewed by you.
              </li>
            </ul>
          </div>
          <client-only>
            <div class="tnc-faq">
              <div class="tnc-faq-item" :class="{active: activeAnswerIndex === idx}"
                   v-for="(item, idx) in $options.faqItems" :key="idx">
                <div class="tnc-faq-item__title">{{ item.title }}</div>
                <the-accordion
                  :is-opened="activeAnswerIndex === idx"
                >
                  <terms-item :html-content="item.content" class="tnc-faq-item__content"/>
                </the-accordion>
                <div
                  class="tnc-faq-item__toggle"
                  :class="{opened: activeAnswerIndex === idx}"
                  @click="activeAnswerIndex = activeAnswerIndex === idx ? null : idx"
                />
              </div>
            </div>
          </client-only>
        </div>
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
export default {
  name: 'halloween-terms-and-conditions',
  scrollToTop: true,
  faqItems: [
    {
      title: '1. Who We Are',
      content: `
<p>Upward Spiral FZCO, the company registered and functioning under the law of the
United Arab Emirates, with the principal office located at IFZA Dubai Building A, Unit 1, Dubai Silicon Oasis, Dubai, United Arab Emirates 00000, is allowing you to
purchase Halloween Bash NFT.</p>
<p>The Site is for Halloween Bash NFT – non-fungible tokens with creative artworks
launched on the Blockchain digital network.</p>
      `
    },
    {
      title: '2. Your Consent',
      content: `
<p>You acknowledge and agree that by accessing or using the Site, you are indicating
that you have read, understand and agree to these Terms and to be bound by them.</p>
      `
    },
    {
      title: '3. User',
      content: `
        <p>The Site accepts you/users only from those countries where purchasing digital
collectibles such as NFTs is legal. You are solely responsible for determining whether
your accessing and/or use of the Site and/or purchasing Halloween Bash NFTs is
compliant with applicable laws in your jurisdiction and you warrant to us that such
activity is allowed by laws of the territory where you reside. Any claim against
Upward Spiral or any of its licensors brought by you for any reason whatsoever in
regard to the above-mentioned will be considered void and shall not be accepted.</p>
      `
    },
    {
      title: '4. Legal Age',
      content: `
        <p>Our Site is not intended for children. You declare that you have reached the age of
majority and therefore have the right to make decisions regarding transactions on
the Site and purchase of Halloween Bash NFT. It is your sole responsibility to inquire
about the existing laws and regulations regarding the age limitation for the activities
available on the Site in the jurisdiction of the territory where you reside.</p>
      `
    },
    {
      title: '5. Ownership and Rights Granted',
      content: `
        <p>By purchasing Halloween Bash NFT, you become an owner of the underlying non-fungible token and holder of the rights on the underlying artwork granted herein.
Any change of ownership of Halloween Bash NFT is mediated entirely by smart
contracts and Crypto.com platform without any interference of Upward Spiral or any
of its licensors.</p>
        <p><u>Personal Use</u>: Subject to your continued compliance with these Terms, for so long as
you own your Halloween Bash NFT, Upward Spiral grants you a worldwide, royalty-free license to use, copy, and display the purchased Halloween Bash NFT, along with
any extensions that you choose to create or use, solely for the following purposes:</p>
        <ul>
        <li>for your own personal, non-commercial use;</li>
        <li>as part of a marketplace that permits the display, purchase and sale of your
Halloween Bash NFT, for so long as you own your Halloween Bash NFT,
provided that the marketplace cryptographically verifies each Halloween Bash
NFT owner’s rights to display the Halloween Bash NFT to ensure that only the
actual owner can display the Halloween Bash NFT; and</li>
        <li>as part of a third party website or application that permits the inclusion,
involvement, or participation of your Halloween Bash NFT, for so long as you
own your Halloween Bash NFT, provided that the website/application
cryptographically verifies each Halloween Bash NFT owner’s rights to display the
Halloween Bash NFT to ensure that only the actual owner can display the
Halloween Bash NFT, and provided that the Halloween Bash NFT is no longer
visible once the owner of it leaves the website/application.</li>
</ul>

<p><u>Commercial Use</u>: Subject to your continued compliance with these Terms, for so long
as you own your Halloween Bash NFT, Upward Spiral grants you an unlimited,
worldwide license to use, copy, and display the purchased Halloween Bash NFT
commercially (hereinafter the “<b>Commercial Use</b>”). Examples of such Commercial
Use would e.g. be the use of the Art of your Halloween Bash NFT to produce and sell
merchandise products (T-Shirts etc.) displaying copies of that Art or by licensing the
exact, unmodified Art to a writer looking for an artwork for a book.</p>

<p>For the sake of clarity, nothing in this Section will be deemed to restrict you from (1)
owning or operating a marketplace that permits the use and sale of Halloween Bash
NFT generally, for so long as you own your Halloween Bash NFT, provided that the
marketplace cryptographically verifies each Halloween Bash NFT owner’s rights to
display the Halloween Bash NFT to ensure that only the actual owner can display it;
(2) owning or operating a third party website or application that permits the
inclusion, involvement, or participation of Halloween Bash NFT generally, for so
long as you own your Halloween Bash NFT, provided that the third party website or
application cryptographically verifies each Halloween Bash NFT owner’s rights to
display the Halloween Bash NFT to ensure that only the actual owner can it, and
provided that the Halloween Bash NFT is no longer visible once the owner of the
purchased Halloween Bash NFT leaves the website/application; or (3) earning
revenue from any of the foregoing.</p>

<p>You acknowledge and understand that by purchasing Halloween Bash NFT you are
not acquiring any equity or other ownership or profit-sharing interest in Upward
Spiral or any other company, or any of their affiliates or any brand or other business
venture.</p>

<p>For the avoidance of doubt, nothing herein gives you any rights to (i) create and sell
derivatives the Halloween Bash NFT, or (iii) distort or otherwise modify Halloween
Bash NFT or any of its parts, its colors, design, etc. (ii) use any trademarks, brand
names, logos or other intellectual property rights belonging to Upward Spiral or any
of its licensors.</p>

<p>You may not, and may not allow any third party to use name, pseudonym and/or
likeness of Halloween Bash NFT authors/artists, Halloween Bash’s and/or Upward
Spiral’s brand name, logos or other IP and assets in any kind of activities that may
lead to misleading costumers or/and false association, false endorsement, etc.</p>

<p>Notwithstanding anything contrary, Upward Spiral and its licensors retain all rights
necessary to exploit any Halloween Bash NFT in any commercial and non-commercial way, and build new partnerships and collaborations with regard to any
Halloween Bash NFT. Unless Upward Spiral permits otherwise in writing, you are
not entitled to any royalties or any other proceedings coming from such commercialization, partnerships and collaborations. You hereby irrevocably waive
right to make any claim against Upward Spiral and/or its licensors or any third party
authorized by Upward Spiral to exploit Halloween Bash NFT based on activities,
partnerships and collaborations permitted or directly executed by Upward Spiral or
its licensors.</p>

<p>Other than the rights to the Art, nothing herein gives you any rights to any other
trademarks or other intellectual property rights belonging to Upward Spiral and/or
its licensors. All of these rights are expressly reserved in the name of Upward Spiral
and its licensors, if any.</p>
      `
    },
    {
      title: '6. Your Obligations',
      content: `
        <p>In order to use any of our products and services, you shall not:</p>
        <ul>
        <li>be, or be located in a country subject to any financial sanctions, embargoes or
other restrictive measures imposed by the United Nations, European Union,
any EU country, UK Treasury or US Office of Foreign Assets Control (OFAC),
or any governmental authority in any jurisdiction in which this Site or
Crypto.com platform is available, or that has been designated by the United
States government, the UK, European Union, or any EU country as a &quot;terrorist
supporting&quot; country; or/and</li>
        <li>be listed on any United States government, the UK, European Union, or any
EU country list of prohibited or restricted parties.</li>
</ul>
<p>This Site accepts users only from those countries where products and services
associated to Halloween Bash NFT and Upward Spiral is legal. You are solely
responsible for determining whether your accessing and/or use of this Site and/or
purchasing respective products and services are compliant with applicable laws in
your jurisdiction and you warrant to us that such activity is allowed by laws of the
territory where you reside. Any claim against Upward Spiral or any of its licensors, if
any, brought by you for any reason whatsoever in regard to the above mentioned will
be considered void and shall not be accepted.</p>
<p>You are solely responsible for your own conduct while accessing or using the Site,
and for any consequences thereof. You agree to use the Site only for purposes that
are legal, proper and in accordance with these Terms and any applicable laws or
regulations. By way of example, and not as a limitation, you may not, and may not
allow any third party to: (i) send, upload, distribute or disseminate any unlawful,
defamatory, harassing, abusive, fraudulent, hateful, violent, obscene, or otherwise
objectionable content; (ii) distribute viruses, worms, defects, Trojan horses,
corrupted files, hoaxes, or any other items of a destructive or deceptive nature; (iii)
impersonate another person; (iv) upload, post, transmit or otherwise make available
through the Site any content that infringes the intellectual property or proprietary
rights of any party or otherwise violates the legal rights of others; (v) engage in,
promote, or encourage illegal activity (including, without limitation, money
laundering); (vi) interfere with other users&#39; use of the Site; (vii) use the Site for any
unauthorized commercial purpose; (viii) modify, adapt, translate, or reverse
engineer any portion of the Site; (ix) remove any copyright, trademark or other
proprietary rights notices contained in or on the Site or any part of it; (x) use any
technology to collect information about the Site’s for any unauthorized purpose; (xi) access or use the Site for the purpose of creating a product or service that is
competitive with any of our products or services; (xii) use the Art or any of its part
separated from the Halloween Bash NFT; (xiii) register or attempt to register any
trademark or copyright or otherwise acquire additional intellectual property rights in
or to any Halloween Bash NFT, this Site or any other asset of Upward Spiral; (xiv)
use any Halloween Bash NFT in connection with any advertisement, campaign,
business, product, or service, or in any manner that may imply endorsement of any
business, message, product, or service; (xv) use Halloween Bash NFT or any asset of
Upward Spiral or any of its licensors in any manner that infringes, violates or
misappropriates any third party intellectual property rights, or that violates these
Terms.</p>
<p>You shall not portray any Halloween Bash NFT as an opportunity to gain economic
benefit or profit, or as an investment, equity, or other ownership or profit-sharing
interest in Upward Spiral or any of its licensors or any of their affiliates or any brand
or other business venture.</p>
<p>If you engage in any of the activities prohibited by this Section, we may, at our sole
and absolute discretion, without notice to you, and without limiting any of our other
rights or remedies at law or in equity, take any legal measure and immediately
prohibit you from the Site, and suspend or terminate your user account, if any.</p>
<p>Any use Halloween Bash NFT other than as specifically authorized herein, without
Upward Spiral’s prior written permission, is strictly prohibited, and entitles us to
terminate the rights granted to you herein effective immediately as it violates
intellectual property rights of Upward Spiral and/or its licensor.</p>
      `
    },
    {
      title: '7. Fees and Payment',
      content: `
        <p>If you elect to purchase Halloween Bash NFT, any financial transactions that you
engage in will be conducted solely through the Crypto.com platform. We will have no
insight into or control over these payments or transactions, nor do we have the
ability to reverse any transactions. We will have no liability to you or to any third
party for any claims or damages that may arise as a result of any transactions that
you engage or any other transactions that you conduct via the the Crypto.com
platform.</p>
        <p>Crypto.com requires the payment of a transaction fee for transactions that occur on
the Crypto.com platform.</p>
        <p>You represent and warrant that any purchase of Halloween Bash NFT by you is solely
for your personal collection, use and enjoyment, and not for speculative or
investment purposes, for use as a substitute for currency or other medium of
exchange, or for resale or redistribution.</p>
      `
    },
    {
      title: '8. Disclaimer',
      content: `
      <p>YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR ACCESS TO AND USE
OF THE SITE IS AT YOUR SOLE RISK, AND THAT THE SITE IS PROVIDED &quot;AS
IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER
EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE MAKE NO EXPRESS WARRANTIES AND HEREBY
DISCLAIM ALL IMPLIED WARRANTIES REGARDING THE SITE AND ANY PART
OF IT (INCLUDING, WITHOUT LIMITATION, THE SITE, ANY SMART
CONTRACT, OR ANY EXTERNAL WEBSITES), INCLUDING THE IMPLIED
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE, NON-INFRINGEMENT, CORRECTNESS, ACCURACY, OR
RELIABILITY. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING,
WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS DO NOT REPRESENT
OR WARRANT TO YOU THAT: (I) YOUR ACCESS TO OR USE OF THE SITE WILL
MEET YOUR REQUIREMENTS, (II) YOUR ACCESS TO OR USE OF THE SITE
WILL BE UNINTERRUPTED, TIMELY, SECURE OR FREE FROM ERROR, (III)
USAGE DATA PROVIDED THROUGH THE SITE WILL BE ACCURATE, (III) THE
SITE OR ANY CONTENT, SERVICES, OR FEATURES MADE AVAILABLE ON OR
THROUGH THE SITE ARE FREE OF VIRUSES OR OTHER HARMFUL
COMPONENTS, OR (IV) THAT ANY DATA THAT YOU DISCLOSE WHEN YOU
USE THE SITE WILL BE SECURE. SOME JURISDICTIONS DO NOT ALLOW THE
EXCLUSION OF IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS,
SO SOME OR ALL OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.</p>

<p>YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING
INFORMATION AND DEALING ONLINE OVER THE INTERNET, AND AGREE
THAT WE HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY BREACH OF
SECURITY UNLESS IT IS DUE TO OUR WILLFUL MISCONDUCT.</p>

<p>WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU
INCUR AS THE RESULT OF YOUR USE OF THE CRYPTO.COM PLATFORM. WE
DO NOT HAVE CONTROL OVER AND MAKE NO GUARANTEES REGARDING
ANY SMART CONTRACTS.</p>

<p>WE SHALL HAVE NO LIABILITY FOR ANY INFORMATION PUBLISHED ON
LINKED WEBSITES, CONTAINED IN ANY USER SUBMISSIONS PUBLISHED ON
THE SITE, OR PROVIDED BY THIRD PARTIES. NEITHER WE NOR OUR THIRD-
PARTY CONTENT PROVIDERS SHALL BE LIABLE FOR ANY INDIRECT,
INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES OR LOSSES OR FOR
LOST REVENUES OR PROFITS, WHETHER OR NOT ADVISED OF THE
POSSIBILITY OF SUCH DAMAGES OR LOSSES AND REGARDLESS OF THE TYPE
OF LIABILITY.</p>

<p>WE MAY SUSPEND THE SITE FOR INDEFINITE PERIODS OF TIME FOR
TECHNICAL MAINTENANCE OR UPGRADE OR OTHERWISE. THE FUNCTIONS
AND FEATURES OF THE SITE ARE SUBJECT TO CHANGE WITHOUT NOTICE.</p>

<p>WE ARE NOT LIABLE FOR ANY DAMAGES OF ANY KIND THAT ARE CAUSED
DUE TO USER’S MISUSE OR ABUSE OF THE SITE, WHICH INCLUDE ALL
RESULTING LOSSES BY ANY THIRD PARTIES.</p>
      `
    },
    {
      title: '9. Waivers and User Posting',
      content: `
        <p>HALLOWEEN BASH NFT ARTWORKS ARE PROVIDED TO US BY OUR THIRD PARTY LICENSORS AND WE DO NOT HAVE CONTROL OVER THE CONDUCT OF OUR LICENSORS, LICENSEES, AND OTHER PARTICIPANTS OF THE PROJECT, AND THE ORIGINALITY OF HALLOWEEN BASH NFT ARTWORKS WITH REGARD TO WHICH WE DISCLAIM ALL LIABILITY TO THE MAXIMUM EXTENT PERMITTED BY LAW. THEREFORE, WE DO NOT GUARANTEE THAT ANY OF THE HALLOWEEN BASH NFT IS CLEAR FROM A RIGHTS USE PERSPECTIVE AND/OR IS ORIGINAL AND NOT A COUNTERFEIT. HALLOWEEN BASH NFT MAY INFRINGE THIRD PARTY RIGHTS. IT IS SOLELY YOUR RESPONSIBILITY TO DETERMINE IF ANY HALLOWEEN BASH NFT WILL MEET YOUR NEEDS AND EXPECTATIONS. WE WILL NOT PARTICIPATE IN DISPUTES BETWEEN YOU AND OUR LICENSORS. WE SHALL NOT HAVE ANY LIABILITY ARISING FROM OR IN ANY WAY RELATED TO ANY TRANSACTIONS OR RELATIONSHIP BETWEEN OUR LICENSORS AND YOU.
</p>
        <p>MONETIZATION/COMMERCIALIZATION OR ANY OTHER TYPE OF USE OF THE HALLOWEEN BASH NFT IS AT YOUR OWN RISK.
</p>
        <p>TO THE EXTENT PERMITTED BY THE APPLICABLE LAW, WITH RESPECT TO
ANY DISPUTE ARISING OUT OF OR RELATED TO THESE TERMS, INCLUDING
WITHOUT LIMITATION DISPUTES RELATED TO THE SITE OR ANY PRODUCTS
SOLD OR DISTRIBUTED THROUGH THE SITE, OR THE SMART CONTRACTS: (I)
YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO HAVE A TRIAL BY JURY;
AND (II) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO PARTICIPATE AS
A MEMBER OF A CLASS OF CLAIMANTS IN ANY LAWSUIT, INCLUDING BUT
NOT LIMITED TO CLASS ACTION LAWSUITS INVOLVING ANY SUCH DISPUTE.</p>
        <p>YOU ACKNOWLEDGE AND AGREE THAT UPWARD SPIRAL OWNS AND HAVE
THE RIGHT TO USE, PUBLISH, AND OTHERWISE EXPLOIT ANY AND ALL
INFORMATION THAT YOU POST OR OTHERWISE PUBLISH ON THE SITE IN
POSTINGS, FORUMS OR MESSAGE, QUESTIONNAIRE AND OTHERWISE, AND
YOU ACKNOWLEDGE AND AGREE THAT, BY PROVIDING US ANY SUCH
INFORMATION, YOU AUTOMATICALLY GRANT TO US A WORLDWIDE, NON-
EXCLUSIVE, ASSIGNABLE, FULLY PAID-UP, ROYALTY-FREE, PERPETUAL,
IRREVOCABLE LICENSE AND RIGHT TO USE, REPRODUCE, PUBLISH,
DISTRIBUTE, MODIFY AND OTHERWISE EXPLOIT SUCH INFORMATION FOR
ANY PURPOSE, AND IN ANY FORM NOW KNOW OR WHICH BECOMES KNOWN
AFTER THE DATE OF THESE TERMS. YOU HEREBY WAIVE ANY CLAIMS
AGAINST UPWARD SPIRAL FOR ANY ALLEGED OR ACTUAL INFRINGEMENTS
OF ANY INTELLECTUAL PROPERTY RIGHTS, MORAL RIGHTS, PRIVACY OR
PUBLICITY, OR RIGHTS OF ATTRIBUTION IN CONNECTION WITH UPWARD
SPIRAL’S USE OF SUCH INFORMATION.</p>
      `
    },
    {
      title: '10. Risks Assumption',
      content: `
        <p>By using the Site or/and good and/or services associated with Halloween Bash NFT,
you accept and acknowledge as follows:</p>
        <ul>
        <li>inherent security risks of providing information and dealing online over the
Internet and nobody may hold Upward Spiral responsible for any breach of
security;</li>
        <li>to the extent that you sell your Halloween Bash NFT, please be aware that the
prices of NFTs are extremely volatile and fluctuations in the prices of other NFTs
and impact the price of your Halloween Bash NFT both positively and negatively.
Given the volatility, NFTs such as Halloween Bash NFT should not be considered
an investment. You assume all risks in that connection;</li>
        <li>you shall take all statements, recommendations, data, opinions, documents on
an as-is and as-available basis, and you shall rely on your own counsel, third-party service providers and judgment in connection therewith.</li>
        <li>the use of applications on the blockchain is associated with a high degree of
technological and/or other risks;</li>
        <li>the NFT is a non-fungible token on the blockchain, representing ownership of
certain digital assets only. No information on this Site (or any other documents
mentioned therein) is or may be considered to be advice or an invitation to enter
into an agreement for any investment purpose. Further, nothing on this Site
qualifies or is intended to be an offering of securities, commodities or any type of
financial instrument in any jurisdiction nor does it constitute an offer or an
invitation to purchase shares, securities or other financial products. Due to the
artistic nature of the project, Upward Spiral has not been registered with or
approved by any regulator in any jurisdiction. It remains your sole responsibility
to assure that the purchase of the Halloween Bash NFT complies with laws and
regulations in your jurisdiction;</li>
        <li>various risks inherent to using digital currency networks including but not
limited to hardware failure, hacking, cybersquatting, software issues, internet
connection failure, malicious software, third party interference leading to access
to the relevant wallets, smart contracts and other user data; Also, legal risks
inherent in trading digital currencies including risk related to regulations and
restrictions under different jurisdictions;</li>
        <li>various risks related to regulations regarding NFTs, blockchain technology,
cryptocurrencies, and digital networks;</li>
        <li>various risks of any disruptions or other issues impacting cryptocurrencies,
tokens, or the digital platforms;</li>
        <li>Upward Spiral will not be responsible or liable to anyone for any loss and take no
responsibility for and will not be liable to anyone for any use of the wallet or/and
smart contract, including but not limited to any losses, damages, or claims
arising from your/user’s forgotten passwords, incorrectly constructed
transactions, or mistyped addresses; corrupted wallet files, smart contracts and
any other digital infrastructure; any unauthorized third-party activities,
including without limitation the use of viruses, phishing, brute-forcing, or other
means of attack; server failure or data loss; any of the unlawful activities of
anyone engaged in the project; any enforcement action against anyone engaged
in selling and purchasing Halloween Bash NFT for illegal trading;</li>
        <li>Upward Spiral does not warrant that the wallet, smart contracts and any other
digital infrastructure used for Halloween Bash NFT are free of viruses or errors,
that its content is accurate, that it will be uninterrupted, that it will not be hacked
or that defects will be corrected;</li>
        <li>Halloween Bash NFT is not an investment and Upward Spiral assumes no risks
regarding the price of Halloween Bash NFT and its fluctuation;</li>
        <li>Upward Spiral will not be responsible or liable to you/user for any loss of any
kind including tokens or other assets, or taken in reliance on material, or
information, contained in the wallet used by you/user or any third party;</li>
        <li>NFTs, cryptocurrencies and blockchain technology are relatively new and the
regulatory landscape is unsettled. New regulations could negatively impact such
technologies impacting the value for your as Halloween Bash NFT. You
understand and accept all risk in that regard;</li>
        <li>you assume all responsibility for any adverse effects of disruptions or other
issues impacting Crypto.com platform or any of your wallet.</li>
</ul>
      `
    },
    {
      title: '11. Limitation of Liability',
      content: `
      <p>
      UPWARD SPIRAL, SUBSIDIARIES, HOLDING COMPANIES AND AFFILIATES,
AND ITS LICENSORS SHALL NOT, UNDER ANY CIRCUMSTANCES, BE LIABLE
TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL,
SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES WHICH YOU MAY
INCUR, HOWSOEVER CAUSED AND UNDER ANY THEORY OF LIABILITY,
INCLUDING, WITHOUT LIMITATION, ANY LOSS OF PROFITS (WHETHER
INCURRED DIRECTLY OR INDIRECTLY), LOSS OF GOODWILL OR BUSINESS
REPUTATION, LOSS OF DATA, COST OF PROCUREMENT OF SUBSTITUTE
GOODS OR SERVICES, OR ANY OTHER INTANGIBLE LOSS, EVEN IF UPWARD
SPIRAL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS
LIMITATION APPLIES REGARDLESS OF WHETHER SUCH DAMAGES ARE
SOUGHT BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY,
NEGLIGENCE, STRICT LIABILITY OR ANY OTHER LEGAL OR EQUITABLE
THEORY.
</p>
      <p>TO THE EXTENT PERMITTED BY THE APPLICABLE LAW, UPWARD SPIRAL’S
TOTAL, AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING
OUT OF OR RELATING TO THESE TERMS OR YOUR ACCESS TO OR USE OF, OR
YOUR INABILITY TO ACCESS OR USE, ANY PORTION OF THE SITE, WHETHER
IN CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, IS
LIMITED TO USD 100 (ONE HUNDRED UNITED STATES DOLLARS).</p>
      <p>YOU ACKNOWLEDGE AND AGREE THAT WE HAVE MADE THE SITE
AVAILABLE TO YOU AND ENTERED INTO THESE TERMS IN RELIANCE UPON
THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY SET FORTH
HEREIN. WE WOULD NOT BE ABLE TO PROVIDE THE SITE TO YOU WITHOUT
THESE LIMITATIONS.</p>
      <p>NOTHING IN THE TERMS EXCLUDES THE LIABILITY FOR UPWARD SPIRAL,
ITS SUBSIDIARIES, LICENSORS OR AFFILIATES FOR ANY LIABILITY WHICH
CANNOT BE LIMITED BY APPLICABLE LAW. NEITHER PARTY LIMITS OR
EXCLUDES LIABILITY FOR FRAUDULENT MISREPRESENTATION.</p>
      `
    },
    {
      title: '12. Restrictions and Covenants',
      content: `
        <p>You shall not use any AI or machine learning programs or misuse any algorithm
while using the Site. Breaching the foregoing entitles Upward Spiral to restrict your
access to the Site for an indefinite term.</p>
        <p>To the extent permitted by the applicable law, we:</p>
        <ul>
        <li>do not represent and take responsibility on the accuracy of reliability of
information posted to the Site by users and visitors; and</li>
        <li>hereby retain the right to refuse to post or otherwise publish any information,
and the right to remove any such material for any ground and reason.</li>
</ul>
<p>The Site may be blocked in the future without any notice to you for certain territories
due to their regulations. Using VPN to bypass provider’s block is strictly prohibited.
Company retains the right to prohibit you from the Site, suspend or cancel your
account (if any) any time if you breach any of the terms hereunder.</p>
      `
    },
    {
      title: '13. Indemnification',
      content: `
      You agree to indemnify and hold harmless Upward Spiral and its licensors, parent,
affiliate and subsidiary companies, and each of their respective officers, suppliers,
directors, employees, agents, successors, licensees and assigns, from and against any
claim, liability, loss, damage (actual and consequential) of any kind or nature, suit,
judgment, litigation cost, and reasonable attorneys&#39; fees arising out of or in any way
related to your breach of these Terms and violation of applicable law.
      `
    },
    {
      title: '14. Privacy',
      content: `
      By using the Site and related services, you are subject to Upward Spiral’s Privacy
Policy located at Privacy Policy, which is hereby incorporated into and made part of
these Terms.
      `
    },
    {
      title: '15. Feedback',
      content: `
      You may choose to submit comments, bug reports, ideas or other feedback about the
Site, including without limitation about how to improve the Site (collectively,
“<b>Feedback</b>”). By submitting any Feedback, you agree that we are free to use such
Feedback in any way we choose without additional compensation to you and you
hereby grant us a perpetual, irrevocable, nonexclusive, worldwide license to
incorporate and use the Feedback for any purpose. You hereby waive all moral rights
with regard to your Feedback.
      `
    },
    {
      title: '16. Third-party Websites',
      content: `
      We may provide links to third-party websites. Therefore, some of the content on the
Site may in fact be provided by third parties. Upward Spiral does not have any
responsibility for these third-party websites, which are governed by the terms of
conditions and privacy policies, if any, of the applicable third-party content
providers.
      `
    },
    {
      title: '17. Applicable Law, Jurisdiction and Dispute Resolution',
      content: `
      These Terms shall be deemed to have been entered into, and shall be interpreted in accordance with the substantive laws of the United Arab Emirates, without reference to the principles of conflicts of laws. All disputes arising out of or in connection with these Terms, including without limitation your access or use of the Site, or to any products sold or distributed through the Site, will be referred to and finally resolved by arbitration located in Dubai. The case will be adjudicated by a single arbitrator and will be administered by the American Arbitration Association in accordance with its applicable rules and the substantive law of Commonwealth of Puerto Rico. The party initiating an arbitration proceeding/claim shall cover all fees and costs associated with the arbitration proceedings. The place of arbitration will be Dubai, the United Arab Emirates. The award of the arbitrator will be final and binding, and any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Notwithstanding the foregoing, we may seek and obtain injunctive relief in any jurisdiction in any court of competent jurisdiction.
      `
    },
    {
      title: '18. Miscellaneous',
      content: `
      <p>
      If a part of these Terms becomes invalid or unenforceable under the applicable law, it
shall be deemed to have been replaced by a valid and/or applicable provision which
most closely matches the intention of Upward Spiral, and the remainder of the
Terms shall remain in force.
</p>
      <p>These Terms completely replace any prior agreements and understandings between
you and Upward Spiral in relation to the Site and any goods and services associated
with Halloween Bash NFTs. Each party confirms that, in entering into the Terms it
has not relied upon any representations or statements not expressly incorporated
herein.</p>
      <p>If Upward Spiral does not exercise or enforce any legal right or remedy which is
contained in these Terms or is available under applicable law, this will not be taken
to be a formal waiver of Upward Spiral’s rights and that those rights or remedies will
still be available to Upward Spiral.</p>
      `
    },
    {
      title: '19. Amendments',
      content: `
      To the extent permitted by the applicable law, we may make changes to the Terms at
our discretion. Please check these Terms periodically for changes. Any changes to the
Terms will apply on the date that they are made, and your continued access to or use
after the Terms have been updated will constitute your binding acceptance of the
updates. If you do not agree to any revised Terms and/or revised Crypto.com Terms,
you may not access or use the Site.
      `
    },
    {
      title: '20. How to Contact Us',
      content: `
        <p>
        If you have any questions or concerns, or need to submit any information, you can contact us via Discord, Twitter or regular mail directed to:
</p>
        <p><u>Address</u>: IFZA Dubai Building A, Unit 1, Dubai Silicon Oasis, Dubai, United Arab Emirates 00000</p>
        <p>If you have any questions, you can also join our Discord channels at:  <a href="https://www.discord.gg/quantumfrenzy" target="_blank">www.discord.gg/quantumfrenzy</a>.</p>
        <p>You can see up-to-date news at <a href="https://www.twitter.com/psychokittiesOG" target="_blank">www.twitter.com/psychokittiesOG</a>.</p>
      `
    },
  ],
  data() {
    return {
      activeAnswerIndex: null
    }
  },
  methods: {
    toggleAnswer(index) {
      this.activeAnswerIndex = this.activeAnswerIndex === index ? null : index
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/terms-and-conditions.scss";
</style>
