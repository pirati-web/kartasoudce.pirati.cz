<template>
  <div class="decision flex flex-col md:flex-row">
    <h2 class="head-super text-2xl">{{ year }}</h2>
    <div class="md:pl-8 text-lg">
      <h1 class="head-main text-xl">{{ title }}</h1>
      <slot></slot>

      <div
        v-if="status || proceedingsLink"
        class="flex flex-col md:flex-row items-center mt-4 justify-between"
      >
        <p v-if="status" class="flex-grow">
          <strong>Aktuální stav:</strong>
          <span v-if="!statusLink">{{ status }}</span
          ><a
            v-if="statusLink"
            class="underline"
            :href="statusLink"
            target="_blank"
            rel="noopener"
            >{{ status }}</a
          >
        </p>
        <p v-if="proceedingsLink" class="pt-4 md:pt-0 w-full md:w-auto">
          <a :href="proceedingsLink" class="btn" target="_blank" rel="noopener"
            >Zobrazit průběh řízení</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['year', 'title', 'proceedingsLink', 'status', 'statusLink']
}
</script>
