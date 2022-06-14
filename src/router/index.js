import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import { useBackendStore } from "../stores/backend";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
  ],
});

/* eslint-disable no-unused-vars */
router.beforeEach(async (to, _from) => {
  const backendStore = useBackendStore();

  if (!backendStore.isAuthenticated && to.name !== "Login") {
    return { name: "Login" };
  } else if (backendStore.isAuthenticated && to.name == "Login") {
    return { name: "Home" };
  }
});

export default router;
