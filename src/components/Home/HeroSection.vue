<template>
  <section
    class="p-0 cover-background overlap-height hero-image"
    :style="{ background: backgroundStyle }"
  >
    <div class="opacity-very-light bg-dark-slate-blue"></div>
    <div class="container position-relative">
      <div class="row full-screen md-h-800px sm-h-500px">
        <div
          class="col-12 col-xl-6 col-lg-6 col-md-7 col-sm-10 d-flex flex-column justify-content-center"
        >
          <h2
            class="alt-font text-white line-height-65px font-weight-500 letter-spacing-minus-1px margin-65px-bottom sm-line-height-50px sm-margin-25px-bottom"
          >
            {{ content.title }}
          </h2>
          <div
            class="alt-font text-medium font-weight-500 text-uppercase letter-spacing-2px d-flex"
          >
            <span
              class="w-40px h-1px bg-tussock align-self-center margin-25px-right"
            ></span
            ><span class="text-tussock">{{ content.subtitle }}</span>
          </div>

          <img
            src="../../assets/images/main/client.jpeg"
            alt=""
            style="margin-top: 20px"
          />
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-row justify-content-end ms-auto w-700px position-absolute right-0px bottom-0px z-index-1 sm-position-relative sm-w-100"
    >
      <div class="row align-items-center justify-content-end mx-0 w-100">
        <div
          class="col-12 col-sm-9 align-items-center d-flex bg-tussock h-100 padding-3-rem-tb padding-5-rem-lr xs-padding-3-rem-lr"
        >
          <h5 class="alt-font text-white font-weight-300 m-0">
            {{ content.description.replace('Canada Permanently', '') }}
            <span class="font-weight-600">Canada Permanently</span>
          </h5>
        </div>
        <div class="col-3 p-0 h-100 d-none d-xl-inline-block">
          <RouterLink
            to="/free-assessment-form"
            class="text-center align-items-center d-flex justify-content-center bg-seashell h-100"
          >
            <vue-feather
              type="arrow-right"
              stroke="#bf8c4c"
              size="40"
            ></vue-feather>
          </RouterLink>
          <!--          <a-->
          <!--            href="contact-us-classic.html"-->
          <!--            class="text-center align-items-center d-flex justify-content-center bg-seashell h-100"-->
          <!--          >-->
          <!--            <vue-feather-->
          <!--              type="arrow-right"-->
          <!--              stroke="#bf8c4c"-->
          <!--              size="40"-->
          <!--            ></vue-feather>-->
          <!--          </a>-->
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed } from "vue";
import { urlFor } from "../../helpers/sanity-helpers";
const props = defineProps({
  content: {
    type: Object,
    default: () => {},
  },
});

const backgroundStyle = computed(
  () =>
    `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${urlFor(
      props.content.backimage
    )}) no-repeat`
);
</script>
