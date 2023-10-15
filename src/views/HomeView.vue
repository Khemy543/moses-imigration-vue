<script setup>
import { sanity } from "@/sanity.js";
import { ref, onMounted, computed } from "vue";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

//components
import HeroSection from "../components/Home/HeroSection.vue";
import HomeAboutSection from "../components/Home/HomeAboutSection.vue";
import HomeImmigrationCategories from "../components/Home/HomeImmigrationCategories.vue";

const allComponents = {
  HeroSection,
  HomeAboutSection,
  HomeImmigrationCategories,
};

const query = `*[_type == "home"]{
  myId,
  body,
  title,
  image,
  description,
  subtitle,
  backimage,
  component,
  externalLink,
  list
}`;

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

const homePageData = ref([]);

const getPageData = () => {
  sanity
    .fetch(query)
    .then((data) => {
      homePageData.value = data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const pageData = computed(() =>
  homePageData.value.sort((a, b) => Number(a.myId) - Number(b.myId))
);

onMounted(() => {
  getPageData();
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
  <template v-for="item in pageData" :key="item.myId">
    <component :is="allComponents[item.component]" :content="item" />
  </template>
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
</template>
<style scoped>
.home-consulting {
  background-image: url(../assets/images/home-consulting-about-bg.jpg);
}
</style>
