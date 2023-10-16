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
        <div class="col-12 col-xl-10 col-lg-10 col-md-10">
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
