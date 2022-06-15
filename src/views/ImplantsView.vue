<script setup>
import { onMounted } from "vue";
import ImplantsTable from "../components/ImplantsTable.vue";
import { useBackendStore } from "../stores/backend";
import router from "../router";
import { useQuasar } from "quasar";

const backendStore = useBackendStore();
const $q = useQuasar();

onMounted(async () => {
  let result = await backendStore.fetchImplants();

  if (!result) {
    $q.notify({
      message: "Your JWT expired. Redirecting...",
      color: "red",
      position: "top",
    });

    setTimeout(() => {
      localStorage.removeItem("JWT");
      backendStore.isAuthenticated = false;
      router.push({ path: "/login", replace: true });
    }, 5000);
  }
});
</script>

<template>
  <h3 id="implants">Implants</h3>
  <ImplantsTable :rows="backendStore.getImplants" />
</template>

<style>
#implants {
  margin: auto;
  font-weight: bold;
  color: white;
}
</style>
