<template>
  <div class="flex flex-col md:flex-row">
    <h2 class="head-super text-2xl">{{ year }}</h2>
    <div class="md:pl-8 text-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['year']
}
</script>
