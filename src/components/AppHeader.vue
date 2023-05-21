<script setup lang="ts">
import { ref, onMounted } from "vue";

onMounted(() => {
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    var scrollPas = window.scrollY;
    var navHeight = 109;
    var minHeaderHeight = 49;
    var headerHeight = navHeight + minHeaderHeight;
    var lastScroll = 0;
    var st = scrollPas;

    if (!header.classList.contains("no-sticky")) {
      if (scrollPas >= headerHeight) {
        document.querySelector(".header-with-topbar").classList.add("sticky");
        document
          .querySelector(".header-with-topbar .top-bar")
          .classList.remove("top-0");
        document
          .querySelector(".header-with-topbar .top-bar")
          .classList.remove("top--49");
        document
          .querySelector(".header-with-topbar .top-bar")
          .classList.remove("top-49");

        document
          .querySelector(".header-with-topbar .fixed-top")
          .classList.remove("top-0");
        document
          .querySelector(".header-with-topbar .fixed-top")
          .classList.remove("top--49");
        document
          .querySelector(".header-with-topbar .fixed-top")
          .classList.remove("top-49");

        document
          .querySelector(".header-with-topbar .top-bar")
          .classList.add("top--49");
        document
          .querySelector(".header-with-topbar .fixed-top")
          .classList.add("top-0");
      } else if (scrollPas <= headerHeight) {
        document
          .querySelector(".header-with-topbar .top-bar")
          .classList.remove("top-0");
        document
          .querySelector(".header-with-topbar .top-bar")
          .classList.remove("top--49");
        document
          .querySelector(".header-with-topbar .top-bar")
          .classList.remove("top-49");

        document
          .querySelector(".header-with-topbar .fixed-top")
          .classList.remove("top-0");
        document
          .querySelector(".header-with-topbar .fixed-top")
          .classList.remove("top--49");
        document
          .querySelector(".header-with-topbar .fixed-top")
          .classList.remove("top-49");
        document
          .querySelector(".header-with-topbar .top-bar")
          .classList.add("top-0");
        document
          .querySelector(".header-with-topbar .fixed-top")
          .classList.add("top-49");
      }
    }

    if (st > lastScroll) {
      st = st - 1;
      document
        .querySelector(".header-with-topbar")
        .classList.remove("header-appear");
    } else {
      document
        .querySelector(".header-with-topbar")
        .classList.add("header-appear");
    }

    if (lastScroll <= navHeight) {
      document
        .querySelector(".header-with-topbar")
        .classList.remove("header-appear");
    }

    if (scrollPas <= 0) {
      document.querySelector(".header-with-topbar").classList.remove("sticky");
    }
  });
});

const megaLinks = ref([
  {
    id: 1,
    name: "Home",
    link: "/",
    submenu: [],
  },
  {
    id: 2,
    name: "About Us",
    link: "/about-us",
    show: false,
    submenu: [
      {
        id: 1,
        name: "Why immigration consultant",
        link: "/why-immigration-consultant",
      },
      {
        id: 3,
        name: "Google Reviews",
        link: "/google-reviews",
      },
      {
        id: 5,
        name: "Privacy policy",
        link: "/privacy-policy",
      },
      {
        id: 6,
        name: "Beware of fraud",
        link: "/beware-of-fraud",
      },
    ],
  },
  {
    id: 3,
    name: "Immigration Categories",
    link: "/immigration-categories",
    show: false,
    submenu: [
      // {
      //   id: 2,
      //   name: "Economy Class",
      //   link: "/economy-class",
      // },
      // {
      //   id: 3,
      //   name: "Refugee Class",
      //   link: "/refugee-class",
      // },
      // {
      //   id: 4,
      //   name: "Temporary Residence Class",
      //   link: "/temporary-residence-class",
      // },
    ],
  },
  {
    id: 3,
    name: "Sponsorship",
    link: "/sponsorship",
    show: false,
    submenu: [
      {
        id: 1,
        name: "Family Class",
        link: "/family-class-sponsorship",
      },
      {
        id: 2,
        name: "Refugee Class",
        link: "/refugee-class",
      },
    ],
  },
  {
    id: 3,
    name: "Economy Class",
    link: "/economy-class",
    show: false,
    submenu: [
      {
        id: 1,
        name: "Express Entry",
        link: "/express-entry",
      },
      {
        id: 2,
        name: "Atlantic Immigration Pilot",
        link: "/atlantic-immigration-pilot",
      },
      {
        id: 3,
        name: "Provincial Nominee Program",
        link: "/provincial-nominee-program",
      },
      {
        id: 4,
        name: "Rural & Northern Immigration Pilot",
        link: "/rural-and-northern-immigration-pilot",
      },
    ],
  },
  {
    id: 3,
    name: "Permit",
    link: "/permit",
    show: false,
    submenu: [
      {
        id: 1,
        name: "Study Permit",
        link: "/study-permit",
      },
      {
        id: 2,
        name: "Open Work Permit",
        link: "/open-work-permit",
      },
      {
        id: 3,
        name: "Work Permit (LMIA)",
        link: "/lmia-work-permit",
      },
      {
        id: 4,
        name: "LMIA Exempt",
        link: "/lmia-exempt",
      },
      {
        id: 5,
        name: "LMIA Global Talent Stream",
        link: "/lmia-global-talent-stream",
      },
    ],
  },
  {
    id: 8,
    name: "Free Assessment Form",
    link: "/free-assessment-form",
    submenu: [],
  },
  {
    id: 9,
    name: "Contact",
    link: "/contact",
    submenu: [],
  },
]);

const mouseover = (index) => {
  if (megaLinks.value[index].submenu.length > 0) {
    megaLinks.value[index].show = true;
  }
};

