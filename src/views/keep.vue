<template>
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
  <!-- <section class="bg-white">
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
  </section> -->
</template>