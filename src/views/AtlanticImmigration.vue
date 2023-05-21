<template>
  <section
    class="parallax atlantic-header"
    data-parallax-background-ratio="0.5"
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
            Atlantic Immigration Program
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
            This program is specifically designed for employers seeking to
            directly employ qualified Foreign Nationals without having to go
            through the Labour Market Impact Assessment (LMIA) process.
            Employers make a direct offer of employment to a selected candidate.
            Once the candidate accepts the offer, the employer connects them to
            settlement service providers (designated organizations). After
            conducting a thorough needs assessment, the settlement service
            provider develops a settlement plan for the candidate and their
            dependents (if applicable).
          </p>
          <p>
            If the employer has an urgent need to fill their vacancy, they may
            choose to offer employment to the candidate through a temporary work
            permit. It is the responsibility of the candidate to apply for the
            work permit. Requirements for the temporary work permit application
            include, but are not limited to, a valid job offer and a letter from
            the Province where the job is located. In addition, the candidate
            must also confirm their intent that he/she would apply for permanent
            residence status within 90 days after the application for the
            temporary work permit.
          </p>
          <b
            >You may be eligible for an open work permit if, among other
            classes, you are:</b
          >
          <ul>
            <li>
              The candidate must have work experience that qualifies them for
              the position. However, if the candidate is a graduate student from
              a post-secondary institution in any part of Atlantic Canada,
              he/she does not need to prove qualifying work experience
            </li>
            <li>
              The candidate must meet the educational criteria set by the
              program
            </li>
            <li>
              The candidate must meet the language criteria as set by the
              program
            </li>
            <li>
              Unless living and working within Canada, the candidate must prove
              that he/she and their dependents have sufficient settlement funds
            </li>
          </ul>
          <br /><br />
          <b>Moses Canadian Immigration Consulting Services</b> can assist you
          in determining your eligibility of immigration to Canada through this
          program.
          <RouterLink
            to="/free-assessment-form"
            class="btn btn-fancy btn-small btn-dark-gray margin-5px-right xs-margin-10px-bottom"
            >clicking here</RouterLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="css" scoped>
  .atlantic-header {
    background-image: url("../assets/images/main/woman.jpeg");
  }
</style>