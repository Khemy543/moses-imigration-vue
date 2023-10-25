<template>
  <section class="bg-dark-gray wow animate__fadeIn">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 col-sm-8">
          <h5 class="alt-font text-extra-dark-gray font-weight-500 text-center">
            {{ content.body[0].children[0].text }}
          </h5>
        </div>
        <div class="col-12 col-lg-6 col-sm-8">
          <img :src=url alt="" />
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