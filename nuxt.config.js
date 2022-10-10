import config from './config.js'

const title = 'PsychoKitties: The New Era | Exclusively on Crypto.com/NFT'
const description = 'The trippiest NFT drop of 2021 is here! Now is your chance to overtake the mind of a mighty PsychoKitty!'
const url = 'https://psychokitties.io/'
const image_url = 'https://psychokitties.io/logo.png'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:url', name: 'og:url', content: url },
      { hid: 'og:site_name', name: 'og:site_name', content: url },
      { hid: 'og:title', name: 'og:title', content: title },
      { hid: 'og:description', name: 'og:description', content: description },
      { hid: 'og:image', name: 'og:image', content: image_url },
      { hid: 'twitter:domain', name: 'twitter:url', content: url },
      { hid: 'twitter:url', name: 'twitter:url', content: url },
      { hid: 'twitter:site_name', name: 'twitter:site_name', content: url },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      { hid: 'twitter:image', name: 'twitter:image', content: image_url },
      { hid: 'facebook-domain-verification', name: 'facebook-domain-verification', content: 'y3t55aq5bk5hpfwyf7p2vtxb8wny2d' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Hammersmith One:400,500,600,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Exo:300,400,500,600,700,900'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Creepster&display=swap'
      }
    ],
    script: [
      {
        hid: 'facebook-pixel-code',
        innerHTML: '!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=\'2.0\';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,\'script\',\'https://connect.facebook.net/en_US/fbevents.js\');fbq(\'init\', \'844032102956173\');fbq(\'track\', \'PageView\');'
      }
    ],
    noscript: [
      {
        hid: 'facebook-pixel-code-noscript',
        innerHTML: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=844032102956173&ev=PageView&noscript=1" />'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/aos.client'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    ['vue-scrollto/nuxt', { duration: 1500 }],
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'portal-vue/nuxt'
  ],

  axios: {
    credentials: true,
    baseURL: config.API_ROOT,
    https: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
