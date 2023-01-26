import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/immigration-categories",
      name: "immigration-categories",
      component: () => import("../views/ImmigrationCategory.vue"),
    },
    {
      path: "/free-assessment-form",
      name: "free-assessment-form",
      component: () => import("../views/FreeAssessmentForm.vue"),
    },
    {
      path: "/contact",
      name: "contact-us",
      component: () => import("../views/ContactUs.vue"),
    },
  ],
});

export default router;
