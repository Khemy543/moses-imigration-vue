<template>
  <section
    class="parallax rural-header"
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
            Rural And Northern Immigration Pilot
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
      <div class="">
        <div class="">
          <p>
            The Government of Canada is currently offering 11 Canadian
            communities the opportunity to select Foreign Nationals who could
            fill their local employment vacancies through the Rural and Northern
            Immigration Pilot (RNIP). These communities welcome skilled foreign
            nationals who immigrate through this pilot program, and assist them
            in their settlement into the given community.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="" style="padding: 0">
    <div class="container">
      <div
        class="row align-items-center justify-content-center overlap-gap-section"
      >
        <div
          class="col-12 col-lg-6 col-md-10 text-center text-lg-end md-margin-30px-bottom wow animate__fadeIn"
          data-wow-delay="0.2s"
        >
          <img
            src="../assets/images/main/communities.avif"
            alt=""
            style="width: 100%; height: 500px; object-fit: cover"
          />
        </div>
        <div class="col-12 col-lg-6 col-md-10 ps-lg-0">
          <h5 class="alt-font text-extra-dark-gray font-weight-500">
            11 participating communities
          </h5>
          <ul style="list-style: none; font-size: 17px">
            <li>Alberta – Claresholm</li>
            <li>British Columbia – Vernon; West Kootenay</li>
            <li>Manitoba – Brandon; Rhineland/Altona</li>
            <li>Ontario – Sault Ste. Marie; Sudbury; Thunder Bay; Timmins</li>
            <li>British Columbia – Vernon; West Kootenay</li>
          </ul>
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/rural-northern-immigration-pilot.html"
            class="btn btn-fancy btn-small btn-dark-gray margin-5px-right xs-margin-10px-bottom"
            >clicking here</a
          >for more information on this program <br /><br />
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <h6>Requirements for Foreign National candidates</h6>
      <p>
        Candidates must meet the specific requirements set by the respective
        participating communities for selection, as well as the Federal
        requirements for Permanent Resident. The candidate also must have: a
        recommendation of any of the participating communities that he/she meets
        the criteria set by those communities, a genuine job offer in one or
        more of those communities, at least one year full-time work experience,
        the intention to live in the community which selects the Candidate, as
        well as other requirements.
      </p>
      <b>Moses Canadian Immigration Consulting Services</b> can assist you in
      determining your eligibility of immigration to Canada through this
      program.<RouterLink
        to="/free-assessment-form"
        class="btn btn-fancy btn-small btn-dark-gray margin-5px-right xs-margin-10px-bottom"
        >clicking here</RouterLink
      >
    </div>
  </section>
</template>
<style scoped>
.rural-header {
  background-image: url("../assets/images/main/iceman.jpeg");
}
</style>
