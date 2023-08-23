<script setup>
import { onMounted, ref } from "vue";
import { sanity, builder } from "@/sanity.js";

const query = `*[_type == "permit"]{
  body,
  title,
  image
}`;

const permit = ref([])


const getPageData = () => {
  sanity
    .fetch(query)
    .then((data) => {
      permit.value = data.find(item => item.title === 'Labour Market Impact Assessment (LMIA) Exempt Work Permit');

      console.log('data', data)
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
    <section
      class="parallax"
      data-parallax-background-ratio="0.5"
      style="background-image: url('../assets/images/main/free-assessment.jpg')"
    >
      <div class="opacity-extra-medium bg-extra-dark-gray"></div>
      <div class="container">
        <div class="row align-items-stretch justify-content-center small-screen">
          <div
            class="col-12 position-relative page-title-extra-small text-center d-flex align-items-center justify-content-center flex-column"
          >
            <h3
              class="text-white alt-font font-weight-500 w-55 md-w-65 sm-w-80 center-col xs-w-100 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom"
            >
              Labour Market Impact Assessment (LMIA) Exempt Work Permit
            </h3>
          </div>
          <div class="down-section text-center">
            <a href="#assessment-form" class="section-link"
              ><vue-feather
                type="arrow-down"
                stroke="#bf8c4c"
                size="24"
              ></vue-feather
            ></a>
          </div>
        </div>
      </div>
    </section>
    <section id="assessment-form" class="">
      <div class="container">
        <div class="row justify-content-center">
          
          <div v-for="body in permit.body" :key="permit._key">
            <p v-if="body._type === 'block'">
              <ul v-if="body.hasOwnProperty('listItem') && body.listItem === 'bullet'">
                <li v-if="body.markDefs.length > 0 && body.markDefs[0].hasOwnProperty('href')"><a style="text-decoration: underline; color: blue;" target="_blank" :href="body.markDefs[0]?.href">{{ body.children[0]?.text }}</a></li>
                <li v-else>{{ body.children[0].text }}</li>
              </ul>

              <span v-if="!body.hasOwnProperty('listItem')" v-for="child in body.children" :key="child._key" class="mt-3">
                <span v-if="child._type === 'span'">
                  <h6 style="color: #bf8c4c" v-if="child.marks.length > 0 && child.marks[0] === 'strong'">{{ child.text }}</h6>
                  <span v-else>{{ child.text }}</span>
                </span>
              </span>
            </p>
          </div>
            <!-- <div class="col-12 col-xl-10 col-lg-10 col-md-10"> -->

                <!-- <p>
                  In certain circumstances, Foreign Nationals (workers) may obtain a work permit without LMIA
                  approval (exemption). Where an LMIA exemption applies, it is possible for the Foreign National
                  to be issued a work permit that allows them to work in Canada for a specific period.
                </p>
                <p>
                  Such permits are based on bilateral or multilateral agreements between Canada and other
                  countries. The most important international agreements that may be applicable for LMIA exempt
                  work permits are the following:
                </p>
                <ul>
                  <li>Comprehensive Economic and Trade Agreement (CETA)</li>
                  <li>North American Free Trade Agreement (NAFTA)</li>
                  <li>Progressive Agreement for Trans-Pacific Partnership (CPTPP)</li>
                </ul>
              <p>
                Such permits are based on bilateral or multilateral agreements between Canada and other
                countries. The most important international agreements that may be applicable for LMIA exempt
                work permits are the following:
              </p>
              <p>
                <b>LMIA-Exempt work permits fall under the International Mobility Program (IMP)</b>. While
                the Temporary Foreign Worker Program (TFWP) assists Canadian employers fill vacant jobs
                with temporary foreign workers where qualified Canadians or permanent residents were not
                available, IMP is aimed at benefitting Canada on a broader context. Among others, IMP
                stimulates the social, cultural and economic benefits of Canada.

                Moses Canadian Immigration Consulting Services can assist you in determining your eligibility for and applying to this program. <RouterLink
                  to="/free-assessment-form"
                  class="btn btn-fancy btn-small btn-dark-gray margin-5px-right xs-margin-10px-bottom"
                >clicking here</RouterLink>
              </p>
              <p>Please contact us if you have any questions or require more information.</p> -->
            <!-- </div> -->
      </div>
      </div>
    </section>
</template>
  