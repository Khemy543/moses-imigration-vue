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
              Labour Market Impact Assessment (LMIA) Global Talent Stream
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
                <p>
                  As part of the Economic Class of immigration, the Global Talent Stream is a fast-tracked
                  process aimed at attracting skilled workers for specific occupations in demand by Canadian
                  employers. Skilled workers can obtain a work permit in a shorter time frame. Such fast-tracked
                  immigration processes assist the growth of Canadian companies by ensuring they can quickly
                  access the highly-skilled talent they need.
                </p>
                <p>
                  Global Talent Stream work permit applications are processed through the Labour Market
                  Benefits Plan (LMBP) process, similar in process to the LMIA process. LMBP is faster than
                  LMIA, and does not have the employer’s minimum recruitment requirements. However, all
                  recruitment efforts must still be demonstrated and submitted by the employer along with the
                  LMBP application. If approved, the work permit application process time is reduced to a few
                  weeks.
                </p>
                <p><b>There are two categories under the Global Talent Stream:</b></p>
                <h6>Category A</h6>
                <p>
                  Under this category, employers are referred by a designated referral partner. There are numerous
                  designated referral partners recognized by the Canadian Government across many of the
                  Provinces and Territories of Canada.
                </p>
              <h6>Category B</h6>
              <p>
                This is an employer-driven category, in which an employer expresses an interest in employing
                skilled Foreign Nationals whose occupation falls under a designated list. Some of such
                designated occupations are listed in the chart below:
              </p>
              <table>
                <thead>
                <tr>
                  <th>National Occupations Classification (NOC - 2021) code</th>
                  <th>Occupation</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-for="nocList in nocLists" id="nocList.id">
                    <td v-text="nocList.code"></td>
                    <td v-text="nocList.occupation"></td>
                  </tr>
                </tbody>
              </table>
              <p><b>All employers who wish to hire foreign nationals through the Global Talent stream are
                assessed on the following criteria:
              </b></p>
              <ul>
                <li>Being actively engaged in their business and providing services or goods related to the
                  job offered to the Foreign worker
                </li>
                <li>Meeting the contract terms made to the Foreign worker (such as paying the Foreign
                  worker the median prevailing wage for the occupation they are hired for)
                </li>
                <li>Be in compliance with Federal and Provincial Laws that regulate employment or the
                  recruiting of employees in the Province in which it is intended that the TFW works
                </li>
              </ul> <br>
              Moses Canadian Immigration Consulting Services can assist you in determining your eligibility for and applying to this program. <RouterLink
                to="/free-assessment-form"
                class="btn btn-fancy btn-small btn-dark-gray margin-5px-right xs-margin-10px-bottom"
              >clicking here</RouterLink>
            </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  data () {
    return {
      nocLists: [
        {
          id: 1,
          code: '20012',
          occupation: 'Computer and information systems managers'
        },
        {
          id: 2,
          code: '21300',
          occupation: 'Civil Engineers'
        },
        {
          id: 3,
          code: '21310',
          occupation: 'Electrical and electronics engineers'
        },
        {
          id: 4,
          code: '21330',
          occupation: 'Mining engineers'
        },
        {
          id: 5,
          code: '21390',
          occupation: 'Aerospace engineers'
        },
        {
          id: 6,
          code: '21311',
          occupation: 'Computer engineers (except software engineers and designers)'
        },
        {
          id: 7,
          code: '21211',
          occupation: 'Data Scientists'
        },
        {
          id: 8,
          code: '21220',
          occupation: 'Cyber Security specialists'
        },
        {
          id: 9,
          code: '21221',
          occupation: 'Business system specialists'
        },
        {
          id: 10,
          code: '21222',
          occupation: 'Information system specialists'
        },
        {
          id: 11,
          code: '21233',
          occupation: 'Web designers'
        },
        {
          id: 12,
          code: '21210',
          occupation: 'Mathematicians and statisticians'
        },
        {
          id: 13,
          code: '21211',
          occupation: 'Database analysts and data administrators'
        },
        {
          id: 14,
          code: '21231',
          occupation: 'Software engineers and designers'
        },
        {
          id: 15,
          code: '21230',
          occupation: 'Computer programmers and interactive media developers'
        },
        {
          id: 16,
          code: '21232',
          occupation: 'Software developers and programmers'
        },
        {
          id: 17,
          code: '21234',
          occupation: 'Web developers and programmers'
        },
        {
          id: 18,
          code: '21233',
          occupation: 'Web designers'
        },
        {
          id: 19,
          code: '22310',
          occupation: 'Electrical and electronics engineering technologists and technicians'
        },
        {
          id: 20,
          code: '22220',
          occupation: 'Computer Network technicians'
        },
        {
          id: 21,
          code: '51120',
          occupation: 'Producer, technical, creative and artistic director and project manager – Visual effects and video game'
        },
        {
          id: 22,
          code: '52120',
          occupation: 'Digital Media and Design'
        },
      ]
    }
  }
}
</script>