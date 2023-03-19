<script setup>
import { ref, onMounted } from "vue";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

const categories = ref([
  {
    id: 1,
    title: "Economy Class",
    description: "",
    collapsed: true,
  },
  {
    id: 2,
    title: "Family Class",
    description: "",
    collapsed: false,
  },
  {
    id: 3,
    title: "Refugee Class",
    description: "",
    collapsed: false,
  },
  {
    id: 4,
    title: "Temporary Residence Class",
    description: "",
    collapsed: false,
  },
]);

const consultingServices = ref([
  {
    id: 1,
    name: " Express Entry",
    description:
      "Federal Skilled Worker Program, Canadian Experience Class and Federal Skilled Trades Program",
    link: "/express-entry",
  },
  {
    id: 2,
    name: "Family Sponsorship",
    description:
      "Spousal Sponsorship, Parents and Grandparents, Dependent Children",
    link: "/family-class-sponsership",
  },
  {
    id: 3,
    name: "LMIA",
    description: "",
    link: "/lmia-work-permit",
  },
  {
    id: 4,
    name: "LMIA-exempt Work Permits",
    description: "",
    link: "/lmia-exempt",
  },
  {
    id: 5,
    name: "Provincial Nominee Programs",
    description: "",
    link: "/provincial-nominee-program",
  },
  {
    id: 6,
    name: "Atlantic Immigration Program",
    description: "",
    link: "/atlantic-immigration-pilot",
  },
  {
    id: 7,
    name: "Rural and Northern Immigration  Pilot",
    description: "",
    link: "/rural-and-northern-immigration-pilot",
  },
  {
    id: 8,
    name: "Private Sponsorship of Refugees",
    description: "Group Five Sponsorship",
    link: "/",
  },
  {
    id: 9,
    name: "Work Permit Applications",
    description: "",
    link: "/",
  },
  {
    id: 10,
    name: "Study Permit Applications",
    description: "",
    link: "/study-permit",
  },
  {
    id: 11,
    name: "Visitor Visa Applications",
    description: "",
    link: "/",
  },
  {
    id: 12,
    name: "Canadian Citizenship",
    description: "",
    link: "/",
  },
  {
    id: 13,
    name: "Permanent Resident",
    description: "",
    link: "/",
  },
]);

const openCollapse = (index) => {
  categories.value = categories.value.map((category) => ({
    ...category,
    collapsed: false,
  }));
  categories.value[index].collapsed = true;
};

