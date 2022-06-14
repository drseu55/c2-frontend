<script setup>
import { useBackendStore } from "../stores/backend";
import router from "../router";

const backendStore = useBackendStore();

function logout() {
  localStorage.removeItem("JWT");
  backendStore.isLogoutVisible = false;
  backendStore.isAuthenticated = false;
  router.push({ path: "/login", replace: true });
}

function cancel() {
  backendStore.isLogoutVisible = false;
}
</script>

<template>
  <q-dialog
    :model-value="backendStore.isLogoutVisible && backendStore.isAuthenticated"
    persistent
  >
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="logout" color="primary" text-color="white" />
        <span class="q-ml-sm">Are you sure you want to log out?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Cancel"
          color="primary"
          @click="cancel"
          v-close-popup
        />
        <q-btn flat label="Logout" color="primary" @click="logout" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
