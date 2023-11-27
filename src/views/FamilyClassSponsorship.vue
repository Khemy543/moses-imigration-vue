<script setup>
import { sanity } from "@/sanity.js";
import { ref, onMounted, computed } from "vue";

import BodyText from "../components/Pages/BodyText.vue";
import HeroSection from "../components/Pages/HeroSection.vue";
import NoteCard from "../components/Pages/NoteCard.vue";
import TextImageSection from "../components/About/TextImageSection.vue";

const allComponents = {
  HeroSection,
  BodyText,
  NoteCard,
  TextImageSection,
};

const query = `*[_type == "family-class"]{
  myId,
  component,
  description,
  body,
  title,
  image,
}`;

const familyClass = ref([]);

const getPageData = () => {
  sanity
    .fetch(query)
    .then((data) => {
      familyClass.value = data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const pageData = computed(() =>
  familyClass.value.sort((a, b) => Number(a.myId) - Number(b.myId))
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
<style scoped>
.family-header {
  background-image: url(../assets/images/main/family-class.jpg);
}
</style>
