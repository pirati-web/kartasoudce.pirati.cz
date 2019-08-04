<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="container container-resp flex-grow py-4 md:py-8">
      <nuxt />
    </div>
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

export default {
  components: {
    Footer,
    Header
  },
  head() {
    return {
      title: process.env.siteInfo.claim || 'Úvod',
      titleTemplate: `%s | ${process.env.siteInfo.name}`
    }
  }
}
</script>
