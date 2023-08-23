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
      permit.value = data.find(item => item.title === 'Labour Market Impact Assessment (LMIA)');
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
              Labour Market Impact Assessment (LMIA)
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
            <!-- <div class="col-12 col-xl-10 col-lg-10 col-md-10"> -->
                <div v-for="body in permit.body" :key="permit._key">
                  <p v-if="body._type === 'block'">
                    <ul v-if="body.hasOwnProperty('listItem') && body.listItem === 'bullet'">
                      <li v-if="body.markDefs.length > 0 && body.markDefs[0].hasOwnProperty('href')"><a style="text-decoration: underline; color: blue;" target="_blank" :href="body.markDefs[0]?.href">{{ body.children[0]?.text }}</a></li>
                      <li v-else>{{ body.children[0].text }}</li>
                    </ul>

                    <span v-if="!body.hasOwnProperty('listItem')" v-for="child in body.children" :key="child._key" class="mt-3">
                      <span v-if="child._type === 'span'">
                        <b v-if="child.marks.length > 0 && child.marks[0] === 'strong'">{{ child.text }}</b>
                        <span v-else>{{ child.text }}</span>
                      </span>
                    </span>
                  </p>
                </div>
                <!-- <p>
                  The LMIA-based work permit is normally acquired through a two-step application
                  process, as follows: <br><br>
                  <b>Step 1:</b> The employer meets the eligibility requirements and submits an LMIA application
                  (Insert link to Moses LMIA page) to ESDC (Service Canada). After assessing the application,
                  ESDC provides the employer with either a positive or negative decision. If the LMIA application
                  receives a positive decision, then the employer is approved to hire a Foreign National on
                  temporary basis.<br><br>
                  <b>Step 2:</b> The Foreign National submits the application for the LMIA-based work permit at a
                  nearby IRCC Visa Office or through the online application platform. The Visa Office makes the
                  decision on the application.
                  Note: This type of work permit is employer-specific. This means that you may only work
                  as the occupation and for the employer stated on your work permit, at the location stated
                  on your work permit.
                  Moses Canadian Immigration Consulting Services can assist you in determining your
                  eligibility for and applying to this program. Click here (Insert link to the LMIA contact
                  information table) to contact us for a consultation.
                  Please contact us if you have any questions or require more information.
                </p>
                <p>
                  In situations where a Canadian employer is not able to find qualified Canadian Citizens or Permanent Residents to fill vacant job positions, as a last resort and with considerable limitations they can hire Foreign Nationals (worker(s)).
                </p>
                <p>
                  An employer must get approval from the Government of Canada prior to employing a Foreign National. This is obtained through the submission of an application to the Labour Market
                  Impact Assessment (LMIA) program. As part of this application process, they must be able to demonstrate, with proof, that every effort has been exhausted to employ Canadian Citizens or Permanent Residents.
                </p>
                <p>
                  Once the employer receives a letter of approval from the Government, they have the option of offering employment to a Foreign National under the Temporary Foreign Worker Program
                  (TFWP). The Foreign National must then accept the job offer, and submit their LMIA-based work permit application themselves.
                </p>
                <p>
                  In general, the LMIA process is slightly different from other immigration streams. Therefore, employers should understand the process and the commitments they are
                  required to make when hiring employees through the TFWP. There are several categories under the LMIA-based employment streams. The following are some of the most common:


                  <ul>
                        <li>Higher-skilled Occupations</li>
                        <li>Lower-skilled Occupations</li>
                        <li>Caregivers (For inside Canada Students &amp; Workers)</li>
                        <li>Seasonal Agricultural Worker</li>
                    </ul>
                </p>     
                <div>
                    <b>LMIA applications are often categorized into two sections:</b>
                    <ul>
                        <li>
                          <b>High-Wage Positions:</b> Wages that are equal or above to the Provincial/Territorial median wages are generally considered as high-wage positions
                        </li>
                        <li>
                          <b>Low-Wage Positions:</b> Wages that are below the Provincial/Territorial median wages are generally considered as low-wage positions
                        </li>
                    </ul>
                <div>
                    <i>Example</i>
                    <p>
                        Employers who wish to hire temporary foreign workers in high-wage occupations are required to submit transition plans with their Labour Market Impact Assessment (LMIA) application.
                        They must demonstrate to the government that they intend to reduce their reliance on temporary foreign workers in the years to come.
                    </p>

                    <p>
                      <b>The type and nature of employers’ obligations when employing through the Temporary Foreign Worker Program depends on which LMIA stream to which they applied.</b>
                    </p>
                  <i>Example</i>
                  <p>
                    Employers who apply for LMIA for low-wage positions must undertake the following obligations:
                  </p>
                  <ul>
                    <li>The employer must provide a work contract that binds the employer and the employee</li>
                    <li>The employer must pay for round-trip transportation for the temporary foreign worker</li>
                    <li>The employer must ensure affordable housing is available for the foreign worker</li>
                    <li>The employer must pay for private health insurance until the time when the foreign worker becomes eligible for Provincial public health coverage</li>
                    <li>The employer must register the temporary foreign worker with the Provincial/Territorial Workplace Health and Safety Authority</li>
                  </ul>
                  <p>Moses Canadian Immigration Consulting Services can assist you in determining your eligibility for and applying to this program. <RouterLink
                      to="/free-assessment-form"
                      class="btn btn-fancy btn-small btn-dark-gray margin-5px-right xs-margin-10px-bottom"
                  >clicking here</RouterLink
                  >.</p>
                </div>
            </div> -->
            <!-- </div> -->
      </div>
      </div>
    </section>
</template>
  