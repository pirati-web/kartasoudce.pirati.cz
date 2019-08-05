<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<style lang="postcss">
html {
  @apply font-body;

  font-size: 16px;
  font-weight: 300;
  color: theme('colors.brand.blacksemi');
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ogImage from '~/static/img/intro.jpg'

export default {
  components: {
    Footer,
    Header
  },
  head() {
    return {
      title: process.env.siteInfo.claim || 'Úvod',
      titleTemplate: `%s | ${process.env.siteInfo.name}`,
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: ogImage },
        {
          property: 'og:title',
          content: process.env.siteInfo.claim || 'Úvod',
          template: `%s | ${process.env.siteInfo.name}`
        },
        { property: 'og:url', content: process.env.host + this.$route.path }
      ]
    }
  }
}
</script>
