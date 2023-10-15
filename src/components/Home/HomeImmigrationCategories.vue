<template>
  <section class="bg-white py-lg-0">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-12 col-xl-6 col-lg-6 col-md-10 padding-6-rem-tb lg-padding-5-rem-tb lg-padding-2-half-rem-right md-padding-15px-right md-no-padding-tb md-margin-5-rem-bottom"
        >
          <h5
            class="alt-font font-weight-500 text-extra-dark-gray letter-spacing-minus-1px margin-4-half-rem-bottom w-75 md-margin-4-rem-bottom lg-margin-2-half-rem-bottom md-w-100 wow animate__fadeIn"
          >
            {{ content.title }}
          </h5>
          <div
            class="panel-group accordion-event accordion-style-03 margin-4-rem-bottom lg-margin-2-rem-bottom"
            id="accordion2"
            data-active-icon="fa-angle-down"
            data-inactive-icon="fa-angle-right"
          >
            <!-- start accordion item -->
            <div
              v-for="cat in content.list"
              :key="cat._key"
              class="panel bg-white box-shadow-small border-radius-5px wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <div class="panel-heading active-accordion">
                <a
                  class="accordion-toggle"
                  data-bs-toggle="collapse"
                  :href="cat.url"
                  aria-expanded="false"
                >
                  <div class="panel-title">
                    <span
                      class="alt-font text-extra-dark-gray d-inline-block font-weight-500"
                    >
                      {{ cat.name }}</span
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
            {{ content.description }}
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
              :src="urlFor(content.image)"
              class="overflow-hidden"
              alt=""
              style="width: 100%; height: 900px; object-fit: cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { urlFor } from "../../helpers/sanity-helpers";
defineProps({
  content: {
    type: Object,
    default: () => {},
  },
});
</script>
