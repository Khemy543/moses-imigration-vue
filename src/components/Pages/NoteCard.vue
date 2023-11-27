<template>
  <div class="container">
    <blockquote
      class="alt-font border-width-4px border-color-fast-blue margin-60px-left pe-0 margin-5-half-rem-tb md-margin-40px-left sm-no-margin-left wow animate__fadeIn"
    >
      <SanityBlocks :blocks="content.body" />
      <footer class="text-medium text-fast-blue d-inline-block text-uppercase">
        Note
      </footer>
    </blockquote>
  </div>
</template>
<script setup>
import { SanityBlocks } from "sanity-blocks-vue-component";
defineProps({
  content: {
    type: Object,
    default: () => {},
  },
});
</script>
<style scoped>
blockquote {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
</style>
