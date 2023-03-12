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
            Express Entry
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
            Canada manages three main Economy Class streams through an application management system
            known as the Express Entry program.
          </p>
          <p>
            <b>The three immigration streams managed under this program are:</b>

          <ul>
            <li>Federal Skilled Worker Program (FSWP)</li>
            <li>Canadian Experience Class (CEC)</li>
            <li>Federal Skilled Trades Program (FSTP)</li>
          </ul>
          </p>
          <div>
            Each of these streams have minimum requirements applicants must meet before they apply. The
            most important requirements are related to level of education, English and/or French language
            skills, skilled work experience and age. Express Entry streams are point based, and you will be
            assessed on a point grid that is calculated through a Comprehensive Ranking System (CRS) –
            <a href="https://www.cic.gc.ca/english/immigrate/skilled/crs-tool.asp"
                target="_blank"
                class="btn btn-fancy btn-small btn-dark-gray margin-5px-right xs-margin-10px-bottom"
            >clicking here</a
            > for access to the ranking tool. <br><br>

            Express Entry draws are regularly administered by the Canadian Government. Candidates with
            the highest CRS scores are invited to submit applications for Permanent Residence (PR). After
            receiving an invitation and submitting an application package for PR, the approval process is
            often less than a year.

            <h5 class="text-center">General Overview of Federal Skilled Worker Program (FSWP)</h5>

            <p>
              This program is for skilled workers with foreign work experience. The program’s requirements
              are dependent on several factors. Minimum requirements are: level of education; skilled work
              experience; and English and/or French Language skills (Reading, Writing, Speaking and
              Listening skills). <br><br>

              <b>The Program is based on a 100-point grid (as of now, the pass mark is 67; but this may
                change any time) for which the following are important contributing factors:</b> <br><br>

              <b>Level of education:</b> Points are awarded for educational levels of high school and above. If
              education was attained in Canada, the applicant must present certificate, diploma or degree
              awarded from a Canadian educational institution for secondary or post-secondary education. If
              such credentials were acquired from outside Canada, then the applicant must have an
              Educational Credential Assessment (ECA) report for immigration purposes from a designated
              organization showing that your education is equal to a completed certificate, diploma or degree
              from a Canadian institution at a secondary or post-secondary school level. <br><br>

              <b>Work Experience:</b> Whether acquired within Canada or outside Canada, a minimum of 1 year
              full-time skilled work experience. Work experience shall be in skilled work areas under the 
              National Occupational Classification (NOC) skill level 0, A or B. Full-time work is defined as
              30hrs/per week or more OR an equal amount in part-time (example: 15hrs/week for 2 years). If
              you have a full-time and non-seasonal job offer from a Canadian employer valid at least for 1
              year, you are awarded more points. Specification of job offers by Canadian employers are
              eligible for points. <br><br>

              <b>Language Skills:</b> In this program, you are expected to demonstrate adequate language skills in at
              least one of the two Canadian official languages – English and/or French. The four language
              skills are: listening, writing, speaking and reading. Among the most widely accepted language
              certificates to support Canadian immigration are (certificate shall not be older than two years):
              <ul>
                <li>CELPIP: Canadian English Language Proficiency Index Program</li>
                <li>TEF Canada: Test d&#39;évaluation de français</li>
                <li>IELTS: International English Language Testing System</li>
              </ul> <br>

            The test results are calculated based on the Canadian Language Benchmark (CLB) for English
            and Niveaux de compétence linguistique canadiens (NCLC) for French. The required language
            level in all four of the language skills is CLB = 7 or NCLC = 7. To be awarded points for a
            second official language, you must have at least CLB = 5 or NCLC = 5 in all four skills.

<!--              <RouterLink-->
<!--                to="/free-assessment-form"-->
<!--                class="btn btn-fancy btn-small btn-dark-gray margin-5px-right xs-margin-10px-bottom"-->
<!--            >clicking here</RouterLink-->
<!--            >-->
            </p>
          </div>
          <div>
            <h5 class="text-center">General Overview of Canadian Experience Class (CEC)</h5>
            <p>
              This program is for applicants with Canadian work experience (through Temporary Residence –
              work permit, for example) and for international graduates in Canada. Like FSWP, CEC
              requirements are based on a pass or fail point model. To be eligible to enter the Express Entry
              pool, the applicant must meet the minimum requirements. <br>

              <b>Eligibility</b> <br>
              <b>The following program eligibility criteria apply:</b>

              <ul>
                <li>Must have obtained at least one year of skilled, professional or technical work
                  experience in Canada, within 36 months of the application date. Work experience is
                  defined as at least 30hrs/week (full-time) or 1,560 hours (part-time) skilled work in
                  Canada.
                </li>
                <li>
                  Must meet at least the minimum Canadian Language Benchmark CLB = 5 for NOC
                  TEER category 2 or 3 jobs, or CLB = 7 for NOC TEER category 0 or 1 jobs.
                </li>
                <li>Must plan to live and work outside of the Province of Quebec</li>
              </ul>


              Note: Any work experience acquired as self-employment during full-time studies or co-op
              term work does not count towards CEC eligibility.
              General Overview of Federal Skilled Trades Program (FSTP)
              The FSWP program is for skilled workers who want to become permanent residents and are
              qualified in a skilled trade.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
