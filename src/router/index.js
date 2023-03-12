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
    {
      path: "/family-class-sponsorship",
      name: "family-class-sponsorship",
      component: () => import("../views/FamilyClassSponsorship.vue"),
    },
    {
      path: "/express-entry",
      name: "express-entry",
      component: () => import("../views/ExpressEntry.vue"),
    },
    {
      path: "/study-permit",
      name: "study-permit",
      component: () => import("../views/StudyPermit.vue"),
    },
    {
      path: "/open-work-permit",
      name: "open-work-permit",
      component: () => import("../views/OpenWorkPermit.vue"),
    },
    {
      path: "/lmia-work-permit",
      name: "lmia-work-permit",
      component: () => import("../views/LMIA.vue"),
    },
    {
      path: "/atlantic-immigration-pilot",
      name: "atlantic-immigration-pilot",
      component: () => import("../views/AtlanticImmigration.vue"),
    },
    {
      path: "/economy-class",
      name: "economy-class",
      component: () => import("../views/ExpressEntry.vue"),
    },
  ],
});

export default router;
