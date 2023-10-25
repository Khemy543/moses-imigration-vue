<script setup>
import { sanity} from "@/sanity.js";
import { ref, onMounted, computed } from "vue";

import BodyText from '../components/Pages/BodyText.vue'
import HeroSection from '../components/Pages/HeroSection.vue'
import TextImage from "../components/Pages/TextImageSection.vue";
import ImageTextListWithIcons from '../components/Pages/ImmigrationCategory/ImageTextListWithIcons.vue'

const allComponents = {
  HeroSection,
  ImageTextListWithIcons,
  BodyText,
  TextImage
};

const query = `*[_type == "immigration-category"]{
  myId,
  component,
  description,
  section_bg_color,
  body,
  title,
  image,
  list
}`;

const immigrationCat = ref([]);

const getPageData = () => {
  sanity
    .fetch(query)
    .then((data) => {
      console.log(data)
      immigrationCat.value = data
    })
    .catch((error) => {
      console.log(error);
    });
};

const pageData = computed(() =>
  immigrationCat.value.sort((a, b) => Number(a.myId) - Number(b.myId))
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