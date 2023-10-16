<template>
  <section class="home-consulting big-section cover-background">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div
          class="col-12 col-lg-6 col-md-10 md-margin-5-rem-bottom wow animate__fadeIn"
        >
          <h4
            class="alt-font font-weight-500 text-extra-dark-gray letter-spacing-minus-1px margin-4-rem-bottom w-80 lg-w-90 md-margin-3-rem-bottom xs-margin-4-rem-bottom xs-w-100"
          >
            {{ content.title.replace('(MCICS)', '') }}
            <span
              class="text-tussock text-decoration-line-bottom-thick font-weight-600"
              >(MCICS)</span
            >
          </h4>
          <template v-for="body in content.body" :key="body._key">
            <p
              v-for="item in body.children"
              :key="item._key"
              class="w-70 margin-40px-bottom lg-w-90 md-margin-25px-bottom"
            >
              {{ item.text }}
            </p>
          </template>

          <div class="margin-40px-top d-inline-block md-margin-25px-top">
            <router-link
              to="/about-us"
              class="btn btn-fancy btn-small btn-dark-gray margin-35px-right xs-margin-10px-bottom"
              >Read more</router-link
            >
          </div>
        </div>
        <div
          class="col-12 col-lg-5 offset-lg-1 col-md-10 wow animate__fadeIn"
          data-wow-delay="0.2s"
        >
          <div class="position-relative">
            <div class="opacity-very-light bg-dark-slate-blue"></div>
            <img class="w-100" :src="urlFor(content?.image)" alt="" />
            <a
              :href="content.externalLink"
              class="popup-youtube absolute-middle-center video-icon-box video-icon-double-large left-0px"
            >
              <span>
                <span class="video-icon bg-white box-shadow-large">
                  <vue-feather
                    type="play"
                    stroke="#bf8c4c"
                    size="40"
                  ></vue-feather>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { urlFor } from "@/helpers/sanity-helpers.js";
defineProps({
  content: {
    type: Object,
    default: () => {},
  },
});
</script>
