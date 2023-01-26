<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

onMounted(() => {
  let jquery = document.createElement("script");
  let themeVendors = document.createElement("script");
  let mainjs = document.createElement("script");
  jquery.setAttribute("src", "@/assets/js/jquery.min.js");
  themeVendors.setAttribute("src", "W/assets/js/theme-vendors.min.js");
  mainjs.setAttribute("src", "@/assets/js/main.js");
  document.head.appendChild(jquery);
  document.head.appendChild(themeVendors);
  document.head.appendChild(mainjs);
});
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