const mouseleave = (index) => {
  megaLinks.value[index].show = false;
};
</script>

<template>
  <header class="header-with-topbar" id="header">
    <div
      class="navbar top-bar bg-white border-bottom border-color-black-transparent navbar-boxed d-none d-md-inline-block"
    >
      <div class="container-fluid nav-header-container">
        <div
          class="col-12 text-center text-sm-start col-sm-auto me-auto ps-lg-0"
        >
          <p class="text-medium m-0" style="font-size: 14px;">
            Looking for more info, and would like to contact us?
            <RouterLink to="/free-assessment-form" class="navbar-brand"
              ><b
                class="text-extra-dark-gray text-tussock-hover font-weight-500 text-decoration-underline"
                >Click here</b
              ></RouterLink
            >
          </p>
        </div>
        <div class="col-auto d-none d-sm-block text-end px-lg-0 font-size-0">
          <div class="top-bar-contact">
            <span class="top-bar-contact-list">
              <vue-feather type="phone-call" size="16"></vue-feather>
              mosesimmigration@gmail.com
            </span>
            <span
              class="top-bar-contact-list d-none d-md-inline-block no-border-right pe-0"
            >
              <vue-feather type="map-pin" size="16"></vue-feather>
              532 Sargent Ave., Winnipeg, Manitoba, R3B 1W2
            </span>
          </div>
        </div>
      </div>
    </div>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-transparent border-bottom border-color-white-transparent header-light fixed-top navbar-boxed header-reverse-scroll"
    >
      <div class="container-fluid nav-header-container">
        <div class="col-6 col-lg-2 me-auto ps-lg-0">
          <RouterLink to="/" class="navbar-brand">
            <img
              src="../assets/images/main/logo.png"
              data-at2x="images/main/logo.png"
              class="default-logo"
              alt=""
              style="max-height: 100px; background-color: white;"
            />
            <!--  <img
              src="../assets/images/main/logo.png"
              data-at2x="images/main/logo.png"
              class="alt-logo"
              alt=""
            />
            <img
              src="../assets/images/main/logo.png"
              data-at2x="images/main/logo.png"
              class="mobile-logo"
              alt=""
            /> -->
          </RouterLink>
        </div>
        <div class="col-auto menu-order px-lg-0">
          <button
            class="navbar-toggler float-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-line"></span>
            <span class="navbar-toggler-line"></span>
            <span class="navbar-toggler-line"></span>
            <span class="navbar-toggler-line"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav alt-font">
              <li
                v-for="(menu, index) in megaLinks"
                :key="menu.id"
                class="nav-item dropdown simple-dropdown"
                :class="{ open: menu.show }"
                @mouseover="mouseover(index)"
                @mouseleave="mouseleave(index)"
              >
                <RouterLink :to="menu.link" class="nav-link">{{
                  menu.name
                }}</RouterLink>
                <i
                  class="fa fa-angle-down dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-hidden="true"
                ></i>
                <ul class="dropdown-menu" role="menu">
                  <li
                    v-for="sub in menu.submenu"
                    :key="`menu-${menu.id}-${sub.id}`"
                    class="dropdown"
                  >
                    <RouterLink :to="sub.link">{{ sub.name }}</RouterLink>
                  </li>
                </ul>
              </li>
              <!-- <li class="nav-item dropdown simple-dropdown">
                                <a href="#" class="nav-link">Canadian Immigration Categories</a>
                                <i class="fa fa-angle-down dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-hidden="true"></i>
                                <ul class="dropdown-menu" role="menu">
                                    <li class="dropdown"><a href="about-me.html">Videos</a></li>
                                    <li class="dropdown"><a href="about-me.html">Regulated professions</a></li>
                                    <li class="dropdown"><a href="about-me.html">Resume</a></li>
                                    <li class="dropdown"><a href="about-me.html">Download</a></li>
                                    <li class="dropdown"><a href="about-me.html">New comer support program</a></li>
                                    <li class="dropdown"><a href="about-me.html">Useful links</a></li>
                                </ul>
                            </li> -->
              <!-- 

              <li class="nav-item dropdown simple-dropdown">
                <a href="#" class="nav-link">Sponsorship</a>
                <i
                  class="fa fa-angle-down dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-hidden="true"
                ></i>
                <ul class="dropdown-menu" role="menu">
                  <li class="dropdown">
                    <a href="about-me.html">Listed Canada colleges</a>
                  </li>
                  <li class="dropdown"><a href="about-me.html">CEC</a></li>
                  <li class="dropdown">
                    <a href="about-me.html">SDS rules</a>
                  </li>
                  <li class="dropdown">
                    <a href="about-me.html">Study overseas</a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown simple-dropdown">
                <a href="#" class="nav-link">Permits</a>
                <i
                  class="fa fa-angle-down dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-hidden="true"
                ></i>
                <ul class="dropdown-menu" role="menu">
                  <li class="dropdown">
                    <a href="about-me.html">Work Permit</a>
                  </li>
                  <li class="dropdown">
                    <a href="about-me.html">Study Permit</a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown simple-dropdown">
                <a href="#" class="nav-link">Visitors</a>
                <i
                  class="fa fa-angle-down dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-hidden="true"
                ></i>
                <ul class="dropdown-menu" role="menu">
                  <li class="dropdown">
                    <a href="about-me.html">Work Permit</a>
                  </li>
                  <li class="dropdown">
                    <a href="about-me.html">Study Permit</a>
                  </li>
                </ul>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<style lang="css" scoped>
.top-0 {
  top: 0px !important;
}

.top--49 {
  top: -49px !important;
}

.top-49 {
  top: 49px !important;
}
</style>
