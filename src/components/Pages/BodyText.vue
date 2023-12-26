<template>
  <section class="blog-right-side-bar" :class="content.section_bg_color">
    <div class="container">
      <h5
        v-if="content.title"
        class="alt-font text-dark-gray font-weight-500"
        style="color: rgb(191, 140, 76)"
      >
        {{ content.title }}
      </h5>
      <SanityBlocks :blocks="content.body" />
      <div class="container" v-if="content.noc">
        <table>
            <thead>
            <tr>
                <th v-text="content.noc.rows[0].cells[0]"></th>
                <th v-text="content.noc.rows[0].cells[1]"></th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(nocList, index) in content.noc.rows" :id="nocList._key">
                  <td v-if="index > 0" v-text="nocList.cells[0]"></td>
                  <td v-if="index > 0" v-text="nocList.cells[1]"></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  </section>
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
