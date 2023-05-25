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
      path: "/privacy-policy",
      name: "privacy-policy",
      component: () => import("../views/PrivacyPolicy.vue"),
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
      path: "/why-immigration-consultant",
      name: "why-immigration-consultant",
      component: () => import("../views/WhyImmigrationConsultant.vue"),
    },
    {
      path: "/beware-of-fraud",
      name: "beware-of-fraud",
      component: () => import("../views/BewareOfFraud.vue"),
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
      path: "/lmia-exempt",
      name: "lmia-exempt",
      component: () => import("../views/LMIAExempt.vue"),
    },
    {
      path: "/atlantic-immigration-pilot",
      name: "atlantic-immigration-pilot",
      component: () => import("../views/AtlanticImmigration.vue"),
    },
    {
      path: "/lmia-global-talent-stream",
      name: "lmia-global-talent-stream",
      component: () => import("../views/LMIAGlobal.vue"),
    },
    {
      path: "/rural-and-northern-immigration-pilot",
      name: "rural-and-northern-immigration-pilot",
      component: () => import("../views/RuralImmigration.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
