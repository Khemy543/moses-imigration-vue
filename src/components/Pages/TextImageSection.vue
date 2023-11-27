<template>
    <section :class="content.section_bg_color">
    <div class="container">
      <div class="row align-items-center overlap-gap-section">
        <div class="col-12 col-lg-6 col-md-10 ps-lg-0">
          <h5 v-if="content.title" class="alt-font text-dark-gray font-weight-500" style="color: rgb(191, 140, 76);">
            {{ content.title }}
          </h5>
          <p v-for="body in content.body" :key="content._key">{{ body?.children[0].text }}</p>
        </div>
        <div
          class="col-12 col-lg-6 col-md-10 text-center text-lg-end md-margin-30px-bottom wow animate__fadeIn"
          data-wow-delay="0.2s"
        >
          <img
            :src="url"
            alt=""
            style="width: 100%; height: 500px; object-fit: cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue';
import { urlFor } from "../../helpers/sanity-helpers";
const props = defineProps({
    content: {
        type: Object,
        default: () => {},
    }
});

const img = computed(
  () => urlFor( props.content.image )
);

const url = img.value
</script>