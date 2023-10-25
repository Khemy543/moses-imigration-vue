<script setup>
import { sanity} from "@/sanity.js";
import { ref, onMounted, computed } from "vue";

import BodyText from '../components/About/BodyText.vue'
import TextImageSection from '../components/About/TextImageSection.vue'
import BodyTextWithTitle from '../components/About/BodyTextWithTitle.vue'
import HeroSection from '../components/About/HeroSection.vue'

const allComponents = {
  HeroSection,
  BodyText,
  BodyTextWithTitle,
  TextImageSection
};

const query = `*[_type == "about-us"]{
  myId,
  subtitle,
  component,
  position_of_image,
  description,
  body,
  title,
  image
}`;

const aboutData = ref([]);

const getPageData = () => {
  sanity
    .fetch(query)
    .then((data) => {
      aboutData.value = data
    })
    .catch((error) => {
      console.log(error);
    });
};

const pageData = computed(() =>
  aboutData.value.sort((a, b) => Number(a.myId) - Number(b.myId))
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