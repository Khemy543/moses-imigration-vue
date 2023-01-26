import { createApp } from "vue";
import { createPinia } from "pinia";
import VueFeather from "vue-feather";

import App from "./App.vue";
import router from "./router";

import "./assets/css/font-icons.min.css";
import "./assets/css/theme-vendors.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

const app = createApp(App);

app.component(VueFeather.name, VueFeather);
app.use(createPinia());
app.use(router);

app.mount("#app");
