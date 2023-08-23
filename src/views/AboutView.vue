<script setup>
import { sanity, builder } from "@/sanity.js";
import { ref, onMounted } from "vue";

const query = `*[_type == "about-us"]{
  body,
  title,
  image
}`;


const aboutData = ref([]);
const mcics = ref([])
const rcicBackgournd = ref([])
const whoIsRcis = ref([])

const getPageData = () => {
  sanity
    .fetch(query)
    .then((data) => {
      aboutData.value = data;
      mcics.value = aboutData.value.find(item => item.title === 'MCICS')
      rcicBackgournd.value = aboutData.value.find(item => item.title === 'Background on the RCIC')
      whoIsRcis.value = aboutData.value.find(item => item.title === 'Who is RCIC?')
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
  <section class="parallax about-header" data-parallax-background-ratio="0.5">
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
            Moses Canadian Immigration Consulting Services (MCICS)
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
  <section id="about" class="">
    <div class="container">
      <p>
        <!-- MCICS is a CICC registered Canadian immigration consulting firm based in
        Winnipeg, Manitoba, Canada. It is run by a Regulated Canadian
        Immigration Consultant (RCIC), registered and licensed member of the
        College of Immigration and Citizenship Consultants (CICC) in good
        standing. Through MCICS clients are best served in various matters of
        Canadian immigration. MCICS provides impartial and fair services to all
        its clients who are based both in Canada and outside of Canada. As of
        now, MCICS does not charge money for the first hour (initial
        consultation) of professional assessment services. MCICS’s top objective
        is the satisfaction and success of its clients.
        <br />
        <br />
        Mussie Tesfagiorgis is the owner and managing director of MCICS, and he
        is a member in good standing of CICC (The College of Immigration and
        Citizenship Consultants) – a regulatory authority which regulates all
        the immigration consultants. -->
          {{ mcics?.body }}
      </p>
    </div>
  </section>
  <!-- end section -->

  <section class="bg-light-gray wow animate__fadeIn">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 col-sm-8">
          <h5 class="alt-font text-extra-dark-gray font-weight-500">
            Regulated Canadian Immigration Consultant
          </h5>
        </div>
        <div class="col-12 col-lg-6 col-sm-8">
          <img src="../assets/images/main/client.jpeg" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- start section -->
  <section class="wow animate__fadeIn">
    <div class="container">
      <h5 class="alt-font text-extra-dark-gray font-weight-500">
            {{ rcicBackgournd?.title }}
      </h5>

      <p>
        <!-- Prior to becoming RCIC, Mussie Tesfagiorgis, served as an academic and
        professional in various fields and has widely published monographs and
        academic articles on various subjects. He has a Ph.D. (Doctor of
        Philosophy) and worked as a professor for over ten years and taught
        various courses including on the subject of “Immigration and the
        Inner-City”. He also worked as an academic external expert and
        researcher on matters of immigration and integration for several
        countries and agencies in the course of the last 15 years. As an RCIC,
        he is a highly dedicated consultant who prioritizes the utmost
        satisfaction and success of his clients. -->
        {{ rcicBackgournd?.body }}
      </p>
    </div>
  </section>
  <!-- end section -->

  <!-- start section -->
  <section class="p-0 bg-extra-dark-gray wow animate__fadeIn">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-12 col-lg-6 cover-background md-h-550px sm-h-400px xs-h-300px wow animate__fadeInLeft"
          data-wow-delay="0.2s"
          style="
            background-image: url('https://via.placeholder.com/1021x682');
            height: auto;
          "
        ></div>
        <div
          class="col-12 col-lg-6 padding-8-half-rem-tb padding-10-half-rem-lr xl-padding-7-half-rem-all lg-padding-4-half-rem-all md-padding-5-half-rem-all xs-padding-5-rem-lr wow animate__fadeIn"
          data-wow-delay="0.6s"
        >
          <h4
            class="alt-font font-weight-600 text-white letter-spacing-minus-1px w-65 margin-2-half-rem-bottom xl-w-100"
          >
            {{ whoIsRcis?.title }}
          </h4>
          <p class="w-60 xl-w-100" style="color: white">
            <!-- Lorem ipsum dolor sit amet consectetur adipiscing elitdo eiusmod
            tempor incididunt ut labore dolore magna utenim minim veniam nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. -->

              {{ whoIsRcis?.body}}
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- end section -->

  <!-- start section -->
  <section class="wow animate__fadeIn">
    <div class="container">
      <div
        class="bg-medium-light-gray margin-6-rem-bottom margin-3-rem-top w-100 h-1px"
      ></div>
      <div class="row align-items-center justify-content-center">
        <div
          class="col-12 col-xl-7 col-md-8 col-sm-10 text-center text-md-start sm-margin-30px-bottom wow animate__fadeIn"
          data-wow-delay="0.1s"
        >
          <h6
            class="alt-font text-extra-dark-gray font-weight-500 mb-0 md-w-90 sm-w-100"
          >
            Book a free appointment for
            <strong class="text-decoration-underline">Canadian Dream</strong>
          </h6>
        </div>
        <div
          class="col-12 col-xl-5 col-md-4 text-center text-md-end wow animate__fadeIn"
          data-wow-delay="0.2s"
        >
          <a
            href="contact-us-classic.html"
            class="btn btn-large btn-round-edge btn-transparent-fast-blue btn-slide-right-bg"
            >Book now<span class="bg-fast-blue"></span
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.about-header {
  background-image: url(../assets/images/main/flag.jpg);
}
</style>
