<script setup>
import { sanity} from "@/sanity.js";
import { ref, onMounted, computed } from "vue";

import BodyText from '../components/Pages/BodyText.vue'
import BodyContinuation from "../components/Pages/BodyContinuation.vue"
import HeroSection from '../components/Pages/HeroSection.vue'
import TextImageSection from "../components/Pages/TextImageSection.vue"

const allComponents = {
  HeroSection,
  BodyText,
  BodyContinuation,
  TextImageSection
};

const query = `*[_type == 'lmia-global-stream']{
  myId,
  component,
  description,
  section_bg_color,
  body,
  title,
  image,
  noc
}`;

const refugeeClass = ref([]);

const getPageData = () => {
  sanity
    .fetch(query)
    .then((data) => {
      console.log(data)
      refugeeClass.value = data
    })
    .catch((error) => {
      console.log(error);
    });
};

const pageData = computed(() =>
refugeeClass.value.sort((a, b) => Number(a.myId) - Number(b.myId))
);

onMounted(() => {
  getPageData();
});
</script>
<template>
     <template v-for="item in pageData" :key="item.myId">
      <component :is="allComponents[item.component]" :content="item" />
    </template>
</template>