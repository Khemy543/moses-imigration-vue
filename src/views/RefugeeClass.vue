<script setup>
import { sanity } from "@/sanity.js";
import { ref, onMounted, computed } from "vue";

import BodyText from "../components/Pages/BodyText.vue";
import HeroSection from "../components/Pages/HeroSection.vue";

const allComponents = {
  HeroSection,
  BodyText,
};

const query = `*[_type == "refugee-class"]{
  myId,
  component,
  description,
  body,
  title,
  image,
}`;

const refugeeClass = ref([]);

const getPageData = () => {
  sanity
    .fetch(query)
    .then((data) => {
      console.log(data);
      refugeeClass.value = data;
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
