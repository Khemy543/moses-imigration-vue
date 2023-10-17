<template>
  <section
    class="parallax free-assessment-header"
    data-parallax-background-ratio="0.5"
  >
    <div class="opacity-extra-medium bg-extra-dark-gray"></div>
    <div class="container">
      <div class="row align-items-stretch justify-content-center small-screen">
        <div
          class="col-12 position-relative page-title-extra-small text-center d-flex align-items-center justify-content-center flex-column"
        >
          <h1 class="alt-font text-white opacity-6 margin-20px-bottom">
            Services
          </h1>
          <h3
            class="text-white alt-font font-weight-500 w-55 md-w-65 sm-w-80 center-col xs-w-100 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom"
          >
            Free Assessment From
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
        <div class="col-md-12 text-center margin-six-bottom">
          <h6 class="alt-font text-extra-dark-gray font-weight-500">
            Please download and fill out the free assessment submit it for
            assessment
          </h6>
          <p>
            We will get back to you per email with result of the assessment.
            Assessment may take up to 10 working days
          </p>
        </div>
      </div>
 
      <div class="row justify-content-center">
        <div class="col-5 col-xl-5 col-lg-5 col-md-5">
          <div class="border pt-3 p-5">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              <small class="p-1"><b>Download the assessment form from the link below</b></small>
            </p>
            <div class="text-center">
              <a
              class="btn btn-small btn-outline-primary mb-0 submit"
              href="https://core.mosesimmigration.com/Preliminary Assessment form.docx"
              target="_self"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg> 
              
              &emsp14; Download Assessment Form
            </a>
            </div>
          
          </div>
        </div>
        <div class="col-7 col-xl-7 col-lg-7 col-md-7">
          <div v-if="sent" class="alert alert-info">
            Your credential assessment request has been received. 
          </div>
          <form action="" method="post">
            <div class="col">
                <input
                  class="large-input margin-25px-bottom border-radius-0px required"
                  ref="file"
                  type="file"
                  v-on:change="handleFile"
                />
              </div>
       
            <button
              class="btn btn-small btn-fancy btn-gradient-fast-blue-purple mb-0 submit"
              type="submit"
              @click.prevent="sendAssessmentMail"
            >
              Submit
              <div v-if="isLoading" class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
            <div class="form-results d-none"></div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      file: "",
      isLoading: false,
      sent: false,
    };
  },
  methods: {
    handleFile() {
      console.log(this.$refs.file.files[0])
      this.file = this.$refs.file.files[0];
    },
    async sendAssessmentMail() {
      let formData = new FormData()
      this.assessment = formData.append('assessment', this.file)
      this.isLoading = true;
      const resp = await axios.post(
        "https://core.mosesimmigration.com/api/send/immigration/assessment/form",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      console.log("response", resp);

      if (resp.data && resp.data.status === "mail sent") {
        this.sent = true;
        this.file = ''

        setTimeout(() => {
          this.sent = false;
          this.name = null;
        }, 5000);

        this.email = null;
        this.message = null;
        this.phone = null;
        this.isLoading = false;
      }
    },
  }
}
</script>
<style scoped>
.free-assessment-header {
  background-image: url(../assets/images/main/free-assessment.jpg);
}
</style>
