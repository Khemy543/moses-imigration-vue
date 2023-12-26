<template>
    <div class="container">
    <h5
        v-if="content.title"
        class="alt-font text-dark-gray font-weight-500"
        style="color: rgb(191, 140, 76)"
    >
        {{ content.title }}
    </h5>
    <SanityBlocks :blocks="content.body" />
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
  <style lang="css" scoped>
  :deep(.container ul) {
    margin-left: 25px;
  }
  
  :deep(.container ul li) {
    font-size: 17px;
  }
  
  :deep(.container ol li) {
    font-size: 17px;
  }
  :deep(.container a) {
    font-size: 17px;
    /* text-decoration: underline; */
    color: #367ef2;
  }
  </style>
  