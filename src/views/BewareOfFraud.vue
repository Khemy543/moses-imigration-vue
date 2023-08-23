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
      aboutData.value = data.find(item => item.title === 'Beware of Fraud');
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
            <!-- Beware Of Fraud -->
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
            <div
              class="col-12 blog-details-text last-paragraph-no-margin"
              style="font-size: 17px;"
            >
              <!-- <p>
                Immigration fraud is a serious crime that can have serious
                consequences for those who are victims of it. It is important to
                be aware of the potential for fraud when dealing with
                immigration matters.
              </p>
              <p>
                Immigration fraud can take many forms, including false or forged
                documents, misrepresentation of facts, false promises, and
                bribery. It is important to be aware of the potential for fraud
                when dealing with immigration matters. When dealing with
                immigration matters, it is important to be aware of the
                potential for fraud. Be sure to research any immigration service
                provider you are considering using, and make sure they are
                legitimate and trustworthy. Be sure to ask questions and get all
                the information you need before signing any documents or making
                any payments. It is also important to be aware of the potential
                for scams. Be wary of anyone who promises quick and easy
                solutions to immigration problems, or who asks for money
                upfront. Be sure to research any immigration service provider
                you are considering using, and make sure they are legitimate and
                trustworthy.
              </p> -->

              {{ aboutData?.body }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.family-header {
  background-image: url("../assets/images/main/imigrationfraud.jpg");
}
</style>