<script setup lang="ts"></script>

<template>
  <footer class="footer-consulting footer-dark bg-extra-dark-gray">
    <div
      class="footer-top padding-six-tb lg-padding-eight-tb md-padding-50px-tb"
    >
      <div class="container">
        <div class="row">
          <!-- start footer column -->
          <div
            class="col-12 col-lg-4 col-sm-6 order-sm-1 order-lg-0 last-paragraph-no-margin md-margin-40px-bottom xs-margin-25px-bottom"
          >
            <span
              class="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom"
              >About company</span
            >
            <p>
              MCICS is a CICC registered Canadian immigration consulting firm
              based in Winnipeg, Manitoba, Canada
            </p>
          </div>
          <!-- end footer column -->
          <!-- start footer column -->
          <div
            class="col-12 col-lg-4 offset-sm-1 col-sm-5 order-sm-2 order-lg-0 md-margin-40px-bottom xs-margin-25px-bottom"
          >
            <span
              class="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom"
              >Company</span
            >
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li>
                <router-link to="about-us">About Us</router-link>
              </li>
              <li>
                <router-link to="/immigration-categories"
                  >Immigration Categories</router-link
                >
              </li>
              <li>
                <router-link to="/free-assessment-form"
                  >Free Assessment Form</router-link
                >
              </li>
            </ul>
          </div>
          <!-- end footer column -->
          <!-- start footer column -->
          <div
            class="col-12 col-lg-2 col-sm-5 offset-sm-1 offset-lg-0 order-sm-4 order-lg-0 xs-margin-25px-bottom"
          >
            <span
              class="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom"
              >Links</span
            >
            <ul>
              <li>
                <router-link to="/contact">Contact Us</router-link>
              </li>
              <li><a href="javascript:void(0);">Facebook</a></li>
              <li><a href="javascript:void(0);">Linkedin</a></li>
              <li><a href="javascript:void(0);">Twitter</a></li>
            </ul>
          </div>
          <!-- end footer column -->
          <!-- start footer column -->
          <!-- <div
            class="col-12 col-xl-3 offset-xl-1 col-lg-4 col-sm-6 order-sm-3 order-lg-0"
          >
            <span
              class="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom"
              >Subscribe to newsletter</span
            >
            <p>Enter your email address for receiving valuable newsletters.</p>
            <form
              action="email-templates/subscribe-newsletter.php"
              method="post"
            >
              <div class="newsletter-style-03 position-relative">
                <input
                  class="small-input border-color-medium-gray rounded m-0 required"
                  name="email"
                  placeholder="Enter your email address"
                  type="email"
                />
                <input type="hidden" name="redirect" value="" />
                <button class="btn no-border text-medium submit" type="submit">
                  <i
                    class="feather icon-feather-mail icon-extra-small text-tussock m-0"
                  ></i>
                </button>
                <div
                  class="form-results rounded position-absolute d-none"
                ></div>
              </div>
            </form>
          </div> -->
          <!-- end footer column -->
        </div>
      </div>
    </div>
    <div
      class="footer-bottom padding-35px-tb border-top border-width-1px border-color-white-transparent"
    >
      <div class="container">
        <div class="row align-items-center">
          <div
            class="col-12 col-md-3 text-center text-md-start sm-margin-20px-bottom"
          >
            <RouterLink to="/" class="navbar-brand">
            <img
              src="../assets/images/main/newlogo.jpeg"
              data-at2x="images/main/newlogo.jpeg"
              class="default-logo"
              alt=""
              style="max-height: 100px; background-color: white;"
            />
            <!--  <img
              src="../assets/images/main/logo.png"
              data-at2x="images/main/logo.png"
              class="alt-logo"
              alt=""
            />
            <img
              src="../assets/images/main/logo.png"
              data-at2x="images/main/logo.png"
              class="mobile-logo"
              alt=""
            /> -->
          </RouterLink>
          </div>
          <div
            class="col-12 col-md-6 text-center last-paragraph-no-margin sm-margin-20px-bottom"
          >
            <p>&copy; 2023 Moses Canadian Immigration Consulting Services</p>
          </div>
          <!-- <div class="col-12 col-md-3 text-center text-md-end">
            <div class="social-icon-style-12">
              <ul class="extra-small-icon light">
                <li>
                  <a
                    class="facebook"
                    href="https://www.facebook.com"
                    target="_blank"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a
                    class="dribbble"
                    href="http://www.dribbble.com"
                    target="_blank"
                    ><i class="fab fa-dribbble"></i
                  ></a>
                </li>
                <li>
                  <a
                    class="twitter"
                    href="http://www.twitter.com"
                    target="_blank"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a
                    class="instagram"
                    href="http://www.instagram.com"
                    target="_blank"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </footer>
</template>
