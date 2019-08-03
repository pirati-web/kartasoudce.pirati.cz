<template>
  <header
    role="banner"
    class="sitenav border-b border-brand-graylight py-4 lg:py-8 shadow-md"
  >
    <div class="sitenav-wrap container container-auto-h">
      <nav
        role="navigation"
        class="flex items-center content-between flex-grow"
      >
        <div class="flex flex-row">
          <div class="border-r border-gray-300 pr-4">
            <a href="https://www.pirati.cz"
              ><img src="~/static/img/brand/logo_napis.svg" class="h-8 md:h-12"
            /></a>
          </div>
          <div class="flex flex-col pl-4 h-8 md:h-12 items-start">
            <h1 class="head-main text-xl">
              <a href="/">{{ siteInfo.name }}</a>
            </h1>
            <h2
              class="head-alt text-lg text-brand-graydark leading-none hidden md:block"
            >
              <a href="/">{{ siteInfo.claim }}</a>
            </h2>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    siteInfo: process.env.siteInfo
  })
}
</script>
