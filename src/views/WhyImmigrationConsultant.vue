<script setup>
import { sanity, builder } from "@/sanity.js";
import { ref, onMounted } from "vue";

const query = `*[_type == "about-us"]{
  body,
  title,
  image
}`;


const aboutData = ref([]);

const getPageData = () => {
  sanity
    .fetch(query)
    .then((data) => {
      aboutData.value = data.find(item => item.title === 'Why Immigration Consultant');
      console.log('about data', aboutData.value)
    })
    .then((error) => {
      console.log(error);
    });
};

const urlFor = (source) => {
  if (source) {
    return builder.image(source);
  }
  return "";
};

onMounted(() => {
  getPageData();
});
</script>
<template>
  <section class="parallax family-header" data-parallax-background-ratio="0.5">
    <div class="opacity-extra-medium bg-extra-dark-gray"></div>
    <div class="container">
      <div class="row align-items-stretch justify-content-center small-screen">
        <div
          class="col-12 position-relative page-title-extra-small text-center d-flex align-items-center justify-content-center flex-column"
        >
          <h1 class="alt-font text-white opacity-6 margin-20px-bottom">
            About
          </h1>
          <h3
            class="text-white alt-font font-weight-500 w-55 md-w-65 sm-w-80 center-col xs-w-100 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom"
          >
            <!-- Why Immigration Consultant -->
            {{ aboutData?.title }}
          </h3>
        </div>
        <div class="down-section text-center">
          <a href="#about" class="section-link">
            <vue-feather
              type="arrow-down"
              stroke="#bf8c4c"
              size="24"
            ></vue-feather>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="blog-right-side-bar">
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-12 right-sidebar md-margin-60px-bottom sm-margin-40px-bottom"
        >
          <div class="row">
            <div class="col-12 blog-details-text last-paragraph-no-margin">
              <!-- <p> -->
                <!-- Canadian Immigration consultants are important because they
                provide valuable advice and assistance to those who are looking
                to immigrate to, and/or study, visit or work in Canada. They can
                help individuals and families understand the immigration
                process, provide guidance on the best options for their
                particular situation, and help them navigate the complex
                paperwork and regulations associated with immigration. They can
                also provide advice on how to best prepare for the immigration
                process, including helping to identify potential job
                opportunities and other resources. Additionally, they can
                provide assistance with the application process, including
                helping to ensure that all necessary documents are submitted
                correctly and on time. Finally, they can provide support and
                guidance throughout the entire process, from the initial
                application to the final decision. -->
                <!-- {{ aboutData?.body }} -->
              <!-- </p> -->

              <p v-for="body in aboutData.body" :key="aboutData._key">{{ body?.children[0].text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.family-header {
  background-image: url("../assets/images/main/consultation.jpg");
}
</style>