onMounted(() => {
  new Swiper(".swiper-container", {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 26,
    navigation: {
      nextEl: ".swiper-button-next-nav",
      prevEl: ".swiper-button-previous-nav",
    },
    autoplay: { delay: 3000, disableOnInteraction: false },
    keyboard: { enabled: true, onlyInViewport: true },
    breakpoints: {
      1200: { slidesPerView: 5 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
    },
    effect: "slide",
  });
});
</script>

<template>
  <section class="p-0 cover-background overlap-height hero-image">
    <div class="opacity-very-light bg-dark-slate-blue"></div>
    <div class="container position-relative">
      <div class="row full-screen md-h-800px sm-h-500px">
        <div
          class="col-12 col-xl-6 col-lg-6 col-md-7 col-sm-10 d-flex flex-column justify-content-center"
        >
          <h2
            class="alt-font text-white line-height-65px font-weight-500 letter-spacing-minus-1px margin-65px-bottom sm-line-height-50px sm-margin-25px-bottom"
          >
            We provide services related to different categories of Canadian
            Immigration
          </h2>
          <div
            class="alt-font text-medium font-weight-500 text-uppercase letter-spacing-2px d-flex"
          >
            <span
              class="w-40px h-1px bg-tussock align-self-center margin-25px-right"
            ></span
            ><span class="text-tussock">Solution for your business</span>
          </div>

          <img
            src="../assets/images/main/client.jpeg"
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
            Book a free appointment for your dream of living in
            <span class="font-weight-600">Canadian Permanently</span>
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
  <section class="home-consulting big-section cover-background">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div
          class="col-12 col-lg-6 col-md-10 md-margin-5-rem-bottom wow animate__fadeIn"
        >
          <h4
            class="alt-font font-weight-500 text-extra-dark-gray letter-spacing-minus-1px margin-4-rem-bottom w-80 lg-w-90 md-margin-3-rem-bottom xs-margin-4-rem-bottom xs-w-100"
          >
            Moses Canadian Immigration Consulting Services
            <span
              class="text-tussock text-decoration-line-bottom-thick font-weight-600"
              >(MCICS)</span
            >
          </h4>
          <p class="w-70 margin-40px-bottom lg-w-90 md-margin-25px-bottom">
            MCICS is a CICC registered Canadian immigration consulting firm
            based in Winnipeg, Manitoba, Canada. It is run by a Regulated
            Canadian Immigration Consultant (RCIC), registered and licensed
            member of the College of Immigration and Citizenship Consultants
            (CICC) in good standing. Through MCICS clients are best served in
            various matters of Canadian immigration.
          </p>

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
            <img
              class="w-100"
              src="../assets/images/main/passport.jpg"
              alt=""
            />
            <a
              href="https://www.youtube.com/watch?v=g0f_BRYJLJE"
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
  <section class="p-0">
    <div class="container-fluid padding-eight-lr lg-padding-15px-lr">
      <div
        class="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center"
      >
        <!-- start team member -->
        <!--        <div-->
        <!--          class="col team-style-01 text-center md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn"-->
        <!--          data-wow-delay="0.4s"-->
        <!--        >-->
        <!--          <figure>-->
        <!--            <div class="team-member-image">-->
        <!--              <img-->
        <!--                alt="About team 17"-->
        <!--                src="https://via.placeholder.com/375x460"-->
        <!--              />-->
        <!--              <div-->
        <!--                class="team-overlay bg-transparent-gradient-tussock-greenish-slate"-->
        <!--              ></div>-->
        <!--            </div>-->
        <!--            <figcaption-->
        <!--              class="align-items-center justify-content-center d-flex flex-column padding-20px-lr padding-30px-tb"-->
        <!--            >-->
        <!--              <span class="team-title d-block alt-font text-white"-->
        <!--                >Bryan Jonhson</span-->
        <!--              >-->
        <!--              <span-->
        <!--                class="team-sub-title text-small d-block text-white-transparent text-uppercase"-->
        <!--                >Specialist consultant</span-->
        <!--              >-->
        <!--              <div-->
        <!--                class="social-icon w-100 position-absolute bottom-30px left-0px"-->
        <!--              >-->
        <!--                <a-->
        <!--                  href="https://www.facebook.com/"-->
        <!--                  target="_blank"-->
        <!--                  class="text-white"-->
        <!--                  ><i aria-hidden="true" class="fab fa-facebook-f"></i-->
        <!--                ></a>-->
        <!--                <a-->
        <!--                  href="https://www.instagram.com"-->
        <!--                  target="_blank"-->
        <!--                  class="text-white"-->
        <!--                  ><i aria-hidden="true" class="fab fa-instagram"></i-->
        <!--                ></a>-->
        <!--                <a-->
        <!--                  href="https://twitter.com/"-->
        <!--                  target="_blank"-->
        <!--                  class="text-white"-->
        <!--                  ><i aria-hidden="true" class="fab fa-twitter"></i-->
        <!--                ></a>-->
        <!--              </div>-->
        <!--            </figcaption>-->
        <!--          </figure>-->
        <!--        </div>-->
        <!-- end team member -->
        <!-- start team member -->
        <!--        <div-->
        <!--          class="col team-style-01 text-center xs-margin-15px-bottom wow animate__fadeIn"-->
        <!--          data-wow-delay="0.6s"-->
        <!--        >-->
        <!--          <figure>-->
        <!--            <div class="team-member-image">-->
        <!--              <img-->
        <!--                alt="About team 18"-->
        <!--                src="https://via.placeholder.com/375x460"-->
        <!--              />-->
        <!--              <div-->
        <!--                class="team-overlay bg-transparent-gradient-tussock-greenish-slate"-->
        <!--              ></div>-->
        <!--            </div>-->
        <!--            <figcaption-->
        <!--              class="align-items-center justify-content-center d-flex flex-column padding-20px-lr padding-30px-tb"-->
        <!--            >-->
        <!--              <span class="team-title d-block alt-font text-white"-->
        <!--                >Jemmy Watson</span-->
        <!--              >-->
        <!--              <span-->
        <!--                class="team-sub-title text-small d-block text-white-transparent text-uppercase"-->
        <!--                >Financial consultant</span-->
        <!--              >-->
        <!--              <div-->
        <!--                class="social-icon w-100 position-absolute bottom-30px left-0px"-->
        <!--              >-->
        <!--                <a-->
        <!--                  href="https://www.facebook.com/"-->
        <!--                  target="_blank"-->
        <!--                  class="text-white"-->
        <!--                  ><i aria-hidden="true" class="fab fa-facebook-f"></i-->
        <!--                ></a>-->
        <!--                <a-->
        <!--                  href="https://www.instagram.com"-->
        <!--                  target="_blank"-->
        <!--                  class="text-white"-->
        <!--                  ><i aria-hidden="true" class="fab fa-instagram"></i-->
        <!--                ></a>-->
        <!--                <a-->
        <!--                  href="https://twitter.com/"-->
        <!--                  target="_blank"-->
        <!--                  class="text-white"-->
        <!--                  ><i aria-hidden="true" class="fab fa-twitter"></i-->
        <!--                ></a>-->
        <!--              </div>-->
        <!--            </figcaption>-->
        <!--          </figure>-->
        <!--        </div>-->
        <!-- end team member -->
        <!-- start team member -->
        <!--        <div-->
        <!--          class="col team-style-01 text-center wow animate__fadeIn"-->
        <!--          data-wow-delay="0.8s"-->
        <!--        >-->
        <!--          <figure>-->
        <!--            <div class="team-member-image">-->
        <!--              <img-->
        <!--                alt="About team 19"-->
        <!--                src="https://via.placeholder.com/375x460"-->
        <!--              />-->
        <!--              <div-->
        <!--                class="team-overlay bg-transparent-gradient-tussock-greenish-slate"-->
        <!--              ></div>-->
        <!--            </div>-->
        <!--            <figcaption-->
        <!--              class="align-items-center justify-content-center d-flex flex-column padding-20px-lr padding-30px-tb"-->
        <!--            >-->
        <!--              <span class="team-title d-block alt-font text-white"-->
        <!--                >Jeremy Dupont</span-->
        <!--              >-->
        <!--              <span-->
        <!--                class="team-sub-title text-small d-block text-white-transparent text-uppercase"-->
        <!--                >Business consultant</span-->
        <!--              >-->
        <!--              <div-->
        <!--                class="social-icon w-100 position-absolute bottom-30px left-0px"-->
        <!--              >-->
        <!--                <a-->
        <!--                  href="https://www.facebook.com/"-->
        <!--                  target="_blank"-->
        <!--                  class="text-white"-->
        <!--                  ><i aria-hidden="true" class="fab fa-facebook-f"></i-->
        <!--                ></a>-->
        <!--                <a-->
        <!--                  href="https://www.instagram.com"-->
        <!--                  target="_blank"-->
        <!--                  class="text-white"-->
        <!--                  ><i aria-hidden="true" class="fab fa-instagram"></i-->
        <!--                ></a>-->
        <!--                <a-->
        <!--                  href="https://twitter.com/"-->
        <!--                  target="_blank"-->
        <!--                  class="text-white"-->
        <!--                  ><i aria-hidden="true" class="fab fa-twitter"></i-->
        <!--                ></a>-->
        <!--              </div>-->
        <!--            </figcaption>-->
        <!--          </figure>-->
        <!--        </div>-->
        <!-- end team member -->
      </div>
    </div>
  </section>

  <section class="parallax big-section" data-parallax-background-ratio="0.2">
    <div class="opacity-full bg-gradient-tussock-greenish-slate"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-12 col-xl-7 col-lg-8 col-sm-10 position-relative text-center overlap-gap-section wow animate__fadeIn"
          data-wow-delay="0.2s"
        >
          <a
            href="https://www.youtube.com/watch?v=vWPkPdbAPuM"
            class="popup-youtube video-icon-box video-icon-large position-relative d-inline-block margin-3-half-rem-bottom"
          >
            <span>
              <span class="video-icon bg-white">
                <vue-feather type="play" size="24"></vue-feather>
                <span class="video-icon-sonar"
                  ><span class="video-icon-sonar-afr bg-white"></span
                ></span>
              </span>
            </span>
          </a>
          <h4
            class="alt-font text-white font-weight-600 margin-45px-bottom sm-margin-25px-bottom"
          >
            Get inspired by ideas and insights to help you get business
          </h4>
          <span class="text-white alt-font text-uppercase letter-spacing-2px"
            >Unlimited power and customization</span
          >
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white py-lg-0">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-12 col-xl-6 col-lg-6 col-md-10 padding-6-rem-tb lg-padding-5-rem-tb lg-padding-2-half-rem-right md-padding-15px-right md-no-padding-tb md-margin-5-rem-bottom"
        >
          <h5
            class="alt-font font-weight-500 text-extra-dark-gray letter-spacing-minus-1px margin-4-half-rem-bottom w-75 md-margin-4-rem-bottom lg-margin-2-half-rem-bottom md-w-100 wow animate__fadeIn"
          >
            We provide different categories of canadian imigration
          </h5>
          <div
            class="panel-group accordion-event accordion-style-03 margin-4-rem-bottom lg-margin-2-rem-bottom"
            id="accordion2"
            data-active-icon="fa-angle-down"
            data-inactive-icon="fa-angle-right"
          >
            <!-- start accordion item -->
            <div
              v-for="(cat, index) in categories"
              :key="cat.id"
              class="panel bg-white box-shadow-small border-radius-5px wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div class="panel-heading active-accordion">
                <a
                  class="accordion-toggle"
                  :class="{ collapsed: cat.collapsed }"
                  data-bs-toggle="collapse"
                  :data-bs-parent="`#accordion${cat.id}`"
                  href="#collapseFive"
                  aria-expanded="false"
                  @click="openCollapse(index)"
                >
                  <div class="panel-title">
                    <span
                      class="alt-font text-extra-dark-gray d-inline-block font-weight-500"
                    >
                      {{ cat.title }}</span
                    >
                    <!-- <vue-feather
                      type="arrow-down"
                      stroke="#bf8c4c"
                      size="20"
                    ></vue-feather> -->
                  </div>
                </a>
              </div>
              <!-- 
              <div
                id="collapseFive"
                class="panel-collapse collapse"
                :class="{ show: cat.collapsed }"
                :data-bs-parent="`#accordion${cat.id}`"
              >
                <div class="panel-body">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry lorem ipsum has been.
                </div>
              </div> -->
            </div>
            <!-- end accordion item -->
          </div>
          <p class="m-0 wow animate__fadeIn" data-wow-delay="0.8s">
            Looking for more information?
            <router-link
              to="/immigration-categories"
              class="text-extra-dark-gray text-tussock-hover font-weight-500 text-decoration-line-bottom"
              >Click here</router-link
            >
          </p>
        </div>
        <div
          class="col-12 col-xl-6 col-lg-6 col-md-10 wow animate__fadeInRight"
        >
          <div class="outside-box-right position-relative">
            <img
              src="../assets/images/main/city-2.jpg"
              class="overflow-hidden"
              alt=""
              style="width: 100%; height: 900px; object-fit: cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-seashell wow animate__fadeIn">
    <div class="container-fluid">
      <div
        class="row align-items-stretch justify-content-center extra-small-screen"
      >
        <div
          class="col-12 col-xl-6 col-lg-7 col-md-8 page-title-extra-small text-center d-flex justify-content-center flex-column"
        >
          <h5
            class="text-extra-dark-gray alt-font font-weight-500 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom"
          >
            MCICS provides consulting services in several areas of Canadian
            immigration such as applications through the following streams:
          </h5>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 padding-8-half-rem-lr xl-padding-five-lr lg-padding-two-lr sm-padding-15px-lr"
        >
          <div
            class="swiper-container overflow-hidden portfolio-classic position-relative swiper-pagination-bottom"
          >
            <div class="swiper-wrapper">
              <!-- start slider item -->
              <div
                v-for="cat in consultingServices"
                :key="cat.id"
                class="swiper-slide overflow-hidden"
              >
                <div class="portfolio-box text-center">
                  <router-link
                    class="portfolio-caption padding-1-rem-all bg-white box-shadow-small box-shadow-extra-large-hover border-radius-6px text-center margin-15px-bottom"
                    style="
                      min-height: 180px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                    "
                    :to="cat.link"
                  >
                    <h5
                      class="alt-font text-extra-dark-gray font-weight-500 text-uppercase text-medium"
                    >
                      {{ cat.name }}
                    </h5>
                    <span
                      class="d-block text-medium-gray text-small line-height-18px text-uppercase"
                      >{{ cat.description }}</span
                    >
                  </router-link>
                </div>
              </div>
              <!-- end slider item -->
              <!-- end slider item -->
            </div>
            <!-- start slider navigation -->
            <div
              class="swiper-button-previous-nav swiper-button-prev slider-navigation-style-03 rounded-circle center-prev"
              style="width: 44px"
            >
              <vue-feather type="arrow-left" size="16"></vue-feather>
            </div>
            <div
              class="swiper-button-next-nav swiper-button-next slider-navigation-style-03 rounded-circle center-next"
              style="width: 44px"
            >
              <vue-feather type="arrow-right" size="16"></vue-feather>
            </div>
            <!-- end slider navigation -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- start section -->
  <section class="bg-white">
    <div class="container">
      <div class="row justify-content-center">
        <div
          class="col-12 col-lg-7 col-sm-8 text-center margin-6-rem-bottom md-margin-3-rem-bottom wow animate__fadeIn"
        >
          <span class="d-block margin-15px-bottom">
            <vue-feather type="users" stroke="#bf8c4c" size="40"></vue-feather>
          </span>
          <div
            class="alt-font title-large text-gradient-tussock-greenish-slate font-weight-700 text-uppercase letter-spacing-minus-7px xl-letter-spacing-minus-4px"
          >
            Teamwork
          </div>
          <span
            class="d-inline-block alt-font text-extra-dark-gray text-large text-uppercase font-weight-500 letter-spacing-1px margin-20px-bottom margin-10px-top"
            >was more accepted 40 years ago</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero-image {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(../assets/images/main/flag.jpg) no-repeat;
}

.home-consulting {
  background-image: url(../assets/images/home-consulting-about-bg.jpg);
}
</style>
