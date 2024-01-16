import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "../views/HomePage.vue";
import AllProductPageVue from "../views/AllProductPage.vue";
import DetailPageVue from "../views/DetailPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.Base_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePageVue,
    },
    {
        path: "/product",
        component: AllProductPageVue,
      },
      {
        path: "/product/:id",
        component: DetailPageVue,
      }

  ],
});

export default router;
