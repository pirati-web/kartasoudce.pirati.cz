<template>
  <footer
    role="contentinfo"
    class="footer bg-brand-blackmid text-brand-graydark"
  >
    <div class="container container-resp px-4 md:px-8 py-8 items-start">
      <div class="flex flex-wrap items-center">
        <div class="w-1/2">
          <a href="https://www.pirati.cz" rel="noopener" target="_blank"
            ><img
              src="~/static/img/brand/logo_napis_white.svg"
              alt=""
              class="footer__brand ml-auto mr-8"
          /></a>
        </div>
        <div class="w-1/2">
          <h3 class="heading-sub text-lg underline">
            <a href="/">Karta soudce</a>
          </h3>
          <ul class="underline">
            <li>
              <a :href="'mailto:' + siteInfo.email">{{ siteInfo.email }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-brand-blacksemi">
      <div
        class="container container-resp flex-col text-center text-brand-graydark py-8"
      >
        <div>
          <span class="flip-x">&copy;</span>&nbsp;Piráti,&nbsp;2019. Všechna
          práva vyhlazena. Sdílejte a nechte ostatní sdílet za stejných
          podmínek.
        </div>
        <div class="mt-2 text-2xl">
          <a
            :href="siteInfo.fbProfileUrl"
            target="_blank"
            rel="noopener"
            title="Facebook"
            ><i class="fa fa-facebook"></i
          ></a>
          <a
            :href="siteInfo.twitterProfileUrl"
            target="_blank"
            rel="noopener"
            title="Twitter"
            class="ml-2"
            ><i class="fa fa-twitter"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss">
.footer__brand {
  max-width: 9rem;
}
</style>

<script>
export default {
  data: () => ({
    siteInfo: process.env.siteInfo
  })
}
</script>
