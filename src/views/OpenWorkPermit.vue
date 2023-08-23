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
      permit.value = data.find(item => item.title === 'Open Work Permit');
      // sponsorIncome.value = data.find(item => item.title === 'Sponsor Income Requirements');
      // familyReunion.value = data.find(item => item.title === 'We believe in the reunification of all family members');

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
  <section class="parallax work" data-parallax-background-ratio="0.5">
    <div class="opacity-extra-medium bg-extra-dark-gray"></div>
    <div class="container">
      <div class="row align-items-stretch justify-content-center small-screen">
        <div
          class="col-12 position-relative page-title-extra-small text-center d-flex align-items-center justify-content-center flex-column"
        >
          <h3
            class="text-white alt-font font-weight-500 w-55 md-w-65 sm-w-80 center-col xs-w-100 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom"
          >
            Open Work Permit
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
        <div class="col-12 col-xl-10 col-lg-10 col-md-10">
            <div v-for="body in permit.body" :key="permit._key">
             
                <ul v-if="body.hasOwnProperty('listItem') && body.listItem === 'bullet'">
                  <li v-if="body.markDefs.length > 0 && body.markDefs[0].hasOwnProperty('href')"><a style="text-decoration: underline; color: blue;" target="_blank" :href="body.markDefs[0]?.href">{{ body.children[0]?.text }}</a></li>
                  <li v-else>{{ body.children[0].text }}</li>
                </ul>
              <p v-if="body._type === 'block'">
                <span v-if="!body.hasOwnProperty('listItem')" v-for="child in body.children" :key="child._key" class="mt-3">
                  <span v-if="child._type === 'span'">
                    <h6 style="color: #bf8c4c" v-if="child.marks.length > 0 && child.marks[0] === 'strong'">{{ child.text }}</h6>
                    <span v-else>{{ child.text }}</span>
                  </span>
                </span>
              </p>
            </div>
          <!-- <p>
            Holders of open work permits can work for any employer and in any
            occupation of their choice, which is different than an LMIA-based
            work permit that only authorizes work for a specific employer. If
            you are an open work permit holder, you do not need to have a
            positive LMIA to work for an employer in an occupation of your
            choice.
          </p>
          <div>
            <b
              >You may be eligible for an open work permit if, among other
              classes, you are:</b
            >

            <ul>
              <li>A Temporary Resident permit holder</li>
              <li>
                The spouse or common-law partner of a skilled worker or
                international student
              </li>
              <li>
                A dependent family member (e.g., spouse or common-law partner)
                of a person who has applied for the status of Permanent
                Resident;
              </li>
              <li>
                A refugee, asylum seeker, protected person or their family
                member
              </li>
              <li>
                A student who needs humanitarian consideration such as that you
                are no more able to meet the financial needs of studies; and
              </li>
              <li>
                An international student who has graduated from a designated
                educational institution.
              </li>
            </ul>
          </div>
          <div>
            In some of the above-mentioned categories, you may apply for work
            permit either from within Canada or from outside Canada.
            <h5 class="text-center">
              Spousal Open Work Permit under the Family Class
            </h5>

            <p>
              Spouses or common-law-partners of Canadian citizens or Permanent
              Residents who are already in Canada may be issued an open work
              permit during the process of their in-Canada spousal sponsorship
              application. They need to meet all the eligibility criteria, and
              their application for open work permit would be ideally submitted
              along with their sponsorship application for Permanent Resident.
              <br /><br />

              <b>Moses Canadian Immigration Consulting Services</b> can assist
              you in determining your eligibility of immigration to Canada
              through this program.
              <RouterLink
                to="/free-assessment-form"
                class="btn btn-fancy btn-small btn-dark-gray margin-5px-right xs-margin-10px-bottom"
                >clicking here</RouterLink
              >
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.work {
  background-image: url(../assets/images/main/work.jpeg);
}
</style>
