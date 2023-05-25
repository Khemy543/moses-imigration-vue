<template>
  <section class="bg-gradient-light-orange-light-pink">
    <!-- <div class="opacity-extra-medium bg-extra-dark-gray"></div> -->
    <div class="container">
      <div class="row align-items-stretch justify-content-center small-screen">
        <div
          class="col-12 position-relative page-title-extra-small text-center d-flex align-items-center justify-content-center flex-column"
        >
          <h3
            class="text-white alt-font font-weight-500 w-55 md-w-65 sm-w-80 center-col xs-w-100 letter-spacing-minus-1px line-height-30 sm-line-height-45 xs-line-height-30 no-margin-bottom"
          >
            Contact Us
          </h3>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 col-md-6">
          <h4 class="alt-font text-black font-weight-600">
            Our Address
          </h4>
          <span
            class="alt-font d-block text-extra-dark-gray font-weight-500 margin-10px-bottom"
          ></span>
          <p class="w-80 margin-5px-bottom lg-w-90">
            <vue-feather type="map-pin" size="16"></vue-feather> 532 Sargent
            Ave., Winnipeg, Manitoba, R3B 1W2
          </p>

          <p></p>

          <p class="w-80 margin-5px-bottom lg-w-90">
            <vue-feather type="phone-call" size="25"></vue-feather> +1 (204)
            952-1631
          </p>

          <p></p>

          <p class="w-80 margin-5px-bottom lg-w-90">
            <vue-feather class="ml-3" type="at-sign" size="20"></vue-feather>
            <span>mosesimmigration@gmail.com</span>
          </p>
          <p></p>
          <div class="text-left">
            <a
              href="https://goo.gl/maps/xhEaKrvti3uwshL19?coh=178571&entry=tt"
              target="_blank"
              class="text-uppercase text-small text-extra-dark-gray font-weight-500 text-decoration-line-bottom"
              >View on google map</a
            >
          </div>
        </div>
        <div class="col-12 col-lg-6 col-md-6">
          <h4 class="alt-font text-black font-weight-600">
            Let's get in touch with us
          </h4>
          <div v-if="sent" class="alert alert-info">
            Hello <span class="text-primary">{{ name }}</span
            >, We have received your mail.
          </div>
          <form
            @submit.prevent="sendEnquiryMail"
            class="alt-font text-extra-dark-gray"
          >
            <input
              class="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px required"
              type="text"
              name="name"
              placeholder="Your name"
              v-model="name"
            />
            <input
              v-model="email"
              class="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px required"
              type="email"
              name="email"
              placeholder="Your email address"
            />
            <input
              class="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px"
              type="tel"
              name="phone"
              placeholder="Mobile no"
              v-model="phone"
            />
            <textarea
              v-model="message"
              class="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-35px-bottom border-radius-0px"
              name="comment"
              rows="5"
              placeholder="How can we help you?"
            ></textarea>
            <div
              class="g-recaptcha margin-35px-bottom"
              data-sitekey="6LfJf98bAAAAAGC26hfKyd2Ptddbs9xYm4mCNeLx"
            ></div>
            <input type="hidden" name="redirect" value="" />
            <button
              class="btn btn-medium btn-dark-gray mb-0 submit"
              type="submit"
            >
              send message
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
  <!-- end section -->
  <!-- start section -->
  <!-- <section class="big-section wow animate__fadeIn">
    <div class="container">
      <div class="row align-items-end justify-content-center">
        <div class="col-12 col-lg-5 col-md-8 md-margin-50px-bottom">
          <div
            class="feature-box feature-box-left-icon-middle padding-4-rem-all bg-light-gray overflow-hidden background-position-top background-no-repeat lg-padding-3-rem-lr md-padding-5-rem-all xs-padding-3-half-rem-all"
            style="background-image: url('images/quotes-01.png');"
          >
            <div
              class="feature-box-icon margin-25px-right xs-margin-15px-right"
            >
              <img
                class="border-radius-100 w-80px xs-w-50px"
                src="https://via.placeholder.com/80x80"
                alt=""
              />
            </div>
            <div class="feature-box-content">
              <div
                class="text-large text-extra-dark-gray alt-font font-weight-500 w-90"
              >
                More comfortable talking with us?
              </div>
            </div>
            <p class="margin-30px-top margin-15px-bottom w-80 lg-w-100">
              Schedule a 15 minute intro call with us. He'll answer your
              questions and discuss.
            </p>
            <a
              href="#"
              class="text-small text-extra-dark-gray font-weight-500 text-decoration-line-bottom text-uppercase"
              >Pick a schedule</a
            >
          </div>
        </div> -->
  <!-- <div class="col-12 col-lg-6 offset-lg-1 col-md-8">
          <h4 class="alt-font text-black font-weight-600">
            Let's get in touch with us
          </h4>
          <div v-if="sent" class="alert alert-info">Hello <span class="text-primary">{{name}}</span>, We have received your mail.</div>
          <form
            @submit.prevent="sendEnquiryMail"
            class="alt-font text-extra-dark-gray"
          >
            <input
              class="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px required"
              type="text"
              name="name"
              placeholder="Your name"
              v-model="name"
            />
            <input
              v-model="email"
              class="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px required"
              type="email"
              name="email"
              placeholder="Your email address"
            />
            <input
              class="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-25px-bottom border-radius-0px"
              type="tel"
              name="phone"
              placeholder="Mobile no"
              v-model="phone"
            />
            <textarea
            v-model="message"
              class="input-border-bottom border-color-extra-dark-gray bg-transparent placeholder-dark large-input px-0 margin-35px-bottom border-radius-0px"
              name="comment"
              rows="5"
              placeholder="How can we help you?"
            ></textarea>
            <div
              class="g-recaptcha margin-35px-bottom"
              data-sitekey="6LfJf98bAAAAAGC26hfKyd2Ptddbs9xYm4mCNeLx"
            ></div>
            <input type="hidden" name="redirect" value="" />
            <button
              class="btn btn-medium btn-dark-gray mb-0 submit"
              type="submit"
            >
              send message <div v-if="isLoading" class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </button>
            <div class="form-results d-none"></div>
          </form>
        </div> 
      </div>
    </div>
  </section> -->
  <!-- end section -->
  <!-- start map section -->
  <section class="no-padding-tb wow animate__fadeIn">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 px-0">
          <div class="map-style-3 h-500px xs-h-300px">
            <iframe
              class="w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.1372989125484!2d-97.1553917!3d49.8962256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73e6ace960f9%3A0x53f75150a8b3d573!2s532%20Sargent%20Ave%2C%20Winnipeg%2C%20MB%20R3B%201W2%2C%20Canada!5e0!3m2!1sen!2sgh!4v1684705619649!5m2!1sen!2sgh"
              width="600"
              height="450"
              style="border: 0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end map section -->
  <!-- start section -->
  <!-- <section class="half-section">
    <div class="container">
      <div class="row justify-content-center"> -->
  <!-- start feature box item-->
  <!-- <div
          class="col-12 col-sm-auto sm-margin-15px-bottom wow animate__fadeIn"
          data-wow-delay="0.2s"
        >
          <div
            class="d-flex justify-content-center align-items-center padding-15px-lr h-100"
          >
            <i
              class="feather icon-feather-headphones align-middle icon-extra-small text-gradient-magenta-orange margin-10px-right"
            ></i>
            <span class="text-extra-dark-gray alt-font text-medium"
              >+1 123 456 7890</span
            >
          </div>
        </div> -->
  <!-- end feature box item-->
  <!-- start feature box item-->
  <!-- <div
          class="col-12 col-sm-auto sm-margin-15px-bottom wow animate__fadeIn"
          data-wow-delay="0.4s"
        >
          <div
            class="d-flex justify-content-center align-items-center padding-15px-lr h-100"
          >
            <i
              class="feather icon-feather-mail align-middle icon-extra-small text-gradient-magenta-orange margin-10px-right"
            ></i>
            <a
              href="mailto:no-reply@domain.com"
              class="text-extra-dark-gray alt-font text-medium"
              >no-reply@domain.com</a
            >
          </div>
        </div> -->
  <!-- end feature box item-->
  <!-- start feature box item-->
  <!-- <div
          class="col-12 col-sm-auto wow animate__fadeIn"
          data-wow-delay="0.6s"
        >
          <div
            class="d-flex justify-content-center align-items-center padding-15px-lr h-100"
          >
      
          </div>
        </div> -->
  <!-- end feature box item-->
  <!-- </div>
    </div>
  </section> -->
</template>
<script>
import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      isLoading: false,
      sent: false,
    };
  },
  methods: {
    async sendEnquiryMail() {
      this.isLoading = true;
      const resp = await axios.post(
        "https://core.mosesimmigration.com/api/send/immigration/enquiry/mail",
        {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        }
      );

      console.log("response", resp);

      if (resp.data && resp.data.status === "mail sent") {
        this.sent = true;
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
  },
};
</script>

<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 25px;
  height: 25px;
  margin: 5px;
  border: 5px solid #232323;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #232323 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
