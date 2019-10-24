<template>
  <div class="published-work flex flex-col sm:flex-row">
    <h2 class="head-super text-2xl hidden sm:inline">{{ year }}</h2>
    <div class="sm:pl-8 text-lg">
      <h1 class="head-main text-xl">
        {{ title }}<span class="sm:hidden"> ({{ year }})</span>
      </h1>
      <strong>{{ type }}</strong>
    </div>
    <a
      v-if="summaryLink"
      :href="summaryLink"
      class="btn self-start mt-4 sm:mt-0 sm:ml-8"
      target="_blank"
      rel="noopener"
      >{{ summaryCaption ? summaryCaption : 'Zobrazit souhrn' }}</a
    >
  </div>
</template>

<script>
export default {
  props: {
    year: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    summaryCaption: {
      type: String,
      required: false,
      default: null
    },
    summaryLink: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
