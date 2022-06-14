import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import LoginView from "../views/LoginView.vue";
import ImplantsView from "../views/ImplantsView.vue";
import { useBackendStore } from "../stores/backend";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: DashboardView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/implants",
      name: "Implants",
      component: ImplantsView,
    },
  ],
});

/* eslint-disable no-unused-vars */
router.beforeEach(async (to, _from) => {
  const backendStore = useBackendStore();

  if (!backendStore.isAuthenticated && to.name !== "Login") {
    return { name: "Login" };
  } else if (backendStore.isAuthenticated && to.name == "Login") {
    return { name: "Dashboard" };
  }
});

export default router;
