<script setup>
// import { useSanityClient } from "vue-sanity";
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

/* onMounted(() => {
  let jquery = document.createElement("script");
  let themeVendors = document.createElement("script");
  let mainjs = document.createElement("script");
  jquery.setAttribute("src", "@/assets/js/jquery.min.js");
  themeVendors.setAttribute("src", "W/assets/js/theme-vendors.min.js");
  mainjs.setAttribute("src", "@/assets/js/main.js");
  document.head.appendChild(jquery);
  document.head.appendChild(themeVendors);
  document.head.appendChild(mainjs);
}); */

/* useSanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-10-21",
  token: import.meta.env.VITE_SANITY_API_TOKEN,
  useCdn: import.meta.env.NODE_ENV === "production",
}); */
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
  <!-- start scroll to top -->
  <a class="scroll-top-arrow" href="javascript:void(0);"
    ><i class="feather icon-feather-arrow-up"></i
  ></a>
  <!-- end scroll to top -->
</template>

<style scoped></style>
