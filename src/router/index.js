import { createRouter, createWebHistory } from "vue-router";

import HomepageView from "../views/HomepageView.vue";
import QuizView from "../views/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomepageView,
    },
    {
      path: "/quiz/:id",
      component: QuizView,
    },
  ],
});

export default router;
